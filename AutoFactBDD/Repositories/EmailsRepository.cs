namespace AutoFactBDD.Repositories;

public class EmailsRepository : IRepository<Email, string>
{
    private readonly AutoFactDbContext _context;
    private readonly IMapper<Email, Entities.Email> _mapper;
    public EmailsRepository(AutoFactDbContext context, IMapper<Email, Entities.Email> mapper)
    {
        _context = context;
        _mapper = mapper; 
    }
    public Email Add(Email entity)
    {
        var db = _mapper.ToDb(entity);
        var added = _context.Emails.Add(db);
        _context.SaveChanges();
        return _mapper.ToCore(added.Entity);
    }

    public void Delete(Email entity)
    {
        var db = _context.Emails.First(e => e.Id == entity.Id);
        _context.Emails.Remove(db);
        _context.SaveChanges();
    }

    public IEnumerable<Email> GetAll()
        => _context.Emails.Select(_mapper.ToCore);

    public Email? GetById(string id)
    {
        var db = _context.Emails.First(e => e.Id == id);
        return db is not null ? _mapper.ToCore(db) : null;
    }

    public Email Update(Email entity)
    {
        throw new NotImplementedException();
    }
}