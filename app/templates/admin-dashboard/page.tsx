"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
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
  PlusCircle,
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
import { AnimatedDrawer } from "@/components/ui/animated-drawer"
import { DataTable } from "@/components/ui/data-table"
import { FormBuilder } from "@/components/ui/form-builder"
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

// Sample data for the dashboard
const users = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Robert Johnson", email: "robert@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Michael Wilson", email: "michael@example.com", role: "Viewer", status: "Active" },
  { id: 6, name: "Sarah Brown", email: "sarah@example.com", role: "Admin", status: "Active" },
  { id: 7, name: "David Lee", email: "david@example.com", role: "Editor", status: "Inactive" },
  { id: 8, name: "Lisa Taylor", email: "lisa@example.com", role: "Viewer", status: "Active" },
  { id: 9, name: "James Anderson", email: "james@example.com", role: "Admin", status: "Active" },
  { id: 10, name: "Jennifer White", email: "jennifer@example.com", role: "Editor", status: "Active" },
]

const products = [
  { id: 1, name: "Product A", price: 99.99, stock: 120, category: "Electronics" },
  { id: 2, name: "Product B", price: 149.99, stock: 75, category: "Electronics" },
  { id: 3, name: "Product C", price: 29.99, stock: 300, category: "Clothing" },
  { id: 4, name: "Product D", price: 199.99, stock: 50, category: "Home" },
  { id: 5, name: "Product E", price: 49.99, stock: 200, category: "Clothing" },
  { id: 6, name: "Product F", price: 299.99, stock: 30, category: "Electronics" },
  { id: 7, name: "Product G", price: 19.99, stock: 500, category: "Books" },
  { id: 8, name: "Product H", price: 399.99, stock: 20, category: "Home" },
  { id: 9, name: "Product I", price: 59.99, stock: 150, category: "Clothing" },
  { id: 10, name: "Product J", price: 499.99, stock: 10, category: "Electronics" },
]

// Table columns
const userColumns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div
        className={cn(
          "px-2 py-1 rounded-full text-xs font-medium w-fit",
          row.original.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800",
        )}
      >
        {row.original.status}
      </div>
    ),
  },
]

