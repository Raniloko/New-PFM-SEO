# Deployment-Anleitung für All-Inkl Server

## WICHTIG: Diese Website muss erst gebaut werden!

Sie können NICHT einfach die Projektdateien auf Ihren Server hochladen. Next.js muss erst in statische HTML-Dateien umgewandelt werden.

## Schritt-für-Schritt-Anleitung:

### 1. Projekt herunterladen
- Klicken Sie in v0 oben rechts auf die drei Punkte
- Wählen Sie "Download ZIP"
- Entpacken Sie die ZIP-Datei auf Ihrem Computer

### 2. Node.js installieren (falls noch nicht vorhanden)
- Gehen Sie zu: https://nodejs.org/
- Laden Sie die LTS-Version herunter und installieren Sie sie

### 3. Projekt bauen
Öffnen Sie ein Terminal/Kommandozeile im entpackten Projektordner und führen Sie folgende Befehle aus:

```bash
npm install
```
(Dieser Befehl installiert alle benötigten Abhängigkeiten - dauert ca. 2-5 Minuten)

```bash
npm run build
```
(Dieser Befehl erstellt die statischen HTML-Dateien im `out` Ordner - dauert ca. 1-2 Minuten)

### 4. Dateien mit FileZilla hochladen

Nach dem erfolgreichen Build finden Sie einen neuen Ordner namens **`out`** in Ihrem Projektverzeichnis.

**WICHTIG:** Laden Sie den **INHALT** des `out` Ordners hoch, nicht den Ordner selbst!

Der `out` Ordner enthält:
- index.html (Ihre Startseite)
- leistungen.html
- kontakt.html
- agb.html
- datenschutz.html
- impressum.html
- ueber-uns.html
- _next/ (Ordner mit CSS, JavaScript und Images)
- Und weitere Dateien

**FileZilla Schritte:**
1. Verbinden Sie sich mit Ihrem All-Inkl Server
2. Navigieren Sie zum Root-Verzeichnis Ihrer Domain (meist `/www` oder `/public_html`)
3. Markieren Sie ALLE Dateien und Ordner aus dem `out` Ordner
4. Ziehen Sie diese in das Root-Verzeichnis auf dem Server
5. Warten Sie bis der Upload abgeschlossen ist

### 5. Website aufrufen
Öffnen Sie Ihren Browser und geben Sie Ihre Domain ein. Die `index.html` wird automatisch als Startseite geladen.

## Bei Änderungen an der Website:

Wenn Sie die Website ändern möchten:
1. Änderungen in v0 vornehmen
2. Projekt erneut herunterladen
3. Erneut `npm run build` ausführen
4. Neuen `out` Ordner-Inhalt hochladen (überschreibt die alten Dateien)

## Probleme?

Falls die Website nicht lädt:
- Überprüfen Sie, ob die `index.html` im Root-Verzeichnis liegt (nicht in einem Unterordner)
- Stellen Sie sicher, dass der `_next` Ordner auch hochgeladen wurde
- Prüfen Sie die Dateiberechtigungen (sollten lesbar sein: 644 für Dateien, 755 für Ordner)
