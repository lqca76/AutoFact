using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;

namespace AutoFactOCR;

/// <summary>
/// Configuration interface for the OCR API.
/// Exposes the base URL of the OCR API so it can be injected
/// dynamically (e.g., from appsettings.json).
/// </summary>
public interface IAPIOCRConfiguration
{
    /// <summary>
    /// Base URL of the OCR API (e.g., http://localhost:8000).
    /// </summary>
    string APIOCRUrl { get; set; }
}

/// <summary>
/// Service to interact with the external Python OCR API.
/// Sends a PDF file to the /extract endpoint and returns the extracted text.
/// </summary>
public class APIOCRService : IOCRService
{
    private readonly HttpClient _httpClient;
    /// <summary>
    /// Constructor that initializes the HTTP client with the base URL of the OCR API.
    /// </summary>
    /// <param name="config">Configuration object containing the OCR API URL.</param>
    public APIOCRService(IAPIOCRConfiguration config)
    {
        _httpClient = new()
        {
            BaseAddress = new Uri(config.APIOCRUrl)
        };
    }
    /// <summary>
    /// Extracts text from a PDF file by calling the external OCR API.
    /// </summary>
    /// <param name="filePath">Full path to the PDF file to be processed.</param>
    /// <returns>
    /// The extracted text if available, otherwise <c>null</c>.
    /// </returns>
    /// <exception cref="FileNotFoundException">Thrown if the file does not exist.</exception>
    /// <exception cref="Exception">Thrown if the OCR API returns an error.</exception>
    public async Task<string?> ExctractTextAsync(string filePath)
    {
 if (!File.Exists(filePath))
            throw new FileNotFoundException("Unable to find the file", filePath);

        // Create a multipart/form-data request to upload the file
        using var form = new MultipartFormDataContent();

        // Read the PDF file as a stream
        using var fileStream = File.OpenRead(filePath);

        // Convert the stream into HTTP content
        using var fileContent = new StreamContent(fileStream);

        // Set the MIME type as PDF
        fileContent.Headers.ContentType = MediaTypeHeaderValue.Parse("application/pdf");

        // Add the file to the form data
        form.Add(fileContent, "file", Path.GetFileName(filePath));

        // Send POST request to /extract endpoint
        var response = await _httpClient.PostAsync("/extract", form);

        // Handle HTTP errors
        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadAsStringAsync();
            throw new Exception($"[OCR ERROR] API OCR Error: {response.StatusCode} - {error}");
        }

        // Read and parse the returned JSON
        var jsonResponse = await response.Content.ReadAsStringAsync();
        var parsed = JObject.Parse(jsonResponse);

        // Return the "content" field containing the extracted text
        return parsed["content"]?.ToString();
    }
}
