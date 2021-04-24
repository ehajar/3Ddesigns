import React, { Suspense, useRef, useEffect} from 'react'
import './App.scss';
import Cubes from './Cubes'
import Header from './components/Header'
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Html, useGLTFLoader } from '@react-three/drei'
import { Section } from './section';
import { useGLTF } from '@react-three/drei';


//This is page state
import state from './state'


const Model = ({ modelPath }) => {
  const gltf = useGLTF(modelPath)
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

const HTMLcontent = ({domContent, children, modelPath, positionY }) => {
  // //ref to target the mesh
  // const ref = useRef();

  // //useFrame allows us to re-render/update rotation on each frame
  // useFrame(() => (ref.current.rotation.y += 0.01));



  return (
    <Section
      factor={1.5}
      offset={1}>
      <group position={[0, positionY, 0]}>
        <mesh
          position={[0, 35, 0]}>
          <Model modelPath={modelPath} />

        </mesh>
        <Html fullscreen>{children}</Html>
      </group>
    </Section>


  )
}




function App() {

  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current =e.target.scrollTop)
  useEffect(() => void onScroll({ target :scrollArea.current}), [])
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}>

        <Lights />
        <Suspense fallback={null}>
          <HTMLcontent
            domContent={domContent}
            modelPath="/scene1.gltf"
            positionY={200}>

            <div className='container'>
              <h1 className='title'>Hello</h1>
            </div>

          </HTMLcontent>
          <HTMLcontent
            domContent={domContent}
            modelPath="/scene2.gltf"
            positionY={0}>

            <div className='container'>
              <h1 className='title'>Bye</h1>
            </div>

          </HTMLcontent>

        </Suspense>

      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
      {/* <Cubes/> */}
    </>
  );
}

export default App;
