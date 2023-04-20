import * as THREE from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

function Box(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(true)
  useFrame((state, delta) => (mesh.current.rotation.y += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={hovered ? 'white' : 'black' } />
    </mesh>
  )
}


function Box2(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(true)
  useFrame((state, delta) => (mesh.current.rotation.z += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={hovered ? 'white' : 'black' } />
    </mesh>
  )
}


function Box3(props: ThreeElements['mesh']) {
  const mesh = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(true)
  useFrame((state, delta) => (mesh.current.rotation.x += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1,1,1]} />
      <meshStandardMaterial color={hovered ? 'black' : 'black' } />
    </mesh>
  )
}





const Cubo = () => { 
    return(  
         <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[1, 0, 0]} />

        <pointLight position={[5, 5, 5]} />
        <Box2 position={[1, 0, 0]} />


        <pointLight position={[5, 5, 5]} />
        <Box3 position={[1, 0, 0]} />


        <pointLight position={[20, 20, 20]} />
        <Box position={[1, 1, 0]} />

        <pointLight position={[30, 30, 30]} />
        <Box2 position={[1, 1, 0]} />


        <pointLight position={[40, 50, 60]} />
        <Box3 position={[1, 1, 0]} />

        

        
        
      </Canvas>)

}

export default Cubo;

