"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedAccordion } from "@/components/ui/animated-accordion"
import { AnimatedBadge } from "@/components/ui/animated-badge"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { Github, Globe, Mail, MapPin, Users } from "lucide-react"

// GitHub usernames of contributors
const contributors = ["b33lz3bubTH", "souravahmed1"]

// Type for GitHub user data
interface GitHubUser {
  login: string
  avatar_url: string
  name: string | null
  bio: string | null
  location: string | null
  html_url: string
  public_repos: number
  followers: number
}

export default function AboutUsPage() {
  const [users, setUsers] = useState<GitHubUser[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const promises = contributors.map((username) =>
          fetch(`https://api.github.com/users/${username}`).then((res) => {
            if (!res.ok) {
              // If user not found, return a placeholder
              return {
                login: username,
                avatar_url: "/placeholder.svg",
                name: username,
                bio: "Team member",
                location: "India",
                html_url: "https://github.com",
                public_repos: 0,
                followers: 0,
              }
            }
            return res.json()
          }),
        )

        const userData = await Promise.all(promises)
        setUsers(userData)
      } catch (error) {
        console.error("Error fetching GitHub users:", error)
        // Provide placeholder data if fetch fails
        setUsers(
          contributors.map((username) => ({
            login: username,
            avatar_url: "/placeholder.svg",
            name: username,
            bio: "Team member",
            location: "India",
            html_url: "https://github.com",
            public_repos: 0,
            followers: 0,
          })),
        )
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  // FAQ items
  const faqItems = [
    {
      title: "What is WhatsApp Ecommerce?",
      content:
        "Our WhatsApp Ecommerce solution allows sellers to reach customers directly through WhatsApp without needing to drive traffic to a website. We enable businesses to showcase products, handle orders, and provide customer support all through WhatsApp.",
    },
    {
      title: "How does the cold messaging system work?",
      content:
        "We provide a system that allows you to reach potential customers across India through WhatsApp. Our approach is compliant with messaging regulations and focuses on providing value to potential customers by introducing your products and services.",
    },
    {
      title: "How are products displayed to customers?",
      content:
        "Products are shown in a paginated format through our WhatsApp bot, making it easy for customers to browse your catalog. Customers can place orders directly through the chat interface.",
    },
    {
      title: "Is my business data secure?",
      content:
        "Absolutely. We employ military-grade encryption to ensure all your business and customer data remains secure. Our multi-tenant system is designed with security as a top priority, while our WhatsApp ecommerce solution operates independently to maintain data isolation.",
    },
    {
      title: "Do you support multiple sellers?",
      content:
        "Yes, our platform is built as a multi-tenant system that can support multiple sellers. Each seller gets their own secure environment while benefiting from our shared infrastructure.",
    },
    {
      title: "How do payments work?",
      content:
        "We support multiple payment methods including UPI, bank transfers, and cash on delivery. All payment processing is secure and compliant with financial regulations.",
    },
    {
      title: "Can I track inventory and orders?",
      content:
        "Yes, our system includes comprehensive inventory management and order tracking features. You'll always know your stock levels and the status of every customer order.",
    },
    {
      title: "Is customer support available?",
      content:
        "We provide 24/7 customer support to help with any issues or questions you might have about our platform. Our team is dedicated to ensuring your success.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <ScrollReveal>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            About EchoWare
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Revolutionizing ecommerce through WhatsApp, making selling easier and more accessible for businesses across
            India.
          </p>
        </ScrollReveal>
      </section>

      {/* Business Info Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="md:w-1/2">
                <AnimatedBadge className="mb-4">Our Mission</AnimatedBadge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Empowering Businesses Through WhatsApp Commerce</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At EchoWare, we believe that ecommerce should be accessible to everyone. Our WhatsApp-based solution
                  eliminates the need for complex websites and marketing campaigns, allowing you to reach customers
                  directly where they already are.
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <Globe className="text-purple-600" size={20} />
                  <a
                    href="https://business.echoware.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:underline"
                  >
                    business.echoware.co.in
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-purple-600" size={20} />
                  <a href="mailto:contact@echoware.co.in" className="text-purple-600 hover:underline">
                    contact@echoware.co.in
                  </a>
                </div>
              </div>
              <div className="md:w-1/2">
                <AnimatedCard className="p-0 overflow-hidden">
                  <Image
                    src="https://i.imgur.com/nd6eWMO.jpeg"
                    alt="EchoWare Business"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </AnimatedCard>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedBadge className="mb-4">Our Team</AnimatedBadge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Minds Behind EchoWare</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our diverse team of developers, designers, and business experts work together to create the best
                WhatsApp commerce experience.
              </p>
            </div>
          </ScrollReveal>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-lg h-96"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {users.map((user, index) => (
                <ScrollReveal key={user.login} delay={index * 100}>
                  <AnimatedCard className="h-full flex flex-col">
                    <div className="relative">
                      <div className="h-40 bg-gradient-to-r from-purple-500 to-blue-500 rounded-t-lg"></div>
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                        <Image
                          src={user.avatar_url || "/placeholder.svg"}
                          alt={user.name || user.login}
                          width={96}
                          height={96}
                          className="rounded-full border-4 border-white"
                        />
                      </div>
                    </div>
                    <div className="pt-16 pb-6 px-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-center mb-1">{user.name || user.login}</h3>
                      <p className="text-gray-500 text-center mb-4">@{user.login}</p>
                      <p className="text-gray-600 text-center mb-6">{user.bio || "Team member at EchoWare"}</p>
                      <div className="mt-auto">
                        <div className="flex items-center justify-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Github size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-500">{user.public_repos} repos</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-500">{user.followers} followers</span>
                          </div>
                        </div>
                        {user.location && (
                          <div className="flex items-center justify-center gap-1 mb-4">
                            <MapPin size={16} className="text-gray-500" />
                            <span className="text-sm text-gray-500">{user.location}</span>
                          </div>
                        )}
                        <a
                          href={user.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full text-center py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                        >
                          View GitHub Profile
                        </a>
                      </div>
                    </div>
                  </AnimatedCard>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <AnimatedBadge className="mb-4">FAQ</AnimatedBadge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Learn more about our WhatsApp ecommerce solution and how it can help your business.
              </p>
            </div>
          </ScrollReveal>

          <AnimatedAccordion items={faqItems} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Join the WhatsApp commerce revolution and start selling directly to your customers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="py-3 px-8 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-medium transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/templates/online-shop"
                className="py-3 px-8 bg-transparent border-2 border-white hover:bg-white/10 rounded-lg font-medium transition-colors"
              >
                View Demo
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Links */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="text-gray-600 hover:text-purple-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-600 hover:text-purple-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-purple-600 transition-colors">
              Contact
            </Link>
            <Link href="/careers" className="text-gray-600 hover:text-purple-600 transition-colors">
              Careers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
