---
sidebar_position: 5
---

# 3.4.5 Optimierter Wasserboiler

## Szenario

Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (ein Warmwasserboiler) automatisiert an- und ausgeschalten werden. Dazu sollen zwei Shelly 1PM Plus verwendet werden. Der Nutzer soll bei der Verwendung zwischen 4 verschiedenen Betriebsmodi wählen können.


## Hardware
Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:
- Zwei Shelly 1PM Plus (eine für das Balkonkraftwerk und eine für die Infrarotheizung)
- Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab
- Eine Glühbirne als Ersatz für das Balkonkraftwerk
- Eine zweite Glühbirne als Ersatz für den Warmwasserboiler


****
<img src="/img/3.4.5 (Aufbau).png" alt="3.4.5(Aufbau)" width=""/> 
****


## Aufbau
Das Balkonkraftwerk ist auf dem Balkon über eine der Shelly 1PM Plus an das Hausnetz angeschlossen. Der Warmwasserboiler ist über die zweite Shelly 1PM Plus in einer anderen Steckdose ebenfalls an das Hausnetz angeschlossen. Die erste Shelly 1PM Plus misst den vom Balkonkraftwerk erzeugten Strom und ermöglicht die Ein- und Abschaltung des Warmwasserboilers, in dem sie ein entsprechendes Signal an die zweite Shelly 1PM Plus sendet. Über das Homeautomationssystem "Home Assistant" können die beiden Shelly 1PM Plus konfiguriert und gesteuert werden. Für das vorliegende Szenario wurde dementsprechend eine bzw. mehrere Automationen angelegt. 


****
<img src="/img/3.4.5 (Funktion).png" alt="3.4.5(Funktion)" width=""/> 
****



## Betriebsmodus 1

**Manuelle Steuerung über Shelly:**
Der Warmwasserboiler soll direkt durch den Benutzer aktiviert und deaktiviert werden können.

- Installieren Sie die Shelly/HomeAssistant-App auf Ihrem Smartphone
- Verbinden Sie den Shelly 1PM Plus mit Ihrem Warmwasserboiler gemäß der Anleitung des Herstellers
- In der Shelly/HomeAssistant-App können Sie den Boiler manuell ein- und ausschalten


## Betriebsmodus 2

**Generelle Aktivierung nach Zeitplan:**
Der Warmwasserboiler soll für einen vorgegebenen Zeitraum (zb. `1.02.2024 bis 01.03.2024`) aktiviert und anschließend wieder deaktiviert werden können.

- In der HomeAssistant Weboberfläche können Sie einen Zeitplan erstellen.
- Geben Sie den Start- und Endzeitpunkt für die Aktivierung des Boilers ein
- z.B. vom `01.02.2024 – 01.03.2024`
- Für den definierten Zeitraum wird der Boiler nun automatisch aktiviert und nach Ablauf dieses Zeitraums wieder deaktiviert


## Betriebsmodus 3

**Steuerung anhand der Strompreise:**
Der Benutzer soll auswählen können, zu welchen Stromtarifen der Warmwasserboiler per Shelly 1PM Plus eingeschaltet werden soll. Folgende Konfigurationswerte sollen dabei zu Beginn implementiert werden.

**Montag - Freitag (Werktage)**
|  Start  |  -  |   Ende  |         Tarif         |
|:-------:|:---:|:-------:|:---------------------:|
| `00Uhr` | bis | `08Uhr` | `günstiger` Preis/kWh |
| `08Uhr` | bis | `10Uhr` | `mittlerer` Preis/kWh |
| `10Uhr` | bis | `14Uhr` | `teurer` Preis/kWh    |
| `14Uhr` | bis | `18Uhr` | `mittlerer` Preis/kWh |
| `18Uhr` | bis | `22Uhr` | `teurer` Preis/kWh    |
| `22Uhr` | bis | `24Uhr` | `mittlerer` Preis/kWh |


**Samstag - Sonntag (Wochende)**
|  Start  |  -  |   Ende  |         Tarif         |
|:-------:|:---:|:-------:|:---------------------:|
| `00Uhr` | bis | `24Uhr` | `günstiger` Preis/kWh |


- In der Home Assistant GUI werden zunächst drei verschiedene Tarifzeiten für die Strompreise definiert (`günstigster`, `mittlerer` und `teurer` Preis)
- Der Benutzer kann auswählen, wann der Boiler eingeschalten werden soll
- Falls "Heizen bei mittlerem Preis" aktiviert ist, wird nur in Zeiten mit dem günstigen oder mittleren Strompreisen der Warmwasserboiler aktiviert
- Falls "Heizen bei mittlerem Preis" deaktiviert ist, wird nur in Zeiten mit dem günstigen Strompreisen der Warmwasserboiler aktiviert


## Betriebsmodus 4

**Steuerung anhand der Strompreise oder mit Solarstrom:**
Der Benutzer soll auswählen können, zu welchen Stromtarifen der Warmwasserboiler per Shelly 1PM Plus eingeschaltet werden soll. Zudem soll der Warmwasserboiler auch immer dann eingeschalten werdem, wenn das Balkonkraftwerk mehr als ´400 Watt` produziert.

- Die Konfiguraion erfolgt prinzipiell wie in Betriebsmodus 3
- In der Shelly App wird vom Benutzer eingestellt, dass die Shelly 1PM Plus am Balkonkraftwerk alle `5min.` den produzierten Strom misst
- Unabhängig von der Tageszeit wird nun bei Überschreiten des Strommschwellwertes von `400 Watt` der Warmwasserboiler eingeschalten



****
<img src="/img/3.4.5 (Betrieb).png" alt="3.4.5(Betrieb)" width=""/> 
****


## Betrieb

**Benutzersteuerung:**
Die erstellten Automatisierungen können durch den Benutzer sowohl per Shelly App als auch über die Home Assistant GUI aktiviert oder deaktiviert werden.

**Anpassungen:**
Die hervorgehobenen initialen Werte wie der Strom-Schwellwert, die Tarifhöhen und die Zeitintervalle können durch den Benutzer beliebig definiert und entsprechend angepasst werden.