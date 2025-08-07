
namespace AutoFactWeb.Controllers;

public class HomeController : Controller
{
    private readonly AutoFactCore.Services.EmailsService _emailsService;

    public HomeController(AutoFactCore.Services.EmailsService emailsService)
    {
        _emailsService = emailsService;
    }

    // Home View
    [HttpGet]
    public IActionResult Index()
    {
        var emails = _emailsService.GetAll();
        var vm = new HomeViewModel(emails);
        return View(vm);
    }
}