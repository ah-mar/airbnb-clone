import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "!mapbox-gl";
import { getDistance, getCenter } from "geolib";
import { useEffect, useRef, useState } from "react";
import geoCenter from "../geocenter"

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;

function MapApp({searchResults}) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(geoCenter(searchResults).longitude);
  const [lat, setLat] = useState(geoCenter(searchResults).latitude);
  const [zoom, setZoom] = useState(10);

console.log(geoCenter(searchResults).latitude)

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/ahmar-ali/cl4zq2sx5001814jq2449tgor",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
        const marker1 = new mapboxgl.Marker()
        .setLngLat([-0.0022275, 51.5421655])
        .addTo(map.current);

        searchResults.map((item)=> {
            console.log("lat is", item.lat, item.long)
            new mapboxgl.Marker({
              color: "#fe595e",
            })
              .setLngLat([item.long, item.lat])
              .setPopup(new mapboxgl.Popup().setHTML(`<h1>${item.title}</h1>`))
              .addTo(map.current);
        })

  })


  return <div ref={mapContainer} className="h-screen" />;
}

export default MapApp;
