'use client';

import { Canvas } from '@react-three/fiber';
import { Environment, Preload } from '@react-three/drei';
import DynamicLines from './DynamicLines';

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#121212]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Environment preset="warehouse" />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#4060FF" />
        <DynamicLines />
        <Preload all />
      </Canvas>
    </div>
  );
}