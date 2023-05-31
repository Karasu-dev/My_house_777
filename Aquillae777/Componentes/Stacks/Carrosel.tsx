import React from "react";
import styled, {Keyframes, keyframes} from "styled-components";

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

`
const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;

`
const List = styled.div`

`
const Img = styled.image`
color: blue;
`

const Ferramentas = styled.li`
width: 10px;
padding: 2px;

`

const Box1 = styled.div`
flex: 0 0 22vw;
height: 22vw;list-style-type: none;
box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;
border-radius: 6px;
padding: 1em;
margin: 2em;
flex: 0 0 17.3vw;
height: 17.3vw;
display: block;
background: transpa;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
animation: title 5s infinite ease alternate ;
@keyframes title {
  to {
    transform: translateY(30px);
  }
}

`

const Box2= styled.div`
flex: 0 0 22vw;
height: 22vw;
list-style-type: none;
box-shadow: rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;

border-radius: 6px;
padding: 1em;
margin: 2em;
flex: 0 0 17.3vw;
height: 17.3vw;
display: block;
background: transpa;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
animation: title 5s infinite ease alternate ;
@keyframes title {
  to {
    transform: translateY(30px);
  }
}


`



const Box3 = styled.div`
flex: 0 0 22vw;
height: 22vw;list-style-type: none;
box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
border-radius: 6px;
padding: 1em;
margin: 2em;
flex: 0 0 17.3vw;
height: 17.3vw;
display: inline-block;
background: transparent ;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
animation: title 5s infinite ease alternate ;
@keyframes title {
  to {
    transform: translateY(30px);
  }
}


`
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
line-height: 50px;
transition:  background 0.100s;
transform: translate(-100%, 1000%);

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
}`

const Title = styled.h3`

`

const Text= styled.h1`

 display: inline;

`

const ContainerText = styled.div`
`

const Carrosel = () => {
    return(
    <Section>
        <Container>
          <ContainerText> 
          <Text> Linguagens e Ferramentas</Text>
          </ContainerText>



            
            <Box1> 
                <Title> Java </Title>
                <Img> </Img>
                <List> 
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                </List>
                 <Button> Projects</Button>   
            </Box1>

            <Box2> 
                <Title> Typescript </Title>
                <Img> </Img>
                <List> 
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                </List>
                 <Button> Projects</Button>   
            </Box2>
    

            
            <Box3> 
                <Title> Assembly and C </Title>
                <Img> </Img>
                <List> 
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                </List>
                 <Button> Projects</Button>   
            </Box3>

            
        </Container>
     </Section>)
}
export default Carrosel ;