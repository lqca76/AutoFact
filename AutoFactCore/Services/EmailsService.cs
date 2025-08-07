namespace AutoFactCore.Services;

public class EmailsService
{
    private readonly IRepository<Email, string> _emailsRepository;
    public EmailsService(IRepository<Email, string> emailsRepository)
    {
        _emailsRepository = emailsRepository;
    }

    public IEnumerable<Email> GetAll()
        => _emailsRepository.GetAll();
}