'use client';

import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('./three/ThreeScene'), {
  ssr: false,
  loading: () => (
    <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#080808] via-[#0a0a0a] to-[#121212]" />
  ),
});

export default function Scene() {
  return <ThreeScene />;
}