import { useState } from "react";
import { Container, Logo, Search, Wrapper } from "./styles";
import TextField, { Input } from "@material/react-text-field";
import MaterialIcon from "@material/react-material-icon";

import logo from "../../assets/logo.svg";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
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
                </Search>
            </Container>
            
        </Wrapper>
    );
}
