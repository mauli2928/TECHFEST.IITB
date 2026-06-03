"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import * as THREE from "three";

interface CyborgCoreProps {
  interactive?: boolean;
  scrollProgress?: number;
}

export function CyborgCore({
  interactive = true,
  scrollProgress = 0,
}: CyborgCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (groupRef.current) {
      const scrollRot = scrollProgress * Math.PI * 0.5;
      if (interactive) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(
          groupRef.current.rotation.y,
          pointer.x * 1.2 + t * 0.12 + scrollRot,
          0.06
        );
        groupRef.current.rotation.x = THREE.MathUtils.lerp(
          groupRef.current.rotation.x,
          -pointer.y * 0.5,
          0.06
        );
      } else {
        groupRef.current.rotation.y = t * 0.18 + scrollRot;
      }
    }

    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.25;
      innerRef.current.rotation.z = t * 0.12;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
    }
  });

  return (
    <>
      <Stars radius={80} depth={40} count={isLowPower() ? 400 : 1200} factor={3} fade speed={0.5} />
      <Float speed={2} rotationIntensity={0.35} floatIntensity={0.7}>
        <group ref={groupRef}>
          <mesh ref={innerRef}>
            <icosahedronGeometry args={[1.15, 2]} />
            <MeshDistortMaterial
              color="#00e5ff"
              distort={0.4}
              speed={2.5}
              roughness={0.15}
              metalness={0.95}
              emissive="#0066ff"
              emissiveIntensity={0.3}
              transparent
              opacity={0.9}
            />
          </mesh>
          <mesh ref={ringRef}>
            <torusGeometry args={[1.75, 0.025, 16, 120]} />
            <meshBasicMaterial color="#8b5cf6" transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.1, 0.018, 16, 120]} />
            <meshBasicMaterial color="#00d4ff" transparent opacity={0.35} />
          </mesh>
          <mesh>
            <octahedronGeometry args={[0.32, 0]} />
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00f0ff"
              emissiveIntensity={1.2}
              metalness={1}
              roughness={0.05}
            />
          </mesh>
        </group>
      </Float>
    </>
  );
}

function isLowPower() {
  if (typeof window === "undefined") return false;
  return window.innerWidth < 768;
}
