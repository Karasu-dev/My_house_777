import React, { useState } from 'react'
import { useTrail, a } from '@react-spring/web'
import styled from 'styled-components';
import styles from "./styles.module.css";
import {GoOctoface} from "react-icons/go";


const Button = styled.button`
background-color: black;
color: white;
width: 120px;
height: 30px;
border-radius: 10px;
box-shadow: 4px 3px lightblue;
animation: button 5s infinite ease alternate ;
@keyframes button {
  to {
    transform: translateY(50px);
  }
}`


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

function Trail({ open, children }): JSX.Element {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 1, tension: 100, friction: 10},
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 1, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
}
const Text = () => {
  const [open, set] = useState(true)
  return (
    <div className={styles.container} onClick={() => set(state => !state)}>
      <Trail open={open}>


       <span>universe</span>
        <span>is</span>
        <span>my</span>
        <span>life</span>
      
      
        <Button>GitHub <GoOctoface/></Button>
      </Trail>
    </div>
  )
}

export default Text;