namespace AutoFactCore.Interfaces;

/// <summary>
/// Domain-specific repository interface for managing suppliers.
/// </summary>
public interface ISupplierRepository : IRepository<Supplier, string>
{
    /// <summary>
    /// Retrievs  supplier by its name.
    /// </summary>
    /// <param name="name">The name of the supplier to search for.</param>
    /// <returns>The supplier if found; orherwise, null.</returns>
    Supplier? GetByName(string name);
}