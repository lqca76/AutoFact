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
        WriteFile(filePath, message);
    }

    public void LogError(string message)
    {
        string filePath = EnsureFileExists(_errorFolder);
        WriteFile(filePath, message);
    }

    private static string EnsureFileExists(string folder)
    {
        DateTime now = DateTime.UtcNow;
        string fileName = $"AutoFact_{now:ddMMyyyy}.log";
        string filePath = Path.Combine(folder, fileName);
        if (!File.Exists(filePath))
        {
            var stream = File.Create(filePath);
            stream.Close();
        }
        return filePath;
    }

    private static void WriteFile(string filePath, string message)
    {
        DateTime now = DateTime.UtcNow;
        string content = $"\n[{now:dd/MM/yyyy HH:mm:ss}] {message}";
        File.AppendAllText(filePath, content);
    }
}
