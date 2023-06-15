import React from "react";
import styled, { Keyframes, keyframes } from "styled-components";
import IMG from "../../../Img/Meu projeto.png";
import IMGdois from "../../../Img/iconw/java.png";
import IMGtres from "../../../Img/iconw/typescript.png";
import IMGquatro from "../../../Img/iconw/sql-server.png";
import IMGcinco from "../../../Img/iconw/dados-binarios.png";



const Section = styled.div`
height: 150vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 780px) {
  height: 290vh;
  display: flex;
  justify-content: space-between;
}

`
const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: block;


justify-content: space-between;

@media only screen and (max-width: 780px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;


const Key = keyframes`

  0% {
      transform: translate(0)
  }
  20% {
      transform: translate(-5px, 5px)
  }
  40% {
      transform: translate(-5px, -5px)
  }
  60% {
      transform: translate(5px, 5px)
  }
  80% {
      transform: translate(5px, -5px)
  }
  to {
      transform: translate(0)
  }
}`


const Button = styled.button`
cursor: pointer;
background: black;
text-transform: uppercase;
outline: transparent;
letter-spacing: 6px;
border: 0;
min-width: 10px;
height: 10px;
line-height: 5px;
transition:  background 0.100s;
transform: translate(-2%, 1100%);
text-decoration: none;
color: #fff;
  &:before, &:after {
      display: block;
      content: 'Projects';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      opacity: .8;
  } &:after {
      color: #f0f;
      z-index: -2;
  } &:before {
      color: blue;
      z-index: -1;
  }
}
  {
  &:before {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) both infinite
  }
  &:after {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) reverse both infinite
  }
  @media only screen and (max-width: 780px) {
    transform: translate(-2%, 1100%);
  }
}`

const Title = styled.h3`
Font-size: 30px;
height: 200px;
width: 300px;
`


const Ferramentas = styled.li`
Font-size: 20px;
pointer: none;
height: 25px;
widht: 1px;

`

const ContainerBox = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
height: 650px;
@media only screen and (max-width: 780px) {
  display: inline;
  height: auto;
  display: block;
}`

const Box1 = styled.div`
padding: 5px;
margin: 10px;
width: 50%;
height: 400px;
color: ;
background: rgba(255, 0, 0, 0.50);
border-width: 5px;
border-radius: 20px;
box-shadow: rgba(217, 24, 22, 0.4) -5px 10px, rgba(217, 24, 22, 0.3) -15px 20px, rgba(217, 24, 22, 0.2) -20px 25px, rgba(217, 24, 22, 0.1) -25px 30px, rgba(217, 24, 22, 0.0) -30px 35px;
animation: box1 10s infinite ease alternate ;
@keyframes box1 {
  to {
    transform: translateY(200px);
  }
}
@media only screen and (max-width: 780px) {
  height: 400px;
  width: auto;
  padding: 15px;
  margin: 40px;
  animation: box1 10s infinite ease alternate ;
  transform: translateY(-1px);
  @keyframes box1 {
    to {
      transform: translateY(100px);
    }
  }
  

}
`

const Box2 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 400px;
color: ;
border-width: 5px;
background: rgba(0, 0, 255, 0.50);
border-radius: 20px;
box-shadow: rgba(0, 38, 255, 0.4) -5px 10px, rgba(0, 38, 255,  0.3) -15px 20px, rgba(0, 38, 255,  0.2) -20px 25px, rgba(0, 38, 255,  0.1) -25px 30px, rgba(217, 24, 22, 0.0) -30px 35px;
animation: box2 10s infinite ease alternate ;
@keyframes box2 {
  to {
    transform: translateY(100px);
  }
}

@media only screen and (max-width: 780px) {
  height: 400px;
  width: auto;
  padding: 10px;
  margin: 50px;
  @keyframes box2 {
    to {
      transform: translateY(100px);
    }
  }
  

}
`

const Box3 = styled.div`
padding: 5px;
margin: 10p  box-shadow: 0px 8px 16px 0px rgba(2);
x;
width:50%;
height: 400px;
color:pink;
border-width: 5px;
background: rgba(255, 255, 0, 0.1);
border-radius: 20px;
box-shadow: rgba(255, 255, 0,
 0.4) -5px 10px, rgba(255, 255, 0,
  0.3) -15px 20px, rgba(255, 255, 0,
  0.2) -20px 25px, rgba(255, 255, 0,
  0.1) -25px 30px, rgba(255, 255, 0,
 0.0) -30px 35px;



animation: box3 10s infinite ease alternate ;
@keyframes box3 {
  to {
    transform: translateY(150px);
  }
}
@media only screen and (max-width: 780px) {
  height: 400px;
  width: auto;
  padding: 10px;
  margin: 50px;
  @keyframes box3 {
    to {
      transform: translateY(100px);
    }
  }

}
`

const Box4 = styled.div`
color: ;
padding: 5px;
margin: 10px;
height: 400px;
border-width: 5px;
width:50%;
background: rgba(0, 255, 0, 0.50);
border: 2px;
border-radius: 20px;
box-shadow: rgba(0, 255, 132, 0.4) -5px 10px, rgba(0, 255, 132, 0.3) -15px 20px, rgba(0, 255, 132, 0.2) -20px 25px, rgba(0, 255, 132, 0.1) -25px 30px, rgba(0, 255, 132, 0.0) -30px 35px;



animation: box4 4s infinite ease alternate ;
@keyframes box4 {
  to {
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: 400px;
  width: auto;
  padding: 10px;
  margin: 50px;
  animation: box4 10s infinite ease alternate ;
  @keyframes box4 {
    to {
      transform: translateY(100px);
    }
  }

 
}
`

const Img = styled.img` 
padding: 10px;
margin: 10px;
gap: 10px;
width: 60px;
height; 50px;
right: 1px;
position: absolute;
`;




const ContainerText = styled.div`
height: 400px;
display: flex;
align-items: center;
border: solid;
background: black;



`;

const Title1 = styled.h1`
font-size : 50px;

`;

const Sub = styled.p`
font-size : 25px;

`;






const Carrosel = () => {
  return (
    <Section>
      <Container>  


=          
    
        <ContainerBox>    
              
          <Box1>
            <Title>Java <Img src={IMGdois}/></Title> 
            

        
            
              <Ferramentas > Spring  boot </Ferramentas>
              <Ferramentas> intelij </Ferramentas>
              <Ferramentas>  jsf</Ferramentas>
              
              
           </Box1>

          <Box2>
            <Title> Typescript <Img src={IMGtres}/> </Title>
            
        
              <Ferramentas> Vscode</Ferramentas>
              <Ferramentas> Node </Ferramentas>
              <Ferramentas> vercel </Ferramentas>
              <Ferramentas> React </Ferramentas>


              
              
           </Box2>


        


          <Box4>
            <Title>Assembly and c<Img src={IMGcinco}/></Title>
          
              <Ferramentas> Nasm </Ferramentas>
              <Ferramentas> gcc </Ferramentas>
             </Box4>
         </ContainerBox>
        </Container>
    </Section>)
}
export default Carrosel;


/*     <Box3>
            <Title> SQL <Img src={IMGquatro}/></Title>
        
              <Ferramentas> Vim </Ferramentas>
              <Ferramentas> . </Ferramentas>
              <Ferramentas>  . </Ferramentas>
          
            <Button> Projects</Button>
          </Box3>*/