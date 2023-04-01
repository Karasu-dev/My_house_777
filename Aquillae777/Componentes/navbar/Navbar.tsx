import { Dropdown } from "react-bootstrap";
import React, { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 80px;
`;

const Lista = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LinstsItem = styled.li`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DropdownButton = styled.button`
  background-color: blue;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
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
            <LinstsItem>Home</LinstsItem>
            <LinstsItem>Contact</LinstsItem>
            <LinstsItem></LinstsItem>
          </Lista>
        </Links>
        <DropdownContainer>
      <DropdownButton>Dropdown</DropdownButton>
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