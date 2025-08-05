using System.ComponentModel.DataAnnotations.Schema;

namespace AutoFactLogging;

public class FileLoggerService : ILogService
{
    private readonly string _logFolder;
    private readonly string _errorFolder;
    public FileLoggerService(string logFolder, string errorFolder)
    {
        _logFolder = logFolder;
        _errorFolder = errorFolder;
    }
    public void Log(string message)
    {
        string filePath = EnsureFileExists(_logFolder);
        DateTime now = DateTime.UtcNow;
        string content = $"[{now:dd/MM/yyyy HH:mm:ss}] {message}";
        File.AppendAllText(filePath, content.Trim());
    }

    public void LogError(string message)
    {
        string filePath = EnsureFileExists(_errorFolder);
        DateTime now = DateTime.UtcNow;
        string content = $"[{now:dd/MM/yyyy HH:mm:ss}] {message}";
        File.AppendAllText(filePath, content);
    }

    private static string EnsureFileExists(string folder)
    {
        DateTime now = DateTime.UtcNow;
        string fileName = $"AutoFact_{now:ddMMyyyy}.log";
        string filePath = Path.Combine(folder, fileName);
        if (!File.Exists(filePath))
            File.Create(filePath);
        return filePath;
    }
}
