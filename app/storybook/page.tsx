import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
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

export default function StorybookPage() {
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
          <h1 className="text-3xl font-bold mb-8">Component Library</h1>

          <div className="grid gap-12">
            <section id="animated-button">
              <h2 className="text-2xl font-semibold mb-4">AnimatedButton</h2>
              <div className="border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Overview</h3>
                  <p className="text-muted-foreground">
                    AnimatedButton extends the standard Button component with GSAP and Framer Motion animations,
                    including ripple effects, hover scaling, and smooth transitions.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Examples</h3>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton>Default Button</AnimatedButton>
                    <AnimatedButton variant="secondary">Secondary</AnimatedButton>
                    <AnimatedButton variant="destructive">Destructive</AnimatedButton>
                    <AnimatedButton variant="outline">Outline</AnimatedButton>
                    <AnimatedButton variant="ghost">Ghost</AnimatedButton>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Props</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>ripple</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Enables ripple effect on click</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>hoverScale</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Scale factor on hover (default: 1.05)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Usage</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedButton } from "@/components/ui/animated-button"

export function Example() {
  return <AnimatedButton>Click Me</AnimatedButton>
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="animated-card">
              <h2 className="text-2xl font-semibold mb-4">AnimatedCard</h2>
              <div className="border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Overview</h3>
                  <p className="text-muted-foreground">
                    AnimatedCard provides a beautiful 3D tilt effect and glare animation on hover, creating an engaging
                    and interactive card component.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Example</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedCard className="p-6">
                      <h3 className="text-lg font-medium mb-2">Interactive Card</h3>
                      <p className="text-muted-foreground">Hover over this card to see the tilt and glare effects.</p>
                    </AnimatedCard>

                    <AnimatedCard className="p-6" tiltEffect={false}>
                      <h3 className="text-lg font-medium mb-2">Card without Tilt</h3>
                      <p className="text-muted-foreground">This card has the tilt effect disabled.</p>
                    </AnimatedCard>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Props</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>tiltEffect</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Enables 3D tilt effect on hover</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>hoverScale</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Scale factor on hover (default: 1.02)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>glareEffect</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Enables glare effect on hover</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Usage</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedCard } from "@/components/ui/animated-card"

export function Example() {
  return (
    <AnimatedCard className="p-6">
      <h3>Card Title</h3>
      <p>Card content goes here</p>
    </AnimatedCard>
  )
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="animated-modal">
              <h2 className="text-2xl font-semibold mb-4">AnimatedModal</h2>
              <div className="border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Overview</h3>
                  <p className="text-muted-foreground">
                    AnimatedModal provides a beautiful animated modal with various entrance and exit animations.
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Examples</h3>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedModal trigger={<Button>Fade Modal</Button>} title="Fade Animation" animation="fade">
                      <p>This modal uses a fade animation.</p>
                    </AnimatedModal>

                    <AnimatedModal
                      trigger={<Button variant="secondary">Scale Modal</Button>}
                      title="Scale Animation"
                      animation="scale"
                    >
                      <p>This modal uses a scale animation.</p>
                    </AnimatedModal>

                    <AnimatedModal
                      trigger={<Button variant="outline">Slide Modal</Button>}
                      title="Slide Animation"
                      animation="slide"
                    >
                      <p>This modal uses a slide animation.</p>
                    </AnimatedModal>

                    <AnimatedModal
                      trigger={<Button variant="ghost">Flip Modal</Button>}
                      title="Flip Animation"
                      animation="flip"
                    >
                      <p>This modal uses a flip animation.</p>
                    </AnimatedModal>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Props</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>trigger</div>
                      <div className="text-muted-foreground">ReactNode</div>
                      <div className="text-muted-foreground">Element that triggers the modal</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>title</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">Modal title (optional)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>animation</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">"fade" | "scale" | "slide" | "flip"</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Usage</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedModal } from "@/components/ui/animated-modal"
import { Button } from "@/components/ui/button"

