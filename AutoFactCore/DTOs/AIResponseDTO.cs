namespace AutoFactCore.DTOs;

public record AIResponseDTO(
    DateTime ReceivedDate,
    decimal Amount,
    string DepartmentId,
    string SupplierName
);