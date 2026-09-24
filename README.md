# PicturePlush GitHub Desktop V18

V18 verbessert die 3D-Vorschau: standardmäßig dickerer Plüschkörper, weicher S-Kurven-Aufstieg von der Außenkontur zur Mitte und feinere Tiefen-Layer für eine rundere Seitenansicht.

# PicturePlush – GitHub Desktop Version V13

Diese Version ist speziell für **GitHub Desktop + GitHub Pages** vorbereitet.

## Schnellstart mit GitHub Desktop

1. ZIP entpacken.
2. In GitHub Desktop: **File → Add Local Repository…**.
3. Den entpackten Ordner **PicturePlush-GitHub-Desktop-v13** auswählen.
4. Falls GitHub Desktop meldet, dass noch kein Repository existiert: **create a repository** wählen.
5. Repository-Name z. B. `pictureplush` verwenden. Der lokale Pfad muss genau dieser Ordner bleiben.
6. Unten links als Summary z. B. `Initial PicturePlush upload` eintragen.
7. **Commit to main** anklicken.
8. Oben **Publish repository** anklicken.
9. Danach auf github.com: **Repository → Settings → Pages**.
10. **Deploy from a branch → main → /(root) → Save**.

`index.html` liegt bereits direkt im Repository-Root. Es muss nichts verschoben werden.

## Spätere Änderungen

Dateien lokal bearbeiten → GitHub Desktop öffnen → Änderungen prüfen → Commit → **Push origin**. GitHub Pages übernimmt anschließend die neue Version.

## Struktur

- `index.html` – Startseite
- `konfigurator.html` – PicturePlush-Konfigurator
- `shop.html` – Shop / Originals
- `assets/css/` – Stylesheets
- `assets/js/` – JavaScript
- `assets/img/` – optimierte Bilder in sinnvollen Unterordnern
- `assets/embedded/` – ausgelagerte Konfigurator-Grafiken
- Rechtstextseiten liegen direkt im Root und sind damit einfach verlinkbar.

## GitHub-Optimierungen

- keine Datei liegt auch nur annähernd an GitHubs 100-MB-Dateigrenze
- Bilder sind weitgehend als WebP optimiert
- keine unnötige Backup-Datei im Repository
- `.nojekyll` verhindert unerwünschte Jekyll-Verarbeitung
- `.gitignore` blendet typische lokale Dateien aus
- `.gitattributes` sorgt für einheitliche Textdatei-Zeilenenden
- alle lokalen HTML/CSS/JS/Bild-Verweise wurden geprüft

## Wichtig vor echtem Verkauf

Diese Fassung ist weiterhin eine **Legal-/Technik-Arbeitsversion**. Login, Kundenkonto, Passwort-Reset, Checkout, Zahlung und elektronische Widerrufsfunktion benötigen ein echtes Backend. Die Rechtstexte müssen nach Festlegung der real verwendeten Dienste (Hosting, Zahlungsanbieter, E-Mail, Tracking usw.) final angepasst und vor Livegang nochmals geprüft werden.


## Galerie verwalten
Öffne lokal `gallery-manager.html`. Eine genaue Anleitung steht in `GALLERY_HOWTO.md`.


## V18 – Randabstand
- Randabstand wieder als stufenloser Live-Regler verfügbar.
- Benutzer-Skala 0–15; intern entspricht das 5–20 % der Endgröße.
- 0 = 5 %, 5 = 10 %, 15 = 20 %.
- Vorschau, 3D-Form und Produktionsdaten aktualisieren sich beim Ziehen sofort.


## V19 – Security Baseline
- CSP + Referrer Policy ergänzt
- Inline-JavaScript weitgehend externalisiert
- sichere clientseitige Upload-Grenzen ergänzt
- Login/Reset/Widerruf bleiben deaktiviert, bis ein echtes Backend existiert
- `SECURITY.md` und `/.well-known/security.txt` ergänzt

**Noch nicht live verkaufen:** Checkout, Authentifizierung, Zahlungen und serverseitige Uploads fehlen weiterhin.
