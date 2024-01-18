---
sidebar_position: 5 
---

# 3.4.5 Optimierter Wasserboiler
## Verwendete Shelly: 2x Plus 1PM 
**1. Manuelle Steuerung des Warmwasserboilers über den Shelly 1PM Plus:**
   - Installieren Sie die Shelly/HomeAssistant-App auf Ihrem Smartphone.
   - Verbinden Sie den Shelly 1PM Plus mit Ihrem Warmwasserboiler gemäß der Anleitung des Herstellers.
   - In der Shelly/HomeAssistant-App können Sie den Boiler manuell ein- und ausschalten.

**2. Generelle Aktivierung für einen vorgegebenen Zeitraum:**
   - In der HomeAssistant Weboberfläche können Sie einen Zeitplan erstellen.
   - Geben Sie den Start- und Endzeitpunkt für die Aktivierung des Boilers ein 
   - z.B. vom `01.12.2021` – `10.12.2021`
   - Für den Zeitraum wir der Boiler nun automatisch aktiviert und nach Ablauf dieses Zeitraums wird der Boiler automatisch ausgeschaltet.

**3. Aufheizen des Warmwasserboilers in günstigen Stromzeiten:**
   - In der HomeAssistant Weboberfläche können Sie bis zu drei verschiedene Tarifzeiten definieren.
   - Stellen Sie die Uhrzeiten ein, zu denen der günstigste, mittlere und teuerste Strompreis gelten.
   - Der Benutzer kann auswählen, wann der Boiler eingeschaltet werden soll 
   - Falls Heizen bei mittlerem Preis aktiv ist, wird in günstigen und mittleren Tarifzeiten geschalten.
   - Falls Heizen bei mittlerem Preis nicht aktiv ist, wird nur in günstigen Tarifzeiten geschalten.

**4. Aufheizen des Warmwasserboilers in günstigen Stromzeiten oder mit Solarstrom:**
   - Diese Einstellung ist ähnlich wie in Punkt 3, jedoch wird der Boiler auch immer dann eingeschaltet, wenn mehr als `400 Watt` Solarstrom erzeugt werden.
   - Hierzu sollte alle `5` Minuten geprüft werden, wie viel Solarstrom erzeugt wird. Dies kann durch eine entsprechende Einstellung in der Shelly-App erreicht werden.
