namespace AutoFactWeb.ViewModels;

public class HomeViewModel
{
    public IEnumerable<Invoice> ProcessedInvoices { get; }
    public IEnumerable<Invoice> FailedInvoices { get; }
    public int ProcessedCount { get; }
    public int ErrorCount { get; }

    public HomeViewModel(IEnumerable<Email> emails)
    {
        ProcessedInvoices = emails.SelectMany(e => e.Invoices).Where(i => i.Status == InvoiceStatus.Processed);
        ProcessedCount = ProcessedInvoices.Count();

        FailedInvoices = emails.SelectMany(e => e.Invoices).Where(i => i.Status == InvoiceStatus.Error);
        ErrorCount = FailedInvoices.Count();
    }
}