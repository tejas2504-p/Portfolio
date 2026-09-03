"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Mesh, MeshStandardMaterial } from "three";

export default function HeroModel() {
  const { scene } = useGLTF("/models/hero-model.glb");
  const modelRef = useRef<Group>(null);
  const { viewport } = useThree();
  const [reduceMotion, setReduceMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  // Check for reduced motion preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listener = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Enhance materials for a premium futuristic look
  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        if (mesh.material) {
          // If the model is a placeholder box, we can give it a sleek look
          // We apply a premium material override if it's the default imported material
          const mat = mesh.material as MeshStandardMaterial;
          mat.metalness = 0.8;
          mat.roughness = 0.2;
          // Optionally add wireframe for a technical look if desired, but 
          // keeping it solid with good lighting is more cinematic.
        }
      }
    });
  }, [scene]);

  // Calculate responsive scale based on viewport width
  const baseScale = viewport.width < 4 ? 1.5 : viewport.width < 8 ? 2 : 2.5;

  // Premium subtle idle animation and pointer response
  useFrame((state) => {
    if (modelRef.current && !reduceMotion) {
      const time = state.clock.elapsedTime;
      
      // Base continuous rotation
      const baseRotationY = time * 0.15;
      
      // Mouse interaction offsets (extremely small)
      const mouseOffsetX = (state.pointer.y * Math.PI) * 0.02;
      const mouseOffsetY = (state.pointer.x * Math.PI) * 0.05;
      
      // Smoothly interpolate towards target rotations
      modelRef.current.rotation.x += (mouseOffsetX - modelRef.current.rotation.x) * 0.1;
      modelRef.current.rotation.y += ((baseRotationY + mouseOffsetY) - modelRef.current.rotation.y) * 0.1;
      
      // Subtle vertical floating
      modelRef.current.position.y = Math.sin(time * 0.8) * 0.1;
      
      // Very subtle scale breathing
      const breathScale = baseScale + Math.sin(time * 1.2) * 0.02;
      modelRef.current.scale.set(breathScale, breathScale, breathScale);
    } else if (modelRef.current && reduceMotion) {
      // Ensure scale and rotation are correct if animation is disabled
      modelRef.current.scale.set(baseScale, baseScale, baseScale);
      modelRef.current.rotation.set(0, 0, 0);
      modelRef.current.position.y = 0;
    }
  });

  return (
    <group ref={modelRef} scale={baseScale}>
      <primitive object={scene} position={[0, 0, 0]} />
    </group>
  );
}

// Preload to improve performance
useGLTF.preload("/models/hero-model.glb");
