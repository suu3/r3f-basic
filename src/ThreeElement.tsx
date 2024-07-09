// import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeElement = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // useFrame((state, delta) => {});

  useEffect(() => {
    for (let i = 0; i < groupRef.current!.children.length; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = i * 2;
    }
  }, []);
  return (
    <>
      <directionalLight position={[5, 5, 5]} intensity={5} />
      <fog attach={"fog"} args={["blue", 3, 10]} />
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="green" visible={false} />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshStandardMaterial color="green" wireframe />
        </mesh>
        <mesh>
          <meshLambertMaterial
            color="red"
            emissive={"red"}
            visible
            transparent={false}
            opacity={1}
            side={THREE.DoubleSide}
            fog={false} //fog 영향을 안 받게 됨
          />
        </mesh>
        <mesh>
          <meshLambertMaterial
            color="red"
            emissive={"black"}
            visible
            transparent={false}
            opacity={1}
            side={THREE.DoubleSide}
            fog={true}
          />
        </mesh>

        <mesh>
          <meshPhongMaterial
            color="red"
            emissive={"black"}
            visible
            transparent={false}
            opacity={1}
            side={THREE.DoubleSide}
            fog={true}
            specular={"#fff"}
            shininess={40}
            flatShading={true}
          />
        </mesh>
        <mesh>
          <meshNormalMaterial />
        </mesh>
      </group>
    </>
  );
};

export default ThreeElement;
