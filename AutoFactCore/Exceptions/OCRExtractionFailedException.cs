namespace AutoFactCore.Exceptions;

public class OCRExtractionFailedException : DomainException
{
    public OCRExtractionFailedException(string fileName)
        : base($"OCR extraction failed for '{fileName}'.")
    { }
}