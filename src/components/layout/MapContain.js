import React from 'react';
import Map from './Map';

const mapStyle = [
  // Custom map style JSON object
  // ...
];

function MapContain() {
  return (
    <div>
      <Map mapStyle={mapStyle} />
    </div>
  );
}

export default MapContain;
