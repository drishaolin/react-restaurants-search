import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

import { setRestaurant, setRestaurants } from "../../redux/modules/restaurants";

export const MapContainer = (props) => {
    const dispatch = useDispatch();
    const { restaurants } = useSelector((state) => state.restaurants);
    //necessário armazenar o estado do mapa para ter acesso ao place service nas buscas
    const [map, setMap] = useState(null);
    const { google, query, placeId } = props;

    useEffect(() => {
        if (query) {
            searchByQuery(query);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query]);

    //efeito chamado ao clicar em um restaurante (para popular modal de acordo com placeId)
    useEffect(() => {
        if (placeId) {
            getRestaurantById(placeId);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [placeId]);

    function getRestaurantById(placeId) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurant(null)); //limpar as informações ao abrir novo modal

        const request = {
            placeId,
            fields: ["name", "opening_hours", "formatted_address", "formatted_phone_number"],
        };
        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log("place", place);
                dispatch(setRestaurant(place));
            }
        });
    }

    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([])); //limpar restaurantes a cada nova busca

        const request = {
            location: map.center,
            radius: "200",
            type: ["restaurant"],
            query,
        };
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results));
            }
        });
    }

    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map);
        dispatch(setRestaurants([]));

        const request = {
            location: center,
            radius: "20000",
            type: ["restaurant"],
        };
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log("restaurantes", results);
                dispatch(setRestaurants(results));
            }
        });
    }

    function onMapReady(_, map) {
        setMap(map);
        searchNearby(map, map.center);
    }

    return (
        <Map
            google={google}
            centerAroundCurrentLocation
            onReady={onMapReady}
            onRecenter={onMapReady}
            {...props}
        >
            {restaurants.map((restaurant) => (
                <Marker
                    key={restaurant.place_id}
                    name={restaurant.name}
                    position={{
                        lat: restaurant.geometry.location.lat(),
                        lng: restaurant.geometry.location.lng(),
                    }}
                />
            ))}
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    language: "pt-BR",
})(MapContainer);
