import React from "react";
import styled,{ keyframes } from "styled-components";

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
background: transparent;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
animation: box 2s infinite ease alternate ;
@keyframes box {
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
background: transparent;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
animation: box 2s infinite ease alternate ;
@keyframes box {
  to {
    transform: translateY(30px);
  }
}


`

const Container2 = styled.div`
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
background: transparentrent ;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;
animation: box 2s infinite ease alternate ;
@keyframes box {
  to {
    transform: translateY(30px);
  }
}


`
const Button = styled.button`

`

const box = styled.a`

`

const Carrosel = () => {
    return(
    <Section>
        <Container>

            
            <Box1> 
                <box> Java </box>
                <Img> </Img>
                <List> 
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                </List>
                 <Button> Projects</Button>   
            </Box1>

            <Box2> 
                <box> Typescript </box>
                <Img> </Img>
                <List> 
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                    <Ferramentas> teste </Ferramentas>
                </List>
                 <Button> Projects</Button>   
            </Box2>
    

            
            <Box3> 
                <box> Assembly and C </box>
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