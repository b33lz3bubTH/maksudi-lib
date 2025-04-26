"use client"

import type React from "react"

import { useState, useEffect, useRef, forwardRef } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

export interface CarouselProps {
  children: React.ReactNode[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
  slideClassName?: string
  animation?: "slide" | "fade" | "zoom" | "flip"
  infinite?: boolean
}

export const AnimatedCarousel = forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      children,
      autoPlay = false,
      interval = 5000,
      showArrows = true,
      showDots = true,
      className,
      slideClassName,
      animation = "slide",
      infinite = true,
    },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)
    const [isPaused, setIsPaused] = useState(false)
    const controls = useAnimation()
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const slideCount = children.length

    // Animation variants
    const getVariants = () => {
      switch (animation) {
        case "fade":
          return {
            enter: { opacity: 0 },
            center: { opacity: 1, transition: { duration: 0.5 } },
            exit: { opacity: 0, transition: { duration: 0.5 } },
          }
        case "zoom":
          return {
            enter: { opacity: 0, scale: 0.8 },
            center: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            exit: { opacity: 0, scale: 1.2, transition: { duration: 0.5 } },
          }
        case "flip":
          return {
            enter: { opacity: 0, rotateY: direction > 0 ? 90 : -90 },
            center: { opacity: 1, rotateY: 0, transition: { duration: 0.5 } },
            exit: { opacity: 0, rotateY: direction > 0 ? -90 : 90, transition: { duration: 0.5 } },
          }
        case "slide":
        default:
          return {
            enter: { x: direction > 0 ? "100%" : "-100%", opacity: 0 },
            center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
            exit: { x: direction > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.5 } },
          }
      }
    }

    const nextSlide = () => {
      setDirection(1)
      if (currentIndex === slideCount - 1) {
        if (infinite) setCurrentIndex(0)
      } else {
        setCurrentIndex((prev) => prev + 1)
      }
    }

    const prevSlide = () => {
      setDirection(-1)
      if (currentIndex === 0) {
        if (infinite) setCurrentIndex(slideCount - 1)
      } else {
        setCurrentIndex((prev) => prev - 1)
      }
    }

    const goToSlide = (index: number) => {
      setDirection(index > currentIndex ? 1 : -1)
      setCurrentIndex(index)
    }

    // Handle autoplay
    useEffect(() => {
      if (autoPlay && !isPaused) {
        timerRef.current = setInterval(() => {
          nextSlide()
        }, interval)
      }

      return () => {
        if (timerRef.current) {
          clearInterval(timerRef.current)
        }
      }
    }, [autoPlay, interval, currentIndex, isPaused])

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={getVariants()}
            initial="enter"
            animate="center"
            exit="exit"
            className={cn("w-full h-full", slideClassName)}
          >
            {children[currentIndex]}
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {showArrows && slideCount > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-md hover:bg-background transition-colors"
              aria-label="Previous slide"
              disabled={!infinite && currentIndex === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full p-2 shadow-md hover:bg-background transition-colors"
              aria-label="Next slide"
              disabled={!infinite && currentIndex === slideCount - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        {/* Dots */}
        {showDots && slideCount > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
            {Array.from({ length: slideCount }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  currentIndex === index ? "bg-primary scale-125" : "bg-primary/50 hover:bg-primary/80",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    )
  },
)

AnimatedCarousel.displayName = "AnimatedCarousel"
