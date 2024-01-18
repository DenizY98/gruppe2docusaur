---
sidebar_position: 1
---

# 3.4.1 Smarte IR-Heizung
## Verwendete Shelly: 2.5PM 
### **Periodische Überprüfung**
Alle 5 Minuten wird überprüft, ob das Balkonkraftwerk Strom erzeugt. Dies geschieht über Shelly Kanal 1.

### **Einschalten der Infrarotheizung**: 
Wenn das Balkonkraftwerk mehr als `300 Watt` erzeugt, wird eine Infrarotheizung über Shelly Kanal 2 eingeschaltet.

### **Automatisches Ausschalten**: 
Die Infrarotheizung wird automatisch ausgeschaltet, wenn der vom Balkonkraftwerk erzeugte Strom unter die definierte Schwelle sinkt.

### **Überhitzungsschutz**: 
Wenn die Infrarotheizung länger als `120` Minuten ununterbrochen läuft, wird sie für mindestens `15` Minuten ausgeschaltet, um eine Überhitzung oder einen Dauerbetrieb zu verhindern.

### **Benutzersteuerung**: 
Die Automatisierung des "Einfachen Heizens per Infrarotheizung" kann durch den Benutzer per Shelly-App sowie per Hausautomations-Oberfläche aktiviert und deaktiviert (ein-/ausgeschaltet) werden.

### **Benutzerdefinierte Werte**: 
Die grau hinterlegten Werte können durch den Benutzer definiert und verändert werden. Die Initialwerte sind die grau hinterlegten Werte in der Konfiguration.

### **Hardware**: 
Zur Umsetzung der Aufgabe wurde die bereitgestellte Hardware:
- graue Verteilerdose mit integriertem Shelly 2.5PM 
- Stecker bildet den Anschluss an die Haussteckdose ab
- eine Glühbirne steht exemplarisch für das angeschlossene Balkonkraftwerk
- eine zweite Glühbirne steht exemplarisch für die angeschlossene Infrarotheizung