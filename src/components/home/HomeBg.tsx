'use client';

import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function GeometricShape({ position, color, geometry }: { position: number[], color: string, geometry: 'box' | 'sphere' | 'octahedron' }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometryComponent = {
    box: <boxGeometry args={[1, 1, 1]} />,
    sphere: <sphereGeometry args={[0.7, 32, 16]} />,
    octahedron: <octahedronGeometry args={[0.8]} />
  }[geometry];

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position as [number, number, number]}>
        {geometryComponent}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;
  
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, particleCount]} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#8b5cf6" transparent opacity={0.6} />
    </points>
  );
}

export default function HomeBg() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
        
        <GeometricShape position={[-4, 2, 0]} color="#8b5cf6" geometry="box" />
        <GeometricShape position={[4, -2, -2]} color="#a855f7" geometry="sphere" />
        <GeometricShape position={[0, 4, -1]} color="#7c3aed" geometry="octahedron" />
        <GeometricShape position={[-3, -3, 1]} color="#8b5cf6" geometry="box" />
        <GeometricShape position={[5, 3, -3]} color="#a855f7" geometry="sphere" />
        
        <ParticleField />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
}