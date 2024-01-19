---
sidebar_position: 2
---

# Sicherungskonzept

Das Sicherungskonzept für Home Assistant umfasst die Verwendung der integrierten Backup-Funktion sowie die Erweiterung durch das Addon [Homeassistant Google Drive Backup](https://github.com/sabeechen/hassio-google-drive-backup). Hier sind die Schritte, um dieses Konzept umzusetzen:

1. Gehen Sie im Home Assistant zu **Add-ons** und dann zum **Add-on Store**.
2. Suchen Sie nach dem Addon **Home Assistant Google Drive Backup**.
3. Installieren Sie das Addon und starten Sie es.
4. Aktivieren Sie den **Watchdog**, damit das Addon automatisch neu gestartet wird, falls es abstürzt.
5. Konfigurieren Sie das BackUp ganz individuell nach ihren Wünschen. Wir empfehlen täglich, um den entstandenen Schaden möglichst gering zu halten.
<img src="/img/backups.png" alt="BackUps" width="1000"/>
Durch diese Schritte werden lokale Backups automatisch auch in Google Drive gespeichert. Im Falle eines Totalausfalls der SD-Karte bleiben Ihre Konfigurationen und Automatisierungen erhalten. Dies bietet eine zusätzliche Sicherheitsebene für Ihr System.
Bitte beachten Sie, dass für diesen Schritt ein Google Account mit aktivierter [Drive Cloud](https://drive.google.com/drive/u/0/my-drive) vorhanden sein muss.
