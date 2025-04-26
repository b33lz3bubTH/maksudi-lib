import Link from "next/link"
import { ArrowRight, Github, Package, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroAnimation } from "@/components/hero-animation"
import { ComponentShowcase } from "@/components/component-showcase"

export default function Home() {
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
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-2">
              <Link href="/docs">
                <Button variant="ghost" size="sm">
                  Documentation
                </Button>
              </Link>
              <Link href="/templates">
                <Button variant="ghost" size="sm">
                  Templates
                </Button>
              </Link>
              <Link href="/storybook">
                <Button variant="ghost" size="sm">
                  Storybook
                </Button>
              </Link>
              <Link href="https://github.com/b33lz3bubTH/maksudi-lib" target="_blank" rel="noreferrer">
                <Button variant="ghost" size="sm">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <HeroAnimation />
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">Maksudi-Lib</h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Beautiful UI components with GSAP and Framer Motion animations. Build stunning interfaces with minimal
              effort.
            </p>
            <div className="space-x-4">
              <Link href="/docs/getting-started">
                <Button className="gap-1">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/storybook">
                <Button variant="outline">Explore Components</Button>
              </Link>
            </div>
          </div>
        </section>

        <ComponentShowcase />

        <section className="container space-y-6 py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Features</h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Maksudi-Lib combines the best of UI components with stunning animations.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">40+ Components</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A comprehensive collection of UI components for all your needs.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">GSAP Animations</h3>
              <p className="mt-2 text-sm text-muted-foreground">Smooth, performant animations powered by GSAP.</p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                  <path d="M18 14h-8" />
                  <path d="M15 18h-5" />
                  <path d="M10 6h8v4h-8V6Z" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Storybook Documentation</h3>
              <p className="mt-2 text-sm text-muted-foreground">Comprehensive documentation with live examples.</p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z" />
                  <line x1="16" y1="8" x2="2" y2="22" />
                  <line x1="17.5" y1="15" x2="9" y2="15" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Customizable Themes</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Easily customize the look and feel to match your brand.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m2 12 5.45 5.45" />
                  <path d="M2 12h6" />
                  <path d="m22 12-5.45 5.45" />
                  <path d="M22 12h-6" />
                  <path d="m12 2 5.45 5.45" />
                  <path d="M12 2v6" />
                  <path d="m12 22-5.45-5.45" />
                  <path d="M12 22v-6" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Lazy Loading</h3>
              <p className="mt-2 text-sm text-muted-foreground">Optimized performance with component lazy loading.</p>
            </div>
            <div className="relative overflow-hidden rounded-lg border bg-background p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-primary"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3 className="mt-4 font-semibold">Ready-to-use Templates</h3>
              <p className="mt-2 text-sm text-muted-foreground">Admin panels, login pages, and portfolio templates.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Package className="h-6 w-6" />
                <span className="font-bold text-xl">Maksudi-Lib</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                A comprehensive UI component library with stunning animations powered by GSAP and Framer Motion. Build
                beautiful interfaces with minimal effort.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/b33lz3bubTH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://x.com/Sourav0xFF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">X (Twitter)</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs/getting-started"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/components"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/animations"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Animations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/templates"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Templates
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/storybook" className="text-muted-foreground hover:text-foreground transition-colors">
                    Storybook
                  </Link>
                </li>
                <li>
                  <Link href="/templates" className="text-muted-foreground hover:text-foreground transition-colors">
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Maksudi-Lib. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="/about-us"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
