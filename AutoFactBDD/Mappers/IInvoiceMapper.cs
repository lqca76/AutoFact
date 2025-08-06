namespace AutoFactBDD.Mappers;

public interface IInvoiceMapper : IMapper<Invoice, Entities.Invoice>
{
    string EmailId { get; set; }
}