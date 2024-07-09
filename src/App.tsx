import { Canvas } from "@react-three/fiber";
import "./App.css";
// import MaterialTest from "./MaterialTest";
import { OrbitControls } from "@react-three/drei";
import LightTest from "./LightTest";
import InteractionTest from "./InteractionTest";

function App() {
  return (
    <>
      <Canvas
        shadows
        camera={{
          fov: 75,
          near: 1,
          far: 100,
          position: [0, 0, 5],
        }}
      >
        <color attach="background" args={["black"]} />
        <OrbitControls />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} />
        {/* <MaterialTest /> */}
        <InteractionTest />
        {/* <LightTest /> */}
      </Canvas>
    </>
  );
}

export default App;
