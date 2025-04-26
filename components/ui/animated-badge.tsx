"use client"

import { type HTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface AnimatedBadgeProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
  animation?: "pulse" | "bounce" | "shake" | "none"
}

const AnimatedBadge = forwardRef<HTMLDivElement, AnimatedBadgeProps>(
  ({ className, variant, animation = "none", ...props }, ref) => {
    const getAnimationProps = () => {
      switch (animation) {
        case "pulse":
          return {
            animate: {
              scale: [1, 1.1, 1],
              transition: {
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop" as const,
              },
            },
          }
        case "bounce":
          return {
            animate: {
              y: [0, -5, 0],
              transition: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop" as const,
              },
            },
          }
        case "shake":
          return {
            animate: {
              x: [0, -2, 2, -2, 0],
              transition: {
                duration: 0.5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop" as const,
                repeatDelay: 2,
              },
            },
          }
        default:
          return {
            initial: { scale: 0, opacity: 0 },
            animate: { scale: 1, opacity: 1 },
            transition: { duration: 0.3 },
          }
      }
    }

    return (
      <motion.div ref={ref} className={cn(badgeVariants({ variant }), className)} {...getAnimationProps()} {...props} />
    )
  },
)
AnimatedBadge.displayName = "AnimatedBadge"

export { AnimatedBadge, badgeVariants }
