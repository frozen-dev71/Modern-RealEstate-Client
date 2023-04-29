import { Icon } from 'leaflet';
import markerIcon from '../../../assets/images/marker.png';

export const icon = new Icon({
  iconUrl: markerIcon,
  iconSize: [45, 45],
});

export const apiKey = `${import.meta.env.VITE_MAPBOX_KEY}`;

export const attributionText = `&copy
<a href="https://www.mapbox.com/about/maps">Mapbox</a> &copy; 
<a href="http://osm.org/copyright">OpenStreetMap</a> 
<strong><a href="https://www.mapbox.com/map-feedback" target="_blank">Improve this map</a></strong>`;
