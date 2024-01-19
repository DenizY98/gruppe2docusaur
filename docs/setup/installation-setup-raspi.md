---
sidebar_position: 1
---

# Raspberry Pi Model 3B+
<img src="/img/pi3.png" alt="Raspi3" width="300"/>
Hier sind die Schritte, um die MicroSD-Karte für den Raspberry Pi mit dem ["Raspberry Pi Imager"](https://www.raspberrypi.com/software/) zu flashen und die Einstellungen entsprechend anzupassen:


1. Legen Sie die MicroSD-Karte des Raspberry Pi 3 in ihren Computer ein, öffnen Sie den **Raspberry Pi Imager** und wählen Sie das gewünschte Modell und Betriebssystem
(other specific purposes OS -> Home assistants and Home automation -> **HomeAssistant**)  aus.

<img src="/img/os.png" alt="OS" width="800"/>

2. Unter dem Reiter **Dienste** aktivieren Sie **SSH** und speichern Sie die Änderungen.
3. Geben Sie die initialen Zugangsdaten ein: **Benutzername** (unix-user) `admin` und **Passwort** `admin`.

<img src="/img/buimage.png" alt="RaspiImager" width="300"/>

4. Klicken Sie auf den Button **Weiter** und bestätigen Sie den Flashvorgang.
5. ☕ bis der Vorgang abgeschlossen und verifiziert wurde.

Nachdem die MicroSD-Karte erfolgreich geflasht wurde:

6. Entnehmen Sie die MicroSD-Karte aus dem PC und stecken Sie sie in den Raspberry Pi.
7. Verbinden Sie den Raspberry Pi mit dem Stromnetz. Der Bootvorgang dauert etwa **30-60 Sekunden**.
8. Überprüfen Sie, ob der Raspberry Pi hochgefahren ist, indem Sie einen **Ping-Befehl** ausführen: 
```ping homeassistant.local```.
<img src="/img/ping.png" alt="Ping" width="500"/>

Sobald der Raspberry Pi antwortet:

9. Verbinden Sie einen Monitor mit dem Raspberry Pi und warten Sie auf den Anmeldebildschirm oder öffnen Sie einen Browser und geben Sie die URI `homeassistant.local:8123` ein. Alternativ können Sie auch einen Monitor an den Pi anschließen und auf folgenden Bildschirm warten: 
<img src="/img/cli.png" alt="HassioCLI" width="400"/>

10. Importieren Sie das bereitgestellte Backup oder laden Sie das aktuellste .tar Archiv aus der [Google Drive Cloud](https://drive.google.com/drive) herunter.
<img src="/img/restore.gif" alt="HomeAssistantRestore" width="500"/>

11. Melden Sie sich mit dem User `admin` und dem Passwort `WWI2021a` an.

<img src="/img/ui.png" alt="HassioUI" width="400"/>
**Wichtig**: Ändern Sie das Passwort sofort nach der ersten Anmeldung:

12. Öffnen Sie ein Terminal und geben Sie den Befehl `passwd` ein, um das Passwort zu ändern. Sie werden aufgefordert, das neue Passwort zweimal einzugeben.
13. Sichern Sie den **root**-Benutzer, indem Sie `sudo passwd` eingeben und das Passwort zweimal bestätigen.

Verwenden Sie ein **starkes Passwort**, das nicht leicht zu erraten ist, wie z.B. `WWI2021a!?`, um die Sicherheit zu erhöhen.

Nachdem Sie das Passwort geändert haben, können Sie sich mit dem neuen Passwort anmelden und Home Assistant testen. Viel Spaß beim Ausprobieren und Entdecken der Funktionen von Home Assistant!!

Ergänzend können Sie Unklarheiten auch die offizielle [HomeAssistant Website](https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system) nutzen.