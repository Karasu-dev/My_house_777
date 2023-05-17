import React from "react";
import Hero from "../Componentes/hero/hero";
import Who from "../Componentes/who/who";
import Whors from "../Componentes/works/works";
import Contact from "../Componentes/contact/Contact";
import styled from "styled-components";
import Img from "../../Img/i349388.webp"
import Globlo from "../Componentes/Word/Globlo";

const Container = styled.div`
height: auto;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;

&::-webkit-scrollbar{
  display: none;
}`;

const Home = () => {
    return (
        <Container>
            <Hero />
            <Who />
            <Whors />
            <Contact/>
            <Globlo/>
        </Container>
    )
}
export default Home;