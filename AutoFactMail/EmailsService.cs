using AutoFactMail.Interfaces;
using SystemTask = System.Threading.Tasks.Task;

namespace AutoFactMail;

public class EmailsService : IEmailService
{
    private readonly ExchangeService _service;
    private readonly string _fetchLogPath;
    private readonly ILogService _logService;
    public EmailsService(IExchangeConfiguration configuration, ILogService logService)
    {
        _logService = logService;
        //TODO: Fix this warning;
#pragma warning disable SYSLIB0014
        System.Net.ServicePointManager.ServerCertificateValidationCallback = (sender, certificate, chain, sslPolicyErrors) => true;
#pragma warning restore SYSLIB0014
        // Instanciate a new Exchange service.
        _service = new(ExchangeVersion.Exchange2013)
        {
            Credentials = new WebCredentials(configuration.Username, configuration.Password),
            Url = configuration.EwsUrl
        };

        // Default folder to store the last fetch date.
        var localAppData = Environment.GetFolderPath(Environment.SpecialFolder.ApplicationData);
        var autoFactFolder = Path.Combine(localAppData, "AutoFact");
        if(!Directory.Exists(autoFactFolder))
            Directory.CreateDirectory(autoFactFolder);
        _fetchLogPath = Path.Combine(autoFactFolder, "lastfetch.txt");

    }
    public async Task<IEnumerable<EmailDTO>> GetNewInvoiceEmailAsync()
    {
        try
        {
            var result = new List<EmailDTO>();

            // Read the last recovery date.
            DateTime lastFetch = ReadLastFetchDate();

            // Create the filters.
            var filters = new SearchFilter.SearchFilterCollection(LogicalOperator.And, [
                new SearchFilter.IsGreaterThanOrEqualTo(ItemSchema.DateTimeReceived, lastFetch),
            new SearchFilter.IsEqualTo(ItemSchema.HasAttachments, true)
            ]);


            // Recover all the mails.
            var emails = new List<Item>();
            var view = new ItemView(50);
            FindItemsResults<Item> findResults;
            do
            {
                findResults = _service.FindItems(WellKnownFolderName.Inbox, filters, view);
                emails.AddRange(findResults.Items);
                view.Offset += 50;
            } while (findResults.MoreAvailable);

            DateTime maxDate = lastFetch;

            foreach (var item in emails)
            {
                if (item is not EmailMessage email) continue;
                // Load the email.
                await SystemTask.Run(email.Load);

                var attachments = new List<EmailAttachmentDTO>();

                foreach (var att in email.Attachments.OfType<FileAttachment>())
                {
                    // Check if the attachment is a PDF.
                    if (att.FileName.EndsWith(".pdf", StringComparison.InvariantCultureIgnoreCase))
                    {
                        // Load the file.
                        await SystemTask.Run(att.Load);
                        attachments.Add(new(att.Name, att.Content));
                    }
                }

                // Add the result to the emails' list.
                result.Add(new(
                    email.Id.UniqueId,
                    email.From?.Address ?? "unknown",
                    email.Subject ?? "",
                    email.DateTimeReceived,
                    attachments
                ));

                // Update the last date if necessary.
                if (email.DateTimeReceived > maxDate)
                    maxDate = email.DateTimeReceived;
            }

            // Update the last date.
            SaveLastFetchDate(maxDate);

            return result;
        }
        catch (Exception ex) {
            _logService.LogError($"[EWS ERROR] Failed to fetch emails: {ex.Message}");
            return [];
        }
    }
    private DateTime ReadLastFetchDate()
    {
        if (!File.Exists(_fetchLogPath))
            return DateTime.MinValue;

        var content = File.ReadAllText(_fetchLogPath);
        return DateTime.TryParse(content, out var dt) ? dt : DateTime.MinValue;
    }

    private void SaveLastFetchDate(DateTime date)
    {
        File.WriteAllText(_fetchLogPath, date.ToString("o")); // ISO 8601
    }
}