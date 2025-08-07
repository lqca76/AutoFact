using AutoFactCore.Entities;

namespace AutoFactWeb.ViewModels;

public class HomeViewModel
{
    public IEnumerable<Email> Emails { get; }
    public HomeViewModel(IEnumerable<Email> emails)
    {
        Emails = emails;
    }
}