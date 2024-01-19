---
sidebar_position: 2
---

# Datenbank für die Community
1. **Einrichten der Leaflet-Bibliothek:**
    1. Laden Sie die Leaflet-Bibliothek herunter und binden Sie sie in Ihr Projekt ein.
    2. Erstellen Sie eine neue Karte und setzen Sie den Mittelpunkt und den Zoom-Level entsprechend Ihren Anforderungen.
    3. ODER verwenden Sie das bereits vorbereitete Projekt im [GitHub](https://github.com/DenizY98/gruppe2docusaur.git)

2. **Erstellung einer weiteren MariaDB Datenbank auf dem Raspberry Pi 3**
    1. Öffnen Sie die [HomeAssistant Weboberfläche](http://homeassistant.local/) und klicken Sie auf **Einstellungen** und dann **Add-Ons** und wählen Sie **PhpMyAdmin**.
    2. Starten Sie das Add-On, falls dies noch nicht der Fall ist und klicken Sie auf das Hamburger-Menü und dann auf den SQL Button.  
    3. Erstellen Sie eine neue Datenbank und Tabelle mit folgendem SQL Befehl:
    ```
    CREATE DATABASE community;
    USE community;
    CREATE TABLE users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    apiurl VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    longitude FLOAT NOT NULL,
    latitude FLOAT NOT NULL,
    homename VARCHAR(255) NOT NULL,
    sensors TEXT DEFAULT NULL
    );
    ```
2. **Hinzufügen von Markern für jedes Balkonkraftwerk:**
    1. Jeder Nutzer, der ein Balkonkraftwerk hat, kann einen Marker auf der Karte an der Position seines Kraftwerks hinzufügen.
    2. Die Marker können mit Popup-Fenstern versehen werden, die Informationen über das jeweilige Balkonkraftwerk anzeigen, wenn man auf sie klickt.
    3. Implementiert wurde das Hinzufügen von Markern über die [Sensorerfassung](/form).

3. **Visualisierung der Stromertragsdaten:**
    1. Die Stromertragsdaten, die mit über die HomeAssistant API von den einzelnen Sensoren gemessen werden, werden automatisch in unserer Community-Landkarte eingebettet und dargestellt.
    2. Zur Konfiguration, Erweiterung oder Löschung von bereits bestehenden Sensoren, verwenden Sie bitte die [Konfigurations-Oberfläche](/config) 

### Bitte beachten Sie, dass das Frontend, bzw. die Sensorerfassung und Konfiguration nur funktionieren, wenn der bereitgestellt [API-Connector](/docs/community/api) läuft.