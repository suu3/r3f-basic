import { Canvas } from "@react-three/fiber";
import "./App.css";
import ThreeElement from "./ThreeElement";

function App() {
  return (
    <>
      <Canvas>
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
