namespace AutoFactCore.Services;

public class InvoicesService
{
    private readonly IRepository<Email, string> _emailsRepository;
    public InvoicesService(IRepository<Email, string> emailsRepository)
    {
        _emailsRepository = emailsRepository;
    }
    public IEnumerable<Email> GetPendingInvoices()
    {
        // Retrieves pending invoices from emails.
        var emails = _emailsRepository
            .GetAll()
            .Where(e => e.Invoices.Any(i => i.Status == InvoiceStatus.Pending))
            .Select(e =>
            {
                e.Invoices = e.Invoices.Where(i => i.Status == InvoiceStatus.Pending);
                return e;
            })
            .Where(e => e.Invoices.Any());
        return emails;
    }
}