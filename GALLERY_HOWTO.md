# PicturePlush Galerie einfach erweitern

## Bequemste Variante
1. `gallery-manager.html` lokal im Browser öffnen.
2. Mehrere Bilder auswählen und die Beschreibung/den Alt-Text anpassen.
3. `gallery-data.js` herunterladen.
4. Die ausgewählten Bilder nach `assets/img/gallery/custom/` kopieren.
5. Die vorhandene Datei `assets/js/gallery-data.js` durch die neue ersetzen.
6. GitHub Desktop öffnen → Commit → Push origin.

## Wichtig
GitHub Pages ist statisch. Ein Upload-Feld auf der öffentlichen Website kann daher nicht dauerhaft Dateien in dein GitHub-Repository schreiben. Dafür wäre später ein geschütztes Admin-Backend nötig. Der Galerie-Manager ist deshalb absichtlich ein lokales Hilfswerkzeug.

## Gute Bildregeln
- WebP bevorzugen.
- Möglichst unter 500 KB pro Bild.
- Dateinamen: klein, ohne Umlaute/Leerzeichen, z. B. `alien-gruen-01.webp`.
- Sinnvollen Alt-Text eintragen.
