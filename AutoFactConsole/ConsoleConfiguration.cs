namespace AutoFactConsole;
public class ConsoleConfiguration : ICoreConfiguration, IExchangeConfiguration, IAIConfiguration, IOCRConfiguration
{
    public string PDFPath { get; set; } = string.Empty;

    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Domain { get; set; } = string.Empty;
    public Uri EwsUrl { get; set; } = default!;

    public string Model { get; set; } = string.Empty;
    public string AIUrl { get; set; } = string.Empty;

    public string PythonPath { get; set; } = string.Empty;

    public string LogFolder { get; set; } = string.Empty;
    public string ErrorLogFolder { get; set; } = string.Empty;

    public string ConnectionString { get; set; } = string.Empty;

    public string AIModel { get; } = string.Empty;
}
