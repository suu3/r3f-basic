import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";
import { CameraControls, ContactShadows } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

export default function ShowRoom() {
  const gltf = useLoader(GLTFLoader, "/models/custom.glb");

  const { raycaster } = useThree();
  const [isFitting, setIsFitting] = useState(false);

  console.log("gltf : ", gltf);
  const cameraControlsRef = useRef<CameraControls>(null);

  // window.addEventListener("keydown", (e) => {
  //   console.log("e.key: ", e.key);
  //   switch (e.key) {
  //     case "a":
  //       cameraControlsRef.current?.setLookAt(-2, 0, 2, 0, 0, 0, true);
  //       break;
  //     case "b":
  //       cameraControlsRef.current?.setLookAt(0, 3, 0, 0, 0, 0, true);
  //       break;
  //   }
  // });

  useEffect(() => {
    gltf.scene.children.forEach((shoes) => {
      shoes.children.forEach((mesh) => {
        mesh.castShadow = true; //메쉬 하나하나 그림자.
      });
    });
    cameraControlsRef.current?.setTarget(0, 0, 0);

    cameraControlsRef.current?.addEventListener("control", () => {
      //사용자 클릭 이벤트 등
      console.log("control");
      setIsFitting(true); //click하는 순간 fitting 시작
    });
    cameraControlsRef.current?.addEventListener("sleep", () => {
      console.log("sleep");
      setIsFitting(false);
    });
  });

  let angle = 0;
  let dis = 2.0; //distance. 클수록 멀리

  useFrame(() => {
    console.log("isFitting : ", isFitting);

    if (!isFitting) {
      cameraControlsRef.current?.setPosition(
        dis * Math.sin(angle),
        0.8, //살짝 위에서 움직임
        dis * Math.sin(angle),
        true
      );
      angle = angle + 0.01; //속도
    }

    /**
     * 신발 자연스럽게 겹치기
     * - 이런건 실제로는 THREE.js에서 하나하나 조정하는 것보다,
     * - 이미 그렇게 되어있는 모델을 Import하는게 편함.
     */
    const rightShoes = gltf.scene.children[0];
    const leftShoes = gltf.scene.children[1];

    rightShoes.rotation.y = THREE.MathUtils.degToRad(10);
    leftShoes.rotation.y = THREE.MathUtils.degToRad(300);
    leftShoes.rotation.z = 9.3;
    leftShoes.position.x = -0.25;
    leftShoes.position.y = 0.37;
    leftShoes.position.z = 0.44;
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

      cameraControlsRef.current?.fitToBox(firstObj, true);
    }
  };

  return (
    <>
      <directionalLight position={[3, 3, 3]} />
      <pointLight position={[0, 1, 0]} intensity={3} />
      <CameraControls
        ref={cameraControlsRef}
        minDistance={2} // 줌 인할 때 최소 거리
        maxDistance={Infinity} // 줌 아웃할 때 최대 거리
        enabled={true}
        dollyToCursor={true}
        infinityDolly={true}
        onChange={() => {
          console.log("onChange");
        }}
      />

      <mesh castShadow position={[1, 0.3, 1]}>
        <boxGeometry args={[0.5, 0.5]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, -0.51, 0]} scale={5}>
        <cylinderGeometry args={[0.4, 0.2, 0.2, 50]} />
        <meshStandardMaterial />
      </mesh>
      <primitive object={gltf.scene} onClick={shoesClick} />
      <ContactShadows
        position={[0, 0, 0]}
        scale={5}
        color="#000000"
        resolution={512}
        opacity={0.8}
        blur={0.5}
      />
    </>
  );
}
