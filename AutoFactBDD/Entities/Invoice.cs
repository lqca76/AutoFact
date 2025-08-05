namespace AutoFactBDD.Entities;

[Table("invoices")]
public class Invoice
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("number")]
    public string Number { get; set; } = string.Empty;

    [Required]
    [Column("received_at")]
    public DateTime ReceivedDate { get; set; }

    [Column("amount")]
    public decimal? Amount { get; set; }

    [Required]
    [Column("status")]
    public InvoiceStatus Status { get; set; }

    [Column("department_id")]
    public string? DepartmentId { get; set; }
    [ForeignKey("DepartmentId")]
    public Department? PredictedDepartment { get; set; }

    [Column("supplier_id")]
    public int? SupplierId { get; set; }
    [ForeignKey("SupplierId")]
    public Supplier? Supplier { get; set; }

    [Required]
    [Column("file_path")]
    public string FilePath { get; set; } = string.Empty;

    [Column("email_id")]
    public string EmailId { get; set; } = string.Empty;
    [ForeignKey("EmailId")]
    public virtual Email Email { get; set; } = null!;
}


