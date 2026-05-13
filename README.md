# Studio Zwei Website

Statische, mehrsprachige Agentur-Website mit HTML, CSS, JavaScript und PHP-Kontaktformular. Der Name "Studio Zwei" ist ein Platzhalter und kann ersetzt werden.

## Projektstruktur

- `index.html`, `services.html`, `pricing.html`, `maintenance.html`, `about.html`, `contact.html`: Hauptseiten
- `impressum.html`, `datenschutz.html`, `barrierefreiheit.html`: rechtliche Platzhalter
- `404.html`: Fehlerseite
- `assets/styles.css`: Layout, Themes, Responsive Design
- `assets/main.js`: Sprachwechsel, Theme, JSON-Laden, Formularlogik
- `data/website-packages.json`: Website-Pakete und Preise
- `data/maintenance-packages.json`: Wartungspakete und Preise
- `data/faqs.json`: FAQ-Inhalte
- `data/translations.json`: zentrale Texte für Deutsch und Englisch
- `backend/contact.php`: PHP-Endpunkt für das Kontaktformular
- `backend/public-data.php`: öffentlicher JSON-Endpunkt für erlaubte Website-Daten
- `backend/config.example.php`: Beispielkonfiguration
- `data/reference-sites.json`: Referenz- und Demo-Websites
- `.htaccess`: saubere URLs ohne `.html` und Zugriffsschutz für interne Dateien
- `robots.txt`, `sitemap.xml`, `llms.txt`: SEO- und KI-Lesbarkeit

## Texte Ändern

Zentrale UI-Texte liegen in `data/translations.json`. Deutsch ist Standardsprache. Neue Texte sollten jeweils in `de` und `en` gepflegt werden.

## Pakete Und Preise Ändern

Website-Pakete werden in `data/website-packages.json` gepflegt. Wartungsverträge werden in `data/maintenance-packages.json` gepflegt. Preise sind normale Textfelder und können direkt angepasst werden.

## Kontaktformular Konfigurieren

Kopiere `backend/config.example.php` nach `backend/config.php` und passe mindestens diese Werte an:

```php
'recipient_email' => 'deine-adresse@example.com',
'sender_email' => 'no-reply@deine-domain.de',
```

Keine echten Zugangsdaten oder API-Keys im Code speichern. Das Formular nutzt die PHP-Funktion `mail()`, daher muss Mailversand beim Hosting aktiviert sein.

## Lokal Testen

Die HTML-Seiten können direkt im Browser geöffnet werden. Für saubere URLs, JSON-Laden über PHP und das Kontaktformular ist ein lokaler Server mit PHP sinnvoll:

```bash
php -S localhost:8000
```

Dann `http://localhost:8000/` öffnen. Ohne echte Mail-Konfiguration kann das Formular nicht produktiv senden. Die `.htaccess`-Regeln greifen vollständig erst auf Apache-Webhosting mit aktivem `mod_rewrite`.

## Saubere URLs Und Geschützte Dateien

Auf Apache-Webhosting sorgt `.htaccess` dafür, dass Besucher URLs wie `/pricing`, `/maintenance` und `/contact` sehen statt `pricing.html`. Direkte `.html`-Aufrufe werden auf die saubere URL weitergeleitet.

Die Rohdaten in `data/`, `README.md`, `.htaccess` und nicht freigegebene Backend-Dateien sind per URL gesperrt. Das Frontend lädt öffentliche Paket-, FAQ- und Sprachdaten über `backend/public-data.php`; das Kontaktformular nutzt `backend/contact.php`.

## Rechtliche Platzhalter

Vor Veröffentlichung müssen `impressum.html`, `datenschutz.html` und `barrierefreiheit.html` final geprüft und mit echten Angaben befüllt werden: Firmenname, Rechtsform, Adresse, Vertretungsberechtigte, E-Mail, Telefon, Umsatzsteuer-ID, Datenschutzinformationen und Barrierefreiheitskontakt.

## Upload Auf Webhosting

Alle Dateien per FTP/SFTP oder Hosting-Dateimanager in das Webroot hochladen. Danach `backend/config.php` auf dem Server anlegen, Domain in `sitemap.xml`, `robots.txt`, Canonical-URLs und Open-Graph-URLs von `https://example.com/` auf die echte Domain ändern.

Beim Hosting muss Apache `.htaccess` und `mod_rewrite` erlauben, damit die sauberen URLs und Sperrregeln greifen.

## Hinweise

- Keine Datenbank erforderlich
- Keine externen Frameworks
- Light/Dark Mode und Sprache werden in `localStorage` gespeichert
- Kontaktformular enthält Honeypot, Backend-Validierung und einfaches Rate-Limit über temporäre Dateien
