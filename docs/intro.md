---
sidebar_position: 1
---
# Projektdokumentation 
## Einleitung
### 1. Problem- und Aufgabenstellung
Das zugrunde liegende Problem, das das Smart-Home-Projekt adressiert, besteht aus verschiedenen Herausforderungen im Bereich der Hausautomatisierung. Eine geeignete Smart-Home-Plattform soll ausgewählt und auf einem vom Auftraggeber, Herrn Osburg, bereitgestellten Raspberry Pi installiert werden. Die spezifische Aufgabe umfasst die Realisierung verschiedener Szenarien für die Nutzung des von einem Balkonkraftwerk erzeugten Stroms mittels eines vom Auftraggeber bereitgestellten Shelly 2.5 PM. Eine Visualisierung des erzeugten Stroms auf der Benutzeroberfläche der Smart-Home-Plattform ist ebenfalls vorgesehen. Zusätzlich sollen die Daten zum Stromertrag auf einer öffentlichen Website zugänglich gemacht werden. Darüber hinaus soll auf dieser Website ebenfalls eine Community-Plattform entstehen, in welcher Nutzer die Möglichkeit haben die Daten ihres Balkonkraftwerkes der Öffentlichkeit auf einer zentralen Google Karte zu präsentieren.

Im Verlauf der Projektumsetzung sollen relevante Zwischendokumente erstellt werden, welche ebenfalls in dieser Dokumentation enthalten sind. Darüber hinaus soll eine Schritt-für-Schritt-Anleitung erstellt werden.

Zum Abschluss des Projekts sollen die Projektergebnisse dem Auftraggeber bzw. Dozenten präsentiert werden. Der Projektverlauf wird in dieser Dokumentation festgehalten und dem Dozenten bzw. Auftraggeber zur Verfügung gestellt.

### 2. Zielsetzung
Das primäre Ziel dieses Projekts besteht darin, die vorgegebenen Aufgaben erfolgreich zu bewältigen und eine effektive Smart-Home-Lösung zu implementieren. Um dies zu erreichen, werden die Aufgaben in überschaubare Teile unterteilt und spezifische Fachteams gebildet. Es wird angestrebt, sämtliche Projektanforderungen des Auftraggebers, welche in den Abschnitten 3.4 - 3.6 aufgeführt sind, zu erfüllen. Durch regelmäßige Abstimmungen mit dem Auftraggeber wird sichergestellt, dass das Projekt zur vollen Zufriedenheit aller beteiligter Parteien abgeschlossen werden kann, was auch das Rikiko minimiert, dass Anforderungen falsch interpretiert oder nicht umgesetzt werden können.

Die für die Projektumsetzung erforderlichen Ressourcen werden im Rahmen dieses Projektes vom Auftragssteller/Dozebten bereitgestellt.

### 3. Projektorganisation und Aufbau
Der Initiator dieses Projekts ist Herr Osburg, der sowohl als Auftraggeber als auch als Dozent fungiert und die Projektgruppe während der Implementierungsphase des Smart-Home-Projekts betreut. Die Projektgruppe setzt sich aus sieben Studierenden des 5. Semesters des DHBW-Studiengangs Wirtschaftsinformatik zusammen.

Für die Zielereeichung ist eine gut aufgeteilte Projektorganisation erforderlich, welche dem nachfolgenden Organigramm entnommen werden kann. 

<img src="/img/organigramm.png" alt="Organigramm" width="750"/>

Um eine effiziente Rollenverteilung für die weitere Projektbearbeitung zu gewährleisten, wurden die Präferenzen und Vorkenntnisse aller Gruppenmitglieder berücksichtigt. Hieraus resultieren die drei folgenden, im obigen Organigramm dargestellten, Rollen/Projektteams.

* **Projektleitung:** Diese Rolle ist allem voran für Organisatorische Aufgaben zuständig. Dies umfasst die Koordination regelmäßiger Besprechnungen innerhalb der Projektgruppe und die Kommunikation mit dem Auftraggeber. Des Weiteren ist die Rolle des Projektleiters auch für die Erstellung von Zwischendokumenten wie z.B.   Präsentationen oder der Zeiterfassungsvorlage zuständig.
* **Entwicklung:** Das vierköpfige Entwicklungsteam ist für sämtliche technische Umsetzung des Projektes verantwortlich. Hierunter fallen neben der technischen Auftragsumsetzung auch Aufgaben wie das Aufsetzen des Raspberry Pi oder die Installation der Smart-Home-Plattform.
* **Dokumentation:** Dieses Team besteht aus zwei Mitarbeitern welche für die dokumentarische Festhaltung der Projektfortschritte und Ergebnisse verantwortlich ist. Neben der technischen Dokumentation ist das Doku-Team ebenfalls für die Erstellung einer Schritt-für-Schritt-Anleitung zuständig.

