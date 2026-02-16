"use client"

import React, { createContext, useContext, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface MousePosition {
  x: number
  y: number
}

interface CursorCardsContextType {
  mousePosition: MousePosition
  containerRef: React.RefObject<HTMLDivElement | null> | null
}

const CursorCardsContext = createContext<CursorCardsContextType>({
  mousePosition: { x: 0, y: 0 },
  containerRef: null,
})

interface CursorCardsContainerProps {
  children: React.ReactNode
  className?: string
}

export function CursorCardsContainer({
  children,
  className,
}: CursorCardsContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <CursorCardsContext.Provider value={{ mousePosition, containerRef }}>
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className={cn("relative", className)}
      >
        {children}
      </div>
    </CursorCardsContext.Provider>
  )
}

interface CursorCardProps {
  children: React.ReactNode
  className?: string
  borderColor?: string
  glowColor?: string
  glowIntensity?: number
}

export function CursorCard({
  children,
  className,
  borderColor = "#34bb92",
  glowColor = "#34bb92",
  glowIntensity = 400,
}: CursorCardProps) {
  const { mousePosition, containerRef } = useContext(CursorCardsContext)
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [localMousePosition, setLocalMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setLocalMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      className={cn("relative group", className)}
      style={{
        '--mouse-x': `${localMousePosition.x}px`,
        '--mouse-y': `${localMousePosition.y}px`,
        '--glow-color': glowColor,
      } as React.CSSProperties}
    >
      {/* Base border */}
      <div className="absolute inset-0 rounded-[inherit] border-4 border-gray-800" />
      
      {/* Cursor glow effect - follows mouse on border */}
      <div 
        className={cn(
          "pointer-events-none absolute inset-[-4px] rounded-[inherit] opacity-0 transition-opacity duration-200 z-20",
          isHovered && "opacity-100"
        )}
        style={{
          background: `radial-gradient(${glowIntensity}px circle at var(--mouse-x) var(--mouse-y), ${glowColor}, transparent 50%)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          padding: '4px',
          filter: 'blur(2px)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </div>
  )
}
