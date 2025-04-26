"use client"

import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCard } from "@/components/ui/animated-card"

export default function DocsPage() {
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
                      <code>{`import { AnimatedButton } from "maksudi-lib/components";

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

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Input Components</h3>
                      <p className="text-muted-foreground mb-4">
                        Components for user input with animated feedback and transitions.
                      </p>
                      <ul className="space-y-1">
                        <li>• AnimatedButton</li>
                        <li>• AnimatedInput</li>
                        <li>• AnimatedCheckbox</li>
                        <li>• AnimatedRadio</li>
                        <li>• AnimatedSelect</li>
                        <li>• AnimatedSlider</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Layout Components</h3>
                      <p className="text-muted-foreground mb-4">
                        Structural components with entrance and transition animations.
                      </p>
                      <ul className="space-y-1">
                        <li>• AnimatedCard</li>
                        <li>• AnimatedContainer</li>
                        <li>• AnimatedGrid</li>
                        <li>• AnimatedDivider</li>
                        <li>• ScrollReveal</li>
                        <li>• ParallaxSection</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Feedback Components</h3>
                      <p className="text-muted-foreground mb-4">
                        Components that provide animated feedback to user actions.
                      </p>
                      <ul className="space-y-1">
                        <li>• AnimatedToast</li>
                        <li>• AnimatedAlert</li>
                        <li>• AnimatedProgress</li>
                        <li>• AnimatedSpinner</li>
                        <li>• AnimatedTooltip</li>
                        <li>• AnimatedBadge</li>
                      </ul>
                    </div>

                    <div className="border rounded-lg p-6">
                      <h3 className="text-lg font-medium mb-2">Navigation Components</h3>
                      <p className="text-muted-foreground mb-4">
                        Components for navigating through content with smooth transitions.
                      </p>
                      <ul className="space-y-1">
                        <li>• AnimatedTabs</li>
                        <li>• AnimatedMenu</li>
                        <li>• AnimatedDrawer</li>
                        <li>• AnimatedNavbar</li>
                        <li>• AnimatedBreadcrumbs</li>
                        <li>• AnimatedPagination</li>
                      </ul>
                    </div>
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

                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Admin Dashboard</h3>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive admin dashboard with analytics, user management, and more.
                      </p>
                      <div className="mt-2">
                        <Link href="/templates/admin">
                          <Button variant="outline" size="sm">
                            View Template
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Authentication Pages</h3>
                      <p className="text-sm text-muted-foreground">
                        Beautiful login and signup pages with social login options.
                      </p>
                      <div className="mt-2">
                        <Link href="/templates/login">
                          <Button variant="outline" size="sm">
                            View Template
                          </Button>
                        </Link>
                      </div>
                    </div>

                    <div className="border rounded-lg p-4">
                      <h3 className="font-medium">Portfolio Website</h3>
                      <p className="text-sm text-muted-foreground">
                        Professional portfolio template with smooth animations and project showcases.
                      </p>
                      <div className="mt-2">
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
