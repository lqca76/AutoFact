namespace AutoFactTest.UseCases;

public class ProcessIncomingInvoicesUsecaseTests
{
    private readonly Mock<IEmailService> _mockEmailService = new();
    private readonly Mock<IFileService> _mockFileService = new();
    private readonly Mock<IOCRService> _mockOcrService = new();
    private readonly Mock<IAIService> _mockAiService = new();
    private readonly Mock<IRepository<Email, string>> _mockEmailRepo = new();
    private readonly Mock<IRepository<Department, string>> _mockDepartmentRepo = new();
    private readonly Mock<ILogService> _mockLogService = new();
    private readonly Mock<ISupplierRepository> _mockSupplierRepo = new();
    private readonly Mock<ICoreConfiguration> _mockConfig = new();
    private void ResetMocks()
    {
        _mockEmailService.Reset();
        _mockFileService.Reset();
        _mockOcrService.Reset();
        _mockAiService.Reset();
        _mockEmailRepo.Reset();
        _mockDepartmentRepo.Reset();
        _mockLogService.Reset();
        _mockSupplierRepo.Reset();
        _mockConfig.Reset();
    }

    private ProcessIncomingInvoicesUsecase CreateUseCase()
    {
        return new ProcessIncomingInvoicesUsecase(
            _mockEmailService.Object,
            _mockFileService.Object,
            _mockEmailRepo.Object,
            _mockOcrService.Object,
            _mockAiService.Object,
            _mockDepartmentRepo.Object,
            _mockLogService.Object,
            _mockSupplierRepo.Object,
            _mockConfig.Object
        );
    }

