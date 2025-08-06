namespace AutoFactConsole;

public class ConsoleLogService : ILogService
{
    public void Log(string message)
    {
        Console.ForegroundColor = ConsoleColor.Blue;
        Console.Write("[Info] ");
        Console.ResetColor();
        Console.WriteLine(message);
    }

    public void LogError(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.Write("[ERROR] ");
        Console.ResetColor();
        Console.WriteLine(message);
    }
}
