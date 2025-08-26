using Newtonsoft.Json.Linq;
using System.Net.Http.Headers;

namespace AutoFactOCR;

public interface IAPIOCRConfiguration
{
    string APIOCRUrl { get; set; }
}
public class APIOCRService : IOCRService
{
    private readonly HttpClient _httpClient;
    public APIOCRService(IAPIOCRConfiguration config)
    {
        _httpClient = new()
        {
            BaseAddress = new Uri(config.APIOCRUrl)
        };
    }
    public async Task<string?> ExctractTextAsync(string filePath)
    {
        // Ensure file exists
        if (!File.Exists(filePath))
            throw new FileNotFoundException("Unable to find the file", filePath);

        // Initialize request
        using var form = new MultipartFormDataContent();
        using var fileStream = File.OpenRead(filePath);
        using var fileContent = new StreamContent(fileStream);
        fileContent.Headers.ContentType = MediaTypeHeaderValue.Parse("application/pdf");

        // Add file to form-data
        form.Add(fileContent, "file", Path.GetFileName(filePath));

        // Send POST request
        var response = await _httpClient.PostAsync("/extract", form);

        if (!response.IsSuccessStatusCode)
        {
            var error = await response.Content.ReadAsStringAsync();
            throw new Exception($"[OCR ERROR] API OCR Error: {response.StatusCode} - {error}");
        }
        var jsonResponse = await response.Content.ReadAsStringAsync();
        var parsed = JObject.Parse(jsonResponse);
        return parsed["content"]?.ToString();
    }
}
