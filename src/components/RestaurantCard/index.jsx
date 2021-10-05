import { Adress, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from "./styles";
import ReactStars from "react-rating-stars-component";
import restaurant from '../../assets/restaurant-mock.jpg'

export default function RestaurantCard() {
    return (
        <Restaurant>
            <RestaurantInfo>
                <Title>Nome do restaurante</Title>
                <ReactStars count={5} isHalf value={4} edit={false} activeColor="#e7711c" />
                <Adress>Av Paulista, 2500</Adress>
            </RestaurantInfo>
            <RestaurantPhoto src={ restaurant } alt="Imagem do Restaurante" />
        </Restaurant>
    );
}
