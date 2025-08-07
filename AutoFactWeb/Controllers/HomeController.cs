using AutoFactCore.Services;
using AutoFactMail;
using AutoFactWeb.ViewModels;

namespace AutoFactWeb.Controllers;

public class HomeController : Controller
{
    private readonly InvoicesService _invoicesService;

    public HomeController(InvoicesService invoicesService)
    {
        _invoicesService = invoicesService; 
    }

    // Home View
    [HttpGet]
    public IActionResult Index()
    {
        var emails = _invoicesService.GetPendingInvoices();
        var vm = new HomeViewModel(emails);
        return View(vm);
    }
}