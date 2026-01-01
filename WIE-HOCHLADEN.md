# 🚀 So laden Sie Ihre Website auf Ihren All-Inkl Server hoch

## ✅ Ihre Website ist BEREITS für statisches HTML vorbereitet!

Die Website ist bereits richtig konfiguriert und wird beim Build-Prozess automatisch in reine HTML/CSS/JavaScript-Dateien umgewandelt.

## 📋 Schritt-für-Schritt Anleitung

### Option 1: Build auf Ihrem Computer (empfohlen)

**Voraussetzung:** Node.js installiert (Download: https://nodejs.org/)

1. **Projekt herunterladen**
   - Klicken Sie oben rechts auf die drei Punkte
   - Wählen Sie "Download ZIP"
   - Entpacken Sie die ZIP-Datei

2. **Terminal/Eingabeaufforderung öffnen**
   - Windows: Drücken Sie `Win + R`, tippen Sie `cmd` und Enter
   - Mac: Drücken Sie `Cmd + Leertaste`, tippen Sie `terminal` und Enter
   
3. **Zum Projekt-Ordner navigieren**
   ```bash
   cd Pfad/zum/entpackten/Ordner
   ```

4. **Pakete installieren** (nur einmal nötig)
   ```bash
   npm install
   ```

5. **Website bauen** (erstellt statische Dateien)
   ```bash
   npm run build
   ```

6. **Fertig!** 
   - Es wurde ein Ordner `out` erstellt
   - Dieser enthält ALLE fertigen HTML/CSS/JS-Dateien
   - Inklusive `index.html` als Startseite

### Option 2: Über Vercel bauen lassen (kostenlos)

Falls Sie Node.js nicht installieren möchten:

1. Gehen Sie zu https://vercel.com
2. Registrieren Sie sich kostenlos
3. Importieren Sie das Projekt
4. Vercel baut es automatisch
5. Laden Sie die fertigen Dateien herunter

## 📤 Mit FileZilla hochladen

1. **FileZilla öffnen und mit Ihrem Server verbinden**
   - Host: Ihre FTP-Adresse von All-Inkl
   - Benutzername: Ihr FTP-Benutzername
   - Passwort: Ihr FTP-Passwort
   - Port: 21

2. **Dateien hochladen**
   - Links: Navigieren Sie zum `out` Ordner
   - Rechts: Navigieren Sie zu Ihrem Web-Verzeichnis (meist `/www` oder `/public_html`)
   - Markieren Sie ALLE Dateien IM `out` Ordner (nicht den Ordner selbst!)
   - Ziehen Sie sie auf die rechte Seite

3. **Fertig!**
   - Ihre Website ist jetzt unter Ihrer Domain erreichbar
   - Die `index.html` wird automatisch als Startseite geladen

## 📁 Was ist im `out` Ordner?

Nach dem Build enthält der `out` Ordner:

```
out/
├── index.html              ← Ihre Startseite
├── leistungen/
│   └── index.html          ← Leistungen-Seite
├── uber-uns/
│   └── index.html          ← Über uns-Seite
├── kontakt/
│   └── index.html          ← Kontakt-Seite
├── _next/                  ← JavaScript & CSS Dateien
│   ├── static/
│   └── ...
└── alle anderen Seiten
```

**WICHTIG:** Laden Sie den INHALT des `out` Ordners hoch, nicht den Ordner selbst!

## ⚠️ Häufige Fehler vermeiden

❌ **FALSCH:** Den ganzen Projekt-Ordner hochladen
✅ **RICHTIG:** Nur den Inhalt vom `out` Ordner hochladen

❌ **FALSCH:** Den `out` Ordner als Ordner hochladen
✅ **RICHTIG:** Die Dateien IM `out` Ordner direkt ins Root-Verzeichnis

## 🔄 Website aktualisieren

Wenn Sie Änderungen vornehmen:

1. Änderungen in v0 machen
2. Projekt neu herunterladen
3. Erneut `npm run build` ausführen
4. Neuen `out` Ordner-Inhalt hochladen (überschreibt alte Dateien)

## 💡 Technische Details

- **Technologie:** Next.js mit statischem Export
- **Ausgabe:** Reine HTML/CSS/JavaScript-Dateien
- **Server-Anforderungen:** Nur statischer Webserver (kein Node.js nötig!)
- **PHP:** Nicht nötig, alles ist statisches HTML

## 🆘 Hilfe benötigt?

- Stellen Sie sicher, dass die `index.html` im Root-Verzeichnis liegt
- Überprüfen Sie die Dateiberechtigungen (sollten 644 für Dateien sein)
- Leeren Sie den Browser-Cache (Strg + F5)
