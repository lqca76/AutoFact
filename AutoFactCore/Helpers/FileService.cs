namespace AutoFactCore.Helpers;

public class FileService : IFileService
{
    public async Task<string> SaveFileAsync(byte[] content, string filePath)
    {
        if (!File.Exists(filePath))
            File.Create(filePath);
        await File.WriteAllBytesAsync(filePath, content);
        return filePath;
    }
}
