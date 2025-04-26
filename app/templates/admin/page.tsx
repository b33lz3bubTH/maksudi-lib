"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  Bell,
  ChevronDown,
  CreditCard,
  Home,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Package,
  Search,
  Settings,
  User,
  Users,
} from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedTabs } from "@/components/ui/animated-tabs"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminTemplate() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar */}
      <motion.aside
        initial={{ width: 240 }}
        animate={{ width: isSidebarOpen ? 240 : 80 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="border-r bg-card flex flex-col"
      >
        <div className="p-4 flex items-center justify-between border-b">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isSidebarOpen ? 1 : 0 }}
            className="flex items-center gap-2"
          >
            <Package className="h-6 w-6" />
            <span className="font-bold">Maksudi Admin</span>
          </motion.div>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <ChevronDown className={cn("h-4 w-4 transition-transform", isSidebarOpen ? "rotate-0" : "rotate-180")} />
          </Button>
        </div>

        <div className="flex-1 overflow-auto py-2">
          <nav className="grid gap-1 px-2">
            {[
              { icon: Home, label: "Home", href: "#" },
              { icon: LayoutDashboard, label: "Dashboard", href: "#", active: true },
              { icon: BarChart3, label: "Analytics", href: "#" },
              { icon: CreditCard, label: "Billing", href: "#" },
              { icon: Users, label: "Team", href: "#" },
              { icon: Layers, label: "Projects", href: "#" },
              { icon: Settings, label: "Settings", href: "#" },
            ].map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
              >
                <item.icon className="h-4 w-4" />
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: isSidebarOpen ? 1 : 0,
                    display: isSidebarOpen ? "inline" : "none",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/placeholder.svg?height=40&width=40" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity: isSidebarOpen ? 1 : 0,
                display: isSidebarOpen ? "block" : "none",
              }}
            >
              <div className="font-medium">John Doe</div>
              <div className="text-xs text-muted-foreground">admin@example.com</div>
            </motion.div>
          </div>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="border-b bg-card">
          <div className="flex h-16 items-center px-4 gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
              { title: "Subscriptions", value: "2,350", change: "+10.5%" },
              { title: "Active Users", value: "12,234", change: "+4.3%" },
              { title: "Pending Orders", value: "573", change: "-2.5%" },
            ].map((stat, index) => (
              <AnimatedCard key={index} className="p-6">
                <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <h3 className="text-sm font-medium">{stat.title}</h3>
                  <div className="rounded-full bg-primary/20 p-1">
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className={cn("text-xs", stat.change.startsWith("+") ? "text-green-500" : "text-red-500")}>
                  {stat.change} from last month
                </p>
              </AnimatedCard>
            ))}
          </div>

          <div className="grid gap-6 mt-6 md:grid-cols-2">
            <AnimatedCard className="p-6">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { user: "John Doe", action: "created a new project", time: "2 minutes ago" },
                  { user: "Jane Smith", action: "updated billing information", time: "1 hour ago" },
                  { user: "Robert Johnson", action: "completed onboarding", time: "3 hours ago" },
                  { user: "Emily Davis", action: "submitted a support ticket", time: "5 hours ago" },
                  { user: "Michael Wilson", action: "upgraded subscription", time: "1 day ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>
                        {activity.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedCard>

            <AnimatedCard className="p-6">
              <h3 className="text-lg font-medium mb-4">Performance</h3>
              <AnimatedTabs
                tabs={[
                  {
                    id: "daily",
                    label: "Daily",
                    content: (
                      <div className="pt-4">
                        <div className="h-[200px] flex items-end gap-2">
                          {Array.from({ length: 7 }).map((_, i) => {
                            const height = Math.random() * 100 + 20
                            return (
                              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${height}px` }}>
                                  <div
                                    className="w-full bg-primary rounded-t-sm transition-all duration-500"
                                    style={{ height: `${height * 0.7}px` }}
                                  />
                                </div>
                                <span className="text-xs">{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ),
                  },
                  {
                    id: "weekly",
                    label: "Weekly",
                    content: (
                      <div className="pt-4">
                        <div className="h-[200px] flex items-end gap-2">
                          {Array.from({ length: 4 }).map((_, i) => {
                            const height = Math.random() * 100 + 50
                            return (
                              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${height}px` }}>
                                  <div
                                    className="w-full bg-primary rounded-t-sm transition-all duration-500"
                                    style={{ height: `${height * 0.6}px` }}
                                  />
                                </div>
                                <span className="text-xs">Week {i + 1}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ),
                  },
                  {
                    id: "monthly",
                    label: "Monthly",
                    content: (
                      <div className="pt-4">
                        <div className="h-[200px] flex items-end gap-2">
                          {Array.from({ length: 6 }).map((_, i) => {
                            const height = Math.random() * 100 + 30
                            return (
                              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                                <div className="w-full bg-primary/20 rounded-t-sm" style={{ height: `${height}px` }}>
                                  <div
                                    className="w-full bg-primary rounded-t-sm transition-all duration-500"
                                    style={{ height: `${height * 0.8}px` }}
                                  />
                                </div>
                                <span className="text-xs">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </AnimatedCard>
          </div>

          <AnimatedCard className="mt-6 p-6">
            <h3 className="text-lg font-medium mb-4">Team Members</h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "John Doe", role: "CEO", email: "john@example.com" },
                { name: "Jane Smith", role: "CTO", email: "jane@example.com" },
                { name: "Robert Johnson", role: "Product Manager", email: "robert@example.com" },
                { name: "Emily Davis", role: "Lead Designer", email: "emily@example.com" },
                { name: "Michael Wilson", role: "Senior Developer", email: "michael@example.com" },
                { name: "Sarah Brown", role: "Marketing Lead", email: "sarah@example.com" },
              ].map((member, index) => (
                <div key={index} className="flex items-center gap-4 p-4 border rounded-md">
                  <Avatar>
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedCard>
        </main>
      </div>
    </div>
  )
}
