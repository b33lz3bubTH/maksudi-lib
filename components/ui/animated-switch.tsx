"use client"

import { type InputHTMLAttributes, forwardRef, useRef } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface AnimatedSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  thumbColor?: string
  activeColor?: string
  inactiveColor?: string
}

const AnimatedSwitch = forwardRef<HTMLInputElement, AnimatedSwitchProps>(
  ({ className, thumbColor = "white", activeColor = "var(--primary)", inactiveColor = "#e2e8f0", ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null)
    const isControlled = props.checked !== undefined

    // Determine if the switch is checked based on whether it's controlled or not
    const isChecked = isControlled
      ? Boolean(props.checked)
      : inputRef.current
        ? inputRef.current.checked
        : Boolean(props.defaultChecked)

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          ref={(node) => {
            // Handle both the forwarded ref and our local ref
            if (typeof ref === "function") ref(node)
            else if (ref) ref.current = node
            inputRef.current = node
          }}
          {...props}
        />
        <motion.div
          className={cn("flex h-6 w-11 cursor-pointer rounded-full p-1", className)}
          initial={false}
          animate={{
            backgroundColor: isChecked ? activeColor : inactiveColor,
          }}
          transition={{ duration: 0.2 }}
          onClick={() => {
            if (!props.disabled && inputRef.current) {
              inputRef.current.click()
            }
          }}
        >
          <motion.div
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: thumbColor }}
            initial={false}
            animate={{
              x: isChecked ? "100%" : "0%",
              scale: isChecked ? [1, 1.2, 1] : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </div>
    )
  },
)
AnimatedSwitch.displayName = "AnimatedSwitch"

export { AnimatedSwitch }
