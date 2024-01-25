import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet';
import L from 'leaflet'; 

import markerIcon from '../../assets/location.png'; 

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [accuracy, setAccuracy] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const mapRef = useRef(null);
  const circleRef = useRef(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const newAccuracy = pos.coords.accuracy;

    setPosition([lat, lng]);
    setAccuracy(newAccuracy);

    if (!zoomed && mapRef.current && circleRef.current) {
      setZoomed(true);
      mapRef.current.fitBounds(circleRef.current.getBounds());
    }
  };

  const error = (err) => {
    if (err.code === 1) {
      alert("Please allow geolocation access");
    } else {
      alert("Cannot get current location");
    }
  };

  const WatchLocation = () => {
    const map = useMap();

    useEffect(() => {
      const watchId = navigator.geolocation.watchPosition(
        success,
        error
      );

      return () => {
        navigator.geolocation.clearWatch(watchId);
      };
    }, [map]);

    return null;
  };

  const customMarkerIcon = new L.Icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Ajustez la taille en fonction de vos besoins
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer center={position} zoom={13} style={{ height: '350px' }} ref={mapRef}>
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
        attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <WatchLocation />
      <Marker position={position} icon={customMarkerIcon} />
      {accuracy && <Circle center={position} radius={accuracy} ref={circleRef} />}
    </MapContainer>
  );
};

export default MapComponent;
