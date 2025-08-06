namespace AutoFactBDD.Mappers;

public class EmailsMapper : IMapper<Email, Entities.Email>
{
    private readonly IInvoiceMapper _invoicesMapper;
    public EmailsMapper(IInvoiceMapper invoicesMapper)
    {
        _invoicesMapper = invoicesMapper; 
    }
    public void Update(string data)
        => throw new NotImplementedException();
    public Email ToCore(Entities.Email entity)
    {
        _invoicesMapper.EmailId = entity.Id;
        return new()
        {
            Id = entity.Id,
            SenderAddress = entity.SenderAddress,
            Subject = entity.Subject,
            ReceivedAt = entity.ReceivedAt,
            Invoices = entity.Invoices.Select(_invoicesMapper.ToCore)
        };
    }

    public Entities.Email ToDb(Email entity)
    {
        _invoicesMapper.EmailId = entity.Id;
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
