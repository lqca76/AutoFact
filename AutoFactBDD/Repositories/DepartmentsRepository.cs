using AutoFactBDD.Mappers;

namespace AutoFactBDD.Repositories;

public class DepartmentsRepository : IRepository<Department, string>
{
    private readonly AutoFactDbContext _context;
    private readonly IMapper<Department, Entities.Department> _mapper;
    public DepartmentsRepository(AutoFactDbContext context, IMapper<Department, Entities.Department> mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public Department Add(Department entity)
    {
        var e = _context.Departments.Add(_mapper.ToDb(entity));
        _context.SaveChanges();
        return _mapper.ToCore(e.Entity);
    }

    public void Delete(Department entity)
    {
        var db = _context.Departments.First(e => e.Id == entity.Id);
        _context.Departments.Remove(db);
        _context.SaveChanges();
    }

    public IEnumerable<Department> GetAll()
        => _context.Departments.Select(_mapper.ToCore);

    public Department? GetById(string id)
    {
        var db = _context.Departments.FirstOrDefault(e => e.Id == id);
        return db is not null ? _mapper.ToCore(db) : null;
    }

    public Department Update(Department entity)
    {
        var db = _context.Departments.First(e => e.Id == entity.Id);
        db.Label = entity.Label;
        _context.SaveChanges();
        return _mapper.ToCore(db);
    }
}