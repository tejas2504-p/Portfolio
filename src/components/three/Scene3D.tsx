"use client";

import React, { Component, ReactNode, Suspense } from "react";
import { Html } from "@react-three/drei";
import HeroModel from "./HeroModel";

// Error boundary to prevent entire site crash on model failure
class ErrorBoundary extends Component<{children: ReactNode, fallback: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode, fallback: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default function Scene3D() {
  return (
    <>
      {/* Cinematic Lighting Setup */}
      {/* Base ambient light for minimum visibility */}
      <ambientLight intensity={0.15} />
      
      {/* Key Light: Main illumination from top front right */}
      <directionalLight position={[5, 8, 5]} intensity={1.5} color="#ffffff" />
      
      {/* Fill Light: Soft blue-ish light from the opposite side to fill shadows */}
      <pointLight position={[-5, 2, 5]} intensity={0.8} color="#60a5fa" />
      
      {/* Rim/Back Light: Creates separation from the dark background */}
      <pointLight position={[0, 5, -8]} intensity={2.5} color="#818cf8" />
      
      <ErrorBoundary 
        fallback={
          <Html center>
            <div className="flex flex-col items-center gap-2 bg-[var(--background)]/80 backdrop-blur-md p-4 border border-[var(--border-subtle)]">
              <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest whitespace-nowrap">
                Visual Offline
              </span>
            </div>
          </Html>
        }
      >
        <Suspense 
          fallback={
            <Html center>
              <span className="text-xs text-[var(--text-muted)] font-mono uppercase animate-pulse tracking-widest whitespace-nowrap">
                Loading 3D...
              </span>
            </Html>
          }
        >
          <HeroModel />
        </Suspense>
      </ErrorBoundary>
    </>
  );
}
