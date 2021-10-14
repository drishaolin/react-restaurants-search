import styled from "styled-components";
import restaurantMock from "../../assets/restaurant-mock.jpg";

const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;
const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    font-size: 14px;
    height: fit-content;
    color: #ffffff;
    background-color: #00000045;
`;

export default function ImageCard({ restaurant }) {
    return (
        <Card photo={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantMock}>
            <Title>{restaurant.name}</Title>
        </Card>
    );
}
