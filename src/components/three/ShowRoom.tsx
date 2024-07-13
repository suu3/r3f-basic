import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { useLoader } from "@react-three/fiber";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

export default function ShowRoom() {
  // const obj = useLoader(OBJLoader, "/models/custom.obj");
  // const fbx = useLoader(FBXLoader, "/models/custom.fbx");
  const gltf = useLoader(GLTFLoader, "/models/custom.glb");

  return (
    <>
      {/* <primitive object={obj} />
      <primitive object={fbx} /> */}
      <primitive object={gltf.scene} />
      {/* <mesh
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh> */}
    </>
  );
}
