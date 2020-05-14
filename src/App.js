import React from 'react';
import { Map, Marker, Popup, TileLayer} from "react-leaflet";
import { Icon } from "leaflet";
import './App.css';


export default function App() {
  return (
    <Map center = {[59.33, 18.06]} zoom={14} onclick={function(e) {
      alert(e.latlng);
    }}>
      <TileLayer
       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
       attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
    />
      
      <Marker
        key={[1]}
        position={[59.33, 18.06]}
      >
        <Popup>
          This is that text after the click..
        </Popup>
      </Marker>
    
    </Map>

  );
}

