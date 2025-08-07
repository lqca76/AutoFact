namespace AutoFactWeb.ViewModels;

public class HomeViewModel
{
    public IEnumerable<Email> AllEmails { get; }
    public IEnumerable<Email> PendingEmails { get; }
    public IEnumerable<Email> ErrorEmails { get; }
    public IEnumerable<Email> ValidatedEmails { get; }

    public int PendingCount { get; }
    public int ErrorCount { get; }
    public int ValidatedCount { get; }

    public HomeViewModel(IEnumerable<Email> emails)
    {
        AllEmails = emails;

        PendingEmails = emails
            .Where(e => e.Invoices.Any(i => i.Status == InvoiceStatus.Pending))
            .Select(e => new Email
            {
                Id = e.Id,
                Subject = e.Subject,
                SenderAddress = e.SenderAddress,
                ReceivedAt = e.ReceivedAt,
                Invoices = e.Invoices.Where(i => i.Status == InvoiceStatus.Pending).ToList()
            });
        ErrorEmails = emails
            .Where(e => e.Invoices.Any(i => i.Status == InvoiceStatus.Error))
            .Select(e => new Email
            {
                Id = e.Id,
                Subject = e.Subject,
                SenderAddress = e.SenderAddress,
                ReceivedAt = e.ReceivedAt,
                Invoices = e.Invoices.Where(i => i.Status == InvoiceStatus.Error).ToList()
            });
        ValidatedEmails = emails
            .Where(e => e.Invoices.Any(i => i.Status == InvoiceStatus.Validated))
            .Select(e => new Email
            {
                Id = e.Id,
                Subject = e.Subject,
                SenderAddress = e.SenderAddress,
                ReceivedAt = e.ReceivedAt,
                Invoices = e.Invoices.Where(i => i.Status == InvoiceStatus.Validated).ToList()
            });

        PendingCount = PendingEmails.Sum(e => e.Invoices.Count());
        ErrorCount = ErrorEmails.Sum(e => e.Invoices.Count());
        ValidatedCount = ValidatedEmails.Sum(e => e.Invoices.Count());
    }
}