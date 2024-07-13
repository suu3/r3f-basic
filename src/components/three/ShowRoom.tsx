import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { CameraControls } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function ShowRoom() {
  const gltf = useLoader(GLTFLoader, "/models/custom.glb");

  const { raycaster, camera } = useThree();

  console.log("gltf : ", gltf);
  const cameraControlsRef = useRef<CameraControls>(null);

  window.addEventListener("keydown", (e) => {
    console.log("e.key: ", e.key);
    switch (e.key) {
      case "a":
        cameraControlsRef.current?.setLookAt(-2, 0, 2, 0, 0, 0, true);
        break;
      case "b":
        cameraControlsRef.current?.setLookAt(0, 3, 0, 0, 0, 0, true);
        break;
    }
  });

  useEffect(() => {
    cameraControlsRef.current?.setTarget(0, 0, 0);
  });

  let angle = 0;
  let dis = 2; //distance. 클수록 멀리
  useFrame(() => {
    cameraControlsRef.current?.setPosition(
      dis * Math.sin(angle),
      0.8, //살짝 위에서 움직임
      dis * Math.sin(angle)
    );
    angle = angle + 0.01; //속도
  });

  const shoesClick = () => {
    const intersects = raycaster.intersectObjects(gltf.scene.children, true);
    console.log("intersects : ", intersects);

    if (intersects.length > 0) {
      const firstObj = intersects[0].object as THREE.Mesh;
      const firstMat = firstObj.material as THREE.MeshStandardMaterial;
      const cloneMat = firstMat.clone();

      firstObj.material = cloneMat;
      const mat = firstObj.material as THREE.MeshStandardMaterial;
      mat.color = new THREE.Color("red");
      cameraControlsRef.current?.setLookAt(
        0,
        5,
        0,
        firstObj.position.x,
        firstObj.position.y,
        firstObj.position.z,
        true
      );

      cameraControlsRef.current?.fitToBox(firstObj, true);
    }
  };

  return (
    <>
      <directionalLight position={[3, 3, 3]} />
      <CameraControls
        ref={cameraControlsRef}
        minDistance={2} // 줌 인할 때 최소 거리
        maxDistance={Infinity} // 줌 아웃할 때 최대 거리
        enabled={true}
        dollyToCursor={true}
        infinityDolly={true}
        onChange={() => {
          // console.log("onChange");
          // console.log("camera.zoom: ", camera.zoom);
          // console.log("camera.position: ", camera.position);
        }}
      />
      <primitive object={gltf.scene} onClick={shoesClick} />
    </>
  );
}
