'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { Vector3, Group } from 'three';

export default function DynamicLines() {
  const lineRef = useRef<Group>(null);

  const points = useMemo(() => {
    const pts = [];
    const count = 50;
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 2.5 + 
        Math.sin(angle * 3) * 0.4 + 
        Math.cos(angle * 5) * 0.3;
      pts.push(
        new Vector3(
          Math.cos(angle) * radius,
          Math.sin(angle) * radius,
          Math.sin(angle * 4) * 0.2
        )
      );
    }
    pts.push(pts[0]);
    return pts;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (lineRef.current) {
      lineRef.current.rotation.z = Math.sin(time * 0.15) * 0.2;
      lineRef.current.rotation.x = Math.cos(time * 0.1) * 0.15;
      lineRef.current.position.y = Math.sin(time * 0.2) * 0.1;
      lineRef.current.scale.x = 1 + Math.sin(time * 0.5) * 0.03;
      lineRef.current.scale.y = 1 + Math.cos(time * 0.5) * 0.03;
    }
  });

  const createRing = (index: number, scale: number, color: string, width: number, opacity: number) => (
    <Line
      key={`ring-${index}`}
      points={points.map((p) => new Vector3(p.x * scale, p.y * scale, p.z * scale))}
      color={color}
      lineWidth={width}
      transparent
      opacity={opacity}
    />
  );

  return (
    <group ref={lineRef}>
      {/* Main rings */}
      {Array.from({ length: 25 }).map((_, i) => {
        const scale = 1 + i * 0.12;
        const hue = 210 + i * 6;
        const saturation = Math.max(30, 75 - i * 2);
        const lightness = Math.min(70, 50 + i * 2);
        return createRing(
          i,
          scale,
          `hsl(${hue}, ${saturation}%, ${lightness}%)`,
          Math.max(0.3, 1.5 - i * 0.06),
          Math.max(0.1, 0.4 - i * 0.015)
        );
      })}

      {/* Inner accent rings */}
      {Array.from({ length: 10 }).map((_, i) => {
        const scale = 0.95 - i * 0.08;
        return createRing(
          i + 100,
          scale,
          `hsl(${240 + i * 10}, ${70 - i * 3}%, ${45 + i * 3}%)`,
          0.8 - i * 0.05,
          0.35 - i * 0.03
        );
      })}

      {/* Outer accent rings */}
      {Array.from({ length: 8 }).map((_, i) => {
        const scale = 1.8 + i * 0.2;
        return createRing(
          i + 200,
          scale,
          `hsl(${180 + i * 15}, ${65 - i * 5}%, ${60 + i * 3}%)`,
          0.6,
          0.12
        );
      })}
    </group>
  );
}