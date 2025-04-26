"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Package, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCard } from "@/components/ui/animated-card"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function DocsPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Package className="h-6 w-6" />
              <span className="font-bold">Maksudi-Lib</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center">
            <nav className="flex items-center space-x-2">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Documentation</h1>

          <Tabs defaultValue="getting-started" className="mb-10">
            <TabsList className="mb-6">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="components">Components</TabsTrigger>
              <TabsTrigger value="animations">Animations</TabsTrigger>
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <AnimatedCard className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
                <div className="space-y-4">
                  <p>
                    Maksudi-Lib is a comprehensive UI component library that combines the functionality of Material UI
                    with the visual appeal of GSAP and Framer Motion animations. Each component is lazy-loaded for
                    optimal performance, and the library includes templates for common use cases.
                  </p>

                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h3 className="font-medium mb-2">Installation</h3>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>npm install maksudi-lib gsap framer-motion</code>
                    </pre>
                  </div>

                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h3 className="font-medium mb-2">Basic Usage</h3>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`import { AnimatedButton } from "@/components/ui/animated-button";

function App() {
  return (
    <AnimatedButton>
      Click Me
    </AnimatedButton>
  );
}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-xl font-medium mt-6">Core Concepts</h3>
                  <p>
                    Maksudi-Lib uses a combination of GSAP and Framer Motion to create smooth, performant animations.
                    The library follows these core animation principles:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Purposeful Motion</strong> - Animations should serve a purpose, guiding the user's
                      attention and providing feedback.
                    </li>
                    <li>
                      <strong>Natural Physics</strong> - Movements follow natural physics with appropriate easing,
                      making interactions feel more intuitive.
                    </li>
                    <li>
                      <strong>Performance First</strong> - Animations are optimized for performance, using GPU
                      acceleration where possible.
                    </li>
                    <li>
                      <strong>Accessibility</strong> - All animations respect user preferences for reduced motion.
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-6">Project Structure</h3>
                  <p>Maksudi-Lib is organized into several categories of components:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Basic Components</strong> - Fundamental UI elements like buttons, cards, and badges.
                    </li>
                    <li>
                      <strong>Navigation Components</strong> - Components for navigating through content, like tabs,
                      drawers, and accordions.
                    </li>
                    <li>
                      <strong>Form Controls</strong> - Input components like checkboxes, switches, and sliders.
                    </li>
                    <li>
                      <strong>Data Display</strong> - Components for displaying data, like tables and carousels.
                    </li>
                    <li>
                      <strong>Feedback Components</strong> - Components that provide feedback to users, like tooltips
                      and modals.
                    </li>
                    <li>
                      <strong>Animation Components</strong> - Utilities for adding animations, like scroll reveal
                      effects.
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-6">Enterprise Features</h3>
                  <p>Maksudi-Lib includes several enterprise-grade features:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Form Builder</strong> - A powerful form builder component for creating and managing forms.
                    </li>
                    <li>
                      <strong>Multi-Step Forms</strong> - Components for creating multi-step forms with validation.
                    </li>
                    <li>
                      <strong>Data Tables</strong> - Advanced data tables with sorting, filtering, and pagination.
                    </li>
                    <li>
                      <strong>Admin Dashboard Templates</strong> - Ready-to-use templates for admin dashboards.
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
            </TabsContent>

            <TabsContent value="components">
              <AnimatedCard className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Components</h2>
                <div className="space-y-6">
                  <p>
                    Maksudi-Lib provides a comprehensive set of UI components, each enhanced with beautiful animations.
                    All components are built with accessibility and performance in mind.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        id: "basic",
                        title: "Basic Components",
                        description: "Fundamental UI elements with animations",
                        components: [
                          "AnimatedButton - Enhanced buttons with ripple effects and hover animations",
                          "AnimatedCard - Cards with tilt and glare effects",
                          "AnimatedBadge - Badges with pulse, bounce, or shake animations",
                          "AnimatedProgress - Progress bars with smooth animations",
                        ],
                      },
                      {
                        id: "navigation",
                        title: "Navigation Components",
                        description: "Components for navigating through content",
                        components: [
                          "AnimatedTabs - Tabs with smooth transitions between content",
                          "AnimatedDrawer - Sliding drawers that can appear from any edge",
                          "AnimatedAccordion - Expandable accordion sections with smooth animations",
                        ],
                      },
                      {
                        id: "form",
                        title: "Form Controls",
                        description: "Input components with animated feedback",
                        components: [
                          "AnimatedCheckbox - Checkboxes with smooth check animations",
                          "AnimatedSwitch - Toggle switches with sliding animations",
                          "AnimatedSlider - Sliders with smooth dragging and value changes",
                          "MultiStepForm - Forms broken into manageable steps with animations",
                          "FormBuilder - Drag-and-drop form builder with live preview",
                        ],
                      },
                      {
                        id: "data",
                        title: "Data Display",
                        description: "Components for displaying data",
                        components: [
                          "DataTable - Advanced tables with sorting, filtering, and pagination",
                          "AnimatedCarousel - Carousels with various transition animations",
                        ],
                      },
                      {
                        id: "feedback",
                        title: "Feedback Components",
                        description: "Components that provide feedback to users",
                        components: [
                          "AnimatedTooltip - Tooltips with entrance and exit animations",
                          "AnimatedModal - Modals with various entrance and exit animations",
                        ],
                      },
                      {
                        id: "animation",
                        title: "Animation Utilities",
                        description: "Utilities for adding animations",
                        components: ["ScrollReveal - Animate elements as they enter the viewport"],
                      },
                    ].map((category) => (
                      <div key={category.id} className="border rounded-lg overflow-hidden">
                        <button
                          className="flex items-center justify-between w-full p-4 text-left font-medium bg-muted/50 hover:bg-muted/70"
                          onClick={() => toggleSection(category.id)}
                        >
                          <span>{category.title}</span>
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${
                              expandedSection === category.id ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {expandedSection === category.id && (
                          <div className="p-4">
                            <p className="text-muted-foreground mb-4">{category.description}</p>
                            <ul className="space-y-2 list-disc pl-6">
                              {category.components.map((component, index) => (
                                <li key={index}>{component}</li>
                              ))}
                            </ul>
                            <div className="mt-4">
                              <Link href="/storybook">
                                <Button variant="outline" size="sm">
                                  View in Storybook
                                </Button>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-medium mb-4">Component Structure</h3>
                    <p>Each component in Maksudi-Lib follows a consistent structure:</p>

                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Base Component</strong> - The core functionality without animations.
                      </li>
                      <li>
                        <strong>Animation Layer</strong> - GSAP or Framer Motion animations applied to the base
                        component.
                      </li>
                      <li>
                        <strong>Customization API</strong> - Props for customizing both the component and its
                        animations.
                      </li>
                    </ul>
                  </div>
                </div>
              </AnimatedCard>
            </TabsContent>

            <TabsContent value="animations">
              <AnimatedCard className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Animations</h2>
                <div className="space-y-4">
                  <p>
                    Maksudi-Lib uses a combination of GSAP and Framer Motion to create beautiful, performant animations.
                    These libraries provide powerful tools for creating complex animations with minimal code.
                  </p>

                  <h3 className="text-xl font-medium mt-6">GSAP Animations</h3>
                  <p>
                    GSAP (GreenSock Animation Platform) is used for complex animations and scroll-triggered effects. It
                    provides precise control over animation timelines and is optimized for performance.
                  </p>

                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h4 className="font-medium mb-2">Example: Scroll Trigger Animation</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function ScrollAnimation() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const elements = containerRef.current.querySelectorAll(".animate-item");
    
    gsap.from(elements, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });
  }, []);
  
  return (
    <div ref={containerRef}>
      <div className="animate-item">Item 1</div>
      <div className="animate-item">Item 2</div>
      <div className="animate-item">Item 3</div>
    </div>
  );
}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-xl font-medium mt-6">Framer Motion Animations</h3>
                  <p>
                    Framer Motion is used for React component animations with a declarative API. It's perfect for
                    component-level animations and transitions.
                  </p>

                  <div className="border rounded-lg p-4 bg-muted/50">
                    <h4 className="font-medium mb-2">Example: Hover Animation</h4>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`import { motion } from "framer-motion";

