import Link from "next/link"
import { ArrowLeft, ArrowRight, Package } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function TemplatesPage() {
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
          <h1 className="text-3xl font-bold mb-8">Templates</h1>

          <div className="grid gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Admin Templates</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Admin Dashboard Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link href="/templates/admin">
                        <Button>
                          View Template
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Admin Dashboard</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      A comprehensive admin dashboard with analytics, user management, and more.
                    </p>
                  </div>
                </div>

                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Analytics Dashboard Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link href="/templates/portfolio">
                        <Button>
                          View Template
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Portfolio Website</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Professional portfolio template with smooth animations and project showcases.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Authentication Templates</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Login Page Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Link href="/templates/login">
                        <Button>
                          View Template
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Login & Signup</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Beautiful authentication pages with social login options.
                    </p>
                  </div>
                </div>

                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Multi-step Form Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button disabled>Coming Soon</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Multi-step Form</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      User-friendly multi-step forms with validation and progress tracking.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">Marketing Templates</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Landing Page Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button disabled>Coming Soon</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Landing Page</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Conversion-focused landing page with call-to-action sections.
                    </p>
                  </div>
                </div>

                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Pricing Page Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button disabled>Coming Soon</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Pricing Page</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Clear pricing tables with feature comparison and subscription options.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-4">E-commerce Templates</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Product Page Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button disabled>Coming Soon</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Product Page</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      Detailed product page with image gallery, reviews, and add-to-cart functionality.
                    </p>
                  </div>
                </div>

                <div className="group border rounded-lg overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Shopping Cart Template"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button disabled>Coming Soon</Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">Shopping Cart</h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      User-friendly shopping cart with checkout process and payment integration.
                    </p>
                  </div>
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
