namespace AutoFactCore.Interfaces;

/// <summary>
/// Interface for the email service used in AutoFact.
/// Responsible for retrieving new invoice-related email attachments.
/// </summary>
public interface IEmailService
{
    /// <summary>
    /// Retrieves a collection of new email attachments that are considered invoices.
    /// This method should return Email that contains invoices and that haven't been processed yet.
    /// </summary>
    /// <returns>
    /// A task that represents the asynchronous operation.
    /// The task result contains a list of EmailDTO objects corresponding.
    /// </returns>
    Task<IEnumerable<EmailDTO>> GetNewInvoiceEmailAsync();
}