'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Group } from 'three';

export default function FloatingShapes() {
  const shapesRef = useRef<Group>(null);

  useFrame((state) => {
    if (shapesRef.current) {
      shapesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      shapesRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={1}
      floatIntensity={1}
      floatingRange={[-1, 1]}
    >
      <group ref={shapesRef}>
        {/* Picasso-inspired abstract circles */}
        {Array.from({ length: 5 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin((i / 5) * Math.PI * 2) * 3,
              Math.cos((i / 5) * Math.PI * 2) * 3,
              Math.sin(i) * 0.5,
            ]}
            rotation={[i * 0.5, i * 0.3, 0]}
          >
            <ringGeometry args={[0.5, 0.6, 32]} />
            <meshStandardMaterial
              color={`hsl(${i * 45}, 70%, 60%)`}
              transparent={true}
              opacity={0.3}
              metalness={0.2}
              roughness={0.8}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}