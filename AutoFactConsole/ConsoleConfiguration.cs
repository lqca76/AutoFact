namespace AutoFactConsole;

public class ConsoleConfiguration : ICoreConfiguration, IExchangeConfiguration, IAIConfiguration, IOCRConfiguration
{
    public string PDFPath { get; set; } = string.Empty;

    public ExchangeSettings Exchange { get; set; } = new();
    public AISettings AI { get; set; } = new();
    public OCRSettings OCR { get; set; } = new();
    public LoggingSettings Logging { get; set; } = new();
    public DatabaseSettings Database { get; set; } = new();

    // Pour compatibilité avec les interfaces
    public string Username { get => Exchange.Username; set { } }
    public string Password { get => Exchange.Password; set { } }
    public string Domain { get => Exchange.Domain; set { } }
    public Uri EwsUrl { get => new(Exchange.Url); set { } }

    public string PythonPath => OCR.PythonPath;
    public string Model => AI.Model;
    public string AIUrl => AI.Url;

    public string LogFolder => Logging.Folder;
    public string ErrorLogFolder => Logging.ErrorFolder;

    public string ConnectionString => Database.ConnectionString;

    // Ignorer ce champ si non utilisé
    public string AIModel => AI.Model;

    public string ScriptPath => OCR.ScriptPath;
}


// Sous-objets
public class ExchangeSettings
{
    public string Username { get; set; } = string.Empty;
    public string Password { get; set; } = string.Empty;
    public string Domain { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}

public class AISettings
{
    public string Model { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
}

public class OCRSettings
{
    public string PythonPath { get; set; } = string.Empty;
    public string ScriptPath { get; set; } = string.Empty;
}

public class LoggingSettings
{
    public string Folder { get; set; } = string.Empty;
    public string ErrorFolder { get; set; } = string.Empty;
}

public class DatabaseSettings
{
    public string ConnectionString { get; set; } = string.Empty;
}
