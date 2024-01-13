import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconUrl from 'leaflet/dist/images/marker-icon.png';
import markerShadowUrl from 'leaflet/dist/images/marker-shadow.png';

const MapComponent = () => {
  const [markersData, setMarkersData] = useState([]);
  const mapRef = useRef(null);

  // Function to fetch markers data from the backend
  const fetchMarkersData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/markers');
      const data = await response.json();
      setMarkersData(data);
    } catch (error) {
      console.error('Error fetching markers data:', error);
    }
  };

  useEffect(() => {
    // Fetch markers data when the component mounts
    fetchMarkersData();

    if (typeof window !== 'undefined') {
      // Initialize the map
      const map = L.map('map').setView([48.77318, 9.17082], 11); 
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
      mapRef.current = map;
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    // Define a custom icon using the imported URLs
    const customIcon = L.icon({
      iconUrl: markerIconUrl,
      shadowUrl: markerShadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // Add markers to the map when markersData is updated
    if (mapRef.current && markersData.length > 0) {
      markersData.forEach(marker => {
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
    }
  }, [markersData]);

  return <div id="map" style={{ height: '750px', width: '100%' }}></div>;
};

export default MapComponent;