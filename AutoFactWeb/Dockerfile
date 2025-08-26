FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

COPY ["AutoFactWeb.csproj", "."]
COPY ["../AutoFactCore/AutoFactCore.csproj", "../AutoFactCore/"]
COPY ["../AutoFactConfiguration/AutoFactConfiguration.csproj", "../AutoFactConfiguration/"]
COPY ["../AutoFactAI/AutoFactAI.csproj", "../AutoFactAI/"]
COPY ["../AutoFactBDD/AutoFactBDD.csproj", "../AutoFactBDD/"]
COPY ["../AutoFactLogging/AutoFactLogging.csproj", "../AutoFactLogging/"]
COPY ["../AutoFactMail/AutoFactMail.csproj", "../AutoFactMail/"]
COPY ["../AutoFactOCR/AutoFactOCR.csproj", "../AutoFactOCR/"]
COPY ["../AutoFactDocuWare/AutoFactDocuWare.csproj", "../AutoFactDocuWare/"]
COPY ["package.json", "package-lock.json", "./"]

RUN dotnet restore "AutoFactWeb.csproj"

COPY . .
COPY ../AutoFactCore/ ../AutoFactCore/
COPY ../AutoFactConfiguration/ ../AutoFactConfiguration/
COPY ../AutoFactAI/ ../AutoFactAI/
COPY ../AutoFactBDD/ ../AutoFactBDD/
COPY ../AutoFactLogging/ ../AutoFactLogging/
COPY ../AutoFactMail/ ../AutoFactMail/
COPY ../AutoFactOCR/ ../AutoFactOCR/
COPY ../AutoFactDocuWare/ ../AutoFactDocuWare/

RUN dotnet publish "AutoFactWeb.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    # Dépendances de base pour .NET
    libgssapi-krb5-2 \
    libssl-dev \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=build /app/publish .

RUN groupadd -r appgroup && \
    useradd -r -g appgroup -s /bin/false appuser && \
    chown -R appuser:appgroup /app

EXPOSE 8080
EXPOSE 443

ENV ASPNETCORE_URLS=http://+:8080;https://+:443
ENV ASPNETCORE_ENVIRONMENT=Production

ENTRYPOINT ["dotnet", "AutoFactWeb.dll"]