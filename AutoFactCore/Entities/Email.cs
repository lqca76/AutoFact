namespace AutoFactCore.Entities;

///<summary>
/// Class representing an Email.
///</summary>
public class Email
{
    public string Id { get; set; } = string.Empty;
    public string SenderAddress { get; set; } = string.Empty;
    public string? Subject { get; set; }
    public DateTime ReceivedAt { get; set; }
    /// <summary>
    /// List of email invoices.
    /// </summary>
    public IEnumerable<Invoice> Invoices { get; set; } = [];
}