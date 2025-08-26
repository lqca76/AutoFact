from fastapi import APIRouter, File, UploadFile, HTTPException, status
from app.services.ocr_service import process_pdf_with_ocr
from app.utils.file_utils import save_temp_pdf

router = APIRouter()

@router.post("/extract")
async def extract(file: UploadFile = File(..., description="PDF file to process")):
    if file.content_type != "application/pdf":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="The file should be a PDF"
        )

    try:
        temp_pdf_path = await save_temp_pdf(file)
        content = process_pdf_with_ocr(temp_pdf_path)
        return {"success": True, "content": content}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error during file process: {str(e)}"
        )