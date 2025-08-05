namespace AutoFactBDD.Entities;

[Table("emails")]
public class Email
{
    [Key]
    [Column("id")]
    public string Id { get; set; } = string.Empty;

    [Required]
    [Column("sender")]
    public string SenderAddress { get; set; } = string.Empty;

    [Column("subject")]
    public string? Subject { get; set; }

    [Column("received_at")]
    public DateTime ReceivedAt { get; set; }

    public virtual ICollection<Invoice> Invoices { get; set; } = [];
}
