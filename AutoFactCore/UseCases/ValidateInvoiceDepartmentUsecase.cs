namespace AutoFactCore.UseCases;

public class ValidateInvoiceDepartmentUsecase : IValidateInvoiceDepartmentUsecase
{
    private readonly IInvoicesRepository _invoicesRepository;
    private readonly IDocuwareService _docuwareSerivce;
    private readonly ILogService _logService;
    public ValidateInvoiceDepartmentUsecase(IInvoicesRepository invoicesRepository, IDocuwareService docuwareService, ILogService logService)
    {
        _invoicesRepository = invoicesRepository;
        _docuwareSerivce = docuwareService;
        _logService = logService;
    }
    public async Task<ValidateInvoiceResultDTO> Execute(int invoiceId, bool validate)
    {
        Invoice? invoice = _invoicesRepository.GetById(invoiceId);
        try
        {
            if(invoice is null)
                throw new Exception($"Unable to find invoice with id {invoiceId}");
            if (invoice.PredictedDepartment is null)
                throw new Exception("No department has been predicted for this invoice.");
            invoice.Status = InvoiceStatus.Validated;
            _invoicesRepository.Update(invoice);
            await _docuwareSerivce.Upload(invoice);
            return new ValidateInvoiceResultDTO(true, invoice, "Invoice validated and uploaded successfully");
        }
        catch (Exception e)
        {
            _logService.Log($"[CORE ERROR] Unable to upload invoice {invoice?.Id ?? invoiceId} : {e}");
            if (invoice is not null)
            {
                invoice.Status = InvoiceStatus.Error;
                _invoicesRepository.Update(invoice);
            }
            return new ValidateInvoiceResultDTO(false, invoice, $"Error uploading invoice: {e.Message}");
        }
    }
}
