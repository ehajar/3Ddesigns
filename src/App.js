import React, { Suspense } from 'react'
import './App.scss';
import Cubes from './Cubes'
import Header from './components/Header'
import { Canvas } from '@react-three/fiber';
import { Html} from '@react-three/drei'
import { Section} from './section';
import { useGLTF } from '@react-three/drei';


const Model = () => {
  const gltf = useGLTF('/scene.gltf', true)
  return <primitive object={gltf.scene} dispose={null}/>
  
  
}

// export function Model(props) {
//   const { scene } = useLoader(GLTFLoader, "/samosaoasis.glb", draco());
//   return <primitive object={scene} dispose={null} />
// }

const HTMLcontent = () => {
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


        <Suspense fallback={null}>
          <HTMLcontent />
        </Suspense>
      </Canvas>
      {/* <Cubes/> */}
    </>
  );
}

export default App;
