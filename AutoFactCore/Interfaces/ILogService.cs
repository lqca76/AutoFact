namespace AutoFactCore.Interfaces;

/// <summary>
/// Service interface for centralized application logging.
/// Provides methods to log informational messages and exceptions.
/// </summary>
public interface ILogService
{
    /// <summary>
    /// Logs a general informational or diagnostic message.
    /// </summary>
    /// <param name="message">The message to be logged.</param>
    void Log(string message);
    /// <summary>
    /// Logs an exception as an error, including its message and stack trace.
    /// </summary>
    /// <param name="ex">The exception to be logged.</param>
    void LogError(Exception ex);
}