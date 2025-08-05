namespace AutoFactAI;

/// <summary>
/// Implementation of IAIService using Ollama's local LLM service.
/// </summary>
public class OllamaPredictor : IAIService
{
    private readonly OllamaApiClient _ollama;
    private readonly string _model;
    private readonly ILogService _logService;

    public OllamaPredictor(OllamaApiClient ollama, string model, ILogService logService)
    {
        _ollama = ollama;
        _model = model;
        _logService = logService;
    }
    /// <summary>
    /// Send the raw OCR content to the Ollama AI model
    /// and returns structured prediction results including date, amount, 
    /// supplier name, and department identifier.
    /// </summary>
    /// <param name="content">The extracted OCR text content from the invoice PDF.</param>
    /// <returns>
    /// A <see cref="AIResponseDTO" /> containing the predicted values if parsing is successful,
    /// or <c>null</c> if an error occurs during the process. 
    /// </returns>
    public async Task<AIResponseDTO?> PredictAsync(string content)
    {
        try
        {
            var chat = _ollama.Chat(_model);
            var message = await chat.SendAsync(content);
            var contentMessage = message.Content;

            _logService.Log($"AI raw response: {contentMessage}");

            AIResponseMessage responseMessage = JsonConvert.DeserializeObject<AIResponseMessage>(contentMessage)
                ?? throw new Exception($"Unable to parse AI response : {contentMessage}");

            if (!DateTime.TryParseExact(responseMessage.Date, "dd/MM/yyyy", CultureInfo.InvariantCulture, DateTimeStyles.None, out DateTime dateTime))
                throw new Exception($"Invalid date format received: {responseMessage.Date}");

            return new AIResponseDTO(dateTime, responseMessage.Amount, responseMessage.DepartmentId, responseMessage.Supplier);
        }
        catch (Exception ex)
        {
            _logService.LogError($"[AI ERROR] Unable to predict the department : {ex.Message}");
            return null;
        }
    }
}
