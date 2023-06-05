import React from "react";
import styled, { Keyframes, keyframes } from "styled-components";

const Section = styled.div`
height: 200vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 780px) {
  height: 250vh;
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
    transform: translate(-2%, 10%);
  }

}`

const Title = styled.h3`
Font-size: 30px;
height: 200px;
width: 300px;

`


const List = styled.div`

`
const Img = styled.image`
`

const Ferramentas = styled.li`
Font-size: 20px;

`

const ContainerBox = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;



@media only screen and (max-width: 780px) {
  display: inline;
  height: auto;
  display: block;
   
  
}


`

const Box1 = styled.div`
padding: 5px;
margin: 10px;
width: 50%;
height: 400px;
color: red;
border-width: 5px;


animation: box1 10s infinite ease alternate ;
@keyframes box1 {
  to {
    transform: translateY(200px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
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
color: blue;
border-width: 5px;



animation: box2 10s infinite ease alternate ;
@keyframes box2 {
  to {
    transform: translateY(100px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
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
margin: 10px;
width:50%;
height: 400px;
color:pink;
border-width: 5px;

animation: box3 10s infinite ease alternate ;
@keyframes box3 {
  to {
    transform: translateY(150px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
  margin: 60px;
  @keyframes box3 {
    to {
      transform: translateY(100px);
    }
  }

}
`
const Box4 = styled.div`
color: green;
padding: 5px;
margin: 10px;
height: 400px;
border-width: 5px;
width:50%;
box-shadow: rgba(0, 255, 88, 0.) 5px 5px, rgba(0, 255, 88, 0.4) 10px 10px, rgba(0, 255, 88, 0.3) 15px 15px, rgba(0, 255, 88, 0.2) 15px 15px, rgba(0, 255, 88, 0.1) 20px 20px, rgba(0, 255, 88, 0.0) 25px 25px;


animation: box4 4s infinite ease alternate ;
@keyframes box4 {
  to {
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
  margin: 80px;
  animation: box4 10s infinite ease alternate ;
  @keyframes box4 {
    to {
      transform: translateY(100px);
    }
  }

 
}
`

const Box5 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 500px;
border-style: solid;
border-width: 5px;

box-shadow: rgba(240, 46, 170, 0.4) -5px 10px, rgba(240, 46, 170, 0.3) -15px 20px, rgba(240, 46, 170, 0.2) -20px 25px, rgba(240, 46, 170, 0.1) -25px 30px, rgba(240, 46, 170, 0.05) -30px 35px;


animation: box1 1s infinite ease alternate ;
@keyframes box1 {
  to {
    transform: translateY(70px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
  

 
}


`

const Box6 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 550px;
border-style: solid;
border-width: 5px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;


animation: box2 1s infinite ease alternate ;
@keyframes box2 {
  to {
    transform: translateY(70px);
  }
}

@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
}
`



const Box7 = styled.div`
padding: 5px;
margin: 10px;
width:50%;
height: 600px;
border-style: solid;
border-width: 5px;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;

animation: box3 1s infinite ease alternate ;
@keyframes box3 {
  to {display: flex;
    justify-content: space-between;
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
}
`
const Box8 = styled.div`
padding: 5px;
margin: 10px;
height: 650px;
border-style: solid;
border-width: 5px;
width:50%;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;


animation: box4 1s infinite ease alternate ;
@keyframes box4 {
  to {
    transform: translateY(70px);
  }
}
@media only screen and (max-width: 780px) {
  height: auto;
  width: auto;
  padding: 10px;
 
}
`

const Titlex = styled.h1`
font-size: 74px;



`;



const Carrosel = () => {
  return (
    <Section>
      <Container> 
        <Titlex> Linguagens</Titlex>
    
        <ContainerBox>    
          <Box1>
            <Title> Java </Title>
            
            <Img> </Img>

            <List>
            
              <Ferramentas> Spring </Ferramentas>
              <Ferramentas> intelij </Ferramentas>
              <Ferramentas>  </Ferramentas>
              
              
            </List>
            <Button> Projects</Button>
          </Box1>

          <Box2>
            <Title> Typescript </Title>
            <Img> </Img>
            <List>
              <Ferramentas> Vscode</Ferramentas>
              <Ferramentas> Nodsjs </Ferramentas>
              <Ferramentas> vercel </Ferramentas>

              
              
            </List>
            <Button> Projects</Button>
          </Box2>


          <Box3>
            <Title> SQL</Title>
            <Img> </Img>
            <List>
              <Ferramentas> Vim </Ferramentas>
              <Ferramentas> . </Ferramentas>
              <Ferramentas>  . </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box3>


          <Box4>
            <Title> Assembly and C </Title>
            <Img> </Img>
            <List>
              <Ferramentas> Nasm </Ferramentas>
              <Ferramentas> gcc </Ferramentas>
            </List>
            <Button> Projects</Button>
          </Box4>

          

         </ContainerBox> 

      
        </Container>
    </Section>)
}
export default Carrosel;