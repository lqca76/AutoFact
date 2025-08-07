using System.Data.Common;
using Microsoft.Exchange.WebServices.Data;
using Microsoft.Extensions.Logging;

var host = Host.CreateDefaultBuilder(args)
    .ConfigureAppConfiguration((context, config) =>
    {
        config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
    }) 
    .ConfigureServices((context, services) =>
    {
        // Application configuration.
        var configSection = context.Configuration.GetSection("AutoFact");
        var config = configSection.Get<ConsoleConfiguration>()!;

        services.AddSingleton<ICoreConfiguration>(config);
        services.AddSingleton<IExchangeConfiguration>(config);
        services.AddSingleton<IAIConfiguration>(config);
        services.AddSingleton<IOCRConfiguration>(config);

        services.AddSingleton<IEmailService, EmailsService>();
        services.AddSingleton<IOCRService, PythonOCRService>();
        services.AddSingleton<IAIService, OllamaPredictor>();
        // services.AddSingleton<ILogService>(_ => new FileLoggerService(config.LogFolder, config.ErrorLogFolder));
        services.AddSingleton<ILogService, ConsoleLogService>();
        services.AddSingleton<IFileService, FileService>();

        // Database Context
        services.AddDbContext<AutoFactBDD.AutoFactDbContext>(options =>
        {
            options.UseMySql(
                config.ConnectionString,
                new MySqlServerVersion(new Version(8, 0, 34))
            );

            // Disable logs.
            options.LogTo(_ => { }, LogLevel.None);

        });

        // Repositories & Mappers
        services.AddSingleton<ISupplierRepository, SuppliersRepository>();
        services.AddTransient<IMapper<Supplier, AutoFactBDD.Entities.Supplier>, SuppliersMapper>();
        services.AddSingleton<IRepository<Email, string>, EmailsRepository>();
        services.AddTransient<IMapper<Email, AutoFactBDD.Entities.Email>, EmailsMapper>();
        services.AddSingleton<IRepository<Department, string>, DepartmentsRepository>();
        services.AddTransient<IMapper<Department, AutoFactBDD.Entities.Department>, DepartmentMapper>();
        services.AddTransient<IInvoiceMapper, InvocicesMapper>();

        // Seeders
        services.AddTransient<ISeeder, DepartmentsSeeder>();

        // UseCases
        services.AddTransient<IProcessIncomingInvoicesUsecase, ProcessIncomingInvoicesUsecase>();

    }).Build();

// Database initialisation
using (var scope = host.Services.CreateScope())
{
    var services = scope.ServiceProvider;
    var context = services.GetRequiredService<AutoFactBDD.AutoFactDbContext>();

    // Apply migrations
    context.Database.Migrate();

    // Apply seeders
    var seeders = services.GetServices<ISeeder>();
    foreach (var seeder in seeders)
        seeder.Seed();
}

var usecase = host.Services.GetRequiredService<IProcessIncomingInvoicesUsecase>();

Console.WriteLine("Début du processus de récupération des mails.");
await usecase.ExecuteAsync();
Console.WriteLine("Tache terminée.");