import { useState } from "react";
import {
    Carousel,
    CarouselTitle,
    Container,
    Logo,
    Search,
    Wrapper,
    ModalTitle,
    ModalContent,
} from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import logo from "../../assets/logo.svg";

import { ImageCard, Loader, Map, Modal, RestaurantCard, Skeleton } from "../../components";
import { useSelector } from "react-redux";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

    function handleKeyPress(e) {
        if (e.key === "Enter") {
            setQuery(inputValue);
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return (
        <Wrapper>
            <Container>
                <Search>
                    <Logo src={logo} alt="logo restaurant find" />
                    <TextField
                        label="Pesquisar Restaurantes"
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search" />}
                    >
                        <Input
                            value={inputValue}
                            onKeyPress={handleKeyPress}
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                        />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>Na sua Área</CarouselTitle>
                            <Carousel {...settings}>
                                {restaurants.map((restaurant) => (
                                    <ImageCard key={restaurant.place_id} restaurant={restaurant} />
                                ))}
                            </Carousel>
                        </>
                    ) : (
                        <Loader />
                    )}
                </Search>
                {restaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.place_id}
                        onClick={() => handleOpenModal(restaurant.place_id)}
                        restaurant={restaurant}
                    />
                ))}
            </Container>
            <Map query={query} placeId={placeId} />
            <Modal isOpen={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
                {restaurantSelected ? (
                    <>
                        <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                        <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                        <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                        <ModalContent>
                            {restaurantSelected?.opening_hours?.open_now
                                ? "Aberto agora!"
                                : "Fechado neste momento..."}
                        </ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </>
                )}
            </Modal>
        </Wrapper>
    );
}
