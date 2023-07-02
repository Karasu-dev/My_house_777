import "./styles.css";
import { useThree, } from "@react-three/fiber";
import { useLayoutEffect } from "react";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame,  } from '@react-three/fiber'
import { Mesh } from "three";
import styled from "styled-components";


const Java = ({ p }: {p: number}) => {
    const meshRef = useRef<Mesh>(null);
    useLayoutEffect(() => {  
        const distance = mix(1000, 1, Math.random());
        const Yangle = mix ( 
            degreesToRadians(1),
            degreesToRadians(360),
            Math.random(),
        );

        

    })
}