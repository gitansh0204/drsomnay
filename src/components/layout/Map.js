import React, { useRef, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px"
};
//40.673200585818705, -73.70954654277494
const center = {
    lat: 40.71114970362882, lng:-73.7678641853551
};

const locations = [
  // {
  //   name: "New York-Presbyterian Queens Hospital",
  //   coordinates: { lat: 40.71114970362, lng: -73.82531211999942 }
  // },
  // {
  //   name: "Mercy Hospital-Rockville Centre",
  //   coordinates: { lat: 40.68874907164363, lng: -73.63155001322579 }
  // },
  {
    name: "Doctor Address 1",
    coordinates: { lat: 40.673200585818705, lng:-73.70954654277494}
  },
  {
    name: "Doctor Address 2",
    coordinates: { lat: 40.74909882143894, lng: -73.82618182893525}
  }
];
function Map() {
  const mapRef = useRef(null);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAjb5iLrm50dW6lq_MzuxHMeKIARfUUHRk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={11}
        // options={{ styles: mapStyles }}
        ref={mapRef}
      >
        {locations.map((location, index) => {
          return (
            <Marker
              key={index}
              position={location.coordinates}
              label={location.name}
            />
          );
        })}
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
