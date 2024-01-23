---
sidebar_position: 4
---

# 3.4.4 Optimiertes Heizen (realistisch)

## Szenario

Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (eine Infrarotheizung) automatisiert an- und ausgeschalten werden. Zudem soll ein Überhitzungsschutz, eine Steuerung durch den Benutzer und die Möglichkeit, die Automatisierung bedarfsgerecht anzupassen, ermöglicht werden. Dazu sollen statt einer Shelly 2.5PM, zwei Shelly 1PM Plus verwendet werden. Um einen realistischeren Ansatz zu gewährleisten, soll die Aktivität der Heizung an aktuelle Temperatur- und Luftfeuchtigkeitswerte gekoppelt werden.


## Hardware
Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:
- Zwei Shelly 1PM Plus (eine für das Balkonkraftwerk und eine für die Infrarotheizung)
- Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab
- Eine Glühbirne als Ersatz für das Balkonkraftwerk
- Eine zweite Glühbirne als Ersatz für die Infrarotheizung


****
<img src="/img/3.4.4 (Aufbau).png" alt="3.4.4 (Aufbau)" width=""/> 
****


## Aufbau
Das Balkonkraftwerk ist auf dem Balkon über eine der Shelly 1PM Plus an das Hausnetz angeschlossen. Die Infrarotheizung ist über die zweite Shelly 1PM Plus in einer anderen Steckdose ebenfalls an das Hausnetz angeschlossen. Die erste Shelly 1PM Plus misst den vom Balkonkraftwerk erzeugten Strom und ermöglicht die Ein- und Abschaltung der Infrarotheizung, in dem sie ein entsprechendes Signal an die zweite Shelly 1PM Plus sendet. Über das Homeautomationssystem "Home Assistant" können die beiden Shelly 1PM Plus konfiguriert und gesteuert werden. Die aktuellen Luftfeuchtigkeits- und Temperaturdaten werden von einem Sensor im Hobbyraum erfasst und auf dieser Webseite [dieser Webseite](https://measurements.mobile-alerts.eu/Home/MeasurementDetails?deviceid=035DD29D94C5&vendorid=244DD836-16DE-465E-B265-B3F1596A26D4&appbundle=de.synertronixx.remotemonitor) angegeben. Sie werden in Homeassistent integriert und können so für die  Automationen abgerufen werden. Für das vorliegende Szenario wurde dementsprechend eine bzw. mehrere Automationen angelegt. 


****
<img src="/img/3.4.4 (Funktion).png" alt="3.4.4 (Funktion)" width=""/> 
****


## Funktionsweise

**Sensordaten:**
Die berücksichtigten Sensordaten werden alle 7 Minuten auf der Website aktualisiert.

**Automatisiertes Einschalten:**
Wenn im Hobbyraum die Temperatur unter `19°` sinkt oder die Luftfeuchtigkeit über `75%` steigt, sendet die erste Shelly ein Signal an die zweite Shelly zur Aktivierung der Infrarotheizung.

**Automatisiertes Abschalten:**
Wenn im Hobbyraum die Temperatur über `21°` steigt oder die Luftfeuchtigkeit unter `70%` sinkt, sendet die erste Shelly ein Signal an die zweite Shelly zur Deaktivierung der Infrarotheizung.

**Überhitzungsschutz:**
Damit die Heizung nicht im Dauerbetrieb verweilt und eventuell überhitzt, wird die Betriebsdauer der Heizung überwacht. Wenn diese länger als `120 Minuten` beträgt, wird die Heizung automatisiert für `15 Minuten` abgeschalten um abzukühlen.

**Automatisierte Reaktivierung**
Nach Ablauf der Kühlzeit, wird wieder in den Regelbetrieb übergegangen und die Heizung folglich bei Erfüllung der definierten Bedingungen wieder eingeschalten.


## Shelly2Shelly-Kommunikation

- **Direkte Kommunikation über die Shelly Cloud:**
Sie können das [Shelly-Webfrontend](https://control.shelly.cloud/#) verwenden, um die Kommunikation zwischen den beiden Shelly-Geräten zu ermöglichen. Im Webfrontend können Sie die gewünschten Aktionen und Schalter auch manuell bedienen.

- **Kommunikation über die Smart-Home Plattform:**
Wenn Sie eine [Smart-Home-Plattform](http://homeassistant.local) verwenden, können Sie die Shelly-Geräte in Ihre Plattform integrieren und die gewünschten Aktionen dort definieren. Die Plattform ermöglicht eine zentralisierte Steuerung und Überwachung aller Ihrer Smart-Home-Geräte.


****
<img src="/img/3.4.4 (Betrieb).png" alt="3.4.4 (Betrieb)" width=""/> 
****


## Betrieb

**Benutzersteuerung:**
Die erstellte Automatisierung des "Optimiertes Heizen per Infrarotheizung (realistisch)" kann durch den Benutzer sowohl per Shelly App als auch über die Home Assistant GUI aktiviert oder deaktiviert werden.

**Anpassungen:**
Die hervorgehobenen initialen Werte wie die Unter- und Obergrenzen der Luftfeuchtigkeit und Temperatur sowie die Zeitintervalle können durch den Benutzer in der Home Assistant GUI beliebig definiert und entsprechend angepasst werden. 


***
<img src="/img/3.4.4 (HO).png" alt="3.4.4(HO)" width=""/> 
***