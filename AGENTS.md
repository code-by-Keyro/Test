# AGENTS.md

Diese Datei ist die dauerhafte Projektanweisung fuer Codex in diesem Repository.

## Projekt

Wir bauen die Website fuer unsere eigene Webagentur. Die Agentur erstellt Websites fuer Kunden und bietet optional Hosting, Wartung und Verwaltung an.

Zielgruppen sind kleine und mittlere Unternehmen, Selbststaendige und lokale Betriebe. Die Website soll spaeter auch europaweit nutzbar sein.

## Stil und Wirkung

- Modern, hochwertig, bodenstaendig und klar verstaendlich.
- Serioes und vertrauenswuerdig, ohne uebertriebenes Marketing-Gelaber.
- Bestehendes Design respektieren und nicht unnoetig zerstoeren.
- Bestehenden Stil, Abstaende, Typografie und Komponentenlogik beibehalten.
- Deutsch und Englisch unterstuetzen.
- Light Mode und Dark Mode unterstuetzen.

## Technik

- Frontend aktuell mit HTML, CSS und JavaScript.
- Backend spaeter mit PHP oder Node.js.
- Keine Frameworks oder neuen Abhaengigkeiten einbauen, solange sie nicht wirklich noetig sind.
- Code sauber, verstaendlich und wartbar halten.
- Keine Zugangsdaten, API-Keys oder echten Secrets im Code speichern.

## Inhalte

- Es soll vier normale Website-Pakete geben.
- Ein fuenftes Paket soll als individuelles Paket mit "Preis auf Anfrage" gefuehrt werden.
- Preise duerfen sichtbar angezeigt werden.
- Preisangaben muessen immer mit einem Hinweis versehen sein, dass der endgueltige Preis je nach Anfrage, Umfang, Funktionen, Designwunsch und technischer Komplexitaet abweichen kann.

## Kontaktformular

Pflichtfelder:

- Name oder Firma
- Ansprechpartner bei Firma
- E-Mail
- Gewuenschtes Paket
- Projektbeschreibung

Optionale Felder:

- Telefonnummer
- Budget
- Deadline

## Arbeitsregeln fuer Codex

- Nicht direkt auf `main` pushen.
- Main darf nicht direkt veraendert werden.
- Arbeite immer auf einem eigenen Branch.
- Fuer Aenderungen einen eigenen Branch nutzen.
- Fuer jede einzelne Arbeit oder klar abgegrenzte Aenderung einen eigenen Branch erstellen.
- Branch-Namen sollen kurz beschreiben, was grob geaendert wird, zum Beispiel `codex/hero-browserfenster-anpassen` oder `codex/kontakt-icons-ersetzen`.
- Erstelle kleine, zusammenhaengende Aenderungen.
- Aenderungen muessen ueber Pull Request pruefbar sein.
- Bei riskanten Aenderungen vorher kurz begruenden, welche Dateien betroffen sind.
- Nach jeder abgeschlossenen Aenderung den Nutzer fragen, ob die Aenderung hochgeladen/gepusht werden darf.
- Nur hochladen oder pushen, wenn der Nutzer es fuer diese Aenderung ausdruecklich erlaubt hat.
- Bestehendes Design nicht unnoetig zerstoeren.
- Bestehenden Stil beibehalten.
- Keine grossen Umbauten ohne klare Begruendung.
- Aenderungen sauber, nachvollziehbar und moeglichst klein halten.
- Nach Aenderungen kurz zusammenfassen, was geaendert wurde.
- Bei groesseren Aenderungen Risiken oder offene Punkte nennen.
- Wenn Projektentscheidungen entstehen, `PROJECT_NOTES.md` aktualisieren.
- Nach jeder Code-Aenderung pruefen, ob `AGENTS.md`, `PROJECT_NOTES.md` oder `README.md` aktualisiert werden muessen.
- `PROJECT_NOTES.md` aktualisieren, wenn neue Entscheidungen, offene Punkte, Risiken oder Ideen entstehen.
- `README.md` aktualisieren, wenn sich Installation, Projektstruktur, Konfiguration, Deployment, Bedienung oder wichtige Pflegehinweise aendern.
