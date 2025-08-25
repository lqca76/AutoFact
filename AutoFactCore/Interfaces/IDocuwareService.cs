namespace AutoFactCore.Interfaces;

public interface IDocumentStorageService
{
    Task Store(Invoice invoice);
}