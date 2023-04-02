
import React from "react-dom";
import NavBar from "../navbar/Navbar";
import "./style.scss";
import styled from "styled-components";


const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

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

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px) {
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

`;

const Whatwedo = styled.div`
   display: flex;
   aling-items: center;
   gap: 10px

`;

const SUbtitle = styled.h2`

`;


const Desc = styled.p`
 font-size: 20px;
 @media only screen(max-witdh: 768px){
  padding: 20px;
  text-aling: center;
 }

`;

const Button = styled.button`

`;

const Line = styled.img`
height: 5px;

`;

const Img = styled.img`

`;

export const Hero = () => {
    return (

        <Section>
            <NavBar />
            <Container>
              <Left> 
                <Title>Eu sou </Title>
                <Whatwedo>
                  <Line src=""/>
                  <SUbtitle>ESte é um site </SUbtitle>
                </Whatwedo>
                <Desc> okokokokokok </Desc>
                <Button> Ação  </Button>
              </Left>
              <Right> 
                <Img src="/img/aquillae-unscreen.gif"/>
              </Right>
            </Container>
        </Section>


    )
}
export default Hero;