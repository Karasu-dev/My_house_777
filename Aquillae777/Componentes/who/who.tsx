import React  from "react";
import styled from "styled-components";
import {GoOctoface} from "react-icons/go";
import Cubo from "../Cubo/cube" 


const text = [
" Nós nunca paramos o movimento constante gera formas novas, vamos lá ",
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

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

animation: left 1s infinite ease alternate ;
 @keyframes left {
  to {
    transform: translateY(100px);
  }
}

@media only screen and (max-width: 768px) {
  flex: 1;
  align-items: center;
}
`;

const Right = styled.div`
flex: 3;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

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
 animation: title 6s infinite ease alternate ;
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
animation: animate 6s infinite ease alternate;
@keyframe animate{
  Subtitle{
    transform: translateY(40px);
  }
}
`;



const Button = styled.button`
background-color: black;
color: white;
width: 120px;
height: 30px;
border-radius: 10px;
box-shadow: 4px 3px lightblue;
animation: animate 7s  infinite ease alternate;
@keyframe animate{
  Button{
    tranform: tranlateY(55px);
  }
}
`;

;



export const Who = () => {
    return (

        <Section>
            <Container>
              <Left> 
                <Cubo/>
              </Left>
              <Right> 
                <Title> Aquillae777</Title>
                <Whatwedo>
                  {text.map((item) => ( <SUbtitle> {text}</SUbtitle>))}                 
                </Whatwedo>
                <Button> GitHub <GoOctoface/></Button>
              </Right>
            </Container>
        </Section>


    )
}
export default Who;