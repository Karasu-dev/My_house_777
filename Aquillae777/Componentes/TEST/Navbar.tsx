import React from "react-dom";
import styled, { keyframes} from 'styled-components';




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
font-size: 130px;
line-height: 1;
font-family: 'Poppins', sans-serif;
font-weight: 700;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
margin: 0;
text-decoration: none;
color: #fff;

  &:before, &:after {
      display: block;
      content: '777';
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

&:hover {
  &:before {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) both infinite
  }
  &:after {
      animation: ${Key} .10s cubic-bezier(.25, .46, .45, .94) reverse both infinite
  }
}
}
`


const NavBar = () => {
    return(
        <> 
        <Cyper></Cyper>
       
        </>
    )

}

export default NavBar;