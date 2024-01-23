---
sidebar_position: 1
---

# Raspberry Pi
<img src="/img/pi3.png" alt="Raspi3" width="300"/>
Folgende Schritte ermöglichen einen Raspberry Pi neu aufzusetzen und das Home Assistant Projekt einzurichten.


## Flashen der SD-Karte
Zu Beginn des Setups...

1. Laden sie den ["Raspberry Pi Imager"](https://www.raspberrypi.com/software/) auf ihren PC herunter und installieren sie das Tool. 

2. Legen Sie die MicroSD-Karte des Raspberry Pi 3 in ihren Computer ein, öffnen Sie den **Raspberry Pi Imager** und wählen Sie das gewünschte Modell (in diesem Fall Raspberry Pi Modell 3B+) und Betriebssystem (in diesem Fall Home Assistant) aus. Dies geschieht unter: *other specific purposes OS -> Home assistants and Home automation -> **HomeAssistant**.*

<img src="/img/os.png" alt="OS" width="800"/>

3. Verwenden sie die Tastenkombination **WIN+Shift+X**, um Anpassungen am OS vorzunehmen.

4. Im Reiter **Allgemein** müssen sie zum einen die Einstellungen zum Host, zum verwendete Netzwerk als auch die Spracheinstellungen vornehmen. Passen sie dabei die Werte entsprechend ihrer Rahmenbedingungen an und legen sie einen Benutzernamen (`admin`) und ein Passwort (`admin`) fest. Diese Zugangsdaten werden später benötigt und sollten deshalb gemerkt werden.

<img src="/img/buimage.png" alt="RaspiImager" width="300"/>

5. Aktivieren die unter dem Reiter **Dienste** SSH mit "Passwort zur Authentifizierung verwenden".

6. Speichern sie ihre Einstellungen und starten sie den Flashvorgang durch die Schaltfläche **Weiter**. Dabei müssen Sie die Löschung der vorhandenen Daten bestätigen.

7. Nun heißt es Abwarten bis der Flashvorgang abgeschlossen ist ☕


## Booten des Raspberry Pi's
Nachdem die MicroSD-Karte erfolgreich geflasht wurde...

1. Unterbrechen sie die Stromzufuhr am Pi durch Ausstecken des Kabels aus der Steckdose.

2. Entnehmen Sie die MicroSD-Karte aus dem PC und stecken Sie sie in den Raspberry Pi.

3. Verbinden Sie den Raspberry Pi mit dem Stromnetz. Nun startet der Bootvorgang, dieser dauert i.d.R. **30-60 Sekunden**.

4. Überprüfen Sie, ob der Raspberry Pi hochgefahren ist, indem Sie einen **Ping-Befehl** vom Terminal des Rechners aus ausführen: 
```ping homeassistant.local``` alternativ kann auch die Website `homeassistant.local:8123` im Browser aufgerufen werden.

<img src="/img/ping.png" alt="Ping" width="500"/>

5. Falls der Raspberry Pi nicht erreichbar zu sein scheint, kann eventuell ein Neustarten bzw. eine Erneuerung der Stromzufuhr Abhilfe verschaffen


## Konfiguration Home Assistant 
Sobald der Raspberry Pi antwortet:

1. Verbinden Sie einen Monitor mit dem Raspberry Pi und warten Sie auf den Anmeldebildschirm oder öffnen Sie auf ihrem PC einen Browser und geben Sie die URI `homeassistant.local:8123` ein. 

<img src="/img/cli.png" alt="HassioCLI" width="400"/>

2. Importieren Sie das bereitgestellte Backup oder laden Sie das aktuellste .tar Archiv aus der [Google Drive Cloud](https://drive.google.com/drive) herunter.

<img src="/img/restore.gif" alt="HomeAssistantRestore" width="500"/>

3. Melden Sie sich mit dem User `admin` und dem Passwort `WWI2021a` an.

<img src="/img/ui.png" alt="HassioUI" width="400"/>

**Wichtig**: Ändern Sie das Passwort sofort nach der ersten Anmeldung:

4. Öffnen Sie ein Terminal und geben Sie den Befehl `passwd` ein, um das Passwort zu ändern. Sie werden aufgefordert, das neue Passwort zweimal einzugeben.

5. Sichern Sie den **root**-Benutzer, indem Sie `sudo passwd` eingeben und das Passwort zweimal bestätigen. Verwenden Sie ein **starkes Passwort**, das nicht leicht zu erraten ist, wie z.B. `WWI2021a!?`, um die Sicherheit zu erhöhen. Nachdem Sie das Passwort geändert haben, können Sie sich mit dem neuen Passwort anmelden und Home Assistant testen. Viel Spaß beim Ausprobieren und Entdecken der Funktionen von Home Assistant!! 
Ergänzend können Sie Unklarheiten auch die offizielle [HomeAssistant Website](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system) nutzen.