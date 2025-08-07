var environment = Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT") ?? "Development";

var host = Host.CreateDefaultBuilder(args)
    .ConfigureAppConfiguration((context, config) =>
    {
        config
        .SetBasePath(AppContext.BaseDirectory)
        .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
        .AddJsonFile($"appsettings.{environment}.json", optional: true);
    })
    .ConfigureServices((context, services) =>
    {
        services.AddAutoFactServices(context.Configuration);
    })
    .Build();

// Seeders
host.Services.ApplySeeders();

var usecase = host.Services.GetRequiredService<IProcessIncomingInvoicesUsecase>();

await usecase.ExecuteAsync();