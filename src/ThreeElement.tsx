// import { Box } from "@react-three/drei";
// import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const ThreeElement = () => {
  const boxRef = useRef<THREE.Mesh>(null);
  const boxCopyRef = useRef<THREE.Mesh>(null);
  const boxContorl = useControls({
    width: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    height: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    depth: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    widthSeg: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    heightSeg: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
    depthSeg: {
      value: 1,
      min: 0.1,
      max: 10,
      step: 0.1,
    },
  });
  // useFrame((state, delta) => {
  //   // state.scene.rotation.x = THREE.MathUtils.degToRad(45);
  // });

  useEffect(() => {
    boxCopyRef.current.geometry = boxRef.current?.geometry;
  }, [boxContorl]);

  return (
    <>
      <directionalLight position={[5, 5, 5]} />
      <mesh ref={boxRef} position={[0, 0, 0]}>
        <boxGeometry
          args={[
            boxContorl.width,
            boxContorl.height,
            boxContorl.depth,
            boxContorl.widthSeg,
            boxContorl.heightSeg,
            boxContorl.depthSeg,
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
