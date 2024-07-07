import { Box } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    // state.scene.rotation.x = THREE.MathUtils.degToRad(45);
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      {/* geometry 만들기 */}
      {/* 1. */}
      <Box position={[-2, 0, 0]}>
        <meshStandardMaterial color="green" />
      </Box>
      {/* 2. */}
      <mesh geometry={new THREE.BoxGeometry(1, 1, 1)}>
        <meshStandardMaterial color="blue" />
      </mesh>
      {/* 3. */}
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default ThreeElement;
