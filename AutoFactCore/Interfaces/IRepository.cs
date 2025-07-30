namespace AutoFactCore.Interfaces;

/// <summary>
/// Generic repository interface for basic CRUD operations on domain entities.
/// Provides a standard contract for retrieving, adding, updating, and deleting entities.
/// </summary>
/// <typeparam name="T">The type of the domain entity.</typeparam>
/// <typeparam name="TKey">The type of the identifier (e.g., int, Guid).</typeparam>
public interface IRepository<T, TKey>
{
    /// <summary>
    /// Retrieves an entity by its unique identifier.
    /// </summary>
    /// <param name="id">The unique identifier of the entity.</param>
    /// <returns>The entity if found; otherwise, null.</returns>
    T? GetById(TKey id);
    /// <summary>
    /// Retrieves all entities of type <typeparamref name="T"/>.
    /// </summary>
    /// <returns>A collection of all entities.</returns>
    IEnumerable<T> GetAll();
    /// <summary>
    /// Adds a new entity to the data store.
    /// </summary>
    /// <param name="entity">The entity to add.</param>
    /// <returns>The added entity.</returns>
    T Add(T entity);
    /// <summary>
    /// Updates an existing entity in the data store.
    /// </summary>
    /// <param name="entity">The entity to update.</param>
    /// <returns>The updated entity.</returns>
    T Update(T entity);
    /// <summary>
    /// Deletes an entity from the data store.
    /// </summary>
    /// <param name="entity">The entity to delete.</param>
    void Delete(T entity);
}