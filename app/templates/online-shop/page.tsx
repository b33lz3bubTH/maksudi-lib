"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, Heart, Package, Search, ShoppingBag, ShoppingCart, Star, Twitter, Linkedin } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedBadge } from "@/components/ui/animated-badge"
import { AnimatedCarousel } from "@/components/ui/animated-carousel"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedTabs } from "@/components/ui/animated-tabs"

// Sample product data
const featuredProducts = [
  {
    id: 1,
    name: "Premium Leather Jacket",
    price: 299.99,
    image: "/placeholder.svg",
    category: "Clothing",
    rating: 4.8,
    sale: false,
    new: true,
  },
  {
    id: 2,
    name: "Wireless Noise-Cancelling Headphones",
    price: 199.99,
    originalPrice: 249.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.9,
    sale: true,
    new: false,
  },
  {
    id: 3,
    name: "Handcrafted Ceramic Mug Set",
    price: 49.99,
    image: "/placeholder.svg",
    category: "Home",
    rating: 4.7,
    sale: false,
    new: true,
  },
  {
    id: 4,
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg",
    category: "Clothing",
    rating: 4.5,
    sale: true,
    new: false,
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    price: 149.99,
    image: "/placeholder.svg",
    category: "Electronics",
    rating: 4.6,
    sale: false,
    new: true,
  },
  {
    id: 6,
    name: "Artisanal Scented Candle",
    price: 24.99,
    image: "/placeholder.svg",
    category: "Home",
    rating: 4.4,
    sale: false,
    new: false,
  },
]

const categories = [
  { name: "Clothing", icon: "/placeholder.svg" },
  { name: "Electronics", icon: "/placeholder.svg" },
  { name: "Home", icon: "/placeholder.svg" },
  { name: "Beauty", icon: "/placeholder.svg" },
  { name: "Sports", icon: "/placeholder.svg" },
  { name: "Books", icon: "/placeholder.svg" },
]

const heroSlides = [
  {
    title: "Summer Collection",
    subtitle: "Discover the latest trends for the season",
    cta: "Shop Now",
    image: "/placeholder.svg",
    color: "bg-amber-50",
  },
  {
    title: "New Arrivals",
    subtitle: "Be the first to try our newest products",
    cta: "Explore",
    image: "/placeholder.svg",
    color: "bg-emerald-50",
  },
  {
    title: "Special Offers",
    subtitle: "Limited time discounts on selected items",
    cta: "View Deals",
    image: "/placeholder.svg",
    color: "bg-rose-50",
  },
]

// Product Card Component
function ProductCard({ product }) {
  const cardRef = useRef(null)

  useEffect(() => {
    if (!cardRef.current) return

    gsap.from(cardRef.current.querySelectorAll(".product-animate"), {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 90%",
      },
    })
  }, [])

  return (
    <AnimatedCard className="overflow-hidden group" ref={cardRef}>
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          {product.new && <AnimatedBadge className="product-animate bg-emerald-500">New</AnimatedBadge>}
          {product.sale && <AnimatedBadge className="product-animate bg-rose-500">Sale</AnimatedBadge>}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full shadow-md product-animate">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full shadow-md product-animate">
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1 product-animate">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
        </div>
        <Link href="/templates/online-shop/product">
          <h3 className="font-medium mt-2 product-animate">{product.name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-2 product-animate">{product.category}</p>
        <div className="flex items-center gap-2 product-animate">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
        <AnimatedButton className="w-full mt-3 product-animate">Add to Cart</AnimatedButton>
      </div>
    </AnimatedCard>
  )
}

// Category Card Component
function CategoryCard({ category }) {
  return (
    <AnimatedCard className="text-center p-6 hover:bg-accent/50 transition-colors">
      <div className="mx-auto rounded-full bg-primary/10 w-20 h-20 flex items-center justify-center mb-4">
        <img src={category.icon || "/placeholder.svg"} alt={category.name} className="w-10 h-10" />
      </div>
      <h3 className="font-medium">{category.name}</h3>
    </AnimatedCard>
  )
}

