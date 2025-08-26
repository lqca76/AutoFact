import easyocr
from pdf2image import convert_from_path
import numpy as np

_reader = None

def get_ocr_reader():
    global _reader
    if _reader is None:
        _reader = easyocr.Reader(['fr'])
    return _reader

def process_pdf_with_ocr(pdf_path: str) -> str:
    """
    Processes a PDF file using OCR to extract text from each page.
    
    This function converts each page of the PDF to an image, then applies OCR
    to detect and recognize text content across all pages.
    
    Args:
        pdf_path (str): Path to the PDF file to be processed
        
    Returns:
        str: All extracted text concatenated into a single string
    """
    reader = get_ocr_reader()
    images = convert_from_path(pdf_path, dpi=300)

    text = ""
    for image in images:
        img_np = np.array(image)
        result = reader.readtext(img_np)
        page_text = "\n".join([r[1] for r in result])
        text += page_text + "\n\n"
    return text.strip()
