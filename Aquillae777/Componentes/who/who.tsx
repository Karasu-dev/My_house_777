
import styled from "styled-components";
import {GoOctoface} from "react-icons/go";



const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;

@media only screen and (max-width: 768px) {
  height: 200vh;
}
`;

const Container = styled.div`
height: 100%;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;

const Left = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;

@media only screen and (max-width: 768px) {
  flex: 1;
  align-items: center;
}
`;

const Right = styled.div`
flex: 3;
position: relative;
@media only screen and (max-width: 768px) {
  flex: 1;
  width: 100%;
}
`;

const Title = styled.h1`
font-size: 74px
 @media only screen and (max-width: 768px){
  text-aling: center;
 }
`;

const Whatwedo = styled.div`
   display: flex;
   aling-items: center;
   gap: 10px

`;

const SUbtitle = styled.h2`
font-size: 20px;
color: black;

`;


const Desc = styled.p`
 font-size: 20px;
 @media only screen(max-witdh: 768px){
  padding: 20px;
  text-aling: center;
 }

`;

const Button = styled.button`
background-color: black;
color: white;
width: 120px;
height: 30px;
border-radius: 10px;
box-shadow: 4px 3px lightblue;
`;

const Line = styled.img`
height: 5px;

`;

const Img = styled.img`


`;

export const Who = () => {
    return (

        <Section>
            <Container>
              <Left> 
                <Img src="/img/aquillae-unscreen.gif"/>
              </Left>

              <Right> 
                <Title> Aquillae7</Title>
                <Whatwedo>
                  <Line src=""/>
                  <SUbtitle> Este site vai conter todos os meus projetos que serão postados mensalmente aqui, e no botão a baixo pode baixar e utilizar esses projetos </SUbtitle>
                </Whatwedo>
                <Desc>  </Desc>
                <Button> GitHub <GoOctoface/></Button>
              </Right>
            </Container>
        </Section>


    )
}
export default Who;