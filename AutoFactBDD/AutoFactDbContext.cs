namespace AutoFactBDD;

public class AutoFactDbContext : DbContext
{
    public AutoFactDbContext(DbContextOptions<AutoFactDbContext> options) : base(options)
    { }

    public DbSet<Entities.Invoice> Invoices => Set<Entities.Invoice>();
    public DbSet<Entities.Email> Emails => Set<Entities.Email>();
    public DbSet<Entities.Supplier> Suppliers => Set<Entities.Supplier>();
    public DbSet<Entities.Department> Departments => Set<Entities.Department>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Supplier.Name has to be unique.
        modelBuilder.Entity<Entities.Supplier>()
            .HasIndex(s => s.Name)
            .IsUnique();

        // Invoice.Email relationship
        modelBuilder.Entity<Entities.Invoice>()
            .HasOne(i => i.Email)
            .WithMany(e => e.Invoices)
            .HasForeignKey(i => i.EmailId)
            .OnDelete(DeleteBehavior.Cascade);

        // Invoice.Department relationship
        modelBuilder.Entity<Entities.Invoice>()
            .HasOne(i => i.PredictedDepartment)
            .WithMany(d => d.Invoices)
            .HasForeignKey(i => i.DepartmentId)
            .OnDelete(DeleteBehavior.SetNull);
        
        // Invoice.Supplier relationship
        modelBuilder.Entity<Entities.Invoice>()
            .HasOne(i => i.Supplier)
            .WithMany(s => s.Invoices)
            .HasForeignKey(i => i.SupplierId)
            .OnDelete(DeleteBehavior.SetNull);
    }
}