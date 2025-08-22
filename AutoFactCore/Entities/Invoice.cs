namespace AutoFactCore.Entities;

/// <summary>
/// Class representing an invoice.
/// </summary>
public class Invoice
{
    public int Id { get; set; }
    public string Number { get; set; } = string.Empty;
    public DateTime ReceivedDate { get; set; }
    public decimal Amount { get; set; }
    /// <summary>
    /// Status of the invoice "Pending" | "Success" | "Error".
    /// </summary>
    public InvoiceStatus Status { get; set; }
    /// <summary>
    /// AI predicted department.
    /// </summary>
    public Department? PredictedDepartment { get; set; }
    /// <summary>
    /// Invoice's supplier.
    /// </summary>
    public Supplier? Supplier { get; set; }
    /// <summary>
    /// Path of the invoice file.
    /// </summary>
    public string FilePath { get; set; } = string.Empty;
}