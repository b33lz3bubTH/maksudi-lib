"use client"

import type React from "react"

import { useState, useEffect, useRef, forwardRef } from "react"
import { createPortal } from "react-dom"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

export interface DrawerProps {
  children: React.ReactNode
  open?: boolean
  onClose?: () => void
  position?: "left" | "right" | "top" | "bottom"
  size?: string
  backdrop?: boolean
  className?: string
  closeButton?: boolean
  closeOnClickOutside?: boolean
  closeOnEsc?: boolean
}

export const AnimatedDrawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      children,
      open = false,
      onClose,
      position = "right",
      size = "300px",
      backdrop = true,
      className,
      closeButton = true,
      closeOnClickOutside = true,
      closeOnEsc = true,
    },
    ref,
  ) => {
    const [mounted, setMounted] = useState(false)
    const drawerRef = useRef<HTMLDivElement>(null)

    // Handle forwarded ref
    const handleRef = (node: HTMLDivElement) => {
      drawerRef.current = node
      if (typeof ref === "function") {
        ref(node)
      } else if (ref) {
        ref.current = node
      }
    }

    useEffect(() => {
      setMounted(true)

      const handleEsc = (e: KeyboardEvent) => {
        if (closeOnEsc && open && e.key === "Escape") {
          onClose?.()
        }
      }

      window.addEventListener("keydown", handleEsc)
      return () => window.removeEventListener("keydown", handleEsc)
    }, [closeOnEsc, onClose, open])

    // Determine drawer position styles
    const getPositionStyles = () => {
      switch (position) {
        case "left":
          return {
            left: 0,
            top: 0,
            bottom: 0,
            width: size,
            height: "100%",
          }
        case "right":
          return {
            right: 0,
            top: 0,
            bottom: 0,
            width: size,
            height: "100%",
          }
        case "top":
          return {
            top: 0,
            left: 0,
            right: 0,
            height: size,
            width: "100%",
          }
        case "bottom":
          return {
            bottom: 0,
            left: 0,
            right: 0,
            height: size,
            width: "100%",
          }
        default:
          return {}
      }
    }

    // Animation variants based on position
    const drawerVariants = {
      hidden: {
        x: position === "left" ? "-100%" : position === "right" ? "100%" : 0,
        y: position === "top" ? "-100%" : position === "bottom" ? "100%" : 0,
      },
      visible: {
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          damping: 25,
          stiffness: 300,
        },
      },
      exit: {
        x: position === "left" ? "-100%" : position === "right" ? "100%" : 0,
        y: position === "top" ? "-100%" : position === "bottom" ? "100%" : 0,
        transition: {
          type: "spring",
          damping: 30,
          stiffness: 300,
        },
      },
    }

    if (!mounted) return null

    return createPortal(
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            {backdrop && (
              <motion.div
                className="fixed inset-0 z-50 bg-black/50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeOnClickOutside ? onClose : undefined}
              />
            )}

            {/* Drawer */}
            <motion.div
              ref={handleRef}
              className={cn(
                "fixed z-50 bg-background shadow-lg",
                position === "left" || position === "right" ? "overflow-y-auto" : "overflow-x-auto",
                className,
              )}
              style={getPositionStyles()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={drawerVariants}
            >
              {closeButton && (
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  aria-label="Close drawer"
                >
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </button>
              )}
              {children}
            </motion.div>
          </>
        )}
      </AnimatePresence>,
      document.body,
    )
  },
)

AnimatedDrawer.displayName = "AnimatedDrawer"
