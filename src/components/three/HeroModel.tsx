"use client";

import { useGLTF, Center } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Group, Mesh, MeshStandardMaterial } from "three";

export default function HeroModel() {
  const { scene } = useGLTF("/models/hero-robot.glb");
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
          mat.metalness = 0.6;
          mat.roughness = 0.3;
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
  // Adjusted for a smaller, less overwhelming robot size
  const baseScale = viewport.width < 4 ? 1.5 : viewport.width < 8 ? 2.0 : 2.5;
  
  // Use real pixel width for mobile detection instead of ThreeJS camera units
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { gl } = useThree();
  const isPointerActive = useRef(true); // Default to true so it works immediately

  useEffect(() => {
    // If the mouse leaves the browser window or the canvas, return to neutral
    const handlePointerLeave = () => { isPointerActive.current = false; };
    const handlePointerEnter = () => { isPointerActive.current = true; };
    
    // Listen on the document body to catch mouse movements globally
    document.body.addEventListener("pointerleave", handlePointerLeave);
    document.body.addEventListener("pointerenter", handlePointerEnter);
    document.body.addEventListener("pointermove", handlePointerEnter);
    
    return () => {
      document.body.removeEventListener("pointerleave", handlePointerLeave);
      document.body.removeEventListener("pointerenter", handlePointerEnter);
      document.body.removeEventListener("pointermove", handlePointerEnter);
    };
  }, []);

  // Premium subtle idle animation and smooth cursor response
  useFrame((state, delta) => {
    if (idleGroupRef.current && !reduceMotion) {
      const time = state.clock.elapsedTime;
      
      // 1. IDLE TRANSFORM (Breathing, Floating, Tilt)
      // These run continuously regardless of mouse position
      const idleFloatY = Math.sin(time * 1.5) * 0.04;
      const idleRotX = Math.sin(time * 0.8) * 0.02; // Subtle forward/back nod
      const idleRotY = Math.sin(time * 0.5) * 0.05; // Subtle side-to-side look
      const idleRotZ = Math.sin(time * 1.2) * 0.015; // Subtle head tilt
      const breathScale = baseScale + Math.sin(time * 2.0) * 0.015;
      
      // 2. CURSOR TRANSFORM
      // Only apply cursor tracking on desktop when pointer is over the Canvas
      let cursorRotX = 0;
      let cursorRotY = 0;
      let cursorRotZ = 0; // Added for leaning effect
      
      if (!isMobile && isPointerActive.current) {
        const pointerX = state.pointer.x;
        const pointerY = state.pointer.y;
        
        // Massive multipliers for a very pronounced rotation
        cursorRotX = -(pointerY * 0.75); // Head nods up/down dramatically
        cursorRotY = (pointerX * 1.5);   // Body turns almost full profile
        cursorRotZ = -(pointerX * 0.3);  // Deeper lean into the turn
      }
      
      // 3. COMPOSITE TRANSFORM (Idle + Cursor)
      const targetRotX = idleRotX + cursorRotX;
      const targetRotY = idleRotY + cursorRotY;
      const targetRotZ = idleRotZ + cursorRotZ;
      
      // 4. SMOOTH LERPING
      const lerpFactor = 4 * delta; // Slightly faster lag response to feel more connected
      
      idleGroupRef.current.rotation.x += (targetRotX - idleGroupRef.current.rotation.x) * lerpFactor;
      idleGroupRef.current.rotation.y += (targetRotY - idleGroupRef.current.rotation.y) * lerpFactor;
      idleGroupRef.current.rotation.z += (targetRotZ - idleGroupRef.current.rotation.z) * lerpFactor;
      
      idleGroupRef.current.position.y = idleFloatY;
      
      // Keep desktop offset in X to avoid overlapping typography
      if (!isMobile) {
        idleGroupRef.current.position.x = 2.0; 
      } else {
        idleGroupRef.current.position.x = 0;
      }
      
      idleGroupRef.current.scale.set(breathScale, breathScale, breathScale);
      
    } else if (idleGroupRef.current && reduceMotion) {
      idleGroupRef.current.scale.set(baseScale, baseScale, baseScale);
      idleGroupRef.current.rotation.set(0, 0, 0);
      idleGroupRef.current.position.set(!isMobile ? 2.0 : 0, 0, 0);
    }
  });

  return (
    <group ref={scrollGroupRef}>
      <group ref={idleGroupRef} scale={baseScale}>
        <Center>
          <primitive object={scene} position={[0, -0.5, 0]} />
        </Center>
      </group>
    </group>
  );
}

// Preload to improve performance
useGLTF.preload("/models/hero-robot.glb");
