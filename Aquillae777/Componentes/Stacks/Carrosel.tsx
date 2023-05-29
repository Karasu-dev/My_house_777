import React from "react";
import styled from "styled-components";

const Section = styled.div`

`
const Container = styled.div`
display : inline-block ;


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
background: #fff;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;

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
background: #fff;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;


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
display: block;
background: #fff;
transition: all 300ms;
color: #555;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
overflow: hidden;


`
const Button = styled.button`

`

const Title = styled.a`

`

const Carrosel = () => {
    return(
    <Section>
        <Container>
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