### 4. Logo und Firmenname
Um die Anforderungen zu erfüllen und umzusetzen, gründete die Projektgruppe das fiktive Unternehmen **"KlicKIT"**. Die Teammitglieder entwickelten nachfolgendes Logo, welches dem Namen des Unternehmens entspricht.

<img src="/img/logo_entwurf.png" alt="Logo Entwurf" width="750"/>

Ein Projektplan, welcher alle wesentlichen Aufgaben und Anforderungen enthält, wurde von der Projektleitung zu Beginn des Projektes erstellt. Dieser Plan dient als zeitlicher und inhaltlicher Leitfaden für den Fortschritt des Projektes und besteht aus einer Anforderunganalyse, einer Risikoanalyse und einer Zeiterfassung aller Mitarbeitenden.

### 5. Projektplan
Der Projektplan setzt sich aus den folgenden drei Teilen, welche in den nachfolgenden Kapiteln näher erläutert werden, zusammen:

**Anforderungsanalyse:**: Zu Beginn des Projektes wurden die Aufgaben von der Projektleitung in Zusammenarbeit mit dem Entwicklungsteam in spezifische Unteraufgaben zerlegt. Diese einzelnen Aufgabenpakete wurden anschließend in einer Anforderungsanalyse in Form einer Exceltabelle festgehalten, welche über einen Tauschordner anschließend dem ganzen Projektteam zugänglich gemacht wurden. In der Anforderungsanalyse wurde für jede Anforderung zusätzlich der Zweck und das Bedürfnis fesgehalten, welche mit dieser bedient werden sollen, sowie der aktuelle Entwicklungsstatus der Anforderung. 

<img src="/img/anforderungsanalyse.png" alt="Anforderungsanalyse" width="1000"/>

**Zeiterfassung:** Bei der Zeiterfassung wurde für jeden Arbeitsschritt die bearbeitende Person, sowie eine Zeitaufwandsschätzung und den Ist-Aufwand des bearbeitenden Mitarbeiters. Auch kann der Zeiterfassung die kommulierte Arbeitszeit pro Mitarbeiter entnommen werden.

**Risikoanalyse:** Sämtliche potenziellen Risiken des Projektes wurden in einer Risikoanalyse hinsichtlich ihrer Eintrittswahrscheinlichkeiten und ihrer Auswirkungen aufgelistet. Auch geht aus der Risikoanalyse die erforderlichen Schritte nach dem Eintritt eines Risikos hervor.

### 6. Verwendete Tools
#### 6.1 Rapberry Pi
Der Raspberry Pi ist ein Einplatinencomputer, auf dem Linux-basierte Betriebssysteme, die speziell für den Raspberry Pi kompiliert wurden, installiert werden können. Er besticht durch seine kompakte Bauweise und seinen erschwinglichen Preis. Durch einen USB-Anschluss kann der Funktionsumfang des Raspberry Pi erweitert werden. Es gibt zahlreiche Anwendungsmöglichkeiten für einen Raspberry Pi, wie beispielsweise als privater Server, als Linux-Desktop-PC oder, wie in diesem Projekt, für Smart-Home-Szenarien. Der Raspberry Pi ist in verschiedenen Modellen erhältlich. In diesem Projekt wird ein Raspberry Pi 3B+ verwendet, der über 1024 MB RAM und eine CPU-Taktrate von 1,2 Gigahertz verfügt und WLAN-fähig ist.

#### 6.2 Shelly
Für die Realisierung der Aufgaben, insbesondere in Bezug auf das Balkonkraftwerk, ist ein elektrischer automatisierbarer Schalter erforderlich. Im Rahmen dieses Projektes wird hierfür ein Shelly verwendet. Dem Projektteam wurden ein Shelly 2.5 PM und drei Shelly 1 PM Plus zur Verfügung gestellt, die eine Fernsteuerung von Elektrogeräten über WLAN ermöglichen. Shelly-Geräte verfügen über einen integrierten Webserver und sind leicht zu bedienen.

Der Shelly wird über seinen Stecker mit dem Stromnetz des Hauses verbunden. Dies ermöglicht es, den Shelly in ein lokales Netzwerk zu integrieren, wodurch er eine statische Netzwerkadresse erhält. Über diese IP-Adresse kann der Shelly gesteuert werden.

