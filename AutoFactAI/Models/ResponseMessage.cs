namespace AutoFactAI.Models;

public class AIResponseMessage
{
    public string Supplier { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string DepartmentId { get; set; } = string.Empty;
    public string Date { get; set; } = string.Empty;
}