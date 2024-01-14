---
sidebar_position: 1
---

# 3.1 Raspi 3

Hier sind die Schritte, um die SD-Karte für den Raspberry Pi mit dem ["Raspberry Pi Imager"](https://www.raspberrypi.com/software/) zu flashen und die Einstellungen entsprechend anzupassen:


1. Öffnen Sie den **Raspberry Pi Imager** und wählen Sie das gewünschte Modell und Betriebssystem
(other specific purposes OS -> Home assistants and Home automation -> Home Assistant)  aus.

<img src="/img/os.png" alt="OS" width="800"/>
2. Unter dem Reiter **Dienste** aktivieren Sie **SSH** und speichern Sie die Änderungen.
3. Geben Sie die initialen Zugangsdaten ein: **Benutzername** (unix-user) `admin` und **Passwort** `admin`.
<img src="/img/image.png" alt="RaspiImager" width="300"/>
4. Klicken Sie auf den Button **Weiter** und bestätigen Sie den Flashvorgang.
5. ☕ bis der Vorgang abgeschlossen und verifiziert wurde.

Nachdem die SD-Karte erfolgreich geflasht wurde:

6. Entnehmen Sie die SD-Karte aus dem PC und stecken Sie sie in den Raspberry Pi.
7. Verbinden Sie den Raspberry Pi mit dem Stromnetz. Der Bootvorgang dauert etwa **30-60 Sekunden**.
8. Überprüfen Sie, ob der Raspberry Pi hochgefahren ist, indem Sie einen **Ping-Befehl** ausführen: 
```ping homeassistant.local```.
<img src="/img/ping.png" alt="Ping" width="500"/>

Sobald der Raspberry Pi antwortet:

8. Verbinden Sie einen Monitor mit dem Raspberry Pi und warten Sie auf den Anmeldebildschirm oder öffnen Sie einen Browser und geben Sie die URI `homeassistant.local:8123` ein. Alternativ können Sie auch einen Monitor an den Pi anschließen und auf folgenden Bildschirm warten: 
<img src="/img/cli.png" alt="HassioCLI" width="400"/>
9. Melden Sie sich mit dem Passwort `admin` an.
<img src="/img/ui.png" alt="HassioUI" width="400"/>
**Wichtig**: Ändern Sie das Passwort sofort nach der ersten Anmeldung:

10. Öffnen Sie ein Terminal und geben Sie den Befehl `passwd` ein, um das Passwort zu ändern. Sie werden aufgefordert, das neue Passwort zweimal einzugeben.
11. Sichern Sie den **root**-Benutzer, indem Sie `sudo passwd` eingeben und das Passwort zweimal bestätigen.

Verwenden Sie ein starkes Passwort, das nicht leicht zu erraten ist, wie z.B. `WWI2021a!?`, um die Sicherheit zu erhöhen.

Nachdem Sie das Passwort geändert haben, können Sie sich mit dem neuen Passwort anmelden und Home Assistant testen. Viel Spaß beim Ausprobieren und Entdecken der Funktionen von Home Assistant!!