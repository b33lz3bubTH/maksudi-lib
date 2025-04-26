"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

export interface AnimatedTooltipProps {
  children: ReactNode
  content: ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "start" | "center" | "end"
  className?: string
  contentClassName?: string
  delayDuration?: number
}

export function AnimatedTooltip({
  children,
  content,
  side = "top",
  align = "center",
  className,
  contentClassName,
  delayDuration = 300,
}: AnimatedTooltipProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [delayTimeout, setDelayTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsOpen(true)
    }, delayDuration)
    setDelayTimeout(timeout)
  }

  const handleMouseLeave = () => {
    if (delayTimeout) {
      clearTimeout(delayTimeout)
      setDelayTimeout(null)
    }
    setIsOpen(false)
  }

  // Calculate position based on side and align
  const getPosition = () => {
    switch (side) {
      case "top":
        return { bottom: "calc(100% + 5px)" }
      case "right":
        return { left: "calc(100% + 5px)" }
      case "bottom":
        return { top: "calc(100% + 5px)" }
      case "left":
        return { right: "calc(100% + 5px)" }
    }
  }

  const getAlignment = () => {
    if (side === "top" || side === "bottom") {
      switch (align) {
        case "start":
          return { left: 0 }
        case "center":
          return { left: "50%", transform: "translateX(-50%)" }
        case "end":
          return { right: 0 }
      }
    } else {
      switch (align) {
        case "start":
          return { top: 0 }
        case "center":
          return { top: "50%", transform: "translateY(-50%)" }
        case "end":
          return { bottom: 0 }
      }
    }
  }

  // Animation variants based on side
  const variants = {
    initial: {
      opacity: 0,
      ...(side === "top" && { y: 10 }),
      ...(side === "right" && { x: -10 }),
      ...(side === "bottom" && { y: -10 }),
      ...(side === "left" && { x: 10 }),
    },
    animate: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      ...(side === "top" && { y: 10 }),
      ...(side === "right" && { x: -10 }),
      ...(side === "bottom" && { y: -10 }),
      ...(side === "left" && { x: 10 }),
      transition: {
        duration: 0.15,
        ease: "easeIn",
      },
    },
  }

  return (
    <div
      className={cn("relative inline-block", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={cn(
              "absolute z-50 max-w-xs rounded-md bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
              contentClassName,
            )}
            style={{
              ...getPosition(),
              ...getAlignment(),
            }}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
