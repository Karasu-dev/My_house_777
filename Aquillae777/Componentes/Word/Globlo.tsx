import "./styles.css";
import { useThree, } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame,  } from '@react-three/fiber'
import { Mesh } from "three";



const color = "#111111";

const Icosahedron = () => (
  <mesh rotation-x={1} rotation-rotateY={1}>
    <icosahedronGeometry args={[1, 1,]} />
    <meshBasicMaterial wireframe color={color} />
  </mesh>
);

const Star = ({ p }: { p: number }) => {
  const meshRef = useRef<Mesh>(null);

  useLayoutEffect(() => {
    const distance = mix(2, 3.5, Math.random());
    const yAngle = mix(
      degreesToRadians(80),
      degreesToRadians(100),
      Math.random()
    );0
    const xAngle = degreesToRadians(360) * p;
    meshRef.current!.position.setFromSphericalCoords(distance, yAngle, xAngle);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[0.1, 0.05, 0.05]} />
      <meshBasicMaterial wireframe color={color}/>
    </mesh>
  );
};

function Scene({ numStars = 30 }) {
  const gl = useThree((state) => state.gl);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.10, degreesToRadians(150)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [10, 3]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.00050
    );
    camera.updateProjectionMatrix();
    camera.lookAt(1, 1, 1);
  });

  useLayoutEffect(() => gl.setPixelRatio(1));

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(<Star p={progress(0, numStars, i)} />);
  }

  return (
    <>
      <Icosahedron />
      {stars}
    </>
  );0
}

 const Globlo = () => {
  
  return (
    <div className="container">
      <Canvas gl={{ antialias: false }}>
        <Scene />
      </Canvas>
    </div>
  );
}


export default Globlo;