#### 6.3 Home Assistant
Home Assistant ist eine Open-Source-Plattform für die Hausautomation, die auf Python basiert und eine Vielzahl von Smart-Home-Geräten unterstützt. Sie ermöglicht es Benutzern, ihre Geräte über eine einzige, einheitliche Oberfläche zu steuern und zu automatisieren. 

Die Plattform zeichnet sich durch ihre Flexibilität und Anpassungsfähigkeit aus. Sie ermöglicht es Benutzern, komplexe Automatisierungsregeln zu erstellen und ihre Smart-Home-Geräte auf vielfältige Weise zu steuern. Darüber hinaus bietet Home Assistant eine breite Palette von Integrationen, die es ermöglichen, Geräte verschiedener Marken und Technologien in das Smart-Home-System einzubinden.
Home Assistant kann auf verschiedenen Systemen installiert werden, einschließlich Raspberry Pi, und bietet eine webbasierte Benutzeroberfläche für die einfache Verwaltung und Steuerung der Smart-Home-Geräte. Es ermöglicht auch die Erstellung von Dashboards zur Visualisierung von Gerätedaten und zur Überwachung des Zustands des Smart-Home-Systems.

Insgesamt ist Home Assistant eine leistungsstarke und vielseitige Plattform für die Hausautomation, die sowohl für Anfänger als auch für erfahrene Benutzer geeignet ist, weshalb es auch im Rahmen dieses Projektes verwendet wird. 

#### 6.4 Wordpress 
Zur Erstellung einer öffentlichen Internetseite, wie sie in diesem Projekt gefordert ist, wird in diesem Projekt das Open-Source-Content-Management-System Wordpress verwendet.

WordPress zeichnet sich durch seine Benutzerfreundlichkeit und Anpassungsfähigkeit aus, sowie durch eine Vielzahl von Plugins, wie der im Projekt verwendete "Elementor", welche zusätzliche Funktionalität hinzufügen. Darüber hinaus ermöglicht es Benutzern, Inhalte leicht zu erstellen und zu bearbeiten, dank eines intuitiven Editors. WordPress kann auf einem Webserver installiert werden und bietet eine webbasierte Benutzeroberfläche für die Verwaltung und Erstellung von Webinhalten. Es unterstützt auch die Integration mit einer Vielzahl von Diensten und Plattformen, was seine Flexibilität und Vielseitigkeit weiter erhöht.

#### 6.7 Docusaurus
Für das Festhalten der Projektergebnisse und zur besseren Nachvollziehbarkeit hat sich das Projektteam für das Open-Source-Projekt Docusaurus entschieden. Dies ist ein einfaches Tool zur Erstellung von Dokumentationswebsites, welche es Entwicklern ermöglicht, eine voll funktionsfähige Website mit Navigationsmenüs und Suchfunktionen mit minimalem Aufwand zu erstellen. Docusaurus zeichnet sich durch seine Einfachheit und Anpassungsfähigkeit aus. Es bietet eine Reihe von vordefinierten Themen und ermöglicht es Entwicklern, ihre eigenen Themen zu erstellen oder bestehende zu modifizieren. 

Docusaurus kann auf verschiedenen Betriebssystemen installiert werden und bietet eine webbasierte Benutzeroberfläche für die Verwaltung und Erstellung von Webinhalten. Es unterstützt auch die Integration mit einer Vielzahl von Diensten und Plattformen, was seine Flexibilität und Vielseitigkeit weiter erhöht.


### 7. Systementwurf
Um den Systementwurf des Projektes zu erfassen und übersichtlich darzustellen, wurden die Architekturen, die Datenflüsse und die verwendeten Komponenten in den nachfolgend abgebildeten Systementwürfen festgehalten. Ersterer stellt dabei den ursprünglich geplanten und angestrebten Systemaufbau dar. Dieser unterscheidet sich jedoch bei Betrachtung deutlich von dem darunter abgebildeten finalen Systemaufbau. Im Rahmen der Umsetzung, der immer weiter klarer werdenden Anforderungen, einigen technischen Herausforderungen sowie vielen alternativen Ansätzen, ist der jetztige Systementwurf entstanden. Der letztendlich umgesetzte Systementwurf entspricht dennoch weitgehend der geplanten Architektur, mit einigen Anpassungen und Verbesserungen. Er stellt somit auch die "Reise" des Teams bei der Projektdurchführung technisch dar. 

**Systementwurf (geplant)**
<img src="/img/Projekt Set-Up (initial).png" alt="Projekt Set-Up (initial)" width=""/>

**Systementwurf (final)**
<img src="/img/Projekt Set-Up (final).png" alt="Projekt Set-Up (final)" width=""/>