function HoverCard() {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" 
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }}
      className="p-6 bg-white rounded-lg"
    >
      <h3>Hover Me</h3>
      <p>This card animates on hover</p>
    </motion.div>
  );
}`}</code>
                    </pre>
                  </div>

                  <h3 className="text-xl font-medium mt-6">Animation Types</h3>
                  <p>Maksudi-Lib provides several types of animations that can be applied to components:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Entrance Animations</strong> - Animations that occur when a component enters the viewport
                      or is mounted.
                    </li>
                    <li>
                      <strong>Hover Animations</strong> - Animations that occur when a user hovers over a component.
                    </li>
                    <li>
                      <strong>Click Animations</strong> - Animations that provide feedback when a user clicks or taps a
                      component.
                    </li>
                    <li>
                      <strong>Scroll Animations</strong> - Animations that are triggered by scrolling.
                    </li>
                    <li>
                      <strong>State Transition Animations</strong> - Animations that occur when a component changes
                      state.
                    </li>
                  </ul>

                  <h3 className="text-xl font-medium mt-6">Animation Examples</h3>
                  <div className="space-y-8 py-4">
                    <ScrollReveal animation="fade" delay={0.1}>
                      <div className="p-6 bg-primary/10 rounded-md">
                        <h3 className="text-lg font-medium">Fade Animation</h3>
                        <p>This element fades in when it enters the viewport.</p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide" direction="up" delay={0.2}>
                      <div className="p-6 bg-secondary/10 rounded-md">
                        <h3 className="text-lg font-medium">Slide Up Animation</h3>
                        <p>This element slides up when it enters the viewport.</p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal animation="scale" delay={0.3}>
                      <div className="p-6 bg-muted rounded-md">
                        <h3 className="text-lg font-medium">Scale Animation</h3>
                        <p>This element scales in when it enters the viewport.</p>
                      </div>
                    </ScrollReveal>
                  </div>
                </div>
              </AnimatedCard>
            </TabsContent>

            <TabsContent value="templates">
              <AnimatedCard className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Templates</h2>
                <div className="space-y-4">
                  <p>
                    Maksudi-Lib includes several pre-built templates that showcase the components in real-world
                    scenarios. These templates are fully responsive and can be customized to fit your needs.
                  </p>

                  <div className="grid gap-6 md:grid-cols-2 mt-6">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Admin Dashboard Template"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg">Admin Dashboard</h3>
                        <p className="text-muted-foreground text-sm mt-1 mb-4">
                          A comprehensive admin dashboard with analytics, user management, and more.
                        </p>
                        <Link href="/templates/admin-dashboard">
                          <Button variant="outline" size="sm">
                            View Template
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Multi-Step Form Template"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg">Multi-Step Form</h3>
                        <p className="text-muted-foreground text-sm mt-1 mb-4">
                          A multi-step form with validation and smooth transitions between steps.
                        </p>
                        <Link href="/templates/multi-step-form">
                          <Button variant="outline" size="sm">
                            View Template
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Login Template"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg">Authentication Pages</h3>
                        <p className="text-muted-foreground text-sm mt-1 mb-4">
                          Beautiful login and signup pages with social login options.
                        </p>
                        <Link href="/templates/login">
                          <Button variant="outline" size="sm">
                            View Template
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="border rounded-lg overflow-hidden">
                      <div className="aspect-video bg-muted relative">
                        <img
                          src="/placeholder.svg?height=400&width=600"
                          alt="Portfolio Template"
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-lg">Portfolio Website</h3>
                        <p className="text-muted-foreground text-sm mt-1 mb-4">
                          Professional portfolio template with smooth animations and project showcases.
                        </p>
                        <Link href="/templates/portfolio">
                          <Button variant="outline" size="sm">
                            View Template
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-medium mt-6">Customizing Templates</h3>
                  <p>
                    All templates are built using Maksudi-Lib components and can be customized to fit your needs. Here
                    are some tips for customizing templates:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Theming</strong> - Update the colors and typography to match your brand.
                    </li>
                    <li>
                      <strong>Layout</strong> - Adjust the layout to fit your content and design requirements.
                    </li>
                    <li>
                      <strong>Components</strong> - Add or remove components as needed.
                    </li>
                    <li>
                      <strong>Animations</strong> - Customize the animations to create a unique experience.
                    </li>
                  </ul>
                </div>
              </AnimatedCard>
            </TabsContent>

            <TabsContent value="api">
              <AnimatedCard className="p-6">
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                <div className="space-y-6">
                  <p>
                    This section provides detailed API documentation for all components in Maksudi-Lib. For each
                    component, you'll find a list of props, their types, default values, and descriptions.
                  </p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4">AnimatedButton</h3>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                          <div className="font-medium">Prop</div>
                          <div className="font-medium">Type</div>
                          <div className="font-medium">Default</div>
                          <div className="font-medium">Description</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>variant</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">"default"</div>
                          <div className="text-muted-foreground">
                            Button variant: "default", "secondary", "outline", "ghost", "link"
                          </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>size</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">"default"</div>
                          <div className="text-muted-foreground">Button size: "default", "sm", "lg", "icon"</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>ripple</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">true</div>
                          <div className="text-muted-foreground">Whether to show ripple effect on click</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>hoverScale</div>
                          <div className="text-muted-foreground">number</div>
                          <div className="text-muted-foreground">1.05</div>
                          <div className="text-muted-foreground">Scale factor on hover</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">AnimatedCard</h3>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                          <div className="font-medium">Prop</div>
                          <div className="font-medium">Type</div>
                          <div className="font-medium">Default</div>
                          <div className="font-medium">Description</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>tiltEffect</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">true</div>
                          <div className="text-muted-foreground">Whether to enable 3D tilt effect on hover</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>hoverScale</div>
                          <div className="text-muted-foreground">number</div>
                          <div className="text-muted-foreground">1.02</div>
                          <div className="text-muted-foreground">Scale factor on hover</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>glareEffect</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">true</div>
                          <div className="text-muted-foreground">Whether to show glare effect on hover</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">AnimatedDrawer</h3>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                          <div className="font-medium">Prop</div>
                          <div className="font-medium">Type</div>
                          <div className="font-medium">Default</div>
                          <div className="font-medium">Description</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>open</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">false</div>
                          <div className="text-muted-foreground">Whether the drawer is open</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>onClose</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">-</div>
                          <div className="text-muted-foreground">Callback when the drawer is closed</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>position</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">"right"</div>
                          <div className="text-muted-foreground">"left", "right", "top", "bottom"</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>size</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">"300px"</div>
                          <div className="text-muted-foreground">Width or height of the drawer</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>backdrop</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">true</div>
                          <div className="text-muted-foreground">Whether to show a backdrop</div>
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <p className="text-muted-foreground mb-4">
                        For complete API documentation of all components, please visit the Storybook.
                      </p>
                      <Link href="/storybook">
                        <Button>View Storybook</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ by Maksudi. The source code is available on{" "}
            <a
              href="https://github.com/yourusername/maksudi-lib"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  )
}
