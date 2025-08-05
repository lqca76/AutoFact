using AutoFactBDD.Mappers;

namespace AutoFactBDD.Repositories;

public class SuppliersRepository : ISupplierRepository
{
    private readonly AutoFactDbContext _context;
    private readonly IMapper<Supplier, Entities.Supplier> _mapper;
    public SuppliersRepository(AutoFactDbContext context, IMapper<Supplier, Entities.Supplier> mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public Supplier Add(Supplier entity)
    {
        var db = _mapper.ToDb(entity);
        var saved = _context.Suppliers.Add(db);
        _context.SaveChanges();
        return _mapper.ToCore(saved.Entity);
    }

    public void Delete(Supplier entity)
    {
        var db = _context.Suppliers.First(s => s.Id == entity.Id);
        _context.Suppliers.Remove(db);
        _context.SaveChanges();
    }

    public IEnumerable<Supplier> GetAll()
        => _context.Suppliers.Select(_mapper.ToCore);

    public Supplier? GetById(int id)
    {
        var db = _context.Suppliers.First(s => s.Id == id);
        return db is not null ? _mapper.ToCore(db) : null;
    }

    public Supplier? GetByName(string name)
    {
        var db = _context.Suppliers.First(s => s.Name == name);
        return db is not null ? _mapper.ToCore(db) : null;
    }

    public Supplier Update(Supplier entity)
    {
        var db = _context.Suppliers.First(s => s.Id == entity.Id);
        db.Name = entity.Name;
        _context.SaveChanges();
        return _mapper.ToCore(db);
    }
}
