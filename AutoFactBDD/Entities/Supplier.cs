namespace AutoFactBDD.Entities;

[Table("suppliers")]
public class Supplier
{
    [Key]
    [Column("id")]
    public int Id { get; set; }
    [Required]
    [Column("name")]
    public string Name { get; set; } = string.Empty;

    public virtual ICollection<Invoice> Invoices { get; set; } = [];
}