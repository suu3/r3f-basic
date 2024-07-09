import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Environment, useTexture } from "@react-three/drei";

export default function LightTest() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  const matcap = useTexture("./imgs/matcap3.jpg");
  const tone = useTexture("./imgs/threeTone.jpg");
  tone.minFilter = THREE.NearestFilter;
  tone.magFilter = THREE.NearestFilter;

  useEffect(() => {
    const meshLengh = groupRef.current!.children.length;
    for (let i = 0; i < meshLengh; i++) {
      const mesh = groupRef.current!.children[i] as THREE.Mesh;
      mesh.geometry = meshRef.current!.geometry;
      mesh.position.x = (i % (meshLengh / 2)) * 2 - 2;
      mesh.position.z = 0;
      if (i >= meshLengh / 2) {
        mesh.position.z = 2;
      }
    }
  }, []);

  const dLight = useRef<THREE.DirectionalLight>(null!);
  return (
    <>
      {/* <directionalLight position={[5, 5, 5]} intensity={1} /> */}
      {/* <ambientLight color={"#fff"} intensity={1} /> */}
      {/* <hemisphereLight args={["blue", "yellow", 2]} /> */}

      {/* <directionalLight
        position={[5, 5, 5]}
        color="#fff"
        ref={dLight}
        intensity={5}
        target-position={(0, 0, 0)}
      /> */}

      <spotLight
        color={"#fff"}
        position={[0, 0, 2]}
        intensity={50}
        distance={5}
        angle={THREE.MathUtils.degToRad(30)}
        penumbra={0}
      />

      <Environment files={"./imgs/hdr1.hdr"} background blur={0.1} />

      {/* 바닥 */}
      <mesh rotation-x={[THREE.MathUtils.degToRad(-90)]} position-y={-1}>
        <planeGeometry args={[15, 15]} />
        <meshStandardMaterial color={"#020059"} side={THREE.DoubleSide} />
      </mesh>
      {/* geometry 참조용 */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <torusKnotGeometry args={[0.5, 0.2]} />
        <meshBasicMaterial visible={false} color="green" />
      </mesh>
      <group ref={groupRef}>
        <mesh>
          <meshLambertMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
          />
        </mesh>

        <mesh>
          <meshPhongMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            specular={"#fff"}
            shininess={40}
            flatShading={true}
          />
        </mesh>
        <mesh>
          <meshStandardMaterial
            color="red"
            visible={true}
            transparent={false}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={1}
            metalness={0}
            // flatShading={true}
          />
        </mesh>
        <mesh>
          <meshPhysicalMaterial
            color="#fff"
            visible={true}
            transparent={true}
            opacity={1}
            side={THREE.FrontSide}
            alphaTest={1}
            depthTest={true}
            depthWrite={true}
            fog={true}
            emissive={"black"}
            roughness={0}
            metalness={0}
            clearcoat={0}
            clearcoatRoughness={0}
            transmission={1}
            thickness={0.5}
            ior={2.33}
            // flatShading={true}
          />
        </mesh>
        <mesh>
          <meshToonMaterial gradientMap={tone} color="pink" />
        </mesh>
      </group>
    </>
  );
}
