import { useState } from 'react';
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

export const MapContainer =  (props) => {
    //necessário armazenar o estado do mapa para ter acesso ao place service nas buscas
    const [map, setMap] = useState(null);
    const { google } = props;

    

    return(<Map google={google} centerAroundCurrentLocation ></Map>);
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: 'pt-BR',
})(MapContainer);
