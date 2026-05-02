"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function ScaffoldingModel() {
  const groupRef = useRef<THREE.Group>(null);

  // Stable, crash-proof math-based animation (no physics physics springs that can NaN)
  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      // Continuous rotation
      groupRef.current.rotation.y = time * 0.15;
      // Subtle tilt wobble
      groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
      groupRef.current.rotation.z = Math.cos(time * 0.3) * 0.05;
      // Gentle floating up and down
      groupRef.current.position.y = Math.sin(time * 1.2) * 0.3;
    }
  });

  // Optimize material: Create once
  const pipeMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: "#008FD4", // Deeper blue to contrast against white background
    metalness: 0.6,
    roughness: 0.3,
  }), []);

  // Optimize geometries to prevent memory leaks and drop segments for mobile safety
  const verticalGeo = useMemo(() => new THREE.CylinderGeometry(0.05, 0.05, 6, 8), []);
  const horizontalGeo = useMemo(() => new THREE.CylinderGeometry(0.04, 0.04, 4.2, 8), []);
  const braceGeo = useMemo(() => new THREE.CylinderGeometry(0.03, 0.03, 5.6, 8), []);

  return (
    <group ref={groupRef} scale={[1.3, 1.3, 1.3]}>
      {/* Vertical Pipes */}
      {[-2, 0, 2].map((x, i) =>
        [-2, 0, 2].map((z, j) => (
          <mesh key={`v-${i}-${j}`} position={[x, 0, z]} material={pipeMaterial} geometry={verticalGeo} />
        ))
      )}
      
      {/* Horizontal Pipes - X Axis */}
      {[-1.5, 0, 1.5].map((y, i) =>
        [-2, 0, 2].map((z, j) => (
          <mesh key={`hx-${i}-${j}`} position={[0, y, z]} rotation={[0, 0, Math.PI / 2]} material={pipeMaterial} geometry={horizontalGeo} />
        ))
      )}

      {/* Horizontal Pipes - Z Axis */}
      {[-1.5, 0, 1.5].map((y, i) =>
        [-2, 0, 2].map((x, j) => (
          <mesh key={`hz-${i}-${j}`} position={[x, y, 0]} rotation={[Math.PI / 2, 0, 0]} material={pipeMaterial} geometry={horizontalGeo} />
        ))
      )}
      
      {/* Cross Bracing */}
      <mesh position={[0, 0, 2]} rotation={[0, 0, Math.PI / 4]} material={pipeMaterial} geometry={braceGeo} />
      <mesh position={[0, 0, -2]} rotation={[0, 0, -Math.PI / 4]} material={pipeMaterial} geometry={braceGeo} />
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 opacity-40 pointer-events-none w-full h-full">
      <Canvas 
        camera={{ position: [5, 3, 5], fov: 45 }}
        dpr={[1, 2]} // Protects mobile from high-DPI crashing
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -5]} intensity={0.8} color="#008FD4" />
        
        {/* We use the custom stable animation inside ScaffoldingModel instead of physics wrappers */}
        <ScaffoldingModel />
      </Canvas>
    </div>
  );
}
