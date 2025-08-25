namespace AutoFactCore.Helpers;

public interface IFileSystemStorageServiceConfiguration
{
    string PDFDestFolder { get; set; }
}
public class FileSystemStorageService : IDocumentStorageService
{
    private readonly IFileSystemStorageServiceConfiguration _config;
    public FileSystemStorageService(IFileSystemStorageServiceConfiguration config)
    {
        _config = config;
    }
    public Task Store(Invoice invoice)
    {
        string path;
        if(invoice.Status == InvoiceStatus.Error || invoice.PredictedDepartment is null)
            path = Path.Combine(_config.PDFDestFolder, "Error");
        else
            path = Path.Combine(_config.PDFDestFolder, invoice.PredictedDepartment.Label);

        if (!Directory.Exists(path))
        {
            Directory.CreateDirectory(path);
        }

        string fileName = Path.GetFileName(invoice.FilePath);
        string destPath = Path.Combine(path, fileName);

        File.Move(invoice.FilePath, destPath);

        return Task.CompletedTask;
    }
}