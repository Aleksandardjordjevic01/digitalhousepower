"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CursorCard, CursorCardsContainer } from "@/components/ui/cursor-cards"
import { cn } from "@/lib/utils"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
      <svg
        className="w-full h-full text-[#ffbb01]"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={0.12 + path.id * 0.008}
            initial={{ pathLength: 0.3, opacity: 0.5 }}
            animate={{
              pathLength: 2,
              opacity: [0.35, 0.55, 0.35],
              pathOffset: [0, 0, 0, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

interface CTAProps {
  badge?: {
    text: string
  }
  title: string
  description?: string
  action: {
    text: string
    href: string
  }
  withGlow?: boolean
  className?: string
}

export function CTASection({
  badge,
  title,
  description,
  action,
  withGlow = true,
  className,
}: CTAProps) {
  return (
    <section className={cn("pb-16 md:pb-24 bg-[#030303]", className)}>
      <CursorCardsContainer className="mx-auto max-w-[1300px] px-8">
        <CursorCard 
          borderColor="#6536a1"
          glowColor="#6536a1"
          glowIntensity={600}
          className="rounded-3xl overflow-visible relative"
        >
          <div className="relative flex flex-col items-center border-1 border-gray-600 gap-6 px-8 py-12 text-center sm:gap-4 md:py-32 bg-[#0a0a0a] rounded-2xl overflow-visible">
            {/* Animated Edge Glow - all sides including top */}
            {withGlow && (
              <div className="pointer-events-none absolute inset-0 rounded-2xl animate-glow-pulse delay-700">
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_120px_rgba(101,54,161,0.6),inset_0_0_80px_rgba(101,54,161,0.5),inset_0_0_40px_rgba(101,54,161,0.4)]" />
              </div>
            )}
            
            {/* Floating Paths Background */}
            <div className="absolute inset-0 opacity-70 overflow-hidden rounded-2xl">
              <FloatingPaths position={1} />
              <FloatingPaths position={-1} />
            </div>
            
            {/* Fade to black overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,_transparent_0%,_transparent_40%,_#0a0a0a_100%)]" />
            
            {/* Badge */}
            {badge && (
              <Badge
                variant="outline"
                className="opacity-0 animate-fade-in-up delay-100 border-gray-700 text-gray-400 relative z-10"
              >
                <span>{badge.text}</span>
              </Badge>
            )}

            {/* Title */}
            <h2 className="text-3xl font-semibold sm:text-3xl opacity-0 animate-fade-in-up delay-200 text-white relative z-10">
              {title}
            </h2>

            {/* Description */}
            {description && (
              <p className="text-white/70 text-sm opacity-0 animate-fade-in-up delay-300 max-w-xl relative z-10">
                {description}
              </p>
            )}

            {/* Action Button */}
            <Button
              size="lg"
              className="mt-6 opacity-0 animate-fade-in-up delay-500 bg-white hover:bg-gray-200 text-black px-12 py-6 font-semibold relative z-10"
              asChild
            >
              <a href={action.href}>{action.text}</a>
            </Button>
          </div>
        </CursorCard>
      </CursorCardsContainer>
    </section>
  )
}

