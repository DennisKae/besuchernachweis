# Besuchernachweis mit Webanwendung
- Demo: [https://besuchernachweis-tool.now.sh/](https://besuchernachweis-tool.now.sh/)

- Devpost Beitrag: [https://devpost.com/software/besuchernachweis-mit-webanwendung](https://devpost.com/software/besuchernachweis-mit-webanwendung)

- YouTube Pitchvideo: [https://www.youtube.com/watch?v=Ym6lCrW7vmY](https://www.youtube.com/watch?v=Ym6lCrW7vmY)

## Was ist die Herausforderung / das Problem? Was ist das Bedürfnis dahinter?

### Kurzfassung

* Besucher einer Institution (z.B. Krankenhaus) erfassen (mit Ein- und Ausgang).
* Momentane Besucherdichte in Räumlichkeiten überwachen - Zugangsgewährung.
* Hilfe bei Nachvollziehung von Infektionsketten
* Kontaktierung von potentiell gefährdeten Besuchern
* Feststellung des Reinigungs- Desinfektionsbedarfs von Räumlichkeiten.

### Langfassung

Unterstützung von Krankenhäuser und anderen Institutionen
beim Führen von Besuchernachweisen (Ein- und Ausgang von
Personen aufzeichnen).

Dies auf Papier oder mit Standard-Officeprogrammen umzusetzen ist
entweder ineffizient (Officeprogramme/Papier) oder bei mehreren
Ein-/Ausgängen zum Gebäude nicht umsetzbar (z.B. auf Papier). In jedem
Fall wäre dieses Vorgehen aber langsam.

Unsere Lösung soll als Client-Server-Applikation auf mobilen Endgeräten laufen
und für jede Institution die erhobenen Daten aller Ein-und Ausgänge zusammenführen.

Weiterhin soll unsere Lösung dazu genutzt werden können, dem Einlasspersonal aufzuzeigen,
wieviele Besucher:innen sich bereits in bestimmten Räumlichkeiten befinden - so können,
bei **zu hoher Dichte von Personen**, weitere Besucher:innen vorerst nicht eingelassen und zum Warten
aufgefordert werden. Erst wenn Personen den betreffenden Bereich wieder verlassen
haben, werden die Wartenden eingelassen.

Weiterhin können die aufgezeichneten Daten bei der **Nachverfolgung von Infektionsketten**
hilfreich sein. So kann bestimmt werden, welche Besucher:innen sich mit einer erkranken Person
in welchem Zeitraum im selben Raum aufgehalten haben. Diese Besucher:innen können dann mittels
ihrer hinterlegten Kontaktdaten dazu aufgefordert werden, sich entsprechend untersuchen
zu lassen.

Perspektivisch könnte die Anwendung es ermöglichen, die Besucherdichte über Zeiträume zu analysieren.
Dies kann **Aufschluss über den Reiniguns- und Desinfektionsbedarf** von Räumlichkeiten geben.
Ergibt die Analyse z.B., dass bestimmte Räumlichkeiten nachmittags wesentlich stärker frequentiert
werden, dann kann in dem entsprechenden Zeitraum die Reinigung/Desinfektion in diesem Zeitraum öfter
durchgeführt werden.

## Wer ist betroffen? Wem soll die Lösung konkret helfen?

* Alle Personen, die in den Institutionen ein- und ausgehen.
* Im Ein-/Ausgang von Krankenhäusern und anderen Institutionen tätige Mitarbeiter:innen.
* Gesundheitsämter (Auswertung und Nachvollziehung von Infektionsketten).

## Datenschutzrechtliche Aspekte/Verifizierung der Identität

Bei der Erfassung der Besucher:innen erscheinen uns zwei Aspekte wichtig:

* der datenschutzrechtliche Aspekt bei der Erfassung personenbezogener Daten und die Einwilligung der Besucher:innen.

* das sich Besucher:innen zuverlässig identifizieren und nicht als eine andere Person ausgeben.

Beide Aspekte möchten wir durch organisatorische Maßnahmen der Institution behandelt sehen: so
sollen die Besucher:innen beim Eingang darüber aufgeklärt werden, dass sie sich zur Erfassung mit
einem Listbildausweis identifizieren müssen und sich mit dessen Vorlage damit einverstanden erklären,
dass ihre Daten zu den Zwecken, die in diesem Projekt beschrieben sind, für einen bestimmten (noch zu definierenden) Zeitraum gespeichert werden.

## Features

### Umgesetzte Features

- Erfassung von Besuchern
- Erfassung von Besuchen (An- und Abmeldung)
- Erfassung von Gebäuden und Räumen
- Analyse der Besuche (Wer war wann in welchem Raum?)
- Mehrsprachenfähigkeit (aktuell deutsch, englisch, französisch, schwedisch)

### Geplante Features

- Feststellung der Zugangsberechtigung
    - Anhand von definierbaren Regeln wird bei Erfassung des Besuchs geprüft, ob der Besuch möglich ist.
- Dashboard
    - Darstellung diverser Anzahlen (z.B. Anzahl aktiver Besucher im Gebäude).
- Analyse der Frequentierung der Benutzer
- Abonnierbare Benachrichtigungen
    - z.B. bei Über-/Unterschreitung von definierten Grenzwerten
- Datenexport
- Fähigkeit mehrere Institutionen zentral zu hosten
- Scan (Auslesen) von Ausweisdokumenten

## Ausblick

Zur Beurteilung der Verwendbarkeit der Anwendung müssen noch verschiedene Expertenmeinungen eingeholt werden. Insbesondere müssen noch datenschutzrelevante Vorkehrungen in der Anwendung getroffen werden. Weiterhin sollten auch Meinungen von potentiellen Anwendern eingeholt werden, um die Anwendung in Bezug auf ihre Usability zu überprüfen und um Prozessabläufe abzustimmen.

Außerdem stehen noch die Fragen des Betriebs im Raum: Wie könnte die Anwendung betrieben, bzw, gehostet werden? Aktuell läuft die Anwendung in Docker-Containern und ist lediglich für eine Institution ausgelegt. Interessant wäre sicherlich ein zentraler Betrieb mit einer zentralen Datenbank, mit der institutionsübergreifende Auswertungen möglich sein könnten.

## Was war die Challenge?

008 Corona Tracking: Wie können Corona-infizierte/ getestete/ genesene Personen getrackt werden?