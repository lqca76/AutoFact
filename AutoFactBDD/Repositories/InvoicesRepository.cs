
namespace AutoFactBDD.Repositories;

public class InvoicesRepository : IInvoicesRepository
{
    private readonly AutoFactDbContext _context;
    private readonly IInvoiceMapper _invoiceMapper;

    public InvoicesRepository(AutoFactDbContext context, IInvoiceMapper invoiceMapper)
    {
        _context = context;
        _invoiceMapper = invoiceMapper;
    }

    public Invoice? GetById(int id)
    {
        var invoice = _context.Invoices.FirstOrDefault(i => i.Id == id);
        if (invoice is not null)
        {
            _invoiceMapper.EmailId = invoice.EmailId;
            return _invoiceMapper.ToCore(invoice);
        }
        return null;

    }

    public void Update(Invoice invoice)
    {
        var db = _context.Invoices.First(i => i.Id == invoice.Id);
        db.Status = invoice.Status;
        _context.SaveChanges(); 
    }
}