### 8. Anforderungsanalyse
Der erste Projektschritt besteht in der Installation eines Raspberry PI, einschließlich eines vom Projektteam ausgearbeiteten Sicherungskonzept. Im Anschluss daran steht die Installation einer Smart-Home-Plattform auf dem Raspberry Pi. Hierfür entschied sich das Projektteam nach gründlicher Recherche für die Open-Source Smart-Home-Plattform "Home Assistant", welche nach Absprache mit dem Auftragsgeber für das Projekt fortfolgend verwendet wird.

Während des Projektes werden verschiedene Aufgaben aus dem Bereich Smart-Home/Hausautomation bearbeitet. Hier steht die Automation einer Infrarotheizung sowie eines Warmwasserboilers im Vordergrund. 

**Infrarotheizung:**
Im Rahmen der Automatisierung der Infrarotheizung soll in einem ersten Schritt periodisch alle **5** Minuten mittels Shelly überprüft werden, ob das Balkonkraftwerk Strom generiert. Werden vom Balkonkraftwerk mehr als **300** Watt erzeugt, soll ebenfalls mittels Shelly eine Infrarotheizung aktiviert werden und wieder deaktiviert, sobald der Wert unter **300** Watt fällt. Um die Infrarotheizung vor Überhitzung zu schützen, soll diese nach nach **120** Minuten min. **15** abgeschaltet werden, bevor wieder überprüft wird, ob das Balkonkraftwerk genug Strom erzeugt.
Die hier fettgedruckten Zahlenwerte sollen von einem Nutzer definiert und auch wieder verändert werden können.

Um das Heizen mittels Infrarotheizung noch effizienter zu gestalten, sollen in einem zweiten Schritt neben der Menge des erzeugten Stroms auch noch die beiden Faktoren Zimmertemperatur und Luftfeuchtigkeit miteinbezogen werden. Hierfür sollen ebenfalls vom Benutzer Schwellenwerte wie beispielsweise einschalten bei (Temperatur < 19 Grad oder Luftfeuchtigkeit > 75 Prozent) bzw. ausschalten bei (Temperatur > 21
Grad und Luftfeuchtigkeit < 70 Prozent). Die Automatisierung des "Optimierten Heizens mittels Infrarotheizung" soll vom Benutzer über die Shelly-App sowie über die Oberfläche der Hausautomation ein- und ausgeschaltet werden können.

**Warmwasserboiler:**
Neben der Automatisierung der Infrarotheizung soll auch der Betrieb eines elektischen Warmwasserboilers effizienter gestaltet werden. Hierfür soll einem Nutzer folgende Betriebsmodi zur Verfügung gestellt werden:

**Manueller Modus:** Der Warmwasserboiler soll vom Benutzer mittels Shelly aktiviert oder deaktiviert werden können.

**Zeitschaltmodus:** Eine generelle Aktivierung in einem vom Benutzer festgelegten Zeitraum. Ist dieser Zeitraum zu Ende, soll der Boiler automatisch wieder abschalten.

**Sparmodus:** Im Rahmen des Sparmodus soll dem Benutzer die Möglichkeit gegeben werden, den Warmwasserboiler ausschließlich bei niedrigen Strompreisen in Betrieb zu nehmen. Dies erfordert eine Überprüfung der aktuellen Strompreise. Es sollen bis zu drei Tarifzeiten für niedrige, mittlere und hohe Preise festgelegt werden können. Der Benutzer kann dann wählen, ob der Warmwasserboiler nur während der günstigsten Zeit oder während der günstigsten und mittleren Zeit eingeschaltet wird. 

Für Werktage von Montag bis Freitag sollen folgende Zeiten initial konfiguriert werden:
- 00:00 Uhr – 08:00 Uhr: niedrigster Preis pro KWh
- 08:00 Uhr – 10:00 Uhr und 14:00 Uhr – 18:00 Uhr sowie 22:00 Uhr – 24:00 Uhr: mittlerer Preis pro KWh
- 10:00 Uhr – 14:00 Uhr und 18:00 Uhr – 22:00 Uhr: höchster Preis pro KWh

Für das Wochenende, also Samstag und Sonntag, gilt durchgehend von 00:00 Uhr bis 24:00 Uhr der niedrigste Preis pro KWh.

**Kombi-Sparmodus:** Dieser Modus stellt eine Kombination aus dem dritten Modus und der Nutzung von selbst erzeugtem Strom dar. In diesem Modus wird der Boiler nicht nur während der ausgewählten Tarifzeiten, sondern auch bei Überschreitung eines Schwellenwertes von über 400 Watt für den selbst erzeugten Strom eingeschaltet. Der Wert der aktuellen Stromerzeugung soll alle fünf Minuten überprüft werden.


