import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    state.scene.rotation.x = THREE.MathUtils.degToRad(45);
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />

      <group position={[0, 0, 3]}>
        <axesHelper args={[5]} />
        <mesh
          ref={boxRef}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh
          ref={boxRef}
          position={[0, 2, 0]}
          scale={[1, 1, 1]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <boxGeometry />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh
          ref={boxRef}
          position={[2, 0, 0]}
          scale={[1, 1, 1]}
          rotation={[
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <axesHelper args={[3]} />
          <boxGeometry />
          <meshStandardMaterial color="blue" />
        </mesh>
      </group>
    </>
  );
};

export default ThreeElement;
