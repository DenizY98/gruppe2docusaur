---
sidebar_position: 3
---

# 3.4.3 Optimiertes Heizen

## Szenario

Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (eine Infrarotheizung) automatisiert an- und ausgeschalten werden. Zudem soll ein Überhitzungsschutz, eine Steuerung durch den Benutzer und die Möglichkeit, die Automatisierung bedarfsgerecht anzupassen, ermöglicht werden. Um einen realistischeren Ansatz zu gewährleisten, soll die Aktivität der Heizung an aktuelle Temperatur- und Luftfeuchtigkeitswerte gekoppelt werden.


## Hardware
Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:
- Eine graue Verteilerdose mit integriertem Shelly 2.5PM 
- Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab
- Eine Glühbirne als Ersatz für das Balkonkraftwerk
- Eine zweite Glühbirne als Ersatz für die Infrarotheizung


****
<img src="/img/3.4.3 (Aufbau).png" alt="3.4.3 (Aufbau)" width=""/> 
****


## Aufbau
Das Balkonkraftwerk ist über den Kanal 1 an eine Shelly 2.5PM angeschlossen. Die Infrarotheizung ist über den Kanal 2 ebenfalls an die Shelly 2.5PM angeschlossen. Durch die Steckdose ist die Shelly 2.5PM an das Heimnetz angeschlossen. Diese misst den vom Balkonkraftwerk erzeugten Strom und ermöglicht die Ein- und Abschaltung der Infrarotheizung. Über das Homeautomationssystem "Home Assistant" kann die Shelly 2.5PM konfiguriert und gesteuert werden. Die aktuellen Luftfeuchtigkeits- und Temperaturdaten werden von einem Sensor im Hobbyraum erfasst und auf [dieser Webseite](https://measurements.mobile-alerts.eu/Home/MeasurementDetails?deviceid=035DD29D94C5&vendorid=244DD836-16DE-465E-B265-B3F1596A26D4&appbundle=de.synertronixx.remotemonitor) angegeben. Sie werden in Homeassistent integriert und können so für die  Automationen abgerufen werden. Für das vorliegende Szenario wurden dementsprechend eine bzw. mehrere Automationen angelegt. 


****
<img src="/img/3.4.3 (Funktion).png" alt="3.4.3 (Funktion)" width=""/> 
****


## Funktionsweise

**Sensordaten:**
Die berücksichtigten Sensordaten werden alle 7 Minuten auf der Website aktualisiert.

**Automatisiertes Einschalten:**
Wenn im Hobbyraum die Temperatur unter `19°` sinkt oder die Luftfeuchtigkeit über `75%` steigt, wird die Infrarotheizung über Shelly Kanal 2 automatisch angeschalten. 

**Automatisiertes Abschalten:**
Wenn im Hobbyraum die Temperatur über `21°` steigt oder die Luftfeuchtigkeit unter `70%` sinkt, wird die Infrarotheizung über Shelly Kanal 2 automatisch abgeschalten. 

**Überhitzungsschutz:**
Damit die Heizung nicht im Dauerbetrieb verweilt und eventuell überhitzt, wird die Betriebsdauer der Heizung überwacht. Wenn diese länger als `120 Minuten` beträgt, wird die Heizung automatisiert für `15 Minuten` abgeschalten um abzukühlen.

**Automatisierte Reaktivierung**
Nach Ablauf der Kühlzeit, wird wieder in den Regelbetrieb übergegangen und die Heizung folglich bei Erfüllung der definierten Bedingungen wieder eingeschalten.


****
<img src="/img/3.4.3 (Betrieb).png" alt="3.4.3 (Betrieb)" width=""/> 
****


## Betrieb

**Benutzersteuerung:**
Die erstellte Automatisierung des "Optimiertes Heizen per Infrarotheizung" kann durch den Benutzer sowohl per Shelly App als auch über die Home Assistant GUI aktiviert oder deaktiviert werden.

**Anpassungen:**
Die hervorgehobenen initialen Werte wie die Unter- und Obergrenzen der Luftfeuchtigkeit und Temperatur sowie die Zeitintervalle können durch den Benutzer in der Home Assistant GUI beliebig definiert und entsprechend angepasst werden. 