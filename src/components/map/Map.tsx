import React, { useEffect } from 'react';

import Leaflet, { Icon, LatLngExpression } from 'leaflet';

import { MapI } from '../../interfaces/components/maps';

import classes from './Map.module.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';

const Map: React.FC<MapI> = (props) => {
    const { address, location, zoom } = props;

    useEffect(() => {
        const center: LatLngExpression = [location.lat, location.lng];
        
        var map = Leaflet.map('place-map').setView(center, zoom);
        
        Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        const popup = Leaflet.popup({ closeButton: false }).setContent(address);

        Leaflet.marker(center, {
            icon: new Icon({
                iconUrl: markerIcon,
            }),
        })
            .addTo(map)
            .bindPopup(popup);
    }, [address, location, zoom]);

    return <div id="place-map" className={classes['map-container']}></div>;
};

export default Map;
