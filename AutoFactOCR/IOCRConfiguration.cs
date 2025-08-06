namespace AutoFactOCR;

/// <summary>
/// Configuration interface for the OCR module.
/// Provides the necessary settings required to run the Python OCR script.
/// </summary>
public interface IOCRConfiguration
{
    /// <summary>
    /// Gets the absolute path to the Python interpreter used to execute the OCR script.
    /// </summary>
    string PythonPath { get; }
    string ScriptPath { get; }
}