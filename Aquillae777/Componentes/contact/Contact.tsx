import React from "react-dom";
import styled from "styled-components";



const Section = styled.div`
height: 100vh;
scroll-snap-align: center;

`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;

`;

const Title = styled.h1` 

`;


const Form = styled.form``;

const input = styled.input` `;

const TextArea = styled.textarea` `;

const Button = styled.button` `;


const Left = styled.div``;

const Right = styled.div``;



export const Contact = () => {
    return(
        <Section>
            <Container>
                <Left>
                    <Form>
                        <Title> Contato </Title>
                    </Form>
                </Left>
                <Right></Right>
            </Container>
        </Section>
        
   )
}

export default Contact;