namespace AutoFactBDD.Mappers;

public class DepartmentMapper : IMapper<Department, Entities.Department>
{
    public Department ToCore(Entities.Department entity)
        => new()
        {
            Id = entity.Id,
            Label = entity.Label,
            DocuWareId = entity.DocuWareId
        };

    public Entities.Department ToDb(Department entity)
        => new()
        {
            Id = entity.Id,
            Label = entity.Label,
            DocuWareId = entity.DocuWareId
        };
}