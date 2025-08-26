FROM ollama/ollama:latest

WORKDIR /root

COPY Modelfile .

RUN ollama create autofact -f Modelfile

EXPOSE 11434

CMD ["ollama", "serve"]