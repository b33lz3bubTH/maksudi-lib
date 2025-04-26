"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedModal } from "@/components/ui/animated-modal"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { AnimatedAccordion } from "@/components/ui/animated-accordion"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { AnimatedCheckbox } from "@/components/ui/animated-checkbox"
import { AnimatedSwitch } from "@/components/ui/animated-switch"
import { AnimatedSlider } from "@/components/ui/animated-slider"
import { AnimatedBadge } from "@/components/ui/animated-badge"
import { AnimatedProgress } from "@/components/ui/animated-progress"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export function ComponentShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (!containerRef.current) return

    const cards = containerRef.current.querySelectorAll(".component-card")

    gsap.from(cards, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="container py-12 md:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Component Showcase</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Explore some of our beautiful animated components
        </p>
      </div>

      <div ref={containerRef} className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Buttons</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <AnimatedButton>Primary</AnimatedButton>
                <AnimatedButton variant="secondary">Secondary</AnimatedButton>
                <AnimatedButton variant="outline">Outline</AnimatedButton>
                <AnimatedButton variant="ghost">Ghost</AnimatedButton>
              </div>
              <div className="flex flex-wrap gap-2">
                <AnimatedButton size="sm">Small</AnimatedButton>
                <AnimatedButton>Default</AnimatedButton>
                <AnimatedButton size="lg">Large</AnimatedButton>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Cards</h3>
            <AnimatedCard className="p-4">
              <h4 className="font-medium">Animated Card</h4>
              <p className="text-sm text-muted-foreground mt-2">This card has tilt and glare effects on hover.</p>
            </AnimatedCard>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Modals</h3>
            <div className="flex flex-wrap gap-2">
              <AnimatedModal trigger={<Button>Open Modal</Button>} title="Animated Modal">
                <p>This is an animated modal with smooth transitions.</p>
              </AnimatedModal>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Tabs</h3>
            <AnimatedTabs
              tabs={[
                {
                  id: "tab1",
                  label: "Tab 1",
                  content: <p className="p-2">Content for tab 1</p>,
                },
                {
                  id: "tab2",
                  label: "Tab 2",
                  content: <p className="p-2">Content for tab 2</p>,
                },
                {
                  id: "tab3",
                  label: "Tab 3",
                  content: <p className="p-2">Content for tab 3</p>,
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Accordion</h3>
            <AnimatedAccordion
              items={[
                {
                  title: "Item 1",
                  content: "Content for accordion item 1",
                },
                {
                  title: "Item 2",
                  content: "Content for accordion item 2",
                },
                {
                  title: "Item 3",
                  content: "Content for accordion item 3",
                },
              ]}
            />
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Breadcrumbs</h3>
            <Breadcrumbs
              items={[
                { label: "Dashboard", href: "/dashboard" },
                { label: "Projects", href: "/dashboard/projects" },
                { label: "Project Details" },
              ]}
              animated={true}
              showHomeIcon={true}
            />
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Form Controls</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <AnimatedCheckbox id="terms" />
                <label htmlFor="terms" className="text-sm">
                  Accept terms
                </label>
              </div>
              <div className="flex items-center gap-4">
                <AnimatedSwitch id="notifications" />
                <label htmlFor="notifications" className="text-sm">
                  Enable notifications
                </label>
              </div>
              <div className="space-y-2">
                <label htmlFor="volume" className="text-sm">
                  Volume
                </label>
                <AnimatedSlider id="volume" defaultValue={50} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Badges & Progress</h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <AnimatedBadge>New</AnimatedBadge>
                <AnimatedBadge variant="secondary">Featured</AnimatedBadge>
                <AnimatedBadge variant="outline">Popular</AnimatedBadge>
                <AnimatedBadge variant="destructive">Sold Out</AnimatedBadge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>75%</span>
                </div>
                <AnimatedProgress value={75} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium mb-4">Tooltips</h3>
            <div className="flex justify-center">
              <AnimatedTooltip content="This is a tooltip with animation">
                <Button variant="outline">Hover me</Button>
              </AnimatedTooltip>
            </div>
          </CardContent>
        </Card>

        <Card className="component-card col-span-1 sm:col-span-2 lg:col-span-3">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium mb-4">And many more...</h3>
            <p className="text-muted-foreground mb-6">
              Explore our full component library with detailed documentation and examples.
            </p>
            <Link href="/storybook">
              <Button className="gap-1">
                View All Components
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
