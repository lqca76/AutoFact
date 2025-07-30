namespace AutoFactCore.DTOs;

public record EmailAttachmentDTO(
    string Name,
    byte[] Content
);