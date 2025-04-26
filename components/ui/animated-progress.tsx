"use client"

import { type HTMLAttributes, forwardRef, useEffect, useRef } from "react"
import { useAnimation } from "framer-motion"
import gsap from "gsap"

import { cn } from "@/lib/utils"

export interface AnimatedProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  indicatorColor?: string
  trackColor?: string
  showAnimation?: boolean
}

const AnimatedProgress = forwardRef<HTMLDivElement, AnimatedProgressProps>(
  (
    {
      className,
      value,
      max = 100,
      indicatorColor = "var(--primary)",
      trackColor = "#e2e8f0",
      showAnimation = true,
      ...props
    },
    ref,
  ) => {
    const percentage = (value / max) * 100
    const controls = useAnimation()
    const indicatorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      controls.start({
        width: `${percentage}%`,
        transition: { duration: 0.5, ease: "easeOut" },
      })

      if (showAnimation && indicatorRef.current) {
        gsap.to(indicatorRef.current, {
          width: `${percentage}%`,
          duration: 0.8,
          ease: "power2.out",
        })

        if (percentage > 0) {
          gsap.fromTo(
            indicatorRef.current,
            { boxShadow: "0 0 5px rgba(var(--primary), 0.5)" },
            {
              boxShadow: "0 0 15px rgba(var(--primary), 0)",
              duration: 1.5,
              repeat: -1,
              yoyo: true,
            },
          )
        }
      }
    }, [percentage, controls, showAnimation])

    return (
      <div
        ref={ref}
        className={cn("relative h-2 w-full overflow-hidden rounded-full", className)}
        style={{ backgroundColor: trackColor }}
        {...props}
      >
        <div
          ref={indicatorRef}
          className="h-full rounded-full"
          style={{
            width: `${percentage}%`,
            backgroundColor: indicatorColor,
          }}
        />
      </div>
    )
  },
)
AnimatedProgress.displayName = "AnimatedProgress"

export { AnimatedProgress }
