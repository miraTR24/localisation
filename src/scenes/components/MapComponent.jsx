import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Circle, useMap } from 'react-leaflet';
import L from 'leaflet'; 

import markerIcon from '../../assets/location.png'; 

const MapComponent = () => {
  const [markers, setMarkers] = useState([
    { position: [48.8566, 2.3522] },
    { position: [43.2965, 5.3698] },
    { position: [45.7578, 4.832] },
    { position: [43.6045, 1.444] },
    { position: [43.7102, 7.262] },
    { position: [47.2184, -1.5536] },
    { position: [48.5734, 7.7521] },
    { position: [43.6108, 3.8767] },
    { position: [44.8378, -0.5792] },
    { position: [50.6292, 3.0573] },
    { position: [48.1173, -1.6778] },
    { position: [49.2583, 4.0317] },
    { position: [49.4938, 0.1077] },
    { position: [45.4397, 4.3872] },
    { position: [43.1242, 5.928] },
    { position: [45.1885, 5.7245] },
    { position: [47.3216, 5.0415] },
    { position: [47.4784, -0.5632] },
    { position: [43.8367, 4.3601] },
    { position: [45.771, 4.8901] },
    { position: [45.7772, 3.087] },
    { position: [48.0061, 0.1996] },
    { position: [49.8942, 2.2957] },
    { position: [43.5298, 5.4475] },
    { position: [45.8336, 1.2611] },
    { position: [47.3941, 0.6848] },
    { position: [49.1193, 6.1727] },
    { position: [42.6977, 2.8954] },
    { position: [47.238, 6.0244] },
    { position: [48.8397, 2.2399] },
    { position: [47.903, 1.9093] },
    { position: [49.4431, 1.0993] },
    { position: [47.7509, 7.3354] },
    { position: [49.1829, -0.3707] },
    { position: [48.6921, 6.1844] },
    { position: [48.9362, 2.357] },
    { position: [45.8879, 6.0921] },
    { position: [48.8627, 2.4435] },
    { position: [43.9492, 4.8053] },
    { position: [48.8014, 2.1301] },
    { position: [48.7777, 2.4548] },
    { position: [46.5802, 0.3404] },
    { position: [48.9366, 2.4886] },
    { position: [48.7876, 2.3954] },
    { position: [43.2964, -0.3707] },
    { position: [50.9513, 1.8586] },
    { position: [46.1591, -1.152] },
    { position: [48.9225, 2.2538] },
    { position: [48.9164, 2.2919] },
    { position: [48.876, 2.181] },
    { position: [48.7986, 2.4978] },
    { position: [48.8981, 2.2594] },
    { position: [14.6104, -61.08] },
    { position: [48.8171, 2.5157] },
    { position: [48.9141, 2.3834] },
    { position: [48.9221, 2.445] },
    { position: [48.8063, 2.4393] },
    { position: [48.884, 2.2694] },
    { position: [43.183, 3.0036] },
    { position: [48.7528, 2.297] },
    { position: [48.849, 2.5544] },
    { position: [48.9976, 2.3819] },
    { position: [46.3234, -0.4585] },
    { position: [48.9032, 2.4815] },
    { position: [48.7777, 2.4548] },
    { position: [43.1009, 5.886] },
    { position: [47.7483, -3.3731] },
    { position: [43.213, 2.3491] },
  ]);
  
  const [accuracy, setAccuracy] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const mapRef = useRef(null);
  const circleRef = useRef(null);

  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    const newAccuracy = pos.coords.accuracy;

    setMarkers([{ position: [lat, lng] }]);
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

  const customIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [32, 32], // Ajustez la taille en fonction de vos besoins
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer center={[51.505, -0.09]} zoom={5} style={{ height: '550px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position} icon={customIcon}>
          {/* Vous pouvez ajouter un Popup si nécessaire */}
          {/* <Popup>
            Marqueur {index + 1}
          </Popup> */}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
