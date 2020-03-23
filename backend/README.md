# Besuchernachweis - Backend

- Die Kommunikation mit dem Frontend erfolgt ausschließlich über ViewModels
- Im Projektordner *Backend.WebApi* befindet sich ein Dockerfile
- Die Anwendung verfügt über eine OpenAPI (Swagger) Konfiguration. Diese befindet sich unter /swagger

## Notwendige Environment Variablen

- **DATENBANKPFAD** -> Pfad zur Datenbank. Muss auf .db enden.
- **APPSECRET** -> Passwort, mit dem die JWT Tokens generiert werden.
- **TOKENLIFETIME** -> Gültigkeitsdauer der JWT Token in Stunden

## Verwendete Technologien

- ASP.NET Core 3.1
- Entity Framework Core mit migrations
- sqlite Datenbank
    - Wurde aufgrund des nicht notwendigen Setups ausgewählt. Dank Entity Framework wäre es mit geringem Aufwand verbunden bei Bedarf auf ein anderes Datenbanksystem umzustellen.

## Verwendete Bibliotheken

- [AutoMapper](https://www.nuget.org/packages/AutoMapper/)
- [Swashbuckle (asp.net Integration für Swagger/OpenApi)](https://www.nuget.org/packages/Swashbuckle.AspNetCore/)
- [Microsoft.Extensions.Logging.Log4Net.AspNetCore](https://www.nuget.org/packages/Microsoft.Extensions.Logging.Log4Net.AspNetCore)
- [NetCore.AutoRegisterDi](https://www.nuget.org/packages/NetCore.AutoRegisterDi)
