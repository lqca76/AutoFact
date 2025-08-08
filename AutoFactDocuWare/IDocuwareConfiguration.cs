namespace AutoFactDocuware;

public interface IDocuwareConfiguration
{
    string BaseURI { get; set; }
    string Username { get; set; }
    string Password { get; set; }
}