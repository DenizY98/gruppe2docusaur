---
sidebar_position: 2
---

# Shellys
<img src="/img/shelly25.png" alt="Shelly Bild" width="300"/>

Folgende Schritte ermöglichen Shellys (2.5PM und 1PM Plus) an das Hausautomationsprojekt anzubinden und zu verwenden


## Shelly 2.5PM
Zu Beginn des Setups...

1. Einschalten der Shelly, indem das damit verbundene Stromkabel in die Steckdose gesteckt wird.

2. Öffnen sie die **Installationsbox** durch Lösen des Deckels und halten sie den "Knopf" auf der Rückseite der Shelly gedrückt. Damit wird die Shelly resetet. Der Vorgang ist abgeschlosse sobald die Schaltungen der Shelly hörbar sind (ca. 10 Sekunden)

3. Die Shelly ist nun als neues Netzwerk in der Netzwerkübersicht des Smartphones sichtbar. Verbinden sie sich mit dem Netzwerk.

<img src="/img/1.png" alt="verbindung Shelly Smartphone" width=""/>


4. Rufen sie im Browser ihres Smartphone die IP-Adresse `192.168.33.1` auf. Sie befinden sich nun in der **Shelly App**.

5. Unter dem Reiter **Netzwerkeinstellungen**/**Internet & Security** aktivieren sie den **Wifi Mode Client** und geben sie die Zugangsdaten für ihr jeweiliges Heimnetzwerk an. Die Shelly verbindet sich daraufhin automatisch mit dem Heimnetzwerk (die IP-Adresse wird in blauer Schrift angezeigt).

<img src="/img/2.png" alt="Shelly App Screenshots" width=""/>


6. Aktualisieren sie die Firmware der Shelly, falls ein Update vorhanden ist, indem sie die Shelly in ihrem Heimnetzwerk aufrufen. Das geschieht über den Menüpunkt *Einstellungen/Integrationen/Shelly/Besuchen* 

<img src="/img/3.1.png" alt="Shelly App Screenshot" width="800"/>
<img src="/img/3.2.png" alt="Shelly App Screenshot" width="800"/>
<img src="/img/3.3.png" alt="Shelly App Screenshot" width="800"/>


7. Danach rufen sie die **[Home Assistant GUI](http://homeassistant.local:8123)** auf, um die Shelly als neues Gerät hinzuzufügen. Dies geschieht über den Menüpunkt *Einstellungen/Geräte & Dienste/Geräte/Gerät hinzufügen*. Suchen sie die Shelly über ihre jeweilige IP-Adresse und fügen sie die Shelly einem Raum hinzu.

<img src="/img/4.1.png" alt="Home Assistant" width="800"/>
<img src="/img/4.2.png" alt="Home Assistant" width="800"/>
<img src="/img/4.3.png" alt="Home Assistant" width="800"/>
<img src="/img/4.4.png" alt="Home Assistant" width="800"/>
<img src="/img/4.5.png" alt="Home Assistant" width="800"/>


8. Ihre Shelly ist nun in Home Assistant integriert und kann für ihr Automatisierungsprojekt verwendet werden!



## Shelly 1PM Plus
Zu Beginn des Setups...

1. Zu Beginn muss die Shelly gemäß des vorliegenden **Schaltplanes** fachgemäß verkabelt werden.

<img src="/img/5.png" alt="Schaltplan" width=""/>

2. Führen sie die **Schritte 1-8** analog zur Shelly 2.5PM aus, um die Shelly 1PM Plus in Home Assistant zu integrieren.

3. Schließen sie die Shelly an das Stromnetz an. Dabei möglichst in Reichweite zu ihrem Handy, damit das Bluetooth problemlos funktioniert.

4. Installieren die **[Shelly App](https://www.shelly.com/de/app/shelly-smart-control)** auf ihrem Smartphone und errichten sie einen Benutzeraccount.

5. Fügen sie die Shelly per Bluetooth über den Menüpunkt *Alle Geräte/Gerät auswählen* hinzu. Dabei müssen sie ihre Zugangsdaten für das Heimnetzwerk angeben und "Add via Bluetooth.png" auswählen. 

<img src="/img/6.png" alt="Schaltplan" width=""/>


6. Ihre Shelly ist nun erfolgreich auch in ihre Shelly App integriert und kann für ihr Automatisierungsprojekt verwendet werden!
