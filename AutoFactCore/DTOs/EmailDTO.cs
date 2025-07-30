namespace AutoFactCore.DTOs;

public record EmailDTO(
    string Id,
    string SenderAddress,
    string? Subject,
    DateTime ReceivedAt,
    List<EmailAttachmentDTO> Attachments
);