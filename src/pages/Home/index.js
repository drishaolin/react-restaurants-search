import { useState } from "react";
import { Carousel, CarouselTitle, Container, Logo, Map, Search, Wrapper } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import logo from "../../assets/logo.svg";
import restaurant from '../../assets/restaurant-mock.jpg';

import { ImgCard } from '../../components';

export default function Home() {
    const [inputValue, setInputValue] = useState("");

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
    };

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
                            onChange={(e) => setInputValue(e.currentTarget.value)}
                        />
                    </TextField>
                    <CarouselTitle>Na sua Área</CarouselTitle>
                    <Carousel {...settings}>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        <ImgCard photo={restaurant} title="Nome do Restaurante"/>
                        
                    </Carousel>
                </Search>
            </Container>
            <Map />
        </Wrapper>
    );
}
