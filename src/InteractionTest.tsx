import { useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function InteractionTest() {
  const { camera, scene, raycaster, pointer } = useThree();

  function groupClickFunc(e: any) {
    console.log("groupClickFunc e : ", e);

    raycaster.setFromCamera(pointer, camera);

    const intersects = raycaster.intersectObject(e.eventObject, true); //scene안 모든 children을 검사?

    console.log("intersects : ", intersects); //mesh 뿐만 아니라 축 등 object 다 검출

    if (intersects.length > 0) {
      console.log("intersects[0] : ", intersects[0]);

      const mesh = intersects[0].object as any;

      mesh.material.color = new THREE.Color("red"); // 첫번째 박스만 컬러 바꾸기
    }
  }

  return (
    <>
      <ambientLight />
      <directionalLight intensity={5} />
      <group onClick={(e) => groupClickFunc(e)}>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[2, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </group>
    </>
  );
}
