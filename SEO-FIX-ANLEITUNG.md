# SEO-Korrektur: Falsche kanonische URL beheben

## Problem
Google hat die falsch geschriebene Domain `profacilitymanagment.de` (ohne 'e') als kanonische Version ausgewählt.
Die korrekte Domain lautet: `profacilitymanagement.de` (mit 'e').

## Was wurde bereits implementiert

### 1. Canonical Tag in layout.tsx
```tsx
alternates: {
  canonical: "https://www.profacilitymanagement.de",
}
```
Zusätzlich im `<head>`:
```html
<link rel="canonical" href="https://www.profacilitymanagement.de" />
```

### 2. 301-Redirect in .htaccess
Die `.htaccess` leitet jetzt automatisch alle Anfragen von der falsch geschriebenen Domain weiter:
- `profacilitymanagment.de` → `www.profacilitymanagement.de`
- `www.profacilitymanagment.de` → `www.profacilitymanagement.de`

### 3. Sitemap.xml
Alle URLs in der Sitemap verwenden die korrekte Schreibweise mit 'e'.

### 4. Structured Data (Schema.org)
Das JSON-LD im Code verwendet überall die korrekte URL.

## Terminal-Befehle zur Fehlersuche

### Suche nach Tippfehlern im Projekt:
```bash
# Option 1: Mit grep (Linux/Mac)
grep -r --exclude-dir={node_modules,.next,.git} -i "managment" .

# Option 2: Mit find und grep
find . -type f -not -path "*/node_modules/*" -not -path "*/.next/*" -not -path "*/.git/*" -exec grep -l "managment" {} \;

# Option 3: Nur in spezifischen Dateitypen suchen
grep -r --include="*.tsx" --include="*.ts" --include="*.json" --include="*.xml" -i "managment" .
```

### Das Such-Skript ausführen:
```bash
# Skript ausführbar machen
chmod +x scripts/search-typos.sh

# Skript ausführen
./scripts/search-typos.sh
```

## Schritte in der Google Search Console

### 1. URL-Prüfung
1. Gehen Sie zu: https://search.google.com/search-console
2. Wählen Sie die Property `https://www.profacilitymanagement.de`
3. Klicken Sie auf "URL-Prüfung" (oben)
4. Geben Sie ein: `https://www.profacilitymanagement.de`
5. Klicken Sie auf "Indexierung beantragen"

### 2. Falsche Domain aus Index entfernen
1. Gehen Sie zu: "Entfernungen" im linken Menü
2. Klicken Sie auf "Neue Anfrage"
3. Geben Sie ein: `https://www.profacilitymanagment.de` (ohne 'e')
4. Wählen Sie "Diese URL vorübergehend entfernen"
5. Bestätigen Sie

### 3. Sitemap erneut einreichen
1. Gehen Sie zu: "Sitemaps" im linken Menü
2. Geben Sie ein: `https://www.profacilitymanagement.de/sitemap.xml`
3. Klicken Sie auf "Senden"

### 4. Property bereinigen (falls vorhanden)
Wenn Sie mehrere Properties in der Search Console haben:
- **BEHALTEN:** `https://www.profacilitymanagement.de` (mit www und 'e')
- **ENTFERNEN:** Alle anderen Varianten:
  - `https://profacilitymanagement.de` (ohne www)
  - `https://www.profacilitymanagment.de` (ohne 'e')
  - `https://profacilitymanagment.de` (ohne 'e' und ohne www)
  - Alle http:// Varianten

## Zeitrahmen

- **Redirects:** Funktionieren sofort nach Deployment
- **Google Crawling:** 1-7 Tage
- **Kanonische URL-Änderung:** 2-4 Wochen
- **Vollständige Indexierung:** 4-8 Wochen

## Überprüfung

### Redirect testen:
```bash
# Mit curl testen (zeigt Header)
curl -I https://www.profacilitymanagment.de

# Sie sollten sehen:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.profacilitymanagement.de/
```

### Canonical Tag prüfen:
1. Öffnen Sie: https://www.profacilitymanagement.de
2. Rechtsklick → "Seitenquelltext anzeigen"
3. Suchen Sie nach: `<link rel="canonical"`
4. Sollte sein: `href="https://www.profacilitymanagement.de"`

## Erfolgs-Checkliste

Nach 4 Wochen sollten Sie folgendes in der Search Console sehen:
- [ ] Alle indexierten URLs haben die korrekte Schreibweise (mit 'e')
- [ ] Die kanonische URL ist `www.profacilitymanagement.de`
- [ ] Keine 404-Fehler für die alte Domain
- [ ] Alle Backlinks werden automatisch weitergeleitet
- [ ] Logo erscheint in Google-Suchergebnissen

## Support

Bei Fragen oder Problemen:
- Google Search Console Hilfe: https://support.google.com/webmasters
- .htaccess Redirect-Syntax: https://httpd.apache.org/docs/current/mod/mod_rewrite.html
