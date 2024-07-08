import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const boxRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {});

  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <fog attach={"fog"} args={["blue", 3, 10]} />
      <mesh position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial wireframe color="red" />
      </mesh>
      <mesh position={[2, 0, 0]}>
        <planeGeometry />
        <meshLambertMaterial
          color="red"
          emissive={"yellow"}
          visible
          transparent={false}
          opacity={1}
          side={THREE.DoubleSide}
          fog={false} //fog 영향을 안 받게 됨
        />
      </mesh>
    </>
  );
};

export default ThreeElement;
