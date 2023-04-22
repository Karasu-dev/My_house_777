import React from "react";
import styled from "styled-components";
import Img from "../../Img/i349388.webp"
import Navbar from "../Componentes/TEST/Navbar"

const Container = styled.div`
height: auto;
scroll-snap-type: y mandatory;
scroll-behavior: smooth;
overflow-y: auto;
scrollbar-width: none;
color: white;
background: url(${Img});
&::-webkit-scrollbar{
  display: none;
}`;


const Java = () => {
 return(
   <Container>
    <Navbar></Navbar>
        

 
   </Container>
 
  
    
  
 )
}

export default Java;