Neben diesen vier Modi ist auch die Entwicklung und Implementierung eines Konzepts für die Kombination von Infrarotheizung und Warmwasserboiler vorgesehen. Im Hinblick auf den selbst erzeugten Strom wird die Infrarotheizung mit Priorität 1 und der Warmwasserboiler mit Priorität 2 behandelt. Nach Absprache mit dem Auftragsgeber soll es auch einen Sommermodus geben, in welchem nicht geheizt werden muss, sodass diese Prioritätenreihenfolge umgekehrt werden kann und der Warmwasserboiler Priorität 1 bekommt.

Zudem ist vorgesehen, die Werte des selbst erzeugten Stroms auf der Oberfläche der Hausautomation darzustellen. Folgende Daten sollen hierbei visualisiert werden.

- Aktuell produzierter Strom (Aktualisierungsintervall konfigurierbar 1 Minute)
- Aktueller Tag
- Vorhergehender Tag
- Aktuelle Woche
- Vorhergehende Woche
- Aktueller Monat
- Vorhergehender Monat
- Aktuelles Jahr
- Vorhergehendes Jahr

Ebenfalls angezeigt werden soll der zeitliche Verlauf des erzeugten Stroms. Dieser soll als Balkendiagramm wie folgt angezeigt werden:

- Aktuelle Woche (Balken pro Tag)
- Vorhergehende Woche (Balken pro Tag)
- Aktueller Monat (Balken pro Tag)
- Vorhergehender Monat (Balken pro Tag)
- Aktuelles Jahr (Balken pro Monat)
- Vorhergehendes Jahr (Balken pro Monat)

Desweiteren soll mittels Wordpress eine öffentlich zugängliche Website erstellt werden, in welchem die folgenden, mittels Shelly gemessenen, Strom-Ertragsdaten einsehbar sind. 
aktuell erzeugte Watt

- KWh des aktuellen Tages
- KWh des vorigen Tages
- KWh der aktuellen Woche
- KWh der vorigen Woche
- KWh des aktuellen Monats
- KWh des vorigen Monats
- KWh des aktuellen Jahres
- KWh des vorigen Jahres

Zusätzlich soll auf dieser Website eine Community Map implementiert werden, um allen Nutzern die Möglichkeit zu geben, die Ertragsdaten ihres jeweiligen Balkonkraftwerks an einer zentralen Stelle präsentieren zu können.

### 9. Aufwandsschätzung
Zu Beginn des Projekts wurden die initial sichtbaren Arbeitsschritte basierend auf den Rollen in die folgenden grundlegenden Kategorien eingeteilt und in einer Excel-Tabelle dokumentiert:

- Raspberry Pi
- HomeAssistant
- Website/Backup
- Dokumentation/Visuelles 
- PM

Während der Projektlaufzeit wurden die Arbeitsschritte in diesen Kategorien stetig erweitert und verfeinert. Die Projektmitarbeiter wählten auf Grundlage dieser Einteilung passende Arbeitsschritte und Aufgaben aus und verzeichneten ihren Namen in der entsprechenden Spalte, zusammen mit ihrer Schätzung des Arbeitsaufwands. Sobald eine Aufgabe abgeschlossen war, wurde der tatsächliche Aufwand erfasst. In einer separaten Spalte konnte so der geschätzte Aufwand der Beteiligten dem tatsächlichen Aufwand gegenübergestellt werden, um eine gleichmäßige Arbeitsbelastung sicherzustellen. Nachfolgend ist eine Abbildung der Exceltabelle "Projektnachverfolgung" zu sehen.

<img src="/img/aufwandschaetzung.png" alt="Aufwandschätzung" width="600"/>

### 10. Projektrisiken
Um ein tiefgreifendes Verständnis der Risiken des Smart-Home-Projekts zu erlangen und adäquate Reaktionsmaßnahmen zu ermöglichen, wurden potenzielle Projektrisiken mittels einer Excel-Tabelle systematisch erfasst und einer eingehenden Analyse unterzogen. Im Anschluss daran wurden die Risiken gemäß den Leitlinien des Risikomanagements des Bundesamts für Sicherheit in der Informationstechnik (BSI) hinsichtlich ihrer Eintrittswahrscheinlichkeit und potenziellen Auswirkungen auf einer Skala von 1 bis 5 bewertet. In einer separaten Spalte wurde dokumentiert, welche Strategien zur Risikobewältigung angewendet werden sollten und welche Maßnahmen dafür erforderlich sind. 

<img src="/img/risikoanalyse.png" alt="Risikoanalyse" width="1000"/>