import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";
import { OrbitControls } from "@react-three/drei";

function App() {

  return (
    <>
      <Canvas
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [0, 0, 5],
        }}
      >
        <color attach="background" />
        <OrbitControls />
        <axesHelper args={[6]} />
        <gridHelper args={[10,10]} />
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
