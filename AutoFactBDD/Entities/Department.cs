namespace AutoFactBDD.Entities;

[Table("departments")]
public class Department
{
    [Key]
    [Column("id")]
    public string Id { get; set; } = string.Empty;

    [Required]
    [Column("label")]
    public string Label { get; set; } = string.Empty;

    [Column("docuware_id")]
    public string DocuWareId { get; set; } = string.Empty;

    public virtual ICollection<Invoice> Invoices { get; set; } = [];
}
