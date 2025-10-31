'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Text } from '@react-three/drei';
import * as THREE from 'three';
import { projects } from '@/lib/data';

// Code Block component representing a project
function CodeBlock({ position, color, size, name }: { position: [number, number, number]; color: string; size: number; name: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.001;
      if (hovered) {
        meshRef.current.scale.lerp(new THREE.Vector3(1.3, 1.3, 1.3), 0.1);
      } else {
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group position={position}>
      {/* Main code cube */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[size * 2, size * 2, size * 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 0.6 : 0.3}
          wireframe={false}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <boxGeometry args={[size * 2, size * 2, size * 2]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={hovered ? 0.6 : 0.3}
        />
      </mesh>

      {/* Project name */}
      {hovered && (
        <Text
          position={[0, size * 2 + 1, 0]}
          fontSize={0.4}
          color={color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {name}
        </Text>
      )}

      {/* Corner brackets */}
      {[...Array(4)].map((_, i) => (
        <mesh
          key={i}
          position={[
            (i % 2 === 0 ? 1 : -1) * size,
            (i < 2 ? 1 : -1) * size,
            size,
          ]}
        >
          <boxGeometry args={[0.1, 0.5, 0.1]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

// Floating code characters in background
function CodeParticles() {
  const characters = ['0', '1', '{', '}', '<', '>', '/', '=', '+', '-', '*'];
  const particlesRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0002;
    }
  });

  return (
    <group ref={particlesRef}>
      {[...Array(50)].map((_, i) => {
        const x = (Math.random() - 0.5) * 80;
        const y = (Math.random() - 0.5) * 80;
        const z = (Math.random() - 0.5) * 80;
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        return (
          <Text
            key={i}
            position={[x, y, z]}
            fontSize={0.3}
            color={`hsl(${Math.random() * 60 + 150}, 70%, 60%)`}
            anchorX="center"
            anchorY="middle"
            fillOpacity={0.3}
          >
            {char}
          </Text>
        );
      })}
    </group>
  );
}

// Floating brackets and symbols
function FloatingSymbol({ position, symbol }: { position: [number, number, number]; symbol: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.01;
      groupRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={1}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.05}
        outlineColor="#000000"
      >
        {symbol}
      </Text>
    </group>
  );
}

// Floating variable/function names
function FloatingVariable({ position, varName }: { position: [number, number, number]; varName: string }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
      groupRef.current.position.y += Math.sin(Date.now() * 0.001) * 0.001;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Text
        fontSize={0.5}
        color="#ff00ff"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {varName}
      </Text>
      {/* Underline */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[varName.length * 0.3, 0.05, 0.05]} />
        <meshBasicMaterial color="#ff00ff" />
      </mesh>
    </group>
  );
}

// Main scene component
function Scene() {
  const positions: [number, number, number][] = useMemo(() => {
    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    return projects.slice(0, 8).map((_, i) => {
      const y = 1 - (i / (projects.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = phi * i;
      const x = Math.cos(theta) * radius * 15;
      const z = Math.sin(theta) * radius * 15;
      return [x, y * 10, z];
    });
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 30]} />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        autoRotate
        autoRotateSpeed={0.5}
        maxDistance={50}
        minDistance={10}
      />

      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ff88" />
      <pointLight position={[-10, -10, -10]} color="#ff00ff" intensity={0.5} />
      <pointLight position={[0, 0, 20]} color="#00ffff" intensity={0.3} />

      <CodeParticles />

      {/* Central core - main function */}
      <group>
        <mesh>
          <octahedronGeometry args={[2.5, 0]} />
          <meshStandardMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={0.5}
            wireframe
          />
        </mesh>
        <Text
          position={[0, 0, 0]}
          fontSize={0.6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.1}
          outlineColor="#000000"
        >
          {'main()'}
        </Text>
      </group>

      {/* Project code blocks */}
      {projects.slice(0, 8).map((project, index) => (
        <CodeBlock
          key={project.id}
          position={positions[index]}
          color={project.color}
          size={0.8 + Math.random() * 0.3}
          name={project.title}
        />
      ))}

      {/* Floating symbols */}
      {['{', '}', '[', ']', '<', '>', '(', ')', '=>', '//'].map((symbol, i) => (
        <FloatingSymbol
          key={`symbol-${i}`}
          symbol={symbol}
          position={[
            Math.cos(i * Math.PI / 5) * 15,
            Math.sin(i * Math.PI / 5) * 10,
            Math.sin(i * Math.PI / 3) * 12,
          ]}
        />
      ))}

      {/* Floating variables */}
      {['const', 'let', 'var', 'function', 'class'].map((varName, i) => (
        <FloatingVariable
          key={`var-${i}`}
          varName={varName}
          position={[
            Math.cos(i * Math.PI * 2 / 5 + Math.PI) * 12,
            Math.sin(i * Math.PI / 2) * 8,
            Math.sin(i * Math.PI * 2 / 5 + Math.PI) * 12,
          ]}
        />
      ))}
    </>
  );
}

export default function Universe() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

