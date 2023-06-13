import React from "react";
import styled from "styled-components";
import "../Obuntu/styles.css"
import {GoOctoface, GoX,GoDash,GoScreenFull} from "react-icons/go";



function Obuntu() {

    return (<>
        <div className="fakeMenu">
            <div className="fakeButtons fakeClose"> <GoX/> </div>
            <div className="fakeButtons fakeMinimize"> <GoDash/> </div>
            <div className="fakeButtons fakeZoom"> <GoScreenFull></GoScreenFull>  </div>
        </div>
        <div className="fakeScreen">
            <p className="line1">Aquillae7:-$/Project/My_house_777/<span className="cursor1">_</span></p>
            <p className="line2">Welcome to universe seven, I hope your journey is pleasant, this universe will be constantly updated with ideas from my head that seem to be quite strange. <span className="cursor2">_</span></p>
            <p className="line3">[?]  (Press button)<span className="cursor3">_</span></p>
            <p className="line4"><span className="cursor4">_</span></p>
        </div>

    </>);




}


export default Obuntu;