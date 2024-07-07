// import { Box } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const ThreeElement = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const boxCopyRef = useRef<THREE.Mesh>(null);
  const boxControl = useControls({
    radius: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    seg: {
      value: 32,
      min: 1,
      max: 100,
      step: 1,
    },
    thetaStart: {
      value: 0,
      min: 0,
      max: 360,
      step: 0.1,
    },
    thetaLength: {
      value: 360,
      min: 0,
      max: 360,
      step: 0.1,
    },
  });
  // useFrame((state, delta) => {
  //   // state.scene.rotation.x = THREE.MathUtils.degToRad(45);
  // });

  useEffect(() => {
    boxCopyRef.current.geometry = boxRef.current?.geometry;
  }, [boxControl]);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <circleGeometry
          args={[
            boxControl.radius,
            boxControl.seg,
            THREE.MathUtils.degToRad(boxControl.thetaStart),
            THREE.MathUtils.degToRad(boxControl.thetaLength),
          ]}
        />
        <meshStandardMaterial wireframe />
      </mesh>
      <mesh ref={boxCopyRef} position={[0, 0, 0]}>
        <meshStandardMaterial color="red" />
      </mesh>
    </>
  );
};

export default ThreeElement;
