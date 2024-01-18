---
sidebar_position: 2
---

# 3.4.2 Realitätsnahere Umsetzung 
## Verwendete Shelly: 2x Plus 1PM 
1. **Installation der Shelly Geräte**: Installieren Sie den ersten Shelly 1PM Plus in der Steckdose, in der das Balkonkraftwerk eingesteckt ist. Installieren Sie den zweiten Shelly 1PM Plus in der Steckdose, in der die Infrarotheizung eingesteckt ist.

2. **Messung des Stromertrags**: Der erste Shelly 1PM Plus misst den vom Balkonkraftwerk erzeugten Strom.

3. **Steuerung der Infrarotheizung**: Der erste Shelly 1PM Plus sendet ein Signal an den zweiten Shelly 1PM Plus, um die Infrarotheizung ein- bzw. auszuschalten, basierend auf dem gemessenen Stromertrag.

Für die Umsetzung der Shelly-to-Shelly Kommunikation gibt es zwei Möglichkeiten:

- **Direkte Kommunikation über die Shelly-Cloud**: Sie können das [Shelly-Webfrontend](https://control.shelly.cloud/#) verwenden, um die Kommunikation zwischen den beiden Shelly-Geräten zu ermöglichen. Im Webfrontend können Sie die gewünschten Aktionen und Schalter auch manuell bedienen.

- **Kommunikation über die Smart-Home-Plattform**: Wenn Sie eine [Smart-Home-Plattform](http://homeassistant.local) verwenden, können Sie die Shelly-Geräte in Ihre Plattform integrieren und die gewünschten Aktionen dort definieren. Die Plattform ermöglicht eine zentralisierte Steuerung und Überwachung aller Ihrer Smart-Home-Geräte.