import tempfile
from fastapi import UploadFile

async def save_temp_pdf(file: UploadFile) -> str:
    """
    Sauvegarde un UploadFile PDF dans un fichier temporaire et retourne son chemin.
    """
    contents = await file.read()
    with tempfile.NamedTemporaryFile(suffix=".pdf", delete=False) as temp_pdf:
        temp_pdf.write(contents)
        return temp_pdf.name