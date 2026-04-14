import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Stars, Sparkles, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DevilFruit() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.z += 0.002;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group>
        {/* Main Fruit Body */}
        <mesh ref={meshRef}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <MeshDistortMaterial 
            color="#a855f7" 
            speed={2} 
            distort={0.4} 
            radius={1}
            emissive="#6b21a8"
            emissiveIntensity={0.5}
          />
        </mesh>
        
        {/* Stem */}
        <mesh position={[0, 1.4, 0]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.1, 0.15, 0.6, 12]} />
          <meshStandardMaterial color="#166534" />
        </mesh>
      </group>
    </Float>
  );
}

function SeaParticles() {
  return (
    <Sparkles 
      count={150} 
      scale={15} 
      size={1.5} 
      speed={0.3} 
      opacity={0.4} 
      color="#38bdf8" 
    />
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020617]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} />
        <Environment preset="night" />
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#38bdf8" />
        
        <DevilFruit />
        <SeaParticles />
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={0.5} />
        
        <fog attach="fog" args={['#020617', 8, 20]} />
      </Canvas>
    </div>
  );
}