export function Example() {
  return (
    <AnimatedModal 
      trigger={<Button>Open Modal</Button>}
      title="Modal Title"
      animation="scale"
    >
      <p>Modal content goes here</p>
    </AnimatedModal>
  )
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="form-controls">
              <h2 className="text-2xl font-semibold mb-4">Form Controls</h2>
              <div className="border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Checkbox</h3>
                  <div className="flex items-center gap-4">
                    <AnimatedCheckbox id="terms1" />
                    <label htmlFor="terms1">Unchecked</label>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <AnimatedCheckbox id="terms2" defaultChecked />
                    <label htmlFor="terms2">Checked</label>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Switch</h3>
                  <div className="flex items-center gap-4">
                    <AnimatedSwitch id="switch1" />
                    <label htmlFor="switch1">Off</label>
                  </div>
                  <div className="flex items-center gap-4 mt-2">
                    <AnimatedSwitch id="switch2" defaultChecked />
                    <label htmlFor="switch2">On</label>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Slider</h3>
                  <div className="space-y-2">
                    <AnimatedSlider id="slider1" defaultValue={25} />
                    <AnimatedSlider id="slider2" defaultValue={50} />
                    <AnimatedSlider id="slider3" defaultValue={75} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Usage</h3>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedCheckbox } from "@/components/ui/animated-checkbox"
import { AnimatedSwitch } from "@/components/ui/animated-switch"
import { AnimatedSlider } from "@/components/ui/animated-slider"

export function Example() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <AnimatedCheckbox id="terms" />
        <label htmlFor="terms">Accept terms</label>
      </div>
      
      <div className="flex items-center gap-4">
        <AnimatedSwitch id="notifications" />
        <label htmlFor="notifications">Enable notifications</label>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="volume">Volume</label>
        <AnimatedSlider id="volume" defaultValue={50} />
      </div>
    </div>
  )
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section id="feedback-components">
              <h2 className="text-2xl font-semibold mb-4">Feedback Components</h2>
              <div className="border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <AnimatedBadge>Default</AnimatedBadge>
                    <AnimatedBadge variant="secondary">Secondary</AnimatedBadge>
                    <AnimatedBadge variant="outline">Outline</AnimatedBadge>
                    <AnimatedBadge variant="destructive">Destructive</AnimatedBadge>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <AnimatedBadge animation="pulse">Pulse</AnimatedBadge>
                    <AnimatedBadge animation="bounce">Bounce</AnimatedBadge>
                    <AnimatedBadge animation="shake">Shake</AnimatedBadge>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Progress</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>25%</span>
                        <span>25/100</span>
                      </div>
                      <AnimatedProgress value={25} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>50%</span>
                        <span>50/100</span>
                      </div>
                      <AnimatedProgress value={50} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>75%</span>
                        <span>75/100</span>
                      </div>
                      <AnimatedProgress value={75} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Tooltips</h3>
                  <div className="flex justify-center gap-4">
                    <AnimatedTooltip content="Top tooltip" side="top">
                      <Button variant="outline">Top</Button>
                    </AnimatedTooltip>
                    <AnimatedTooltip content="Right tooltip" side="right">
                      <Button variant="outline">Right</Button>
                    </AnimatedTooltip>
                    <AnimatedTooltip content="Bottom tooltip" side="bottom">
                      <Button variant="outline">Bottom</Button>
                    </AnimatedTooltip>
                    <AnimatedTooltip content="Left tooltip" side="left">
                      <Button variant="outline">Left</Button>
                    </AnimatedTooltip>
                  </div>
                </div>
              </div>
            </section>

            <section id="navigation-components">
              <h2 className="text-2xl font-semibold mb-4">Navigation Components</h2>
              <div className="border rounded-lg p-6 bg-card">
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Tabs</h3>
                  <AnimatedTabs
                    tabs={[
                      {
                        id: "tab1",
                        label: "Tab 1",
                        content: (
                          <div className="p-4 border rounded-md">
                            <h3 className="font-medium mb-2">Tab 1 Content</h3>
                            <p>This is the content for tab 1.</p>
                          </div>
                        ),
                      },
                      {
                        id: "tab2",
                        label: "Tab 2",
                        content: (
                          <div className="p-4 border rounded-md">
                            <h3 className="font-medium mb-2">Tab 2 Content</h3>
                            <p>This is the content for tab 2.</p>
                          </div>
                        ),
                      },
                      {
                        id: "tab3",
                        label: "Tab 3",
                        content: (
                          <div className="p-4 border rounded-md">
                            <h3 className="font-medium mb-2">Tab 3 Content</h3>
                            <p>This is the content for tab 3.</p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">Accordion</h3>
                  <AnimatedAccordion
                    items={[
                      {
                        title: "What is Maksudi-Lib?",
                        content:
                          "Maksudi-Lib is a comprehensive UI component library with GSAP and Framer Motion animations.",
                      },
                      {
                        title: "How do I install it?",
                        content: "You can install Maksudi-Lib using npm or yarn: npm install maksudi-lib",
                      },
                      {
                        title: "Is it customizable?",
                        content: "Yes, all components are highly customizable with various props and theming options.",
                      },
                    ]}
                  />
                </div>
              </div>
            </section>
          </div>
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
