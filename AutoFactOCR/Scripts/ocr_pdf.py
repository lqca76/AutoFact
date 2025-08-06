import easyocr
from pdf2image import convert_from_path
import numpy as np
import sys
import os
import warnings

warnings.filterwarnings("ignore")

def usage():
    print("Usage : python ocr_pdf.py fichier.pdf [--out fichier.txt]")
    sys.exit(1)

# Vérifie les arguments
if len(sys.argv) < 2:
    usage()

pdf_path = sys.argv[1]

if not os.path.isfile(pdf_path):
    print(f"Fichier non trouvé : {pdf_path}")
    sys.exit(1)

# Vérifie si sortie vers fichier
output_to_file = False
output_file = None
print(sys.argv)
if len(sys.argv) == 4 and sys.argv[2] == "--out":
    output_to_file = True
    output_file = sys.argv[3]

# OCR
reader = easyocr.Reader(['fr'])
images = convert_from_path(pdf_path, dpi=300)

results_text = []

for i, image in enumerate(images):
    img_np = np.array(image)
    result = reader.readtext(img_np)
    page_text = f"\n--- Page {i + 1} ---\n"
    page_text += "\n".join([r[1] for r in result])
    results_text.append(page_text)

# Affichage ou écriture
if output_to_file:
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(results_text))
    print(f"Texte OCR sauvegardé dans : {output_file}")
else:
    print("\n".join(results_text))