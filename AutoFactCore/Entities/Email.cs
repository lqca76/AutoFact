namespace AutoFactCore.Entities;

public class Email
{
    public string Id { get; set; } = string.Empty;
    public string SenderAddress { get; set; } = string.Empty;
    public string? Subject { get; set; }
    public DateTime ReceivedAt { get; set; }
    public IEnumerable<Invoice> Invoices { get; set; } = [];
}