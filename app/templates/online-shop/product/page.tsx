"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingBag, ShoppingCart, Star, Truck } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedBadge } from "@/components/ui/animated-badge"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { AnimatedAccordion } from "@/components/ui/animated-accordion"

// Sample product data
const product = {
  id: 1,
  name: "Premium Leather Jacket",
  price: 299.99,
  description:
    "Crafted from the finest leather, this jacket combines style and durability. Perfect for casual outings or special occasions.",
  longDescription:
    "This premium leather jacket is made from 100% genuine leather, sourced ethically and crafted by skilled artisans. The jacket features a classic design with modern touches, including a tailored fit, multiple pockets, and premium metal hardware. The interior is lined with soft polyester for comfort and warmth. This versatile piece can be dressed up or down, making it a staple in any wardrobe.",
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  category: "Clothing",
  subcategory: "Jackets",
  rating: 4.8,
  reviewCount: 124,
  sku: "LJ-12345",
  stock: 15,
  sizes: ["S", "M", "L", "XL"],
  colors: ["Black", "Brown", "Navy"],
  features: [
    "100% Genuine Leather",
    "Durable Metal Hardware",
    "Multiple Pockets",
    "Soft Interior Lining",
    "Water-Resistant Finish",
  ],
  shipping: "Free shipping on orders over $100",
  returns: "30-day easy returns",
  new: true,
}

// Related products
const relatedProducts = [
  {
    id: 2,
    name: "Casual Denim Jacket",
    price: 149.99,
    image: "/placeholder.svg",
    category: "Clothing",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Wool Blend Coat",
    price: 199.99,
    image: "/placeholder.svg",
    category: "Clothing",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Lightweight Bomber Jacket",
    price: 129.99,
    image: "/placeholder.svg",
    category: "Clothing",
    rating: 4.6,
  },
]

