namespace AutoFactBDD.Mappers;

public class SuppliersMapper : IMapper<Supplier, Entities.Supplier>
{
    public Supplier ToCore(Entities.Supplier entity)
        => new()
        {
            Id = entity.Id,
            Name = entity.Name
        };

    public Entities.Supplier ToDb(Supplier entity)
        => new()
        {
            Id = entity.Id,
            Name = entity.Name
        };
}
