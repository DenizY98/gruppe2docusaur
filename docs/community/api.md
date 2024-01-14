---
sidebar_position: 2
---

# 3.6 API-Database Connector

Eine API (Application Programming Interface) ist notwendig, um eine sichere und effiziente Kommunikation zwischen einer Frontend-Seite und einer Datenbank zu ermöglichen. Sie dient als Vermittler, der Anfragen entgegennimmt, verarbeitet und die entsprechenden Daten zurücksendet, ohne dass das Frontend direkten Zugriff auf die Datenbank hat. Dies schützt die Datenbank vor unautorisierten Zugriffen und ermöglicht es Entwicklern, spezifische Datenzugriffsregeln und -logik zu implementieren.

Hier sind die Schritte, um die API von `gruppe2api` zu klonen und einzurichten:

1. Öffnen Sie ein Terminal oder eine Eingabeaufforderung. Falls die Seite aus dem öffentlichen Netz und ohne VPN erreichbar sein soll, bietet sich die Installation auf der Google Cloud VM aus [3.5](/docs/wordpress/installation-setup-wordpress) an. 
2. Klonen Sie das Repository mit dem Befehl:
   ```bash
   git clone https://github.com/DenizY98/gruppe2api.git
   ```
3. Wechseln Sie in das Verzeichnis des geklonten Projekts:
   ```bash
   cd gruppe2api
   ```
4. Erstellen Sie eine `.env`-Datei im Hauptverzeichnis des Projekts.
5. Fügen Sie die folgenden Umgebungsvariablen in die `.env`-Datei ein und setzen Sie die entsprechenden Werte:
   ```plaintext
   DB_HOST=Ihr_Datenbank_Host
   DB_PORT=Ihr_Datenbank_Port
   DB_USER=Ihr_Datenbank_Benutzername
   DB_PASSWORD=Ihr_Datenbank_Passwort
   DB_DATABASE=Ihr_Datenbank_Name
   ```
6. Speichern Sie die `.env`-Datei.
7. Führen Sie `npm install` aus, um die notwendigen Abhängigkeiten zu installieren.
8. Starten Sie die API mit `npm start`.

Nachdem Sie diese Schritte ausgeführt haben, sollte die API laufen und bereit sein, Anfragen von Ihrer Frontend-Seite zu empfangen und zu verarbeiten. Vergewissern Sie sich, dass die in der `.env`-Datei angegebenen Datenbankinformationen korrekt sind, um eine erfolgreiche Verbindung zu gewährleisten.