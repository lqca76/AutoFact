namespace AutoFactBDD.Mappers;

public class InvocicesMapper : IInvoiceMapper
{
    public string EmailId { get; set; } = string.Empty;
    public Invoice ToCore(Entities.Invoice entity)
    {
        var i = new Invoice()
        {
            Id = entity.Id,
            Number = entity.Number,
            ReceivedDate = entity.ReceivedDate,
            Amount = entity.Amount ?? 0,
            Status = entity.Status,
            FilePath = entity.FilePath
        };

        if (entity.PredictedDepartment is not null)
            i.PredictedDepartment = new()
            {
                Id = entity.PredictedDepartment.Id,
                Label = entity.PredictedDepartment.Label
            };
        if (entity.Supplier is not null)
            i.Supplier = new()
            {
                Id = entity.Supplier.Id,
                Name = entity.Supplier.Name
            };
        return i;
    }

    public Entities.Invoice ToDb(Invoice entity)
        => new()
        {
            Id = entity.Id,
            Number = entity.Number,
            ReceivedDate = entity.ReceivedDate,
            Amount = entity.Amount,
            Status = entity.Status,
            DepartmentId = entity.PredictedDepartment?.Id,
            SupplierId = entity.Supplier?.Id,
            FilePath = entity.FilePath,
            EmailId = EmailId
        };
}