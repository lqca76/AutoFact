namespace AutoFactCore.Interfaces;

public interface IDocuwareService
{
    Task Upload(Invoice invoice);
}