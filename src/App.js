import React, { Suspense, useRef} from 'react'
import './App.scss';
import Cubes from './Cubes'
import Header from './components/Header'
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei'
import { Section } from './section';
import { useGLTF } from '@react-three/drei';
import { Light } from 'three';


const Model = () => {
  const gltf = useGLTF('/scene.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />


}

const Lights = () => {
  return (
    <>
      <directionalLight intensity={1} position={[10, 10, 5]} />
      <directionalLight intensity={1.5} position={[0, 10, 0]} />
      <spotLight intensity={1} position={[1000, 0, 0]} />
      <ambientLight intensity={0.3} />
    </>
  )
};

const HTMLcontent = () => {
   //ref to target the mesh
   const ref = useRef();

   //useFrame allows us to re-render/update rotation on each frame
   useFrame(() => (ref.current.rotation.y += 0.01));
 


  return (
    <Section
      factor={1.5}
      offset={1}>
      <group position={[0, 200, 0]}>
        <mesh
          position={[0, 35, 0]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className='container'>
            <h1 className='title'>Hello</h1>
          </div>
        </Html>
      </group>
    </Section>


  )
}




function App() {


  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>

        <Lights />
        <Suspense fallback={null}>

          <HTMLcontent />
        </Suspense>

      </Canvas>
      {/* <Cubes/> */}
    </>
  );
}

export default App;
