import { Adress, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from "react-rating-stars-component";
import restaurantMock from "../../assets/restaurant-mock.jpg";
import { useState } from "react";
import  Skeleton  from "../Skeleton";

export default function RestaurantCard({ restaurant, onClick }) {
    const[imageLoaded, setImageLoaded] = useState(false);

    return (
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars
                    count={5}
                    isHalf
                    value={restaurant.rating}
                    edit={false}
                    activeColor="#e7711c"
                />
                <Adress>{restaurant.vicinity || restaurant.formatted_address}</Adress>
            </RestaurantInfo>
            <RestaurantPhoto
                imageLoaded={imageLoaded}
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantMock}
                onLoad={() => setImageLoaded(true)}
                alt="Imagem do Restaurante"
            />
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );
}
