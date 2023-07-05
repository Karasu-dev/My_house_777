import React from "react";
import "../Mac/Mac.css";
import styled from "styled-components";


const Container = styled.div
` 
width: auto;
height: auto; 
border 10px;

`

const Mac = () => {
  
    return(
        <Container> 
            <div className = "fakeMenuMac">
  <div className="fakeButtonsMac fakeCloseMac"></div>
  <div className="fakeButtonsMac fakeMinimizeMac"></div>
  <div className="fakeButtonsMac fakeZoomMac"></div>
</div>
<div className="fakeScreenMac">
  <p className="line1Mac">$ yo gulp-webapp<span className="cursor1Mac">_</span></p>
  <p className="line2Mac">Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile.js to build your app.<span className="cursor2Mac">_</span></p>
  <p className="line3Mac">[?] What more would you like? (Press space to select)<span className="cursor3Mac">_</span></p>
  <p className="line4Mac"><span className="cursor4Mac">_</span></p>
</div>
  </Container>
    )
}

export default Mac;