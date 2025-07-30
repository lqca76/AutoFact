namespace AutoFactCore.Interfaces;

/// <summary>
/// Service interface for interacting with an AI model
/// to analyze invoice content and predict relevant metadata (e.g., department, amount, supplier).
/// </summary>
public interface IAIService
{
    /// <summary>
    /// Asynchronously sends the extracted invoice content to the AI service
    /// and returns the predicted invoice metadata.
    /// </summary>
    /// <param name="content">The raw text content extracted from the invoice (e.g., via OCR).</param>
    /// <returns>
    /// A task containing the AI's prediction result, or null if the prediction failed.
    /// </returns>
    Task<AIResponseDTO?> PredictAsync(string content);
}