#!/bin/bash
# Skript zum Suchen nach Tippfehlern in der Domain

echo "=== Suche nach 'managment' (ohne 'e') in allen Projektdateien ==="
echo ""

# Suche in allen Dateien, außer node_modules, .next, .git
echo "Durchsuche Projektdateien..."
grep -r --exclude-dir={node_modules,.next,.git,out} -i "managment" . 2>/dev/null

if [ $? -eq 0 ]; then
    echo ""
    echo "WARNUNG: Tippfehler gefunden!"
else
    echo "Keine Tippfehler gefunden. Alles korrekt!"
fi

echo ""
echo "=== Suche nach 'profacilitymanagment' (Domain ohne 'e') ==="
grep -r --exclude-dir={node_modules,.next,.git,out} -i "profacilitymanagment" . 2>/dev/null

if [ $? -eq 0 ]; then
    echo ""
    echo "WARNUNG: Falsche Domain gefunden!"
else
    echo "Keine falsche Domain gefunden. Alles korrekt!"
fi

echo ""
echo "=== Prüfung abgeschlossen ==="
