import React from "react";
import styled from "styled-components";
import "../Obuntu/Obuntu.css"
import { GoX,GoDash,GoScreenFull} from "react-icons/go";

const Container = styled.div`
flex: 2;
display: flex;
flex-direction: column;
justify-content: center;

@media only screen and (max-width: 780px) {
  flex: 1;
  align-items: center;
`;



function Obuntu() {

    return (<Container>  

<div className="fakeMenu">
            <div className="fakeButtons2 fakeNick" > @Aquillae777</div>
        <div className="fakeButtons fakeMinimize"> <GoDash/>  </div>
            <div className="fakeButtons fakeZoom"> <GoScreenFull></GoScreenFull> </div>
            <div className="fakeButtons fakeClose">  <GoX/>  </div> 
        </div>
       
        <div className="fakeButtons2 fakeMenu"> 
        <div className="fakeButtons2 fakeFile"> File</div>
        <div className="fakeButtons2 fakeEdit"> Edit </div>
        <div className="fakeButtons2 fakeView"> view</div>
        <div className="fakeButtons2 fakeSearch">Search</div>
        <div className=" fakeButtons2 fakeTerminal"> Terminal</div>
        <div className="fakeButtons2 fakeHelp"> Help</div>
       
        </div>
        <div className="fakeScreen">
            <p className="line1">Aquillae7:-$/Project/My_house_777/<span className="cursor1">_</span></p>
            <p className="line2">Welcome to universe seven, I hope your journey is pleasant, this universe will be constantly updated with ideas from my head that seem to be quite strange. <span className="cursor2">_</span></p>
            <p className="line3">[?]  (Press button)<span className="cursor3">_</span></p>
            <p className="line4"><span className="cursor4">_</span></p>
        </div>
    </Container>


);




}


export default Obuntu;