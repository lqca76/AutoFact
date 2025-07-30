namespace AutoFactCore.Exceptions;

public class DepartmentNotFoundException : DomainException
{
    public DepartmentNotFoundException(string deptId)
        : base($"Department with Id '{deptId} was not found.")
    { }
}