import React from 'react'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Earth = () => {
  const earth = useGLTF('./planet_earth/scene.gltf')
  return (
    <primitive object={earth.scene} scale={0.2}  />
  )
}

const EarthCanvas = () => {
  return (
    <Canvas shadows frameloop='demand' gl={{ preserveDerawingBuffer: true }}
    camera={{ }} >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
        <Earth />
        <ambientLight />
      </Suspense>
    </Canvas>
  )
}
export default EarthCanvas