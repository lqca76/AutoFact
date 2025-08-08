using System.Diagnostics;
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
            Credentials = new WebCredentials(configuration.ExchangeUsername, configuration.ExchangePassword),
            Url = new(configuration.ExchangeUrl)
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

            // Recover all new mails.
            var emails = GetNewEmailSince(lastFetch);

            DateTime maxDate = lastFetch;

            foreach (var email in emails)
            {
                // Load the email.
                try {
                    await SystemTask.Run(email.Load);
                }
                catch (Exception loadEx) {
                    _logService.LogError($"[EWS] Failed to load email (ID: {email?.Id?.UniqueId ?? "unknown"}): {loadEx.Message}");
                    continue;
                }

                var attachments = new List<EmailAttachmentDTO>();

                foreach (var att in email.Attachments.OfType<FileAttachment>())
                {
                    var attachment = await GetEmailAttachmentDTO(att, email.Id.UniqueId);
                    if (attachment is not null)
                        attachments.Add(attachment);
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
            _logService.LogError($"[EWS FATAL] Unexpected error during email fetch: {ex.Message}");
            return [];
        }
    }

    private async Task<EmailAttachmentDTO?> GetEmailAttachmentDTO(FileAttachment att, string? emailId)
    {
        try
        {
            await SystemTask.Run(att.Load);
            string name = att.Name;
            if (string.IsNullOrWhiteSpace(name))
            {
                _logService.Log($"[EWS] Skipping unnamed attachment (Email ID: {emailId ?? "unknown"})");
                return null;
            }
            // Check if the attachment is a PDF.
            if (name.EndsWith(".pdf", StringComparison.InvariantCultureIgnoreCase))
            {
                // Load the file.
                return new(name, att.Content);
            }
        }
        catch (Exception ex)
        {
            _logService.LogError($"[EWS ERROR] Failed to load attachment '{att.Name}' (Email ID: {emailId ?? "unknown"}): {ex.Message}");
        }
        return null;
    }

    private List<EmailMessage> GetNewEmailSince(DateTime since)
    {
        try
        {
            var emails = new List<EmailMessage>();
            // Create the filters.
            var filters = new SearchFilter.SearchFilterCollection(LogicalOperator.And, [
                new SearchFilter.IsGreaterThanOrEqualTo(ItemSchema.DateTimeReceived, since),
            new SearchFilter.IsEqualTo(ItemSchema.HasAttachments, true)
            ]);
            var view = new ItemView(50);
            FindItemsResults<Item> findResults;
            do
            {
                findResults = _service.FindItems(WellKnownFolderName.Inbox, filters, view);
                var result = findResults.Items.OfType<EmailMessage>();
                emails.AddRange(result);
                view.Offset += 50;
            } while (findResults.MoreAvailable);
            return emails;
        }
        catch (Exception ex)
        {

            _logService.LogError($"[EWS ERROR] Failed to search for new emails since {since:o}: {ex.Message}");
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