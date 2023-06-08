import React from "react-dom";
import Cubo from "../Cubo/cube";
import styled from "styled-components";



const data = [
    "tecnologia", "inovação","tecnologia", "inovação",
   
];

const Section = styled.div`
 height: 100vh;
 scroll-snap-aling: center;
 display: flex;
 justify-content: center
`;

const Container = styled.div`

width: 1400px;
display: flex;
justify-content: space-between;

`;


const Left = styled.div`
 flex: 1`;

const Right = styled.div`
flex: 1;
`;

const Item = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
gap: 20px;


`;

const ItemLista = styled.li`
font-size: 90px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 4px #778899;
position: relative;
flex-direction: column;
animation: animate 4s  infinite ease alternate;


@keyframe animate{
  Button{
    tranform: tranlateY(55px);
  }
}


@media only screen and (max-width: 768px) {
  font-size: 70px;
font-weight: bold;
cursor: pointer;
color: transparent;
-webkit-text-stroke: 4px purple;
position: relative;
flex-direction: column;
animation: animate 4s  infinite ease alternate;



}

::after {
  content: "tecnologia inovação tecnologia inovação";
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  width: 0px;
  overflow: hidden;
}

&:hover {
  ::after {
    animation: moveText 3s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
  }
}


@keyframes Button {
  to {
    transform: translateX(100px);
    transform: translateY(100px);
  }
`;

const Title = styled.h1`
font-size: 74px
 @media only screen and (max-width: 768px){
  text-aling: center;
 }
 animation: title 5s infinite ease alternate ;
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
animation: SUbtitle 5s infinite ease alternate ;
@keyframes SUbtitle  {
  to {
    transform: translateY(40px);
  }
}

`;





const works = () => {
    return (
        <Section>
            <Container>
                <Left>
                  <Item>
                    <ItemLista>
                        {data.map((item) => (<Item key={item}> {item}</Item>))}
                    </ItemLista>
                    </Item>
                </Left>
                
                <Right>
            
                </Right>

            </Container>
        </Section>
    )
}


export default works;