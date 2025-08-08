namespace AutoFactCore.Interfaces;

public interface IInvoicesRepository
{
    Invoice? GetById(int id);
    void Update(Invoice invoice);
}