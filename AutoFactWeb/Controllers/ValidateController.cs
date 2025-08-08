namespace AutoFactWeb.Controllers;

public class ValidateController : Controller
{
    private readonly IValidateInvoiceDepartmentUsecase _usecase;

    public ValidateController(IValidateInvoiceDepartmentUsecase usecase)
    {
        _usecase = usecase;
    }

    [HttpPost]
    public async Task<IActionResult> Validate([FromBody] ValidateInvoiceRequest request)
    {
        if (request is null)
            return BadRequest(new { Success = false, Message = "Requête invalide." });

        try
        {
            var result = await _usecase.Execute(request.InvoiceId, request.Validate);
            if (result.Success)
                return Ok(result);
            return StatusCode(StatusCodes.Status500InternalServerError, result);
        }
        catch (Exception e)
        {
            if (e is ArgumentException)
                return StatusCode(StatusCodes.Status404NotFound, new { Success = false, Message = "Facture non trouvée." });
            if (e is ArgumentNullException)
                return StatusCode(StatusCodes.Status400BadRequest, new { Success = false, Message = "La facture ne contient pas de service prédit." });
            return StatusCode(StatusCodes.Status500InternalServerError, new { Success = false, Message = "Une erreur est survenue."});
        }

    }
}