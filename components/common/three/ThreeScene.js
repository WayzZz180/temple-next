import React, { Suspense }  from 'react'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Model from '@/BayL';

const ThreeScene = () => {
  return (
    <Canvas>
      <pointLight position={[10, 10, -10]} />
      <Suspense fallback={<div>Loading...</div>}>
      <Model />
      </Suspense>
    </Canvas>
  )
}

export default ThreeScene
