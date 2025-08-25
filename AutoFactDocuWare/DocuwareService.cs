namespace AutoFactDocuware;

public class DocuwareService : IDocumentStorageService
{
    private readonly ServiceConnection _connection;
    private readonly Organization _organization;
    private readonly ILogService  _logsService;
    public DocuwareService(IDocuwareConfiguration configuration, ILogService logService)
    {
        _logsService = logService;
        try
        {
            _connection = ServiceConnection.Create(new Uri(configuration.DocuwareBaseURI), configuration.DocuwareUsername, configuration.DocuwarePassword);
            if (_connection.Organizations.Length == 0)
                throw new Exception("No organisation for the given connection.");
            _organization = _connection.Organizations[0];
        }
        catch (Exception ex)
        {
            throw new Exception($"Unable to connect to DocuWare : {ex.Message}");
        }
    }
    public async Task<string> Store(Invoice invoice)
    {
        try
        {
            var department = invoice.PredictedDepartment!;
            var fileCabinets = _organization.GetFileCabinetsFromFilecabinetsRelation().FileCabinet;

            var fileCabinet = fileCabinets.FirstOrDefault(c => c.Id == department.DocuWareId)
                ?? throw new Exception($"No docuware cabinet with id {department.DocuWareId}");

            var indexData = new Document()
            {
                Fields = new List<DocumentIndexField>()
                {
                    // TODO: add file cabinet indexes
                }
            };
            var doc = await fileCabinet.UploadDocumentAsync(indexData, new FileInfo(invoice.FilePath));
            return doc.Content.FileDownloadRelationLink;
        }
        catch (Exception ex)
        {
            _logsService.LogError($"[DOCUWARE ERROR] Unable to upload file : {ex.Message}");
            throw new Exception($"Unable to upload file {invoice.FilePath} to cabinet {invoice.PredictedDepartment?.Label ?? ""}");
        }
    }
}
