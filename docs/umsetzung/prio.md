---
sidebar_position: 6
---

# 3.4.6 Heizung & Boiler

## Szenario

Mithilfe eines stromerzeugenden Balkonkraftwerkes soll jeweils ein Verbraucher (eine Infrarotheizung oder ein Warmwasserboiler) priorisiert automatisiert an- und ausgeschalten werden. Dazu sollen drei Shelly 1PM Plus verwendet werden. In Abstimmung wurden zwei verschiedene Modi entwickelt, in denen jeweils einer beiden Verbraucher priorisiert aktiviert werden sollen.


## Hardware
Zur Umsetzung der smarten Infrarotheizung wurde folgende Hardware verwendet:
- Drei Shelly 1PM Plus (eine für das Balkonkraftwerk, eine für die Infrarotheizung und eine für den Warmwasserboiler)
- Ein Mehrfachstecker bildet den Anschluss an das Haus-/Wohnungsnetz ab
- Eine Glühbirne als Ersatz für das Balkonkraftwerk
- Eine zweite Glühbirne als Ersatz für die Infrarotheizung
- EIne dritte Glühbirne als Ersatz für den Warmwasserboiler


****
<img src="/img/3.4.6 (Aufbau).png" alt="3.4.6 (Aufbau)" width=""/> 
****


## Aufbau
Das Balkonkraftwerk ist auf dem Balkon über eine der Shelly 1PM Plus an das Hausnetz angeschlossen. Die Infrarotheizung ist über die zweite Shelly 1PM Plus in einer anderen Steckdose ebenfalls an das Hausnetz angeschlossen. Der Warmwasserboiler ist über die dritte Shelly in einer weiteren Steckdose ebenfalls an das Hausnetz angeschlossen. Die erste Shelly 1PM Plus misst den vom Balkonkraftwerk erzeugten Strom und ermöglicht die Ein- und Abschaltung der Infrarotheizung oder des Warmwasserboilers, in dem sie ein entsprechendes Signal an eine der beiden Shelly 1PM Plus sendet. Über das Homeautomationssystem "Home Assistant" können die Shelly 1PM Plus konfiguriert und gesteuert werden. Für das vorliegende Szenario wurde dementsprechend eine bzw. mehrere Automationen angelegt. 


****
<img src="/img/3.4.6 (Funktion).png" alt="3.4.6 (Funktion)" width=""/> 
****


## Funktionsweise

**Periodische Überprüfung:**
Alle `5 Minuten` wird von Shelly 1 automatisch überprüft wieviel Strom das Balkonkraftwerk produziert. 

**Automatisiertes Einschalten:**
Wenn der produzierte Strom den Schwellwert von `300  Watt` übersteigt, sendet die erste Shelly ein Signal an die Shelly die an das priorisierte Gerät angeschlossen ist, um das Gerät zu aktivieren.

**Automatisiertes Abschalten:**
Wenn der produzierte Strom unter den Schwellwert von `300  Watt` sinkt, sendet die erste Shelly ein Signal an die Shelly die an das priorisierte Gerät angeschlossen ist, um das Gerät zu deaktivieren.

**Sommermodus:**
Bei Aktivierung des Wintermodus wird die Infrarotheizung statt des Warmwasserboilers priorisiert.

**Wintermodus:**
Bei Aktivierung des Wintermodus wird der Warmwasserboiler statt der Infrarotheizung priorisiert.


****
<img src="/img/3.4.6 (Betrieb).png" alt="3.4.6 (Betrieb)" width=""/> 
****


## Betrieb

**Benutzersteuerung:**
Die erstellte Automatisierung des "Priorisierte IR-Heizung?" kann durch den Benutzer über die Home Assistant GUI als Schalter aktiviert oder deaktiviert werden. 