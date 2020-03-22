# Besuchernachweis - Backend

- Die Kommunikation mit dem Frontend erfolgt ausschließlich über ViewModels
- Im Projektordner *Backend.WebApi* befindet sich ein Dockerfile
- Die Anwendung verfügt über eine OpenAPI (Swagger) Konfiguration. Diese befindet sich unter /swagger

## Notwendige Environment Variablen

- **DATENBANKPFAD** -> Pfad zur Datenbank. Muss auf .db enden.
- **APPSECRET** -> Passwort, mit dem die JWT Tokens generiert werden.
- **TOKENLIFETIME** -> Gültigkeitsdauer der JWT Token in Stunden

## Verwendete Technologien


## Verwendete Bibliotheken

- [AutoMapper 9.0.0](http://automapper.org/)