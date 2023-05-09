import React from "react";
import NavBar from "../Componentes/navbar/Navbar";
import styled from "styled-components";
import Globlo from "../Componentes/Word/Globlo";

const Container = styled.div `
background: black;
`;

const Ts = () => {
    return(
        <Container>
            
            <Globlo></Globlo>
        
        </Container>
    )
}

export default Ts;