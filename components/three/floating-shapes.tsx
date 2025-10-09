"use client"

import { Canvas } from "@react-three/fiber"
import { Float, OrbitControls } from "@react-three/drei"

function Shape({ position = [0, 0, 0] as [number, number, number], color = "#88ccff" }) {
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh position={position}>
        <icosahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial color={color} metalness={0.2} roughness={0.3} />
      </mesh>
    </Float>
  )
}

export function FloatingShapes() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      <Shape position={[-2.5, -0.5, -2]} />
      <Shape position={[2.2, 0.8, -1.5]} />
      <Shape position={[0, -1.2, -3]} />
      <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
    </Canvas>
  )
}
