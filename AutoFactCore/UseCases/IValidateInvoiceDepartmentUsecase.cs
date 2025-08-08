namespace AutoFactCore.UseCases;

public interface IValidateInvoiceDepartmentUsecase
{
    Task<ValidateInvoiceResultDTO> Execute(int invoiceId, bool validate);
}