import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import AsciiRenderer from './ascii-renderer'
import Torusknot from './torusknot'

function AsciiRendererPage() {
  return (
    <Canvas>
        <color attach="background" args={['black']} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Torusknot />
      <OrbitControls />
      <AsciiRenderer fgColor="white" bgColor="black" />
    </Canvas>
  )
}

export default AsciiRendererPage