// Product Card Component
function ProductCard({ product }) {
  return (
    <AnimatedCard className="overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="rounded-full shadow-md">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="secondary" className="rounded-full shadow-md">
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"}`}
            />
          ))}
          <span className="text-xs text-muted-foreground ml-1">{product.rating}</span>
        </div>
        <h3 className="font-medium mt-2">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
        <div className="flex items-center gap-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
        </div>
        <AnimatedButton className="w-full mt-3">Add to Cart</AnimatedButton>
      </div>
    </AnimatedCard>
  )
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")
  const mainRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animation for the product details
    gsap.from(".product-animate", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" ref={mainRef}>
      {/* Header */}
      <header className="border-b sticky top-0 bg-background z-50">
        <div className="container py-2">
          <div className="flex items-center justify-between">
            <Link href="/templates/online-shop" className="text-2xl font-bold">
              MaksudiShop
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link href="/templates/online-shop" className="hover:text-primary transition-colors">
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

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="container py-4">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/templates/online-shop" },
              { label: "Shop", href: "#" },
              { label: "Clothing", href: "#" },
              { label: product.name },
            ]}
            animated={true}
            showHomeIcon={true}
          />
        </div>

        {/* Product Details */}
        <section className="py-8">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="border rounded-lg overflow-hidden product-animate">
                  <img
                    src={product.images[selectedImage] || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4 product-animate">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      className={`border rounded-md overflow-hidden ${
                        selectedImage === index ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {product.new && <AnimatedBadge className="product-animate bg-emerald-500">New Arrival</AnimatedBadge>}
                <h1 className="text-3xl font-bold product-animate">{product.name}</h1>

                <div className="flex items-center gap-4 product-animate">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-muted-foreground">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>

                <div className="product-animate">
                  <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                </div>

                <p className="text-muted-foreground product-animate">{product.description}</p>

                <div className="space-y-4 product-animate">
                  <div>
                    <h3 className="font-medium mb-2">Size</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <Button
                          key={size}
                          variant={selectedSize === size ? "default" : "outline"}
                          className="w-12 h-12"
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Color</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <Button
                          key={color}
                          variant={selectedColor === color ? "default" : "outline"}
                          onClick={() => setSelectedColor(color)}
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 product-animate">
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">{product.stock} items available</div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 product-animate">
                  <AnimatedButton size="lg" className="flex-1">
                    Add to Cart
                  </AnimatedButton>
                  <Button variant="outline" size="lg">
                    <Heart className="h-5 w-5 mr-2" />
                    Add to Wishlist
                  </Button>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground product-animate">
                  <Truck className="h-4 w-4" />
                  <span>{product.shipping}</span>
                </div>

                <div className="flex items-center gap-4 product-animate">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Share2 className="h-4 w-4" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <ScrollReveal animation="fade">
              <AnimatedTabs
                tabs={[
                  {
                    id: "description",
                    label: "Description",
                    content: (
                      <div className="py-6">
                        <p className="text-muted-foreground">{product.longDescription}</p>
                        <h3 className="font-medium mt-6 mb-4">Features</h3>
                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <ChevronRight className="h-4 w-4 text-primary" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ),
                  },
                  {
                    id: "specifications",
                    label: "Specifications",
                    content: (
                      <div className="py-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="border-b pb-2">
                            <span className="font-medium">SKU:</span> {product.sku}
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Category:</span> {product.category}
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Subcategory:</span> {product.subcategory}
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Available Sizes:</span> {product.sizes.join(", ")}
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Available Colors:</span> {product.colors.join(", ")}
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Material:</span> 100% Genuine Leather
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Care Instructions:</span> Spot clean only
                          </div>
                          <div className="border-b pb-2">
                            <span className="font-medium">Country of Origin:</span> Italy
                          </div>
                        </div>
                      </div>
                    ),
                  },
                  {
                    id: "reviews",
                    label: `Reviews (${product.reviewCount})`,
                    content: (
                      <div className="py-6">
                        <div className="flex items-center gap-4 mb-8">
                          <div className="text-5xl font-bold">{product.rating}</div>
                          <div>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className={`h-5 w-5 ${
                                    i < Math.floor(product.rating) ? "text-amber-400 fill-amber-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">Based on {product.reviewCount} reviews</p>
                          </div>
                          <div className="ml-auto">
                            <Button>Write a Review</Button>
                          </div>
                        </div>

                        <AnimatedAccordion
                          items={[
                            {
                              title: "Excellent quality and design",
                              content: (
                                <div>
                                  <div className="flex items-center mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-muted-foreground">John D. - 2 months ago</span>
                                  </div>
                                  <p>
                                    This jacket exceeded my expectations. The leather is soft yet durable, and the fit
                                    is perfect. I've received many compliments when wearing it.
                                  </p>
                                </div>
                              ),
                            },
                            {
                              title: "Great value for the price",
                              content: (
                                <div>
                                  <div className="flex items-center mb-2">
                                    {Array.from({ length: 4 }).map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                                    ))}
                                    <Star className="h-4 w-4 text-gray-300" />
                                    <span className="ml-2 text-sm text-muted-foreground">Sarah M. - 1 month ago</span>
                                  </div>
                                  <p>
                                    I was hesitant about the price at first, but after receiving the jacket, I can say
                                    it's worth every penny. The quality is outstanding and it looks even better in
                                    person.
                                  </p>
                                </div>
                              ),
                            },
                            {
                              title: "Perfect fit and comfortable",
                              content: (
                                <div>
                                  <div className="flex items-center mb-2">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />
                                    ))}
                                    <span className="ml-2 text-sm text-muted-foreground">Michael T. - 3 weeks ago</span>
                                  </div>
                                  <p>
                                    The sizing guide was spot on. The jacket fits perfectly and is very comfortable to
                                    wear. The leather is soft and the interior lining adds extra comfort.
                                  </p>
                                </div>
                              ),
                            },
                          ]}
                        />
                      </div>
                    ),
                  },
                  {
                    id: "shipping",
                    label: "Shipping & Returns",
                    content: (
                      <div className="py-6">
                        <h3 className="font-medium mb-4">Shipping Information</h3>
                        <p className="mb-4">We offer the following shipping options:</p>
                        <ul className="space-y-2 mb-6">
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary" />
                            <span>Standard Shipping (3-5 business days): $5.99</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary" />
                            <span>Express Shipping (1-2 business days): $12.99</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <ChevronRight className="h-4 w-4 text-primary" />
                            <span>Free shipping on orders over $100</span>
                          </li>
                        </ul>

                        <h3 className="font-medium mb-4">Return Policy</h3>
                        <p className="mb-4">
                          We want you to be completely satisfied with your purchase. If for any reason you're not happy
                          with your order, we offer a 30-day return policy.
                        </p>
                        <p>
                          To be eligible for a return, your item must be unused and in the same condition that you
                          received it. It must also be in the original packaging.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="container">
            <ScrollReveal animation="fade">
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product, index) => (
                <ScrollReveal key={product.id} animation="slide" delay={index * 0.1} direction="up" distance={20}>
                  <ProductCard product={product} />
                </ScrollReveal>
              ))}
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
