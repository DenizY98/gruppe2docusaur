---
sidebar_position: 3
---

# HTTPS Zertifikate mit Lets Encrypt Certbot

1. SSH in den Wordpress Server ([siehe 5. unter Installation WP](/docs/wordpress/installation-setup-wordpress)), der aktuell noch die HTTP Website bereitstellt mit einem Nutzernamen mit Admin-Rechten.

2. Installieren Sie [snapd](https://snapcraft.io/snapd).
Da dieser Schritt nicht in unserer Macht liegt und mit ihrem gewählten OS variiert, verweisen wir sie gerne an die [offizielle Installationsanleitung für snapd](https://snapcraft.io/docs/installing-snapd). Folgen Sie den Anweisungen der snapcraft's Webseite.

3. Installieren Sie den [Let's Encrypt Certbot](https://certbot.eff.org/)
Führen Sie folgenden Befehl aus, um den Certbot als snap zu installieren.

`sudo snap install --classic certbot`

`sudo ln -s /snap/bin/certbot /usr/bin/certbot`

`sudo certbot --apache`

Falls sie zusätzliche (Sub-)Domains mit signieren lassen wollen, so erweitern Sie den letzten Befehl mit 
`-d domain.tld -d sub.domain.tld` nach Ihren Belieben.