import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    
    // console.log("state : ", state);
    // console.log("delta : ", delta);
    boxRef.current.position.x += 0.01;
    // boxRef.current.rotation.y -= 0.02;
    // boxRef.current.scale.z += 0.01;
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        position={[0,0,0]}
        scale={[1,1,1]}
        rotation={[THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0)]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default ThreeElement;
