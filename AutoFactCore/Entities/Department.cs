namespace AutoFactCore.Entities;

///<summary>
/// Class representing a clinic department.
///</summary>
public class Department
{
    public string Id { get; set; } = string.Empty;
    public string Label { get; set; } = string.Empty;
    /// <summary>
    /// Docuware file cabinet Id.
    /// </summary>
    public string DocuWareId { get; set; } = string.Empty;
}