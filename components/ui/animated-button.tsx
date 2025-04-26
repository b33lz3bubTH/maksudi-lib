"use client"

import type React from "react"

import { type ButtonHTMLAttributes, forwardRef, useState } from "react"
import { motion } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface AnimatedButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  ripple?: boolean
  hoverScale?: number
}

const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, ripple = true, hoverScale = 1.05, children, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false)
    const [rippleEffect, setRippleEffect] = useState<{ x: number; y: number; size: number } | null>(null)

    const handleMouseEnter = () => {
      setIsHovered(true)
    }

    const handleMouseLeave = () => {
      setIsHovered(false)
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple) {
        const button = e.currentTarget
        const rect = button.getBoundingClientRect()
        const size = Math.max(rect.width, rect.height) * 2

        setRippleEffect({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          size,
        })

        setTimeout(() => {
          setRippleEffect(null)
        }, 600)
      }

      props.onClick?.(e)
    }

    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
        whileHover={{ scale: hoverScale }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        {...props}
      >
        {rippleEffect && (
          <motion.span
            className="absolute rounded-full bg-white/20 pointer-events-none"
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{
              width: rippleEffect.size,
              height: rippleEffect.size,
              opacity: 0,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{
              left: rippleEffect.x - rippleEffect.size / 2,
              top: rippleEffect.y - rippleEffect.size / 2,
            }}
          />
        )}
        {children}
        {isHovered && (
          <motion.span
            className="absolute inset-0 bg-white/10 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </motion.button>
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"

export { AnimatedButton, buttonVariants }
