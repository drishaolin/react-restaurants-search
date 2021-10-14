import { useState, useEffect } from 'react';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer =  (props) => {
    //necessário armazenar o estado do mapa para ter acesso ao place service nas buscas
    const [map, setMap] = useState(null);
    const { google, query } = props;

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    }, [query]);

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: map.center,
            radius: '200',
            type: ['restaurant'],
            query,
        };
        service.textSearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('restaurantes query', results);
            }
        })
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);

        const request = {
            location: center,
            radius: '20000',
            type: ['restaurant'],
        };
        service.nearbySearch(request, (results, status) => {
            if(status === google.maps.places.PlacesServiceStatus.OK) {
                console.log('restaurantes', results);
            }
        })
    }

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center);

    }

    return(<Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady}></Map>);
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);
