import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SpotLight, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./office_room_15_low-poly_3d_model/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <SpotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} />
      <primitive object={computer.scene} scale={ isMobile ? 0.02:0.025} position={isMobile ? [0, -14, -0.6]:[0, -11.25, -1.5]} rotation={[-0.25, -90.5, -0.4]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change' , handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  })

  return(
    <Canvas 
      frameloop='demand' 
      shadows 
      camera={{ position: [-50,-20,-10], fov: 50 }} 
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />

    </Canvas>
  )
}

export default ComputersCanvas