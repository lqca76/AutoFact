namespace AutoFactConfiguration;

public static class ServiceCollectionExtension
{

    public static IServiceCollection AddAutoFactServices(this IServiceCollection services, IConfiguration configuration)
    {
        var configSection = configuration.GetSection("AutoFact");
        var config = configSection.Get<GlobalConfiguration>()!;

        // Core UseCases
        services.AddTransient<IProcessIncomingInvoicesUsecase, ProcessIncomingInvoicesUsecase>();
        services.AddTransient<IValidateInvoiceDepartmentUsecase, ValidateInvoiceDepartmentUsecase>();

        services.AddSingleton<ICoreConfiguration>(config);
        services.AddSingleton<IExchangeConfiguration>(config);
        services.AddSingleton<IAIConfiguration>(config);
        services.AddSingleton<IOCRConfiguration>(config);
        services.AddSingleton<IDocuwareConfiguration>(config);

        services.AddSingleton<IEmailService, AutoFactMail.EmailsService>();
        services.AddSingleton<IOCRService, PythonOCRService>();
        services.AddSingleton<ILogService>(_ => new FileLoggerService(config.LogFolder, config.ErrorLogFolder));
        services.AddSingleton<IFileService, FileService>();
        services.AddSingleton<IAIService, OllamaPredictor>();

        // Database
        services.AddDbContext<AutoFactBDD.AutoFactDbContext>(options =>
        {
            options.UseMySql(
                config.DBConnectionString,
                new MySqlServerVersion(new Version(8, 0, 34))
            );
            options.LogTo(_ => { }, LogLevel.None);
        });

        // Repositories & Mappers
        services.AddScoped<ISupplierRepository, SuppliersRepository>();
        services.AddTransient<IMapper<Supplier, AutoFactBDD.Entities.Supplier>, SuppliersMapper>();
        services.AddScoped<IRepository<Email, string>, EmailsRepository>();
        services.AddTransient<IMapper<Email, AutoFactBDD.Entities.Email>, EmailsMapper>();
        services.AddScoped<IRepository<Department, string>, DepartmentsRepository>();
        services.AddTransient<IMapper<Department, AutoFactBDD.Entities.Department>, DepartmentMapper>();
        services.AddTransient<IInvoiceMapper, InvocicesMapper>();
        services.AddTransient<IInvoicesRepository, InvoicesRepository>();

        // Seeders
        services.AddTransient<ISeeder, DepartmentsSeeder>();

        // Core services
        services.AddTransient<InvoicesService>();
        services.AddTransient<AutoFactCore.Services.EmailsService>();

        // Docuware
        services.AddScoped<IDocuwareService, DocuwareService>();
        return services;
    }

    public static void ApplySeeders(this IServiceProvider serviceProvider)
    {
        using var scope = serviceProvider.CreateScope();
        var seeders = scope.ServiceProvider.GetServices<ISeeder>();
        foreach (var seeder in seeders)
            seeder.Seed();
    }
}