import styled, { keyframes } from "styled-components";
import "./style.scss";
import {BrowserRouter , Routes, Route} from "react-router-dom";




const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 600px) {
    width: 1000px;
    padding: 1px;
  }
`;

const ContainerCYPER = styled.div` 
display: inline-block;
whidth: 50px;

`;


const DropdownButton = styled.button`
--primary: hsl(var(--primary-hue), 85%, calc(var(--primary-lightness, 50) * 1%));
--shadow-primary: hsl(var(--shadow-primary-hue), 90%, 50%);
--primary-hue: 0;
--primary-lightness: 50;
--color: hsl(0, 0%, 100%);
--font-size: 26px;
--shadow-primary-hue: 180;
--label-size: 9px;
--shadow-secondary-hue: 60;
--shadow-secondary: hsl(var(--shadow-secondary-hue), 90%, 60%);
--clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
--border: 4px;
--shimmy-distance: 5;
--clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
--clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
--clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
--clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
--clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
--clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
--clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);
color: var(--color);
cursor: pointer;
background: transparent;
text-transform: uppercase;
outline: transparent;
letter-spacing: 2px;
position: relative;
border: 0;
min-width: 200px;
height: 50px;
line-height: 50px;
transition:    background 0.1s;

`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;

const DropdownLink = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: blue;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${DropdownContent} {
    display: block;
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

const Cyper = styled.button`
cursor: pointer;
background: transparent;
text-transform: uppercase;
outline: transparent;
letter-spacing: 10px;
position: relative;
border: 1;
min-width: 200px;
height: 50px;
line-height: 50px;
transition:  background 0.1s;
transform: translate(-50%, -50%);
margin: 10px;
padding: 1px;
text-decoration: none;
color: #fff;

  &:before, &:after {
      display: block;
      content: 'Home';
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
      color: #0ff;
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
}
}`





const Cyper2 = styled.button`
cursor: pointer;
background: transparent;
text-transform: uppercase;
outline: transparent;
letter-spacing: 10px;
position: relative;
border: 1;
min-width: 200px;
height: 50px;
line-height: 50px;
transition:  background 0.10s;
transform: translate(-50%, -50%);
margin: 10px;
padding: 1px;
text-decoration: none;
color: #fff;

  &:before, &:after {
      display: block;
      content: 'Conta';
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
      color: #0ff;
      z-index: -1;
  }
}
  {
  &:before {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) both infinite
  }
  &:after {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) reverse both infinite
  }}
}
`








const NavBar = () => {
  return (
    <Section>
      <Container>
      <ContainerCYPER> <button  className="cybr-btn"> Home<span aria-hidden>_</span><span aria-hidden className="cybr-btn__glitch">Home</span> </button>
      <button className="cybr-btn"> Contato<span aria-hidden>_</span> <span aria-hidden className="cybr-btn__glitch" >contato_</span></button>
      </ContainerCYPER>
      <DropdownContainer>
          <DropdownButton>Projetos geral</DropdownButton>
          <DropdownContent>
            <DropdownLink href="#">Link 1</DropdownLink>
            <DropdownLink href="#">Link 2</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
          </DropdownContent>
        </DropdownContainer>
      </Container>
    </Section>

  )
}
export default NavBar;
