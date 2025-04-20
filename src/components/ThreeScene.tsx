
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Sphere, useTexture } from '@react-three/drei';
import { Mesh, Vector3, MathUtils } from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  icon: string;
  color: string;
  speed?: number;
  size?: number;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ position, icon, color, speed = 1, size = 0.8 }) => {
  const meshRef = useRef<Mesh>(null);
  const initialPosition = useMemo(() => new Vector3(...position), [position]);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y = initialPosition.y + Math.sin(clock.getElapsedTime() * speed) * 0.2;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[size, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.2} />
        <Text
          position={[0, 0, size + 0.1]}
          fontSize={size * 1.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {icon}
        </Text>
      </mesh>
    </Float>
  );
};

// Particles background
const ParticleField = () => {
  const particlesCount = 50;
  const positions = useMemo(() => {
    const positions = [];
    for (let i = 0; i < particlesCount; i++) {
      positions.push([
        MathUtils.randFloatSpread(10),
        MathUtils.randFloatSpread(10),
        MathUtils.randFloatSpread(10)
      ]);
    }
    return positions;
  }, []);

  return (
    <>
      {positions.map((position, i) => (
        <mesh key={i} position={position as [number, number, number]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial 
            color={
              ['#00CCFF', '#8B5CF6', '#0073F5'][Math.floor(i % 3)]
            } 
            emissive={['#00CCFF', '#8B5CF6', '#0073F5'][Math.floor(i % 3)]}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </>
  );
};

interface SceneProps {
  className?: string;
}

const Scene: React.FC<SceneProps> = ({ className }) => {
  return (
    <div className={`h-[500px] w-full relative ${className}`}>
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]} // Responsive rendering
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['transparent']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
        
        {/* Main Name Text */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
          <Text
            fontSize={1.2}
            color="#00CCFF"
            position={[0, 1, 0]}
            maxWidth={10}
            textAlign="center"
            font="/fonts/Inter-Bold.woff"
            anchorX="center"
            anchorY="middle"
          >
            VIGNA RAMTEJ
          </Text>
        </Float>
        
        {/* Tech Skill Icons */}
        <FloatingIcon position={[-3, 0, 0]} icon="⚛️" color="#61dafb" speed={1.2} />
        <FloatingIcon position={[3, 0, 0]} icon="🐍" color="#306998" speed={1.5} />
        <FloatingIcon position={[0, -2, 0]} icon="🐳" color="#0db7ed" speed={1.8} />
        <FloatingIcon position={[-2, -1, 1]} icon="☕" color="#f89820" speed={1.3} />
        <FloatingIcon position={[2, -1, 1]} icon="🦾" color="#ff6f00" speed={1.6} />
        
        {/* Background particles */}
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default Scene;
