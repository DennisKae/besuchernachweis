# Besuchernachweis - Backend

- Die Kommunikation mit dem Frontend erfolgt ausschließlich über ViewModels
- Im Projektordner *Backend.WebApi* befindet sich ein Dockerfile

## Environment Variablen

- ***DATENBANKPFAD*** -> Pfad zur Datenbank. Muss auf .db enden.
- ***APPSECRET*** -> Passwort, mit dem die JWT Tokens generiert werden.
- ***TOKENLIFETIME*** -> Gültigkeitsdauer der JWT Token in Stunden
