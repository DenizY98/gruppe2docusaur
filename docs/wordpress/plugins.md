---
sidebar_position: 2
---

# Wordpress Plugins

### All-in-One WP Migration
1. Dieses Plugin erspart Ihnen die Einrichtung und Konfiguration der KlicKIT Wordpress-Website.
2. Laden Sie hierfür das bereitgestellte BackUp als .wpress-Datei runter.
3. Melden Sie sich im Wordpress Backend an und wählen Sie nach Installation des Plugins: **IMPORT**
<img src="/img/allin1.png" alt="Allin1Migration" width="200"/>

4. Klicken Sie auf **Import from**, dann **File** und laden Sie das erwähnte Backup hoch.


### Elementor
1. Loggen Sie sich in Ihr WordPress-Dashboard ein.
2. Gehen Sie zu **Plugins > Installieren**.
3. Geben Sie im Suchfeld **Elementor** ein und drücken Sie die Eingabetaste.
4. Nachdem das Plugin Elementor angezeigt wird, klicken Sie auf **Jetzt installieren**.
5. Nach der Installation klicken Sie auf **Aktivieren**.

### Code-Snippets
Bitte beachten Sie, dass die Shortcodes erst funktionieren, sobald die HA API mit `api:` in der configuration.yaml aktiviert wurde.
1. Loggen Sie sich in Ihr WordPress-Dashboard ein. Für Hilfe zum [API-Token](/apitoken)
2. Gehen Sie zu **Plugins > Installieren**.
3. Geben Sie im Suchfeld **Code Snippets** ein und drücken Sie die Eingabetaste.
4. Nachdem das Plugin Code Snippets angezeigt wird, klicken Sie auf **Jetzt installieren**.
5. Nach der Installation klicken Sie auf **Aktivieren**.
6. Erstellen Sie ein Snippet und fügen Sie folgenden PHP-Code ein:
Bitte ergänzen Sie selbstständig die Werte für:
- IHREHOMEASSISTANTIP
- IHRHOMEASSISTANTAPITOKEN
- IHRHOMEASSISTANTSENSOR
```
define( 'HA_API_URL', 'http://IHREHOMEASSISTANTIP:8123/api/' );
define( 'HA_API_TOKEN', 'IHRHOMEASSISTANTAPITOKEN' );
function get_ha_sensor_value( $entity_id ) {
  $url = HA_API_URL . 'states/' . $entity_id;
  $headers = array(
    'Authorization' => 'Bearer ' . HA_API_TOKEN,
    'Content-Type' => 'application/json',
  );
  $response = wp_remote_get( $url, array( 'headers' => $headers ) );
  if ( is_wp_error( $response ) ) {
    return 'Error: ' . $response->get_error_message();
  }
  $data = json_decode( wp_remote_retrieve_body( $response ), true );
  if ( ! isset( $data['state'] ) ) {
    return 'Error: Invalid data';
  }
  return $data['state'];
}
function ha_sensor_currentpower_shortcode() {
  return get_ha_sensor_value( 'sensor.IHRHOMEASSISTANTSENSOR' );
}
add_shortcode( 'ha_sensor_currentpower', 'ha_sensor_currentpower_shortcode' );```
