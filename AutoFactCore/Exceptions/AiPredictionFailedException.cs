namespace AutoFactCore.Exceptions;

public class AiPredictionFailedException : DomainException
{
    public AiPredictionFailedException(string fileName) : base($"Failed to predict and extract content of '{fileName}'.") {}
}