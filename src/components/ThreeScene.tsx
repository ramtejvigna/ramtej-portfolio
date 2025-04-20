
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text, useTexture, Html } from '@react-three/drei';
import { Mesh, Vector3 } from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  icon: string;
  color: string;
  speed?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ position, icon, color, speed = 1 }) => {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = new Vector3(...position);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialPosition.y + Math.sin(clock.getElapsedTime() * speed) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
        <Html distanceFactor={8} position={[0, 0, 0.6]} transform>
          <div className="text-2xl">{icon}</div>
        </Html>
      </mesh>
    </Float>
  );
};

interface SceneProps {
  className?: string;
}

const Scene: React.FC<SceneProps> = ({ className }) => {
  return (
    <div className={`h-[500px] ${className}`}>
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} />
        
        {/* Text */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
          <Text
            fontSize={1.2}
            color="#00CCFF"
            position={[0, 1, 0]}
            font="/fonts/Inter-Bold.woff"
            maxWidth={10}
            textAlign="center"
          >
            VIGNA RAMTEJ
          </Text>
        </Float>
        
        {/* Floating Tech Icons */}
        <FloatingIcon position={[-3, 0, 0]} icon="⚛️" color="#61dafb" speed={1.2} />
        <FloatingIcon position={[3, 0, 0]} icon="🐍" color="#306998" speed={1.5} />
        <FloatingIcon position={[0, -2, 0]} icon="🐳" color="#0db7ed" speed={1.8} />
        <FloatingIcon position={[-2, -1, 1]} icon="☕" color="#f89820" speed={1.3} />
        <FloatingIcon position={[2, -1, 1]} icon="🦾" color="#ff6f00" speed={1.6} />
        
        {/* Background particles */}
        {[...Array(30)].map((_, i) => (
          <mesh key={i} position={[
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 5 - 10
          ]}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial color={
              ['#00CCFF', '#8B5CF6', '#0073F5'][Math.floor(Math.random() * 3)]
            } />
          </mesh>
        ))}
      </Canvas>
    </div>
  );
};

export default Scene;
