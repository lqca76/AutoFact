namespace AutoFactCore.Interfaces;

/// <summary>
/// Service interface responsible for extracting text from PDF or image files
/// using Optical Character Recognition (OCR) technology.
/// </summary>
public interface IOCRService
{
    /// <summary>
    /// Asynchronously extracts readable text content from the given file.
    /// </summary>
    /// <param name="filePath">The full path to the PDF or image file.</param>
    /// <returns>
    /// A task containing the extracted text if successful; otherwise, null.
    /// </returns>
    Task<string?> ExctractTextAsync(string filePath);
}