"use client"

import { type ReactNode, useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

import { cn } from "@/lib/utils"

export interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: "fade" | "slide" | "scale" | "flip"
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
  direction?: "up" | "down" | "left" | "right"
  distance?: number
}

const animations = {
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slide: (direction: "up" | "down" | "left" | "right", distance: number) => {
    const x = direction === "left" ? -distance : direction === "right" ? distance : 0
    const y = direction === "up" ? -distance : direction === "down" ? distance : 0
    return {
      hidden: { opacity: 0, x, y },
      visible: { opacity: 1, x: 0, y: 0 },
    }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  flip: {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0 },
  },
}

export function ScrollReveal({
  children,
  className,
  animation = "fade",
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  once = true,
  direction = "up",
  distance = 50,
}: ScrollRevealProps) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { threshold, once })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else if (!once) {
      controls.start("hidden")
    }
  }, [controls, inView, once])

  const getAnimationVariants = () => {
    if (animation === "slide") {
      return animations.slide(direction, distance)
    }
    return animations[animation]
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={getAnimationVariants()}
      transition={{ duration, delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
