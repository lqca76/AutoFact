namespace AutoFactDocuware;

public interface IDocuwareConfiguration
{
    string DocuwareBaseURI { get; set; }
    string DocuwareUsername { get; set; }
    string DocuwarePassword { get; set; }
}