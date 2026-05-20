# PROJECT_NOTES.md

Lebende Projektnotizen fuer Entscheidungen, offene Punkte und Ideen.

## Bisherige Entscheidungen

- Die Website wird aktuell ohne Frameworks mit HTML, CSS und JavaScript umgesetzt.
- Das Kontaktformular wird fuer serverseitige Verarbeitung vorbereitet; Backend kann spaeter mit PHP oder Node.js umgesetzt werden.
- Inhalte wie Pakete, Wartungspakete, FAQs, Referenzen und Uebersetzungen sollen ueber JSON-Dateien pflegbar bleiben.
- Die Website unterstuetzt Deutsch und Englisch.
- Die Website unterstuetzt Light Mode und Dark Mode.
- Navigation soll mit sauberen Slash-URLs funktionieren, damit sie lokal und spaeter auf Webhosting nutzbar ist.
- Wichtige interne Dateien und Ordner sollen auf Apache/Hetzner ueber `.htaccess` geschuetzt werden.
- Website-Pakete bestehen aus vier sichtbaren Preis-Paketen und einem individuellen Paket mit "Preis auf Anfrage".
- Preise werden als Richtwerte kommuniziert und koennen je nach Anforderungen abweichen.
- Wartungspakete sollen klare monatliche Grenzen nennen und nicht wie unbegrenzte Leistung wirken.
- Website-Pakete wurden auf Basic, Starter, Professional, Business und Individuell erweitert.
- Wartungspakete wurden auf Basic, Starter, Professional und Individuell erweitert.
- Die Preis-Seite soll als zentrale Uebersicht fuer Website-Pakete, Wartung, Hosting und individuelle Projekte dienen.
- Die Wartungsseite soll Wartung, Hosting und Verwaltung erklaeren statt die Preislogik zu duplizieren.
- Die Wartungs-CTA soll direkt zur Wartungssektion auf der Preis-Seite springen.
- Die Farblogik soll klar bleiben: Gruen fuer Marke, Navigation und Hauptaktionen; Badge-Gold `#e2a66f` fuer Hervorhebungen, Marker, Badges und Hover-Akzente.
- Website-Preise sollen vier vergleichbare Standardpakete als Reihe zeigen; individuelle Projekte werden als eigene breite Anfrage-Kachel darunter dargestellt.
- Referenzen werden bis zu echten Kundenprojekten als klar gekennzeichnete Demo-Projekte aufgebaut.
- Flaticon-Icons werden lokal unter `assets/icons/flaticon/` eingebunden.
- Bei kostenlosen Flaticon-Icons muss die notwendige Attribution beachtet werden.
- Nach abgeschlossenen Aenderungen soll Codex fragen, ob die Aenderungen hochgeladen/gepusht werden duerfen.
- Fuer jede einzelne Arbeit oder klar abgegrenzte Aenderung soll ein eigener, beschreibender Branch genutzt werden.
- Aenderungen sollen klein, zusammenhaengend und ueber Pull Request pruefbar bleiben.
- Bei riskanten Aenderungen soll vorab kurz begruendet werden, welche Dateien betroffen sind.
- Nach Code-Aenderungen sollen `AGENTS.md`, `PROJECT_NOTES.md` und `README.md` auf notwendigen Aktualisierungsbedarf geprueft werden.

## Offene Punkte

- Finaler Firmenname, Logo und Markenidentitaet festlegen.
- Finale Kontaktdaten eintragen: E-Mail, Telefon, WhatsApp, Social Media.
- Rechtliche Seiten final pruefen lassen: Impressum, Datenschutz, Barrierefreiheit.
- Flaticon-Lizenzen und Attribution vor Veroeffentlichung final pruefen.
- Hosting-Setup auf Hetzner testen, inklusive `.htaccess`, PHP und sauberer Weiterleitungen.
- Kontaktformular serverseitig final konfigurieren und Mailversand testen.
- Rate-Limiting oder Spam-Schutz fuer das Kontaktformular finalisieren.
- Sitemap, robots.txt und llms.txt vor Livegang mit echter Domain aktualisieren.
- Bei kuenftigen Aenderungen konsequent pruefen, ob Projektregeln, Projektnotizen oder README mit angepasst werden muessen.

## Ideen

- Referenz-Websites oder Demo-Projekte als eigene Unterseite ausbauen.
- Optional Hosting-, Wartungs- und Verwaltungsleistungen klarer als separate Leistung darstellen.
- Spaeter echte Kundenreferenzen, Branchenbeispiele und Vorher-Nachher-Strukturen ergaenzen.
- Trust-Bereich mit Antwortzeit, Wartbarkeit, SEO-Grundstruktur und Datenschutz-Hinweisen weiter ausbauen.
- Bei Wachstum eventuell kleine Admin- oder JSON-Pflegeoberflaeche fuer Inhalte pruefen.
