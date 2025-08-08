namespace AutoFactCore.DTOs;

public record ValidateInvoiceResultDTO(
    bool Success,
    Invoice? Invoice,
    string Message
);