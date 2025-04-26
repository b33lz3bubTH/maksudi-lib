"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedCard } from "@/components/ui/animated-card"

const templates = [
  {
    id: "admin",
    title: "Admin Dashboard",
    description: "A comprehensive admin dashboard with analytics, user management, and settings.",
    image: "/placeholder.svg",
    href: "/templates/admin",
  },
  {
    id: "login",
    title: "Login Page",
    description: "A modern login page with form validation and social login options.",
    image: "/placeholder.svg",
    href: "/templates/login",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "A professional portfolio template to showcase your work and skills.",
    image: "/placeholder.svg",
    href: "/templates/portfolio",
  },
  {
    id: "admin-dashboard",
    title: "Advanced Admin Dashboard",
    description: "A feature-rich admin dashboard with data visualization and real-time updates.",
    image: "/placeholder.svg",
    href: "/templates/admin-dashboard",
  },
  {
    id: "multi-step-form",
    title: "Multi-Step Form",
    description: "A user-friendly multi-step form with progress tracking and validation.",
    image: "/placeholder.svg",
    href: "/templates/multi-step-form",
  },
  {
    id: "online-shop",
    title: "Online Shop",
    description: "A complete e-commerce template with product listings, cart, and checkout.",
    image: "/placeholder.svg",
    href: "/templates/online-shop",
  },
]

export default function TemplatesPage() {
  const router = useRouter()
  const [hoveredTemplate, setHoveredTemplate] = useState(null)

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Maksudi-Lib Templates</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ready-to-use templates built with Maksudi-Lib components. Click on any template to preview.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template, index) => (
          <ScrollReveal key={template.id} animation="fade" delay={index * 0.1}>
            <div
              className="cursor-pointer"
              onClick={() => router.push(template.href)}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
            >
              <AnimatedCard className="group border overflow-hidden h-full flex flex-col">
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={template.image || "/placeholder.svg"}
                    alt={template.title}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary" className="gap-2">
                      Preview <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{template.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Template</span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      View <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Featured Template</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            className="group border rounded-lg overflow-hidden cursor-pointer col-span-full"
            onClick={() => router.push("/templates/online-shop")}
          >
            <div className="aspect-video relative overflow-hidden bg-muted">
              <img
                src="/placeholder.svg"
                alt="Online Shop Template"
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Button variant="secondary" className="gap-2">
                  Preview Online Shop <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">Online Shop Template</h3>
              <p className="text-muted-foreground mb-4">
                A complete e-commerce solution with product listings, categories, cart functionality, and checkout
                process. Features animated components and a responsive design.
              </p>
              <Button className="gap-2">
                View Template <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
