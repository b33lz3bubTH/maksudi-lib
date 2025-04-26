"use client"

import { type InputHTMLAttributes, forwardRef } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

export interface AnimatedCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  checkmarkColor?: string
}

const AnimatedCheckbox = forwardRef<HTMLInputElement, AnimatedCheckboxProps>(
  ({ className, checkmarkColor = "white", checked, defaultChecked, onChange, ...props }, ref) => {
    // This component can be used in either controlled or uncontrolled mode
    // For controlled mode: provide the 'checked' prop and 'onChange' handler
    // For uncontrolled mode: provide the 'defaultChecked' prop

    const isChecked = checked !== undefined ? checked : defaultChecked

    return (
      <div className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only"
          ref={ref}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={onChange}
          {...props}
        />
        <motion.div
          className={cn(
            "flex h-5 w-5 items-center justify-center rounded border border-primary",
            isChecked ? "bg-primary" : "bg-transparent",
            className,
          )}
          initial={false}
          animate={{
            scale: isChecked ? [1, 1.2, 1] : 1,
            backgroundColor: isChecked ? "var(--primary)" : "transparent",
          }}
          transition={{ duration: 0.2 }}
        >
          {isChecked && (
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke={checkmarkColor}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <polyline points="20 6 9 17 4 12" />
            </motion.svg>
          )}
        </motion.div>
      </div>
    )
  },
)
AnimatedCheckbox.displayName = "AnimatedCheckbox"

export { AnimatedCheckbox }
