"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const circles = Array.from({ length: 15 }).map((_, i) => {
      const circle = document.createElement("div")
      circle.className = `absolute rounded-full bg-primary/20 backdrop-blur-sm`
      circle.style.width = `${Math.random() * 100 + 50}px`
      circle.style.height = circle.style.width
      circle.style.left = `${Math.random() * 100}%`
      circle.style.top = `${Math.random() * 100}%`
      circle.style.opacity = "0"
      containerRef.current?.appendChild(circle)
      return circle
    })

    const tl = gsap.timeline()

    circles.forEach((circle, i) => {
      tl.to(
        circle,
        {
          opacity: 0.7,
          duration: 0.4,
          ease: "power2.out",
        },
        i * 0.1,
      )
    })

    circles.forEach((circle) => {
      gsap.to(circle, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-100, 100),
        duration: gsap.utils.random(15, 30),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    })

    return () => {
      circles.forEach((circle) => {
        circle.remove()
      })
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true" />
}
