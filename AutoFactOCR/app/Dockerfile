# Image Python officielle
FROM python:3.11-slim

# Empêche Python d'écrire des fichiers .pyc et force flush des logs
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Installer les dépendances système (pour pdf2image + easyocr)
RUN apt-get update && apt-get install -y \
    poppler-utils \
    tesseract-ocr \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    && rm -rf /var/lib/apt/lists/*

# Créer le dossier de travail
WORKDIR /app

# Copier requirements et installer
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copier tout le projet
COPY . .

# Exposer le port FastAPI
EXPOSE 8000

# Lancer l’API
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
