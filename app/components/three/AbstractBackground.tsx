'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import { Float } from '@react-three/drei';

export default function AbstractBackground() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.2, 0.2]}
    >
      <group ref={groupRef}>
        {/* Basquiat-inspired crown */}
        <mesh position={[0, 2, -2]} scale={1.5}>
          <torusGeometry args={[1, 0.2, 16, 3]} />
          <meshStandardMaterial
            color="#FFD700"
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </mesh>

        {/* Background abstract shapes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i) * 4,
              Math.cos(i) * 4,
              Math.sin(i * 0.5) * 2,
            ]}
            rotation={[i * 0.5, i * 0.3, 0]}
          >
            <octahedronGeometry args={[0.3]} />
            <meshStandardMaterial
              color={`hsl(${i * 25}, 70%, 50%)`}
              transparent={true}
              opacity={0.2}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}