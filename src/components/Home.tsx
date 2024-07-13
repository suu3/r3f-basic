
import { Canvas } from "@react-three/fiber"
import ShowRoom from '@components/three/ShowRoom';
import AppBar from '@components/AppBar';
import ColorComp from "@components/ColorComp";

export default function Home(){

    let angle = 0;
    let dis = 2.0;
    return (
        <>
            <AppBar />
            <Canvas
                // shadows
                // orthographic
                camera={{
                    position:[
                        dis * Math.sin(angle),
                        0.8,
                        dis * Math.cos(angle),
                    ]
                }}
            >
                {/* <axesHelper args={[5]} /> */}
                {/* <gridHelper /> */}
                <color attach={'background'} args={['#b7f2f1']}/>
                <ShowRoom />
            </Canvas>
            <ColorComp />
        </>
    )
}