import React from "react-dom";
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
-webkit-text-stroke: 1px white;
position: relative;
flex-direction: column;
animation: animate 4s  infinite ease alternate;
@keyframe animate{
  Button{
    tranform: tranlateY(55px);
  }
}


@media only screen and (max-width: 768px) {
  font-size: 24px;
  color: white;
  -webkit-text-stroke: 0px;
}

::after {
  content: "tecnologia inovação tecnologia inovação";
  position: absolute;
  top: 0;
  left: 0;
  color: blue;
  width: 0px;
  overflow: hidden;
}

&:hover {
  ::after {
    animation: moveText 0.5s linear both;

    @keyframes moveText {
      to {
        width: 100%;
      }
    }
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