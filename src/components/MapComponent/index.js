import React, { useEffect, useRef, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const MapComponent = () => {
  const [markersData, setMarkersData] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    // Dynamically import Leaflet and its CSS only on the client side
    const importLeaflet = async () => {
      const L = await import('leaflet');
      await import('leaflet/dist/leaflet.css');
      const markerIconUrl = '/img/marker-icon.png';
      const markerShadowUrl = '/img/marker-shadow.png';
      // Define a custom icon using the local paths
      const customIcon = L.icon({
        iconUrl: markerIconUrl,
        shadowUrl: markerShadowUrl,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      // Initialize the map here after Leaflet is imported
      mapRef.current = L.map('map').setView([48.77318, 9.17082], 11);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapRef.current);

      // Fetch markers data and add markers to the map
      const data = await fetchMarkersData();
      setMarkersData(data);
      // Add markers to the map using the data and custom icon
      data.forEach(marker => {
        const { lat, long, homename, sensors } = marker;
        const markerInfo = L.marker([lat, long], { icon: customIcon }).addTo(mapRef.current);
        let popupContent = `<strong>${homename}</strong><br>`;
        sensors.forEach(sensor => {
          if (sensor.sensordata) { // Check if sensor data is available
            popupContent += `${sensor.sensorName}: ${sensor.sensordata}<br>`;
          }
        });
        markerInfo.bindPopup(popupContent);
      });
    };

    importLeaflet();

    return () => {
      // Clean up the map when the component is unmounted
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  // Function to fetch markers data from the backend
  const fetchMarkersData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/markers');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching markers data:', error);
    }
  };

  return (
    <BrowserOnly>
      {() => (
        <div id="map" style={{ height: '750px', width: '100%' }}></div>
      )}
    </BrowserOnly>
  );
};

export default MapComponent;