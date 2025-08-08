namespace AutoFactMail.Interfaces;

public interface IExchangeConfiguration
{
    string ExchangeUsername { get; set; }
    string ExchangePassword { get; set; }
    string ExchangeUrl { get; set; }
}