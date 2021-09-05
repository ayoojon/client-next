import React from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { MAP_KEY } from '@/config/index';

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const center = {
    lat: latitude,
    lng: longitude,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: MAP_KEY,
  });

  return (
    <>
      {loadError && <p>{loadError}</p>}
      {isLoaded ? (
        <GoogleMap center={center} zoom={14} mapContainerClassName="h-full">
          <Marker
            icon={{
              url: '/event.svg',
              origin: new window.google.maps.Point(0, 0),
              scaledSize: new window.google.maps.Size(50, 50),
            }}
            position={center}
          />
        </GoogleMap>
      ) : (
        <h1>No Map Found</h1>
      )}
    </>
  );
};

export default Map;