import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import mapskey from "../googlemaps";

import "../App.css";

const Map = ({ location, zoomLevel }) => (
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div style={{ width: "50%", height: "50vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapskey }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
