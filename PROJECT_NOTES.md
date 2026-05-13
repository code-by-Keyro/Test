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
- Website-Pakete bestehen aus drei sichtbaren Preis-Paketen und einem individuellen Paket mit "Preis auf Anfrage".
- Preise werden als Richtwerte kommuniziert und koennen je nach Anforderungen abweichen.
- Wartungspakete sollen klare monatliche Grenzen nennen und nicht wie unbegrenzte Leistung wirken.
- Flaticon-Icons werden lokal unter `assets/icons/flaticon/` eingebunden.
- Bei kostenlosen Flaticon-Icons muss die notwendige Attribution beachtet werden.

## Offene Punkte

- Finaler Firmenname, Logo und Markenidentitaet festlegen.
- Finale Kontaktdaten eintragen: E-Mail, Telefon, WhatsApp, Social Media.
- Rechtliche Seiten final pruefen lassen: Impressum, Datenschutz, Barrierefreiheit.
- Flaticon-Lizenzen und Attribution vor Veroeffentlichung final pruefen.
- Hosting-Setup auf Hetzner testen, inklusive `.htaccess`, PHP und sauberer Weiterleitungen.
- Kontaktformular serverseitig final konfigurieren und Mailversand testen.
- Rate-Limiting oder Spam-Schutz fuer das Kontaktformular finalisieren.
- Sitemap, robots.txt und llms.txt vor Livegang mit echter Domain aktualisieren.

## Ideen

- Referenz-Websites oder Demo-Projekte als eigene Unterseite ausbauen.
- Optional Hosting-, Wartungs- und Verwaltungsleistungen klarer als separate Leistung darstellen.
- Spaeter echte Kundenreferenzen, Branchenbeispiele und Vorher-Nachher-Strukturen ergaenzen.
- Trust-Bereich mit Antwortzeit, Wartbarkeit, SEO-Grundstruktur und Datenschutz-Hinweisen weiter ausbauen.
- Bei Wachstum eventuell kleine Admin- oder JSON-Pflegeoberflaeche fuer Inhalte pruefen.

