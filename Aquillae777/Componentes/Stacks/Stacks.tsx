import { useSpring, animated, } from '@react-spring/web'
import { Form } from 'react-router-dom';
import { Value,  } from 'sass';
import styled from 'styled-components';

const Container = styled.div `
`

export default function stacks() {


const [spring2, api2] = useSpring(() => ({
from : {x: 100},
backgroundColor: 'white',
scale : [1],
precision: 0.0001,


}))

const [springs, api] = useSpring(() => ({
    from : {x: 1},
    backgroundColor: 'red',
    scale : [1],
    precision: 0.0001,
}))
 
const handleClick2 = () => {
    api2.start({
      from: {
        x: 0, 
      },
      to: {
        x: 500,
      },
    })
  }

    const handleClick = () => {
        api.start({
          from: {
            x: 0, 
          },
          to: {
            x: 600,
          },
        })
      }
      
    
    return(  
        <Container> 
               <animated.div onClick={handleClick} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...springs,}}/> <animated.div /> 
        <animated.div onClick={handleClick2} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...spring2,}}/> <animated.div />
        <animated.div onClick={handleClick} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...springs,}}/> <animated.div /> 
         <animated.div onClick={handleClick2} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...spring2,}}/> <animated.div /> 
         <animated.div onClick={handleClick} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...springs,}}/> <animated.div /> 
        <animated.div onClick={handleClick2} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...spring2,}}/> <animated.div /> 
        <animated.div onClick={handleClick} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...springs,}}/> <animated.div /> 
        <animated.div onClick={handleClick2} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...spring2,}}/> <animated.div /> 
        <animated.div onClick={handleClick} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...springs,}}/> <animated.div /> 
        <animated.div onClick={handleClick2} style={{ width: 80,height: 80, background: '#ff6d6d',borderRadius: 8, ...spring2,}}/> <animated.div /> 


        </Container>
    )}

