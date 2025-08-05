namespace AutoFactBDD.Mappers;

public class EmailsMapper : IMapper<Email, Entities.Email>
{
    private readonly IMapper<Invoice, Entities.Invoice> _invoicesMapper;
    public EmailsMapper(IMapper<Invoice, Entities.Invoice> invoicesMapper)
    {
        _invoicesMapper = invoicesMapper; 
    }
    public Email ToCore(Entities.Email entity)
        => new()
        {
            Id = entity.Id,
            SenderAddress = entity.SenderAddress,
            Subject = entity.Subject,
            ReceivedAt = entity.ReceivedAt,
            Invoices = entity.Invoices.Select(_invoicesMapper.ToCore)
        };

    public Entities.Email ToDb(Email entity)
    {

        var email = new Entities.Email()
        {
            Id = entity.Id,
            SenderAddress = entity.SenderAddress,
            Subject = entity.Subject,
            ReceivedAt = entity.ReceivedAt
        };
        foreach(var i in entity.Invoices.Select(_invoicesMapper.ToDb))
            email.Invoices.Add(i);
        return email;
    }
}
