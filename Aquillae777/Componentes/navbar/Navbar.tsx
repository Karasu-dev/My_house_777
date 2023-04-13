import styled from "styled-components";
import "./style.scss";
import {BrowserRouter, To, Link, Outlet} from "react-router-dom"


const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

/*const Logo = styled.img`
  height: 80px;
`;*/

const Lista = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const LinstsItem = styled.li`
  cursor: pointer;
  &:hover {
    color: blue;
  }
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





const NavBar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Lista>
            <button  className="cybr-btn"> Home<span aria-hidden>_</span><span aria-hidden className="cybr-btn__glitch">Home</span> </button>
            <button    className="cybr-btn"> Contato<span aria-hidden>_</span> <span aria-hidden className="cybr-btn__glitch" >contato_</span>
            </button>
            <Outlet/>
          </Lista>
        </Links>
        <DropdownContainer>
          <DropdownButton>Dropdown</DropdownButton>
          <DropdownContent>
            <DropdownLink href="#">Link 1</DropdownLink>
            <DropdownLink href="#">Link 2</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>
            <DropdownLink href="#">Link 3</DropdownLink>

          </DropdownContent>
        </DropdownContainer>
      </Container>
    </Section>

  )
}
export default NavBar;