    [Fact]
    public async Task ExecuteAsync_Should_CreateTwoPendingInvoices_When_EmailHasTwoValidAttachments()
    {
        ResetMocks();
        var emailId = "email-123";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture1.pdf", []),
            new("facture2.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "supplier@example.com", "Factures du mois", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync((byte[] _, string _) => Guid.NewGuid().ToString());
        _mockOcrService.Setup(s => s.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("Ceci est une Facture de test");
        _mockAiService.Setup(s => s.PredictAsync(It.IsAny<string>())).ReturnsAsync(new AIResponseDTO(DateTime.UtcNow, 123.45m, "FIN", "SupplierX"));
        _mockDepartmentRepo.Setup(r => r.GetById(It.IsAny<string>())).Returns(new Department() { Id = "FIN", Label = "Finance" });
        _mockSupplierRepo.Setup(r => r.GetByName(It.IsAny<string>())).Returns(new Supplier { Id = 1, Name = "SupplierX" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");

        var useCase = CreateUseCase();

        await useCase.ExecuteAsync();

        _mockEmailRepo.Verify(r => r.Add(It.Is<Email>(e => e.Invoices.Count() == 2 && e.Invoices.All(i => i.Status == InvoiceStatus.Pending))), Times.Once);
    }
    [Fact]
    public async Task ExecuteAsync_Should_SkipAttachments_When_OCRTextDoesNotContainFacture()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-456";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("note_interne.pdf", []),
            new("memo.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new (emailId, "noreply@example.com", "Notes diverses", DateTime.UtcNow, attachments),
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync((byte[] _, string _) => Guid.NewGuid().ToString());
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("Ceci est une note de service");
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        _mockEmailRepo.Verify(r => r.Add(It.Is<Email>(e => e.Invoices.Count() == 0)), Times.Once);
        _mockLogService.Verify(l => l.Log(It.Is<string>(msg =>
            msg.Contains("added containing 0 invoice"))), Times.Once);
    }

    [Fact]
    public async Task ExecuteAsync_Should_CreateSupplier_When_SupplierDoesNotExist()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-789";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture3.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "test@example.com",  "Nouvelle facture", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync(Guid.NewGuid().ToString());
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("Facture fournisseur X");
        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ReturnsAsync(new AIResponseDTO(DateTime.UtcNow, 456.78m, "RH", "NouveauFournisseur"));
        _mockDepartmentRepo.Setup(r => r.GetById("RH")).Returns(new Department { Id = "RH", Label = "Ressources Humaines" });
        _mockSupplierRepo.Setup(r => r.GetByName("NouvelFournisseur")).Returns((Supplier?)null);
        _mockSupplierRepo.Setup(r => r.Add(It.Is<Supplier>(s => s.Name == "NouvelFournisseur"))).Returns(new Supplier { Id = 2, Name = "NouvelFournisseur" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        _mockSupplierRepo.Verify(r => r.GetByName("NouveauFournisseur"), Times.Once);
        _mockSupplierRepo.Verify(r => r.Add(It.Is<Supplier>(s => s.Name == "NouveauFournisseur")), Times.Once);
    }


    [Fact]
    public async Task ExecuteAsync_Should_AssociateCorrectDepartment_When_DepartmentIdIsValid()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-999";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture4.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "facture@example.com", "Paiement mensuel", DateTime.UtcNow, attachments),
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync(Guid.NewGuid().ToString());
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("Voici la facture du mois");
        var aiResponse = new AIResponseDTO(DateTime.UtcNow, 789.99m, "IT", "TechCorp");
        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ReturnsAsync(aiResponse);
        var expectedDepartment = new Department()
        {
            Id = "IT",
            Label = "Informatique"
        };

        _mockDepartmentRepo.Setup(r => r.GetById("IT")).Returns(expectedDepartment);
        _mockSupplierRepo.Setup(r => r.GetByName(It.IsAny<string>())).Returns(new Supplier { Id = 42, Name = "TechCorp" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");
        Email? capturedEmail = null;
        _mockEmailRepo.Setup(r => r.Add(It.IsAny<Email>())).Callback<Email>(e => capturedEmail = e);

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        Assert.NotNull(capturedEmail);
        Assert.Single(capturedEmail!.Invoices);
        var invoice = capturedEmail.Invoices.First();
        Assert.Equal(expectedDepartment, invoice.PredictedDepartment);
    }

    [Fact]
    public async Task ExecuteAsync_Should_SaveEmailWithLinkedInvoices()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-abc";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("factureX.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "contact@supplier.com",  "Paiement reçu", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync(Guid.NewGuid().ToString());
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("FACTURE : Service mensuel");
        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ReturnsAsync(new AIResponseDTO(DateTime.UtcNow, 321.00m, "COMPTA", "FournisseurZ"));
        var expectedDepartment = new Department() { Id = "COMPTA", Label = "Comptabilité" };
        _mockDepartmentRepo.Setup(r => r.GetById("COMPTA")).Returns(expectedDepartment);
        _mockSupplierRepo.Setup(r => r.GetByName("FournisseurZ")).Returns(new Supplier { Id = 100, Name = "FournisseurZ" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");
        Email? savedEmail = null;
        _mockEmailRepo.Setup(r => r.Add(It.IsAny<Email>())).Callback<Email>(e => savedEmail = e);

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        Assert.NotNull(savedEmail);
        Assert.Equal(emailId, savedEmail.Id);
        Assert.Single(savedEmail.Invoices);
        Assert.Equal("contact@supplier.com", savedEmail.SenderAddress);
        var invoice = savedEmail.Invoices.First();
        Assert.Equal(321.00m, invoice.Amount);
        Assert.Equivalent(invoice.PredictedDepartment, expectedDepartment);
    }

    [Fact]
    public async Task ExecuteAsync_Should_SetInvoiceStatusError_And_LogError_When_ExceptionOccurs()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-err2";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture_bug.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "facture@bug.com", "Bug dans le traitement", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync("/fichier/bug.pdf");
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("FACTURE - bug test");
        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ThrowsAsync(new InvalidOperationException("Erreur IA"));
        _mockSupplierRepo.Setup(r => r.GetByName(It.IsAny<string>())).Returns(new Supplier { Id = 1, Name = "Test" });
        _mockDepartmentRepo.Setup(r => r.GetById(It.IsAny<string>())).Returns(new Department { Id = "IT", Label = "Informatique" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");
        Email? savedEmail = null;
        _mockEmailRepo.Setup(r => r.Add(It.IsAny<Email>())).Callback<Email>(e => savedEmail = e);

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        Assert.NotNull(savedEmail);
        var invoice = savedEmail!.Invoices.FirstOrDefault();
        Assert.NotNull(invoice);
        Assert.Equal(InvoiceStatus.Error, invoice!.Status);
        _mockLogService.Verify(log => log.LogError(It.IsAny<string>()), Times.Once);
    }
    [Fact]
    public async Task ExecuteAsync_Should_SaveOnlyValidInvoices_When_EmailHasMixedAttachments()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-mix";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture_valide.pdf", []),
            new("facture_invalide.pdf", [])
        };
        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "mixed@domain.com", "Factures mixtes", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync(Guid.NewGuid().ToString());
        var callCount = 0;
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync(() =>
            {
                callCount++;
                return callCount == 1
                    ? "Ceci est une FACTURE valide"
                    : "Note de service interne";
            });
        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ReturnsAsync(new AIResponseDTO(DateTime.UtcNow, 150.00m, "FIN", "EntrepriseA"));
        _mockDepartmentRepo.Setup(d => d.GetById("FIN")).Returns(new Department { Id = "FIN", Label = "Finance" });
        _mockSupplierRepo.Setup(s => s.GetByName("EntrepriseA")).Returns(new Supplier { Id = 1, Name = "EntrepriseA" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");

        Email? savedEmail = null;
        _mockEmailRepo.Setup(r => r.Add(It.IsAny<Email>())).Callback<Email>(e => savedEmail = e);

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        Assert.NotNull(savedEmail);
        Assert.Equal(emailId, savedEmail!.Id);
        Assert.Single(savedEmail.Invoices);

        var invoice = savedEmail.Invoices.First();
        Assert.Equal(150.00m, invoice.Amount);
        Assert.Equal("EntrepriseA", invoice.Supplier!.Name);
        Assert.Equal("Finance", invoice.PredictedDepartment!.Label);
    }


    [Fact]
    public async Task ExecuteAsync_Should_NotCreateSupplier_When_SupplierAlreadyExists()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-existing-supplier";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture_existante.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "client@existing.com", "Facture régulière", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync("/factures/existante.pdf");
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync("FACTURE pour client fidèle");

        var aiResponse = new AIResponseDTO(DateTime.UtcNow, 199.99m, "VENTE", "ClientFidèle");
        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ReturnsAsync(aiResponse);

        var existingSupplier = new Supplier { Id = 101, Name = "ClientFidèle" };
        _mockSupplierRepo.Setup(r => r.GetByName("ClientFidèle")).Returns(existingSupplier);

        _mockDepartmentRepo.Setup(r => r.GetById("VENTE")).Returns(new Department { Id = "VENTE", Label = "Ventes" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        _mockSupplierRepo.Verify(r => r.GetByName("ClientFidèle"), Times.Once);
        _mockSupplierRepo.Verify(r => r.Add(It.IsAny<Supplier>()), Times.Never);
    }
    [Fact]
    public async Task ExecuteAsync_Should_LogException_And_ContinueExecution_When_ErrorOccursInAttachment()
    {
        // Arrange
        ResetMocks();

        var emailId = "email-exception-safe";
        var attachments = new List<EmailAttachmentDTO>
        {
            new("facture1.pdf", []),
            new("facture2-bug.pdf", [])
        };

        var parsedEmails = new List<EmailDTO>
        {
            new(emailId, "support@fournisseur.com", "Factures diverses", DateTime.UtcNow, attachments)
        };

        _mockEmailService.Setup(s => s.GetNewInvoiceEmailAsync()).ReturnsAsync(parsedEmails);
        _mockFileService.Setup(s => s.SaveFileAsync(It.IsAny<byte[]>(), It.IsAny<string>())).ReturnsAsync("/chemin/facture.pdf");

        var ocrCall = 0;
        _mockOcrService.Setup(o => o.ExctractTextAsync(It.IsAny<string>())).ReturnsAsync(() =>
            {
                ocrCall++;
                return ocrCall == 1
                    ? "FACTURE client ABC"
                    : null;
            });

        _mockAiService.Setup(ai => ai.PredictAsync(It.IsAny<string>())).ReturnsAsync(new AIResponseDTO(DateTime.UtcNow, 120.00m, "COMPTA", "ClientABC"));
        _mockDepartmentRepo.Setup(r => r.GetById("COMPTA")).Returns(new Department { Id = "COMPTA", Label = "Comptabilité" });
        _mockSupplierRepo.Setup(r => r.GetByName("ClientABC")).Returns(new Supplier { Id = 7, Name = "ClientABC" });
        _mockConfig.Setup(c => c.PDFPath).Returns("/tmp");

        Email? savedEmail = null;
        _mockEmailRepo.Setup(r => r.Add(It.IsAny<Email>())).Callback<Email>(e => savedEmail = e);

        var useCase = CreateUseCase();

        // Act
        await useCase.ExecuteAsync();

        // Assert
        Assert.NotNull(savedEmail);
        Assert.Equal(2, savedEmail!.Invoices.Count());
        var invoice = savedEmail.Invoices.First();
        Assert.Equal(120.00m, invoice.Amount);
        Assert.Equal(InvoiceStatus.Pending, invoice.Status);
        _mockLogService.Verify(log => log.LogError(It.IsAny<string>()), Times.Once);
    }


}