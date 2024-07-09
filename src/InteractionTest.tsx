import * as THREE from "three";

export default function InteractionTest() {
  function clickFunc(e: any) {
    console.log("clickFunc e : ", e);
    e.stopPropagation();
    e.object.material.color = new THREE.Color("green");
  }

  return (
    <>
      <ambientLight />
      <directionalLight intensity={5} />
      <mesh onClick={(e) => clickFunc(e)} position={[-2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh onClick={(e) => clickFunc(e)} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <mesh onClick={(e) => clickFunc(e)} position={[2, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
