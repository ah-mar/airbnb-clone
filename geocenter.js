import {  getCenter } from "geolib";

function geoCenter(searchResults) {
    const geoArray = searchResults.map(({ lat, long }) => ({
      latitude: lat,
      longitude: long,
    }));
    const center = getCenter(geoArray);
    

  return { longitude: center.longitude, latitude: center.latitude };
}

export default geoCenter;
