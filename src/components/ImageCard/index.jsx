import { useEffect, useState } from "react";
import styled from "styled-components";
import { Skeleton } from "..";
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
    const photo = restaurant.photos ? restaurant.photos[0].getUrl() : restaurantMock;
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        //instanciamos uma imagem pois card é uma div com background e não possui propriedade onload:
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]);
    return (
        <>
            {imageLoaded ? (
                <Card photo={photo}>
                    <Title>{restaurant.name}</Title>
                </Card>
            ) : (
                <Skeleton width="90px" height="90px" />
            )}
        </>
    );
}
