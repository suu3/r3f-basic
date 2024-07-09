import * as THREE from "three";

export default function InteractionTest() {
  function clickFunc(e: any) {
    console.log("clickFunc e : ", e);
    e.object.material.color = new THREE.Color("green");
  }

  function overFunc(e: any) {
    console.log("overFunc e : ", e);
    e.object.scale.set(2, 2, 2);
  }

  function outFunc(e: any) {
    console.log("outFunc e : ", e);
    e.object.scale.set(1, 1, 1);
  }

  return (
    <>
      <ambientLight />
      <directionalLight intensity={5} />
      <mesh
        onClick={(e) => clickFunc(e)}
        // onContextMenu={(e) => console.log("context menu")}
        // onDoubleClick={(e) => console.log("double click")}
        // onWheel={(e) => console.log("wheel spins")}
        // onPointerUp={(e) => console.log("up")}
        // onPointerDown={(e) => console.log("down")}
        onPointerOver={(e) => overFunc(e)}
        onPointerOut={(e) => outFunc(e)}
        // onPointerEnter={(e) => console.log("enter")}
        // onPointerLeave={(e) => console.log("leave")}
        // onPointerMove={(e) => console.log("move")}
        // onPointerMissed={() => console.log("missed")}
        // onUpdate={(self) => console.log("props have been updated")}
      >
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
