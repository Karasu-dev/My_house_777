import React from "react";
import Hero from "../Componentes/hero/hero";
import Who from "../Componentes/who/who";
import Whors from "../Componentes/works/works";
import Contact from "../Componentes/contact/Contact";
import Cubo from "../Componentes/Cubo/cube";
import styled from "styled-components";



const Container = styled.div`
height: auto;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url(../img/6481298.jpg);
z-index: -10;
background: black
&::-webkit-scrollbar{
  display: none;
}`;

const Home = () => {
    return (

        <Container>

            <Hero />

            <Who />

            <Whors />

            <Contact />

        </Container>






    )
}

export default Home;