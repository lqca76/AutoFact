namespace AutoFactBDD.Entities;

public class Department
{
    [Key]
    public string Id { get; set; } = string.Empty;

    [Required]
    public string Label { get; set; } = string.Empty;

    public virtual ICollection<Invoice> Invoices { get; set; } = [];
}
