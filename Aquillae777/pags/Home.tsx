import React from "react";
import Hero from "../Componentes/hero/hero";
import Who from "../Componentes/who/who";
import Whors from "../Componentes/works/works";
import styled from "styled-components";
import Globlo from "../Componentes/Word/Globlo";
import Carrosel from "../Componentes/Stacks/Carrosel";
import Contact from "./Contact";
import mp3 from "../../Img/backaudio.mp3";


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
            <Audio  autoPlay={true} loop src={mp3}/>
            <Hero />
            <Carrosel/>
            <Whors></Whors>
            <Contact></Contact>     
            <Globlo/>
        </Container>
    )
}
export default Home;