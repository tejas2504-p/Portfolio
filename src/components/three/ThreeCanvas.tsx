"use client";

import { Canvas } from "@react-three/fiber";
import React, { Component, ReactNode } from "react";
import Scene3D from "./Scene3D";

// Error boundary to prevent entire site crash on WebGL failure
class CanvasErrorBoundary extends Component<{children: ReactNode, fallback: ReactNode}, {hasError: boolean}> {
  constructor(props: {children: ReactNode, fallback: ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <>{this.props.fallback}</>;
    }
    return <>{this.props.children}</>;
  }
}

export default function ThreeCanvas() {
  return (
    <div 
      className="w-full h-[350px] sm:h-[450px] lg:h-[600px] border border-[var(--border-subtle)] flex items-center justify-center relative overflow-hidden bg-[var(--background)] group transition-colors hover:border-[var(--border-primary)] duration-700"
      style={{
        transform: "translate(var(--mouse-x, 0px), var(--mouse-y, 0px))",
        transition: "transform 0.2s cubic-bezier(0.2, 0, 0, 1)"
      }}
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--border-primary)_1px,transparent_1px)] bg-[size:24px_24px] opacity-[0.08] pointer-events-none"></div>
      
      {/* Soft radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

      {/* Thin circular outline */}
      <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full border border-[var(--border-subtle)] opacity-20 group-hover:opacity-40 transition-all duration-1000 scale-95 group-hover:scale-100 pointer-events-none"></div>

      {/* Subtle crosshair */}
      <div className="absolute w-full h-[1px] bg-[var(--border-subtle)] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
      <div className="absolute h-full w-[1px] bg-[var(--border-subtle)] opacity-20 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Center + */}
      <div className="absolute text-[var(--border-primary)] text-xs opacity-50 pointer-events-none">+</div>

      {/* Inner dashed border */}
      <div className="absolute inset-6 border border-dashed border-[var(--border-subtle)] opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
      
      {/* Technical coordinate marks */}
      <div className="absolute top-3 left-3 text-[10px] font-mono text-[var(--text-muted)] opacity-50 pointer-events-none">X: 0.000</div>
      <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[var(--text-muted)] opacity-50 pointer-events-none">Y: 0.000</div>
      <div className="absolute top-3 right-3 text-[10px] font-mono text-[var(--text-muted)] opacity-50 pointer-events-none">+ Z</div>
      
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-auto">
        <CanvasErrorBoundary 
          fallback={
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-[var(--background)]/80 backdrop-blur-md p-4">
              <span className="text-[10px] text-[var(--text-muted)] font-mono uppercase tracking-widest whitespace-nowrap">
                3D Visual Offline
              </span>
              <span className="text-[10px] text-[var(--text-muted)] opacity-50 font-mono uppercase tracking-widest whitespace-nowrap">
                WebGL not supported
              </span>
            </div>
          }
        >
          <Canvas
            camera={{ position: [0, 0, 6.5], fov: 45 }}
            gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
            dpr={[1, 1.5]}
          >
            <Scene3D />
          </Canvas>
        </CanvasErrorBoundary>
      </div>

    </div>
  );
}
