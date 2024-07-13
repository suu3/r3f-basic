import { Canvas } from "@react-three/fiber";
import ShowRoom from "@src/components/three/ShowRoom";
import { OrbitControls } from "@react-three/drei";

export default function Home() {
  return (
    <Canvas>
      <axesHelper args={[5]} />
      <gridHelper />
      <OrbitControls />
      <directionalLight position={[3, 3, 3]} />
      <ShowRoom />
    </Canvas>
  );
}