const productColumns = [
  {
    accessorKey: "name",
    header: "Product Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>${row.original.price.toFixed(2)}</div>,
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
  {
    accessorKey: "category",
    header: "Category",
  },
]

export default function AdminDashboardTemplate() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [formDrawerOpen, setFormDrawerOpen] = useState(false)

  const router = useRouter()

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

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
              { icon: Home, label: "Home", id: "home" },
              { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", active: true },
              { icon: Users, label: "Users", id: "users" },
              { icon: Package, label: "Products", id: "products" },
              { icon: BarChart3, label: "Analytics", id: "analytics" },
              { icon: CreditCard, label: "Billing", id: "billing" },
              { icon: Layers, label: "Projects", id: "projects" },
              { icon: Settings, label: "Settings", id: "settings" },
            ].map((item) => (
              <button
                key={item.id}
                className={cn(
                  "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  activeTab === item.id ? "bg-primary text-primary-foreground" : "hover:bg-muted",
                )}
                onClick={() => handleTabChange(item.id)}
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
              </button>
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
              <Button variant="ghost" size="icon" onClick={() => setIsDrawerOpen(true)}>
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
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Dashboard</h1>

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

              <div className="grid gap-6 md:grid-cols-2">
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
                                    <div
                                      className="w-full bg-primary/20 rounded-t-sm"
                                      style={{ height: `${height}px` }}
                                    >
                                      <div
                                        className="w-full bg-primary rounded-t-sm transition-all duration-500"
                                        style={{ height: `${height * 0.7}px` }}
                                      />
                                    </div>
                                    <span className="text-xs">
                                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                                    </span>
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
                                    <div
                                      className="w-full bg-primary/20 rounded-t-sm"
                                      style={{ height: `${height}px` }}
                                    >
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
                                    <div
                                      className="w-full bg-primary/20 rounded-t-sm"
                                      style={{ height: `${height}px` }}
                                    >
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
            </div>
          )}

          {activeTab === "users" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Users</h1>
                <Button onClick={() => setFormDrawerOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>
              <AnimatedCard className="p-6">
                <DataTable
                  columns={userColumns}
                  data={users}
                  searchColumn="name"
                  enableRowSelection
                  rowActions={[
                    {
                      label: "Edit",
                      onClick: (row) => console.log("Edit", row),
                    },
                    {
                      label: "Delete",
                      onClick: (row) => console.log("Delete", row),
                    },
                  ]}
                />
              </AnimatedCard>
            </div>
          )}

          {activeTab === "products" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Products</h1>
                <Button onClick={() => setFormDrawerOpen(true)}>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Product
                </Button>
              </div>
              <AnimatedCard className="p-6">
                <DataTable
                  columns={productColumns}
                  data={products}
                  searchColumn="name"
                  enableRowSelection
                  rowActions={[
                    {
                      label: "Edit",
                      onClick: (row) => console.log("Edit", row),
                    },
                    {
                      label: "Delete",
                      onClick: (row) => console.log("Delete", row),
                    },
                  ]}
                />
              </AnimatedCard>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="space-y-6">
              <h1 className="text-3xl font-bold">Settings</h1>
              <AnimatedCard className="p-6">
                <FormBuilder
                  initialSchema={{
                    id: "settings-form",
                    title: "Application Settings",
                    fields: [
                      {
                        id: "app-name",
                        type: "text",
                        label: "Application Name",
                        name: "appName",
                        defaultValue: "Maksudi Admin",
                        required: true,
                      },
                      {
                        id: "theme",
                        type: "select",
                        label: "Theme",
                        name: "theme",
                        defaultValue: "light",
                        options: [
                          { label: "Light", value: "light" },
                          { label: "Dark", value: "dark" },
                          { label: "System", value: "system" },
                        ],
                      },
                      {
                        id: "notifications",
                        type: "switch",
                        label: "Enable Notifications",
                        name: "notifications",
                        defaultValue: true,
                      },
                      {
                        id: "email-frequency",
                        type: "radio",
                        label: "Email Frequency",
                        name: "emailFrequency",
                        defaultValue: "daily",
                        options: [
                          { label: "Daily", value: "daily" },
                          { label: "Weekly", value: "weekly" },
                          { label: "Monthly", value: "monthly" },
                          { label: "Never", value: "never" },
                        ],
                      },
                    ],
                  }}
                  onSave={(schema) => console.log("Saved settings:", schema)}
                />
              </AnimatedCard>
            </div>
          )}
        </main>
      </div>

      {/* Notifications Drawer */}
      <AnimatedDrawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} position="right" size="400px">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Notifications</h2>
          <div className="space-y-4">
            {[
              { title: "New user registered", time: "2 minutes ago", read: false },
              { title: "New order received", time: "1 hour ago", read: false },
              { title: "Server update completed", time: "3 hours ago", read: true },
              { title: "Database backup successful", time: "5 hours ago", read: true },
              { title: "New feature deployed", time: "1 day ago", read: true },
            ].map((notification, index) => (
              <div
                key={index}
                className={cn(
                  "p-4 border rounded-md",
                  notification.read ? "bg-background" : "bg-primary/5 border-primary/20",
                )}
              >
                <h3 className="font-medium">{notification.title}</h3>
                <p className="text-sm text-muted-foreground">{notification.time}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedDrawer>

      {/* Form Drawer */}
      <AnimatedDrawer open={formDrawerOpen} onClose={() => setFormDrawerOpen(false)} position="right" size="500px">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
            {activeTab === "users" ? "Add User" : activeTab === "products" ? "Add Product" : "Add Item"}
          </h2>
          {activeTab === "users" && (
            <FormBuilder
              initialSchema={{
                id: "user-form",
                title: "User Information",
                fields: [
                  {
                    id: "name",
                    type: "text",
                    label: "Name",
                    name: "name",
                    required: true,
                  },
                  {
                    id: "email",
                    type: "email",
                    label: "Email",
                    name: "email",
                    required: true,
                  },
                  {
                    id: "role",
                    type: "select",
                    label: "Role",
                    name: "role",
                    options: [
                      { label: "Admin", value: "Admin" },
                      { label: "Editor", value: "Editor" },
                      { label: "Viewer", value: "Viewer" },
                    ],
                    required: true,
                  },
                  {
                    id: "status",
                    type: "radio",
                    label: "Status",
                    name: "status",
                    options: [
                      { label: "Active", value: "Active" },
                      { label: "Inactive", value: "Inactive" },
                    ],
                    defaultValue: "Active",
                  },
                ],
              }}
              onSave={(schema) => {
                console.log("Saved user:", schema)
                setFormDrawerOpen(false)
              }}
            />
          )}
          {activeTab === "products" && (
            <FormBuilder
              initialSchema={{
                id: "product-form",
                title: "Product Information",
                fields: [
                  {
                    id: "name",
                    type: "text",
                    label: "Product Name",
                    name: "name",
                    required: true,
                  },
                  {
                    id: "price",
                    type: "number",
                    label: "Price",
                    name: "price",
                    required: true,
                  },
                  {
                    id: "stock",
                    type: "number",
                    label: "Stock",
                    name: "stock",
                    required: true,
                  },
                  {
                    id: "category",
                    type: "select",
                    label: "Category",
                    name: "category",
                    options: [
                      { label: "Electronics", value: "Electronics" },
                      { label: "Clothing", value: "Clothing" },
                      { label: "Home", value: "Home" },
                      { label: "Books", value: "Books" },
                    ],
                    required: true,
                  },
                  {
                    id: "description",
                    type: "textarea",
                    label: "Description",
                    name: "description",
                  },
                ],
              }}
              onSave={(schema) => {
                console.log("Saved product:", schema)
                setFormDrawerOpen(false)
              }}
            />
          )}
        </div>
      </AnimatedDrawer>
    </div>
  )
}
