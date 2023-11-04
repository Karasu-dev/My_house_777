import React  from "react";
import styled from "styled-components";
import {GoOctoface} from "react-icons/go";
import Cubo from "../Cubo/cube" ;
import { EmailJSResponseStatus } from "@emailjs/browser";

const text = [
"Este site vai conter todos os meus projetos que serão postados mensalmente aqui, e no botão a baixo pode baixar e utilizar esses projetos ",
];


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
align-items: center;
justify-content: center;

@media only screen and (max-width: 768px) {
  height: 200vh;
}
`;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;




export const Who = () => {
    return (

        <Section>
            <Container>
     
            </Container>
        </Section>


    )
}
export default Who;