namespace AutoFactBDD.Migrations;

public class AutoFactDbContextFactory : IDesignTimeDbContextFactory<AutoFactDbContext>
{
    public AutoFactDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<AutoFactDbContext>();

        var connectionString = "server=localhost;user=autofact;password=autofact;database=autofact;";
        optionsBuilder.UseMySql(connectionString, new MySqlServerVersion(new Version(8, 0, 36)));

        return new AutoFactDbContext(optionsBuilder.Options);
    }
}