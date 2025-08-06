namespace AutoFactCore.Helpers;

public class FileService : IFileService
{
    private readonly ILogService _logService;

    public FileService(ILogService logService)
    {
        _logService = logService;
    }

    public async Task SaveFileAsync(byte[] content, string filePath)
    {
        try
        {
            if (!File.Exists(filePath))
            {
                var stream = File.Create(filePath);
                stream.Close();
            }
            await File.WriteAllBytesAsync(filePath, content);
        }
        catch (Exception ex)
        {
            _logService.LogError($"[FILE ERROR] Unable to create file  '{filePath}' {ex.Message} ");
        }
    }
}
