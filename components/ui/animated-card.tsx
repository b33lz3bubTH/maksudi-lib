"use client"

import type React from "react"

import { type HTMLAttributes, forwardRef, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

export interface AnimatedCardProps extends HTMLAttributes<HTMLDivElement> {
  tiltEffect?: boolean
  hoverScale?: number
  glareEffect?: boolean
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, tiltEffect = true, hoverScale = 1.02, glareEffect = true, children, ...props }, ref) => {
    const cardRef = useRef<HTMLDivElement>(null)

    // Motion values for the card tilt effect
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    // Smooth out the motion values
    const springConfig = { damping: 20, stiffness: 300 }
    const xSpring = useSpring(x, springConfig)
    const ySpring = useSpring(y, springConfig)

    // Transform the motion values to rotation values
    const rotateX = useTransform(ySpring, [-0.5, 0.5], [10, -10])
    const rotateY = useTransform(xSpring, [-0.5, 0.5], [-10, 10])

    // Glare effect position
    const glareX = useTransform(xSpring, [-0.5, 0.5], ["-20%", "120%"])
    const glareY = useTransform(ySpring, [-0.5, 0.5], ["-20%", "120%"])
    const glareOpacity = useTransform(xSpring, [-0.5, 0, 0.5], [0.1, 0.3, 0.1])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!tiltEffect || !cardRef.current) return

      const rect = cardRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      // Calculate the position of the mouse relative to the card
      const xPos = (e.clientX - rect.left) / width - 0.5
      const yPos = (e.clientY - rect.top) / height - 0.5

      x.set(xPos)
      y.set(yPos)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <motion.div
        ref={cardRef}
        className={cn("relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm", className)}
        style={{
          rotateX: tiltEffect ? rotateX : 0,
          rotateY: tiltEffect ? rotateY : 0,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        whileHover={{ scale: hoverScale }}
        transition={{ duration: 0.2 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        {...props}
      >
        {glareEffect && (
          <motion.div
            className="absolute inset-0 z-10 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"
            style={{
              left: glareX,
              top: glareY,
              width: "100%",
              height: "100%",
              opacity: glareOpacity,
            }}
          />
        )}
        <div className="relative z-0">{children}</div>
      </motion.div>
    )
  },
)
AnimatedCard.displayName = "AnimatedCard"

export { AnimatedCard }
