---
sidebar_position: 2
---

# 3.4.2 Smarte IR-Heizung (realistisch)

## Szenario

Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (eine Infrarotheizung) automatisiert an- und ausgeschalten werden. Dazu sollen statt einer Shelly 2.5PM, zwei Shelly 1PM Plus verwendet werden. Zudem soll ein Überhitzungsschutz, eine Steuerung durch den Benutzer und die Möglichkeit, die Automatisierung bedarfsgerecht anzupassen, ermöglicht werden.


## Hardware
Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:
- Zwei Shelly 1PM Plus (eine für das Balkonkraftwerk und eine für die Infrarotheizung)
- Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab
- Eine Glühbirne als Ersatz für das Balkonkraftwerk
- Eine zweite Glühbirne als Ersatz für die Infrarotheizung


****
<img src="/img/3.4.2 (Aufbau).png" alt="3.4.2 (Aufbau)" width=""/> 
****


## Aufbau
Das Balkonkraftwerk ist auf dem Balkon über eine der Shelly 1PM Plus an das Hausnetz angeschlossen. Die Infrarotheizung ist über die zweite Shelly 1PM Plus in einer anderen Steckdose ebenfalls an das Hausnetz angeschlossen. Die erste Shelly 1PM Plus misst den vom Balkonkraftwerk erzeugten Strom und ermöglicht die Ein- und Abschaltung der Infrarotheizung, in dem sie ein entsprechendes Signal an die zweite Shelly 1PM Plus sendet. Über das Homeautomationssystem "Home Assistant" können die beiden Shelly 1PM Plus konfiguriert und gesteuert werden. Für das vorliegende Szenario wurde dementsprechend eine bzw. mehrere Automationen angelegt. 


****
<img src="/img/3.4.2 (Funktion).png" alt="3.4.2 (Funktion)" width=""/> 
****


## Funktionsweise

**Periodische Überprüfung:**
Alle `5 Minuten` wird von Shelly 1 automatisch überprüft wieviel Strom das Balkonkraftwerk produziert. 

**Automatisiertes Einschalten:**
Wenn der produzierte Strom den Schwellwert von `300  Watt` übersteigt, sendet die erste Shelly ein Signal an die zweite Shelly zur Aktivierung der Infrarotheizung.

**Automatisiertes Abschalten:**
Wenn der produzierte Strom den Schwellwert von `300  Watt` übersteigt, sendet die erste Shelly ein Signal an die zweite Shelly zur Deaktivierung der Infrarotheizung.

**Überhitzungsschutz:**
Damit die Heizung nicht im Dauerbetrieb verweilt und eventuell überhitzt, wird die Betriebsdauer der Heizung überwacht. Wenn diese länger als `120 Minuten` beträgt, wird die Heizung automatisiert für `15 Minuten` abgeschalten um abzukühlen.

**Automatisierte Reaktivierung:**
Nach Ablauf der Kühlzeit, wird wieder in den Regelbetrieb übergegangen und die Heizung folglich bei Überschreiten des Strom-Schwellwertes von `300 Watt` wieder eingeschalten.


## Shelly2Shelly-Kommunikation

- **Direkte Kommunikation über die Shelly Cloud:**
Sie können das [Shelly-Webfrontend](https://control.shelly.cloud/#) verwenden, um die Kommunikation zwischen den beiden Shelly-Geräten zu ermöglichen. Im Webfrontend können Sie die gewünschten Aktionen und Schalter auch manuell bedienen.

- **Kommunikation über die Smart-Home Plattform:**
Wenn Sie eine [Smart-Home-Plattform](http://homeassistant.local) verwenden, können Sie die Shelly-Geräte in Ihre Plattform integrieren und die gewünschten Aktionen dort definieren. Die Plattform ermöglicht eine zentralisierte Steuerung und Überwachung aller Ihrer Smart-Home-Geräte.


****
<img src="/img/3.4.2 (Betrieb).png" alt="3.4.2 (Betrieb)" width=""/> 
****


## Betrieb

**Benutzersteuerung:**
Die erstellte Automatisierung des "einfachen Heizens per Infrarotheizung (realistisch)" kann durch den Benutzer sowohl per Shelly App als auch über die Home Assistant GUI aktiviert oder deaktiviert werden.

**Anpassungen:**
Die hervorgehobenen initialen Werte wie der Strom-Schwellwert und die Zeitintervalle können durch den Benutzer beliebig definiert und entsprechend angepasst werden.