namespace AutoFactOCR;

/// <summary>
/// Uses a Python script to perform OCR on PDF files using EasyOCR and returns the extracted text.
/// </summary>
public class PythonOCRService(
    IOCRConfiguration configuration,
    ILogService logService
) : IOCRService
{
    private readonly string _pythonPath = configuration.OCRPythonPath;
    private readonly string _scriptPath = configuration.OCRScriptPath;
    private readonly ILogService _logService = logService;

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
                    Arguments = $"\"{_scriptPath}\" \"{filePath}\" --out \"{outputFile}\"",
                    RedirectStandardOutput = true,
                    RedirectStandardError = true,
                    UseShellExecute = false,
                    CreateNoWindow = true,
                }
            };

            // Launch process 
            process.Start();
            // Read stderr and stdout.
            var stderr = await process.StandardError.ReadToEndAsync();
            var stdout = await process.StandardOutput.ReadToEndAsync();

            // Waiting for process to exit.
            await process.WaitForExitAsync();

            // Return null in case of process failed.
            if (process.ExitCode != 0)
            {
                _logService.LogError($"OCR Process exited with status {process.ExitCode} : {stderr}");
                return null;
            }

            // Otherwise, read the content of the generated file.
            string ocrContent = File.ReadAllText(outputFile);
            return ocrContent;
        }
        catch (Exception ex)
        {
            // Return null on any exception.
            _logService.LogError($"[OCR ERROR] Error while processing OCR : {ex.Message}");
            return null;
        }
    }
}
