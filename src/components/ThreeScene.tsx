import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function FloatingCoin() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <cylinderGeometry args={[1, 1, 0.2, 32]} />
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.8} 
          roughness={0.2} 
          emissive="#B8860B"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

function SeaParticles() {
  return (
    <Sparkles 
      count={100} 
      scale={10} 
      size={2} 
      speed={0.5} 
      opacity={0.5} 
      color="#00ffff" 
    />
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        
        <FloatingCoin />
        <SeaParticles />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <fog attach="fog" args={['#020617', 5, 15]} />
      </Canvas>
    </div>
  );
}
