namespace AutoFactOCR;

/// <summary>
/// Uses a Python script to perform OCR on PDF files using EasyOCR and returns the extracted text.
/// </summary>
public class PythonOCRService(
    IOCRConfiguration configuration
) : IOCRService
{
    private readonly string _pythonPath = configuration.PythonPath;
    private readonly string _scriptPath = Path.Combine(AppContext.BaseDirectory, "OCR", "Scripts", "ocr_pdf.py");

    /// <inheritdoc />
    public async Task<string?> ExctractTextAsync(string filePath)
    {
        try
        {
            string outputFile = filePath.Split(".")[0] + ".txt";

            // Configure process.
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = _pythonPath,
                    Arguments = $"'{_scriptPath}'  '{filePath}' --out {outputFile}",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                }
            };

            // Launch process and wait for its ending.
            process.Start();
            await process.WaitForExitAsync();

            // Return null in case of process failed.
            if (process.ExitCode != 0)
                return null;

            // Otherwise, read the content of the generated file.
            string ocrContent = File.ReadAllText(outputFile);
            return ocrContent;
        }
        catch (Exception)
        {
            // Return null on any exception.
            return null;
        }
    }
}
