namespace AutoFactCore.Interfaces;

public interface IDocumentStorageService
{
    Task<string> Store(Invoice invoice);
}