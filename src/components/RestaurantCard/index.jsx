import { Adress, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from "react-rating-stars-component";
import restaurantMock from "../../assets/restaurant-mock.jpg";

export default function RestaurantCard({ restaurant, onClick }) {
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
                src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantMock}
                alt="Imagem do Restaurante"
            />
        </Restaurant>
    );
}
