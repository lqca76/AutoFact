var host = Host.CreateDefaultBuilder(args)
    .ConfigureAppConfiguration((context, config) =>
    {
        config.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
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