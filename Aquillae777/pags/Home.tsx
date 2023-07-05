import React from "react";
import Hero from "../Componentes/hero/hero";
import Whors from "../Componentes/works/works";
import styled from "styled-components";
import Globlo from "../Componentes/Word/Globlo";
import Carrosel from "../Componentes/Stacks/Carrosel";
import Contact from "../Componentes/Contact/Contact";
import mp3 from "../../Img/backaudio.mp3";
import Who from "../Componentes/who/who";


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

const Audio = styled.audio `



`


const Home = () => {
    return (
        <Container>
            <Audio autoPlay={true} loop src={mp3} muted={false} />
            <Hero />
            <Carrosel/>
            <Whors/>
            <Who></Who>
            <Contact/>   
            <Globlo></Globlo>  
        </Container>
    )
}
export default Home;