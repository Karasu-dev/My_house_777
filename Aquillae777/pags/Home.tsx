import React from "react";
import Hero from "../Componentes/hero/hero";
import Who from "../Componentes/who/who";
import Whors from "../Componentes/works/works";
import Contact from "../Componentes/contact/Contact";
import styled from "styled-components";



const Container = styled.div`
height: auto;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fbr.depositphotos.com%2Fstock-photos%2Funivers.html&psig=AOvVaw0yIyd2tvvlCDwK5WDSUNpF&ust=1681939374865000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjW48mutP4CFQAAAAAdAAAAABAE");
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