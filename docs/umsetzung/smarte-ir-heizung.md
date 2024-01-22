---
sidebar_position: 1
---

# 3.4.1 Smarte IR-Heizung

## Szenario

Mithilfe eines stromerzeugenden Balkonkraftwerkes soll ein Verbraucher (eine Infrrotheizung) automatisiert an- und ausgeschalten werden. Zudem soll ein Überhitzungsschutz, eine Steuerung durch den Benutzer und die Möglichkeit, die Automatisierung bedarfsgerecht anzupassen, ermöglicht werden.


## Hardware
Zur Umsetzung der smarten Infrarot-Heizung wurde folgende Hardware verwendet:
- Eine graue Verteilerdose mit integriertem Shelly 2.5PM 
- Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab
- Eine Glühbirne als Ersatz für das Balkonkraftwerk
- Eine zweite Glühbirne als Ersatz für die Infrarotheizung


****
<img src="/img/3.4.1 (Aufbau).png" alt="3.4.1 (Aufbau)" width="1000"/> 
****


## Aufbau
Das Balkonkraftwerk ist über den Kanal 1 an eine Shelly 2.5NPM angeschlossen. Die Infrarotheizung ist über den Kanal 2 ebenfalls an die Shelly 2.5 NPM angeschlossen. Durch die Steckdose ist die Shelly 2.5 NPM an das Heimnetz angeschlossen. Diese misst den vom Balkonkraftwerk erzeugten Strom und ermöglicht die Ein- und Abschaltung der Infrarot-Heizung. Über das Homeautomationssystem "Home Assistant" kann die Shelly 2.5NPM konfiguriert und gesteuert werden. Für das vorliegende Szenario wurde dementsprechend eine bzw. mehrere Automationen angelegt. 


****
<img src="/img/3.4.1 (Funktion).png" alt="3.4.1 (Funktion)" width="1000"/> 
****


## Funktionsweise

**Periodische Überprüfung:**
Alle `5 Minuten` wird über Shelly Kanal 1 automatisch überprüft wieviel Strom das Balkonkraftwerk produziert. 

**Automatisiertes Einschalten:**
Wenn der produzierte Strom den Schwellwert von `300  Watt` übersteigt, wird die Infrarot-Heizung über Shelly Kanal 2 automatisch angeschalten. 

**Automatisiertes Abschalten:**
Wenn der produzierte Strom unter den Schwellwert von `300  Watt` sinkt, wird die Infrarot-Heizung über Shelly Kanal 2 automatisch abgeschalten.

**Überhitzungsschutz:**
Damit die Heizung nicht im Dauerbetrieb verweilt und eventuell überhitzt, wird die Betriebsdauer der Heizung überwacht. Wenn diese länger als `120 Minuten` beträgt, wird die Heizung automatisiert für `15 Minuten` abgeschalten um abzukühlen.

**Automatisierte Reaktivierung**
Nach Ablauf der Kühlzeit, wird wieder in den Regelbetrieb übergegangen und die Heizung folglich bei Überschreiten des Strom-Schwellwertes von `300 Watt` wieder eingeschalten.


****
<img src="/img/3.4.1 (Betrieb).png" alt="3.4.1 (Betrieb)" width="1000"/> 
****


## Betrieb

**Benutzersteuerung:**
Die erstellte Automatisierung des "einfachen Heizens per Infrarotheizung" kann durch den Benutzer sowohl per Shelly App als auch über die Home Assistant GUI aktiviert oder deaktiviert werden.

**Anpassungen:**
Die hervorgehobenen initialen Werte wie der Strom-Schwellwert und die Zeitintervalle können durch den Benutzer beliebig definiert und entsprechend angepasst werden. 


# Screenshots
<img src="Shelly App" alt="3.4.1 (Funktion)" width=""/> 
<img src="Home Assistant" alt="3.4.1 (Funktion)" width=""/> 