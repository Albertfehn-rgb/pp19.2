# PicturePlush – Security Baseline (V19)

Diese Version ist weiterhin ein statisches Frontend und noch **kein produktionsreifer Shop**.

## Bereits umgesetzt
- Keine externen JavaScript/CDN-Abhängigkeiten.
- Content Security Policy (CSP) als Meta-Policy; JavaScript darf nur aus dem eigenen Ursprung geladen werden.
- `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, keine Frames.
- Referrer Policy `strict-origin-when-cross-origin`.
- Konfigurator verarbeitet Uploads aktuell lokal im Browser; kein Upload an einen Server.
- Upload-Validierung: PNG/JPEG/WebP, max. 20 MB, max. 8000 px Kantenlänge / 40 MP.
- Login, Registrierung, Passwort-Reset und Widerruf sind weiterhin deaktivierte Prototypen und zusätzlich `noindex`.
- Inline-JavaScript aus Konfigurator, Shop und Gallery Manager wurde in eigene JS-Dateien verschoben.
- `/.well-known/security.txt` vorhanden.

## Vor echtem Verkauf zwingend serverseitig ergänzen
- HTTPS-only Hosting mit HSTS.
- Security Header als echte HTTP-Header: CSP, `X-Content-Type-Options: nosniff`, `Permissions-Policy`, `Referrer-Policy`, `frame-ancestors` via CSP.
- Sicheres Backend; keine Secrets/API-Keys im Frontend.
- Serverseitige Eingabevalidierung und Autorisierung für jede Anfrage.
- Private Upload-Speicherung mit zufälligen IDs/signed URLs; Malware-/Dateiprüfung.
- Auth: Argon2id (oder vergleichbar), serverseitige Sessions, Secure/HttpOnly/SameSite Cookies, CSRF-Schutz, Rate Limits, E-Mail-Verifizierung, sichere Reset-Tokens, optional MFA für Admins.
- Zahlungsabwicklung über etablierten Payment Provider; niemals Kartendaten selbst speichern.
- Datenbank mit least-privilege Rollen, Backups und Wiederherstellungstest.
- Audit-/Security-Logs ohne Passwörter, Tokens oder komplette Zahlungsdaten.
- Abhängigkeiten regelmäßig aktualisieren und automatisiert auf Schwachstellen prüfen.

## Wichtig zu GitHub Pages
GitHub Pages ist gut für dieses statische Frontend. Für private Kundendaten, Uploads, Login, Bestellungen und Zahlungen braucht PicturePlush ein separates Backend bzw. eine dafür geeignete Plattform. Einige wichtige Sicherheitsheader lassen sich auf reinem GitHub Pages nicht so flexibel setzen wie auf eigenem/managed Hosting.
