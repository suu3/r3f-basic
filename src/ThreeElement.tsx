import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const ThreeElement = () => {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef<THREE.Mesh>(null);
  const box = useControls({
    rotation: {
      value: 0,
      min: -360,
      max: 360,
      step: 1,
    },
  });

  useFrame((state, delta) => {
    // console.log("state : ", state);
    // console.log("delta : ", delta);
    // boxRef.current.rotation.x += delta;
    // boxRef.current.rotation.y -= 0.02;
    // boxRef.current.scale.z += 0.01;
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh
        ref={boxRef}
        rotation={[
          // radian 단위라 우리가 아는 Degree에서 변환 필요
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(box.rotation),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default ThreeElement;
