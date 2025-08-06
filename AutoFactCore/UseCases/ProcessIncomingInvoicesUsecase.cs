using AutoFactCore.Exceptions;

namespace AutoFactCore.UseCases;

/// <summary>
/// Use case responsible for processing new invoice emails:
/// - Retrieves new emails
/// - Saves attachments as local files
/// - Performs OCR extraction
/// - Uses AI to predict invoice metadata
/// - Stores the results in the database
/// </summary>
public class ProcessIncomingInvoicesUsecase(
    IEmailService emailService,
    IFileService fileService,
    IRepository<Email, string> emailsRepository,
    IOCRService ocrService,
    IAIService aiService,
    IRepository<Department, string> departmentsRepository,
    ILogService logService,
    ISupplierRepository supplierRepository,
    ICoreConfiguration configuration
) : IProcessIncomingInvoicesUsecase
{
    private readonly IEmailService _emailsService = emailService;
    private readonly IFileService _fileService = fileService;
    private readonly IRepository<Email, string> _emailsRepository = emailsRepository;
    private readonly IOCRService _ocrService = ocrService;
    private readonly IAIService _aiService = aiService;
    private readonly IRepository<Department, string> _departmentsRepository = departmentsRepository;
    private readonly ILogService _logService = logService;
    private readonly ISupplierRepository _supplierRepository = supplierRepository;
    private readonly ICoreConfiguration _configuration = configuration;
    /// <summary>
    /// Executes the invoice processing use case: retrieves emails,
    /// processes attachments, uses OCR and AI, and stores results in the database.
    /// </summary>
    public async Task ExecuteAsync()
    {
        // Retrieve the new email containing invoices.
        var emails = await _emailsService.GetNewInvoiceEmailAsync();
        foreach (var email in emails)
        {
            if (email.Attachments.Count == 0)
                continue;
            List<Invoice> invoices = [];
            // For each attachment, download the file and add it to the list of invoices.
            foreach (var attachment in email.Attachments)
            {
                var invoice = await ProcessAttachmentAsync(attachment);
                if (invoice is not null)
                    invoices.Add(invoice);
            }

            // Create email in database.
            Email e = new()
            {
                Id = email.Id,
                SenderAddress = email.SenderAddress,
                Subject = email.Subject,
                ReceivedAt = email.ReceivedAt,
                Invoices = invoices
            };
            _emailsRepository.Add(e);
            _logService.Log($"Email from {e.SenderAddress} added containing {e.Invoices.Count()} invoice(s).");
        }
    }

    private Supplier GetOrCreateSupplier(string supplierName)
    {
        return _supplierRepository.GetByName(supplierName)
            ?? _supplierRepository.Add(new() { Name = supplierName });
    }
    private async Task<Invoice?> ProcessAttachmentAsync(EmailAttachmentDTO attachment)
    {
        // Initialize invoice from attachment.
        string folder = _configuration.PDFPath;
            string path = Path.Combine(folder, attachment.Name);
            await _fileService.SaveFileAsync(attachment.Content, path);
            invoice.Number = attachment.Name;
            invoice.FilePath = path;

            // Extract text from the PDF.
            string pdfContent = await _ocrService.ExctractTextAsync(invoice.FilePath)
                ?? throw new OCRExtractionFailedException(invoice.FilePath);
            // Skip non-invoice documents.
            if (!pdfContent.Contains("Facture", StringComparison.CurrentCultureIgnoreCase))
                return null;
            // Send content to the AI service for prediction.
            var aiResponse = await _aiService.PredictAsync(pdfContent)
                ?? throw new AiPredictionFailedException(path);

            // Set extracted invoice data.
            invoice.Amount = aiResponse.Amount;
            invoice.Status = InvoiceStatus.Pending;

            // Retrieve department or fail.
            invoice.PredictedDepartment = GetDepartment(aiResponse.DepartmentId)
                ?? throw new DepartmentNotFoundException(aiResponse.DepartmentId);
            // Get or create the supplier.
            invoice.Supplier = GetOrCreateSupplier(aiResponse.SupplierName);
        }
        catch (Exception ex)
        {
            _logService.LogError($"[CORE ERROR] Error while processing the invoice {invoice.Number} : {ex.Message}");
            invoice.Status = InvoiceStatus.Error;
        }

        return invoice;
    }

    private Department GetDepartment(string id)
        => _departmentsRepository.GetById(id) ?? throw new Exception($"Department with id {id} not found.");
}