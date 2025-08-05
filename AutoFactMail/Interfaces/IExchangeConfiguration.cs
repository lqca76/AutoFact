namespace AutoFactMail.Interfaces;

public interface IExchangeConfiguration
{
    string Username { get; set; }
    string Password { get; set; }
    string Domain { get; set; }
    Uri EwsUrl { get; set; }
}