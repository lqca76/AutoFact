namespace AutoFactCore.Interfaces;

/// <summary>
/// Service interface for handling file storage operations,
/// such as saving binary content to the file system.
/// </summary>
public interface IFileService
{
    /// <summary>
    /// Asynchronously saves a file to the specified path.
    /// </summary>
    /// <param name="content">The binary content of the file.</param>
    /// <param name="filePath">The full path (including filename) where the file should be saved.</param>
    /// <returns>A task containing the full path to the saved file.</returns>
    Task SaveFileAsync(byte[] content, string filePath);
}