// Hero Slide Component
function HeroSlide({ slide }) {
  return (
    <div className={`w-full h-[600px] ${slide.color} relative overflow-hidden`}>
      <div className="container h-full flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10 py-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
          <p className="text-xl mb-8 text-muted-foreground">{slide.subtitle}</p>
          <AnimatedButton size="lg">{slide.cta}</AnimatedButton>
        </div>
        <div className="md:w-1/2 h-full flex items-center justify-center">
          <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="max-h-full object-contain" />
        </div>
      </div>
    </div>
  )
}

export default function OnlineShopTemplate() {
  const [cartCount, setCartCount] = useState(0)
  const mainRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animation for the header
    gsap.from(".header-animate", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col" ref={mainRef}>
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-50">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            <Link href="/templates/online-shop" className="text-2xl font-bold header-animate">
              MaksudiShop
            </Link>

            <div className="hidden md:flex items-center space-x-6 header-animate">
              <Link href="#" className="hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Shop
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Categories
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Sale
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4 header-animate">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Carousel */}
        <section className="relative">
          <AnimatedCarousel animation="fade" autoPlay={true} interval={5000} showArrows={true} showDots={true}>
            {heroSlides.map((slide, index) => (
              <HeroSlide key={index} slide={slide} />
            ))}
          </AnimatedCarousel>
        </section>

        {/* Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <ScrollReveal animation="fade">
              <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <ScrollReveal key={index} animation="slide" delay={index * 0.1} direction="up" distance={20}>
                  <CategoryCard category={category} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container">
            <div className="flex justify-between items-center mb-8">
              <ScrollReveal animation="fade">
                <h2 className="text-3xl font-bold">Featured Products</h2>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={0.2}>
                <Button variant="outline" className="gap-2">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </ScrollReveal>
            </div>

            <AnimatedTabs
              tabs={[
                {
                  id: "all",
                  label: "All Products",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {featuredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  ),
                },
                {
                  id: "clothing",
                  label: "Clothing",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {featuredProducts
                        .filter((p) => p.category === "Clothing")
                        .map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                  ),
                },
                {
                  id: "electronics",
                  label: "Electronics",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {featuredProducts
                        .filter((p) => p.category === "Electronics")
                        .map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                  ),
                },
                {
                  id: "home",
                  label: "Home",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                      {featuredProducts
                        .filter((p) => p.category === "Home")
                        .map((product) => (
                          <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </section>

        {/* Promotional Banner */}
        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <ScrollReveal animation="slide" direction="left" distance={50}>
                <div>
                  <h2 className="text-3xl font-bold mb-4">Summer Sale</h2>
                  <p className="text-xl mb-6">Get up to 50% off on selected items. Limited time offer.</p>
                  <AnimatedButton size="lg">Shop the Sale</AnimatedButton>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide" direction="right" distance={50}>
                <img src="/placeholder.svg" alt="Summer Sale" className="rounded-lg shadow-lg" />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* New Arrivals Carousel */}
        <section className="py-16">
          <div className="container">
            <ScrollReveal animation="fade">
              <h2 className="text-3xl font-bold mb-12 text-center">New Arrivals</h2>
            </ScrollReveal>

            <AnimatedCarousel showArrows={true} showDots={true} animation="slide" className="h-[450px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {featuredProducts.slice(0, 3).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
                {featuredProducts.slice(3, 6).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </AnimatedCarousel>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal animation="fade">
                <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                <p className="text-muted-foreground mb-8">
                  Stay updated with our latest products and exclusive offers.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="slide" direction="up" distance={20}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input type="email" placeholder="Enter your email" className="flex-1" />
                  <AnimatedButton>Subscribe</AnimatedButton>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted mt-auto">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">MaksudiShop</h3>
              <p className="text-muted-foreground mb-4">
                Your one-stop destination for quality products at affordable prices.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Package className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    All Products
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Featured
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Size Guide
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Shop Street</p>
                <p>Cityville, State 12345</p>
                <p>United States</p>
                <p className="mt-2">Email: info@maksudishop.com</p>
                <p>Phone: +1 (123) 456-7890</p>
              </address>
            </div>
          </div>

          <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} MaksudiShop. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
