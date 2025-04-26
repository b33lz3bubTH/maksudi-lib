"use client"

import type React from "react"

import { type InputHTMLAttributes, forwardRef, useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

import { cn } from "@/lib/utils"

export interface AnimatedSliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  trackColor?: string
  fillColor?: string
  thumbColor?: string
  showTooltip?: boolean
}

const AnimatedSlider = forwardRef<HTMLInputElement, AnimatedSliderProps>(
  (
    {
      className,
      trackColor = "#e2e8f0",
      fillColor = "var(--primary)",
      thumbColor = "white",
      showTooltip = true,
      min = 0,
      max = 100,
      defaultValue = 50,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState(Number(defaultValue))
    const [isDragging, setIsDragging] = useState(false)
    const trackRef = useRef<HTMLDivElement>(null)
    const thumbRef = useRef<HTMLDivElement>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value))
      props.onChange?.(e)
    }

    const percentage = ((value - Number(min)) / (Number(max) - Number(min))) * 100

    useEffect(() => {
      if (thumbRef.current) {
        gsap.to(thumbRef.current, {
          scale: isDragging ? 1.2 : 1,
          duration: 0.2,
        })
      }
    }, [isDragging])

    return (
      <div className="relative">
        <div className="relative py-4">
          <div ref={trackRef} className={cn("h-2 rounded-full", className)} style={{ backgroundColor: trackColor }}>
            <motion.div
              className="absolute h-full rounded-full"
              style={{
                backgroundColor: fillColor,
                width: `${percentage}%`,
              }}
              initial={false}
              animate={{ width: `${percentage}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <motion.div
              ref={thumbRef}
              className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 cursor-grab rounded-full shadow-md active:cursor-grabbing"
              style={{
                backgroundColor: thumbColor,
                left: `${percentage}%`,
              }}
              initial={false}
              animate={{ left: `${percentage}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>
          <input
            type="range"
            ref={ref}
            min={min}
            max={max}
            value={value}
            onChange={handleChange}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            {...props}
          />
        </div>
        {showTooltip && isDragging && (
          <motion.div
            className="absolute -top-8 left-0 rounded bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md"
            style={{ left: `calc(${percentage}% - 12px)` }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            {value}
          </motion.div>
        )}
      </div>
    )
  },
)
AnimatedSlider.displayName = "AnimatedSlider"

export { AnimatedSlider }
