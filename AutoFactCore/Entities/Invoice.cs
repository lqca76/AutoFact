namespace AutoFactCore.Entities;

public class Invoice
{
    public int Id { get; set; }
    public string Number { get; set; } = string.Empty;
    public DateTime ReceivedDate { get; set; }
    public decimal Amount { get; set; }
    public InvoiceStatus Status { get; set; }
    public Department? PredictedDepartment { get; set; }
    public Supplier? Supplier { get; set; }
    public string FilePath { get; set; } = string.Empty;
}