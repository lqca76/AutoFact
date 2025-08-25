namespace AutoFactConfiguration;

public class GlobalConfiguration : IDocuwareConfiguration, ICoreConfiguration, IExchangeConfiguration, IAIConfiguration, IOCRConfiguration, IFileSystemStorageServiceConfiguration
{
    // Docuware
    public string DocuwareBaseURI { get; set; } = string.Empty;
    public string DocuwareUsername { get; set; } = string.Empty;
    public string DocuwarePassword { get; set; } = string.Empty;

    // Core
    public string PDFPath { get; set; } = string.Empty;

    // Exchange
    public string ExchangeUsername { get; set; } = string.Empty;
    public string ExchangePassword { get; set; } = string.Empty;
    public string ExchangeUrl { get; set; } = string.Empty;

    // AI
    public string AIModel { get; set; } = string.Empty;

    public string AIUrl { get; set; } = string.Empty;

    // OCR
    public string OCRPythonPath { get; set; } = string.Empty;

    public string OCRScriptPath { get; set; } = string.Empty;

    // Database
    public string DBConnectionString { get; set; } = string.Empty;

    // Logging
    public string LogFolder { get; set; } = string.Empty;
    public string ErrorLogFolder { get; set; } = string.Empty;
    public string PDFDestFolder { get; set; } = string.Empty;
}