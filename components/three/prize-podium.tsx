"use client"

import { Canvas } from "@react-three/fiber"
import { Float, PresentationControls, Stage } from "@react-three/drei"

function Podium() {
  return (
    <group>
      {/* Bases */}
      <mesh position={[-1.6, 0.5, 0]}>
        <boxGeometry args={[1.2, 1, 1.2]} />
        <meshStandardMaterial color="#a3bffa" />
      </mesh>
      <mesh position={[0, 0.9, 0]}>
        <boxGeometry args={[1.4, 1.8, 1.4]} />
        <meshStandardMaterial color="#93c5fd" />
      </mesh>
      <mesh position={[1.6, 0.3, 0]}>
        <boxGeometry args={[1.2, 0.6, 1.2]} />
        <meshStandardMaterial color="#bfdbfe" />
      </mesh>

      {/* Medals */}
      <Float>
        <mesh position={[0, 2.2, 0]}>
          <torusGeometry args={[0.35, 0.12, 16, 64]} />
          <meshStandardMaterial color="#fde68a" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>
      <Float>
        <mesh position={[-1.6, 1.6, 0]}>
          <torusGeometry args={[0.3, 0.1, 16, 64]} />
          <meshStandardMaterial color="#d1d5db" metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>
      <Float>
        <mesh position={[1.6, 1.3, 0]}>
          <torusGeometry args={[0.28, 0.1, 16, 64]} />
          <meshStandardMaterial color="#fca5a5" metalness={0.7} roughness={0.25} />
        </mesh>
      </Float>
    </group>
  )
}

export function PrizePodium() {
  return (
    <div className="w-full h-[320px] md:h-[420px] rounded-xl border border-border/60 bg-background/60 backdrop-blur">
      <Canvas camera={{ position: [0, 2.2, 7], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <Stage intensity={0.3} environment={null}>
          <Podium />
        </Stage>
        <PresentationControls global zoom={1} polar={[0, 0]} azimuth={[-0.2, 0.2]} />
      </Canvas>
    </div>
  )
}
