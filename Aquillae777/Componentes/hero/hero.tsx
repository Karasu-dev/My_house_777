
import React from "react-dom";
import NavBar from "../navbar/Navbar";
import Who from "../who/who";
import styled from "styled-components";
import {GoOctoface} from "react-icons/go";
import IMG from "../../../Img/aquillae.webp"

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 600px) {
  height: 200vh;
}
`;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 600px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 600px) {
  flex: 1;
  align-items: center;

}
`;

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
}
`;

const Title = styled.h1`
font-size: 74px
 @media only screen and (max-width: 768px){
  text-aling: center;
 }
 animation: title 5s infinite ease alternate ;
@keyframes title {
  to {
    transform: translateY(30px);
  }
}
`;

const Whatwedo = styled.div`
   display: flex;
   aling-items: center;
   gap: 10px
   

`;

const SUbtitle = styled.h2`
font-size: 20px;
color: white;
animation: SUbtitle 5s infinite ease alternate ;
@keyframes SUbtitle  {
  to {
    transform: translateY(40px);
  }
}

`;


const Desc = styled.p`
 font-size: 20px;
 @media only screen(max-witdh: 768px){
  padding: 20px;
  text-aling: center;

`;

const Button = styled.button`
background-color: black;
color: white;
width: 120px;
height: 30px;
border-radius: 10px;
box-shadow: 4px 3px lightblue;
animation: button 5s infinite ease alternate ;
@keyframes button {
  to {
    transform: translateY(50px);
  }
}

`;

const Line = styled.img`
height: 5px;

`;

const Img = styled.img`
width: 800px;
height: 600px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;

@media only screen and (max-width: 768px) {
  width: 300px;
  height: 300px;
}

@keyframes animate {
  to {
    transform: translateY(60px);
  }
}



`;


export const Hero = () => {
    return (

        <Section>
            <NavBar/>
            <Container>
              <Left> 
                <Title> Aquillae7</Title>
                <Whatwedo>
                  <Line src=""/>
                  <SUbtitle> Este site vai conter todos os meus projetos que serão postados mensalmente aqui, e no botão a baixo pode baixar e utilizar esses projetos </SUbtitle>
                </Whatwedo>
                <Desc>  </Desc>
                <Button> GitHub <GoOctoface/></Button>
              </Left>
              <Right> 
                <Img src={IMG} className="circle"/>
              </Right>
            </Container>
        </Section>


    )
}
export default Hero;