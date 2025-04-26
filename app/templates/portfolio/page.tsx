"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Github, Linkedin, Mail, Package, Twitter } from "lucide-react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedButton } from "@/components/ui/animated-button"

export default function PortfolioTemplate() {
  const headerRef = useRef<HTMLElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Hero animation
    if (heroRef.current) {
      const tl = gsap.timeline()
      tl.from(heroRef.current.querySelector("h1"), {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
      tl.from(
        heroRef.current.querySelector("p"),
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      tl.from(
        heroRef.current.querySelectorAll("button"),
        {
          y: 20,
          opacity: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.2",
      )
    }

    // Projects animation
    if (projectsRef.current) {
      const cards = projectsRef.current.querySelectorAll(".project-card")
      gsap.from(cards, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 70%",
        },
      })
    }

    // Skills animation
    if (skillsRef.current) {
      const skills = skillsRef.current.querySelectorAll(".skill-item")
      gsap.from(skills, {
        x: -30,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        },
      })
    }

    // Contact animation
    if (contactRef.current) {
      gsap.from(contactRef.current.querySelector(".contact-card"), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      })
    }

    // Header scroll effect
    gsap.to(headerRef.current, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "+=100",
        scrub: true,
      },
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <header
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
      >
        <div className="container flex h-14 items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-6 w-6" />
            <span className="font-bold">John Doe</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-2">
            <Link href="/templates">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section
          ref={heroRef}
          id="about"
          className="container py-24 md:py-32 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">John Doe</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-8">
            A passionate frontend developer specializing in creating beautiful and functional web experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <AnimatedButton size="lg">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </AnimatedButton>
            <AnimatedButton variant="outline" size="lg">
              Download Resume
            </AnimatedButton>
          </div>
        </section>

        <section ref={projectsRef} id="projects" className="bg-muted/50 py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "E-commerce Website",
                  description: "A fully responsive e-commerce platform built with React and Node.js.",
                  tags: ["React", "Node.js", "MongoDB"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Portfolio Template",
                  description: "A customizable portfolio template for creative professionals.",
                  tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Task Management App",
                  description: "A productivity app to help teams organize and track their projects.",
                  tags: ["React", "Firebase", "Redux"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Weather Dashboard",
                  description: "A weather application with real-time updates and forecasts.",
                  tags: ["JavaScript", "API", "CSS"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Social Media Platform",
                  description: "A social networking site with real-time messaging and notifications.",
                  tags: ["React", "Socket.io", "Express"],
                  image: "/placeholder.svg?height=300&width=500",
                },
                {
                  title: "Recipe Finder",
                  description: "An app to discover and save recipes based on available ingredients.",
                  tags: ["Vue.js", "API", "Vuex"],
                  image: "/placeholder.svg?height=300&width=500",
                },
              ].map((project, index) => (
                <AnimatedCard key={index} className="project-card overflow-hidden">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button variant="outline" size="sm">
                      View Project
                    </Button>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </section>

        <section ref={skillsRef} id="skills" className="container py-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend Development",
                skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "Next.js", "Tailwind CSS", "SASS"],
              },
              {
                category: "Backend Development",
                skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase", "RESTful APIs", "GraphQL"],
              },
              {
                category: "Tools & Others",
                skills: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design", "Performance Optimization", "SEO"],
              },
              {
                category: "Soft Skills",
                skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Adaptability"],
              },
              {
                category: "Animation & Design",
                skills: ["GSAP", "Framer Motion", "CSS Animations", "UI/UX Design", "Wireframing", "Prototyping"],
              },
              {
                category: "DevOps & Deployment",
                skills: ["Vercel", "Netlify", "Docker", "CI/CD", "AWS", "Performance Monitoring"],
              },
            ].map((skillGroup, index) => (
              <div key={index} className="skill-item border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-muted text-foreground text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section ref={contactRef} id="contact" className="bg-muted/50 py-20">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <AnimatedCard className="contact-card p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <a href="mailto:john@example.com" className="hover:text-primary">
                          john@example.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Github className="h-5 w-5 text-primary" />
                        <a
                          href="https://github.com/johndoe"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary"
                        >
                          github.com/johndoe
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <a
                          href="https://linkedin.com/in/johndoe"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary"
                        >
                          linkedin.com/in/johndoe
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Twitter className="h-5 w-5 text-primary" />
                        <a
                          href="https://twitter.com/johndoe"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-primary"
                        >
                          twitter.com/johndoe
                        </a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                    <p className="text-muted-foreground mb-4">
                      I'm always open to discussing new projects, creative ideas or opportunities to be part of your
                      vision.
                    </p>
                    <AnimatedButton className="w-full">Send Message</AnimatedButton>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Package className="h-5 w-5" />
            <span className="font-medium">John Doe</span>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} John Doe. All rights reserved.</p>
          <div className="flex items-center space-x-3">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
