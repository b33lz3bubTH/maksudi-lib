"use client"

import { type ReactNode, forwardRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface AnimatedModalProps {
  trigger: ReactNode
  title?: string
  className?: string
  children: ReactNode
  contentClassName?: string
  animation?: "fade" | "scale" | "slide" | "flip"
}

const animations = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  },
  slide: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  flip: {
    initial: { opacity: 0, rotateX: 90 },
    animate: { opacity: 1, rotateX: 0 },
    exit: { opacity: 0, rotateX: 90 },
  },
}

const AnimatedModal = forwardRef<HTMLDivElement, AnimatedModalProps>(
  ({ trigger, title, className, children, contentClassName, animation = "scale" }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const openModal = () => setIsOpen(true)
    const closeModal = () => setIsOpen(false)

    return (
      <>
        <div onClick={openModal} className="cursor-pointer">
          {trigger}
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                onClick={closeModal}
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center">
                <motion.div
                  ref={ref}
                  className={cn(
                    "max-h-[90vh] w-[90vw] max-w-md overflow-auto rounded-lg border bg-background p-6 shadow-lg",
                    className,
                  )}
                  {...animations[animation]}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between">
                    {title && <h2 className="text-lg font-semibold">{title}</h2>}
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={closeModal}>
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                  <div className={cn("mt-4", contentClassName)}>{children}</div>
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  },
)
AnimatedModal.displayName = "AnimatedModal"

export { AnimatedModal }
