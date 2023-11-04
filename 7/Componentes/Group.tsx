/*import React from 'react';
import { Reflector, useTexture} from '@react-three/drei';
import { Vector2 } from 'three';

function GroundMesh() {
  const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg']);

  const customNormalScale: Vector2 = new Vector2(2, 2);

  return (
    <mesh>
      <planeBufferGeometry args={[10, 10]} />
      <meshStandardMaterial
        color="#a0a0a0"
        metalness={0.4}
        roughnessMap={floor}
        normalMap={normal}
        normalScale={customNormalScale}
      />
    </mesh>
  );
}

function Ground() {
  return (
    <Reflector
      blur={[400, 100]}
      resolution={512}
      args={[10, 10]}
      mirror={0.5}
      mixBlur={6}
      mixStrength={1.5}
      rotation={[-Math.PI / 2, 0, Math.PI / 2]}
    >
      <GroundMesh />
    </Reflector>
  );
}

export default Ground;
*/