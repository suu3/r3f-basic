import { Canvas } from "@react-three/fiber";
import ShowRoom from "@src/components/three/ShowRoom";

export default function Home() {
  return (
    <Canvas
    // orthographic
    >
      <axesHelper args={[5]} />
      <gridHelper />
      <ShowRoom />
    </Canvas>
  );
}
