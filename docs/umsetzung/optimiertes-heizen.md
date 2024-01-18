---
sidebar_position: 3
---

# 3.4.3 Optimiertes Heizen ☀️&IR 
## Verwendete Shelly: 2.5PM 

1. **Temperaturabhängigkeit**: Zusätzlich zur Automation aus [3.4.1](/docs/umsetzung/smarte-ir-heizung) wird das Heizen auch von der aktuellen Zimmertemperatur abhängig gemacht. Die durch die Temperatursensoren gemessenen Werte können auf der angegebenen Internetseite abgerufen werden. Verwendet wurde der Sensor "Hobbyraum" für die aktuelle Zimmertemperatur.

2. **Erweiterte Steuerung**: Bei dem optimierten Heizen wird die Steuerung zusätzlich zum erzeugten Strom um die konfigurierbare Zimmertemperatur sowie Luftfeuchtigkeit erweitert. Hier können durch den Benutzer Schwellwerte über die Smart-Home-Plattform konfiguriert werden.
<img src="/img/hobbyraum.png" alt="hobbyraum" width="400"/>


3. **Ein- und Ausschalten**: Die Infrarotheizung soll einschalten, wenn die Temperatur unter 19 Grad oder die Luftfeuchtigkeit über 75 Prozent liegt. Sie soll ausschalten, wenn die Temperatur über 21 Grad und die Luftfeuchtigkeit unter 70 Prozent liegt.


4. **Benutzersteuerung**: Die Automatisierung des "Optimierten Heizens per Infrarotheizung" kann durch den Benutzer per Hausautomations-Oberfläche ein- & ausgeschaltet werden.
