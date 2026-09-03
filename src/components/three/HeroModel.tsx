"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Mesh, MeshStandardMaterial } from "three";

export default function HeroModel() {
  const { scene } = useGLTF("/models/hero-model.glb");
  // Ref for scroll-driven animations
  const scrollGroupRef = useRef<Group>(null);
  // Ref for continuous idle animations
  const idleGroupRef = useRef<Group>(null);

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
          const mat = mesh.material as MeshStandardMaterial;
          mat.metalness = 0.8;
          mat.roughness = 0.2;
        }
      }
    });
  }, [scene]);

  // GSAP Scroll Choreography
  useEffect(() => {
    if (reduceMotion || !scrollGroupRef.current) return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      import("gsap").then(({ gsap }) => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
          // Responsive values based on viewport
          const isMobile = window.innerWidth < 768;
          
          if (isMobile) {
            // Simplified mobile choreography
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              }
            });

            tl.to(scrollGroupRef.current!.rotation, { y: Math.PI * 0.5, ease: "none" }, 0)
              .to(scrollGroupRef.current!.position, { y: 1, ease: "none" }, 0)
              .to(scrollGroupRef.current!.scale, { x: 0.8, y: 0.8, z: 0.8, ease: "none" }, 0);
          } else {
            // Cinematic desktop choreography
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: document.body,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
              }
            });

            // Hero -> About
            tl.to(scrollGroupRef.current!.rotation, { y: Math.PI * 0.5, x: 0.1, ease: "none" }, 0)
              .to(scrollGroupRef.current!.position, { x: 1.5, y: -0.5, ease: "none" }, 0)
              .to(scrollGroupRef.current!.scale, { x: 0.9, y: 0.9, z: 0.9, ease: "none" }, 0);

            // About -> Skills
            tl.to(scrollGroupRef.current!.rotation, { y: Math.PI, x: -0.1, ease: "none" }, 0.2)
              .to(scrollGroupRef.current!.position, { x: -1.5, y: -1, ease: "none" }, 0.2)
              .to(scrollGroupRef.current!.scale, { x: 1, y: 1, z: 1, ease: "none" }, 0.2);

            // Skills -> Projects / Lower Sections
            tl.to(scrollGroupRef.current!.rotation, { y: Math.PI * 1.5, x: 0.2, ease: "none" }, 0.4)
              .to(scrollGroupRef.current!.position, { x: 3, y: -2, ease: "none" }, 0.4)
              .to(scrollGroupRef.current!.scale, { x: 0.5, y: 0.5, z: 0.5, ease: "none" }, 0.4);
          }
        });

        return () => ctx.revert();
      });
    });
  }, [reduceMotion]);

  // Calculate responsive scale based on viewport width
  const baseScale = viewport.width < 4 ? 1.5 : viewport.width < 8 ? 2 : 2.5;

  // Premium subtle idle animation and pointer response
  useFrame((state) => {
    if (idleGroupRef.current && !reduceMotion) {
      const time = state.clock.elapsedTime;
      
      const baseRotationY = time * 0.15;
      const mouseOffsetX = (state.pointer.y * Math.PI) * 0.02;
      const mouseOffsetY = (state.pointer.x * Math.PI) * 0.05;
      
      idleGroupRef.current.rotation.x += (mouseOffsetX - idleGroupRef.current.rotation.x) * 0.1;
      idleGroupRef.current.rotation.y += ((baseRotationY + mouseOffsetY) - idleGroupRef.current.rotation.y) * 0.1;
      
      idleGroupRef.current.position.y = Math.sin(time * 0.8) * 0.1;
      
      const breathScale = baseScale + Math.sin(time * 1.2) * 0.02;
      idleGroupRef.current.scale.set(breathScale, breathScale, breathScale);
    } else if (idleGroupRef.current && reduceMotion) {
      idleGroupRef.current.scale.set(baseScale, baseScale, baseScale);
      idleGroupRef.current.rotation.set(0, 0, 0);
      idleGroupRef.current.position.y = 0;
    }
  });

  return (
    <group ref={scrollGroupRef}>
      <group ref={idleGroupRef} scale={baseScale}>
        <primitive object={scene} position={[0, 0, 0]} />
      </group>
    </group>
  );
}

// Preload to improve performance
useGLTF.preload("/models/hero-model.glb");
