import React from "react";
import NavBar from "../Componentes/navbar/Navbar";
import styled from "styled-components";
import Globo from "../Componentes/Word/Globlo";


const Container = styled.div `
background: black;
`;

const Ts = () => {
    return(
        <Container>
            
            <Globo></Globo>
            
        
        </Container>
    )
}

export default Ts;