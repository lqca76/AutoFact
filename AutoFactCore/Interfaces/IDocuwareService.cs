namespace AutoFactCore.Interfaces;

public interface IDocumentStorageService
{
    Task Upload(Invoice invoice);
}