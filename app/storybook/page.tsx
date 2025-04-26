"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Package, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedButton } from "@/components/ui/animated-button"
import { AnimatedCard } from "@/components/ui/animated-card"
import { AnimatedDrawer } from "@/components/ui/animated-drawer"
import { AnimatedCarousel } from "@/components/ui/animated-carousel"
import { MultiStepForm, FormStep } from "@/components/ui/multi-step-form"
import { FormBuilder } from "@/components/ui/form-builder"
import { DataTable } from "@/components/ui/data-table"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function StorybookPage() {
  const [activeCategory, setActiveCategory] = useState("basic")
  const [activeComponent, setActiveComponent] = useState("button")
  const [drawerOpen, setDrawerOpen] = useState(false)

  // Sample data for examples
  const tableData = [
    { id: 1, name: "Product A", price: 99.99, stock: 120, category: "Electronics" },
    { id: 2, name: "Product B", price: 149.99, stock: 75, category: "Electronics" },
    { id: 3, name: "Product C", price: 29.99, stock: 300, category: "Clothing" },
  ]

  const tableColumns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "price", header: "Price", cell: ({ row }) => <div>${row.original.price.toFixed(2)}</div> },
    { accessorKey: "stock", header: "Stock" },
    { accessorKey: "category", header: "Category" },
  ]

  const componentCategories = [
    {
      id: "basic",
      name: "Basic Components",
      components: [
        { id: "button", name: "AnimatedButton" },
        { id: "card", name: "AnimatedCard" },
        { id: "badge", name: "AnimatedBadge" },
        { id: "progress", name: "AnimatedProgress" },
      ],
    },
    {
      id: "navigation",
      name: "Navigation",
      components: [
        { id: "tabs", name: "AnimatedTabs" },
        { id: "drawer", name: "AnimatedDrawer" },
        { id: "accordion", name: "AnimatedAccordion" },
      ],
    },
    {
      id: "feedback",
      name: "Feedback",
      components: [
        { id: "tooltip", name: "AnimatedTooltip" },
        { id: "modal", name: "AnimatedModal" },
      ],
    },
    {
      id: "form",
      name: "Form Controls",
      components: [
        { id: "checkbox", name: "AnimatedCheckbox" },
        { id: "switch", name: "AnimatedSwitch" },
        { id: "slider", name: "AnimatedSlider" },
        { id: "multi-step-form", name: "MultiStepForm" },
        { id: "form-builder", name: "FormBuilder" },
      ],
    },
    {
      id: "data",
      name: "Data Display",
      components: [
        { id: "data-table", name: "DataTable" },
        { id: "carousel", name: "AnimatedCarousel" },
      ],
    },
    {
      id: "animation",
      name: "Animation",
      components: [{ id: "scroll-reveal", name: "ScrollReveal" }],
    },
  ]

  const renderComponentExample = () => {
    switch (activeComponent) {
      case "button":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">AnimatedButton</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    AnimatedButton extends the standard Button component with GSAP and Framer Motion animations,
                    including ripple effects, hover scaling, and smooth transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <AnimatedButton>Default Button</AnimatedButton>
                    <AnimatedButton variant="secondary">Secondary</AnimatedButton>
                    <AnimatedButton variant="destructive">Destructive</AnimatedButton>
                    <AnimatedButton variant="outline">Outline</AnimatedButton>
                    <AnimatedButton variant="ghost">Ghost</AnimatedButton>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                  <CardDescription>
                    AnimatedButton accepts all standard Button props plus the following:
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>ripple</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Enables ripple effect on click (default: true)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>hoverScale</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Scale factor on hover (default: 1.05)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedButton } from "@/components/ui/animated-button"

export function Example() {
  return (
    <>
      <AnimatedButton>Default Button</AnimatedButton>
      <AnimatedButton variant="secondary" ripple={false}>
        No Ripple
      </AnimatedButton>
      <AnimatedButton hoverScale={1.1}>
        Larger Scale
      </AnimatedButton>
    </>
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "card":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">AnimatedCard</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    AnimatedCard provides a beautiful 3D tilt effect and glare animation on hover, creating an engaging
                    and interactive card component.
                  </CardDescription>
                </CardHeader>
                <CardContent>
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>tiltEffect</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Enables 3D tilt effect on hover (default: true)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>hoverScale</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Scale factor on hover (default: 1.02)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>glareEffect</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Enables glare effect on hover (default: true)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedCard } from "@/components/ui/animated-card"

export function Example() {
  return (
    <AnimatedCard className="p-6" tiltEffect={true} glareEffect={true} hoverScale={1.02}>
      <h3 className="text-lg font-medium">Card Title</h3>
      <p>Card content goes here</p>
    </AnimatedCard>
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "drawer":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">AnimatedDrawer</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    AnimatedDrawer provides a sliding panel that can appear from any edge of the screen. It's perfect
                    for navigation menus, filters, and detail panels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    <Button onClick={() => setDrawerOpen(true)}>Open Drawer</Button>
                    <AnimatedDrawer
                      open={drawerOpen}
                      onClose={() => setDrawerOpen(false)}
                      position="right"
                      size="400px"
                    >
                      <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
                        <p className="mb-4">This is an example of the AnimatedDrawer component.</p>
                        <Button onClick={() => setDrawerOpen(false)}>Close Drawer</Button>
                      </div>
                    </AnimatedDrawer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>open</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Controls whether the drawer is open</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>onClose</div>
                      <div className="text-muted-foreground">function</div>
                      <div className="text-muted-foreground">Callback when the drawer is closed</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>position</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">
                        "left" | "right" | "top" | "bottom" (default: "right")
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>size</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">Width or height of the drawer (default: "300px")</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>backdrop</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether to show a backdrop (default: true)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { useState } from "react"
import { AnimatedDrawer } from "@/components/ui/animated-drawer"
import { Button } from "@/components/ui/button"

export function Example() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Drawer
      </Button>
      
      <AnimatedDrawer
        open={open}
        onClose={() => setOpen(false)}
        position="right"
        size="400px"
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">Drawer Content</h2>
          <p>This is the drawer content.</p>
          <Button onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </AnimatedDrawer>
    </>
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "carousel":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">AnimatedCarousel</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    AnimatedCarousel provides a beautiful way to display a series of content with smooth animations and
                    transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] border rounded-md overflow-hidden">
                    <AnimatedCarousel autoPlay={true} interval={5000} animation="slide">
                      {[
                        <div key="slide1" className="h-full flex items-center justify-center bg-primary/10">
                          <h3 className="text-2xl font-bold">Slide 1</h3>
                        </div>,
                        <div key="slide2" className="h-full flex items-center justify-center bg-secondary/10">
                          <h3 className="text-2xl font-bold">Slide 2</h3>
                        </div>,
                        <div key="slide3" className="h-full flex items-center justify-center bg-muted">
                          <h3 className="text-2xl font-bold">Slide 3</h3>
                        </div>,
                      ]}
                    </AnimatedCarousel>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>children</div>
                      <div className="text-muted-foreground">ReactNode[]</div>
                      <div className="text-muted-foreground">Array of slides to display</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>autoPlay</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether to auto-advance slides (default: false)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>interval</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Time between slides in ms (default: 5000)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>animation</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">"slide" | "fade" | "zoom" | "flip" (default: "slide")</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>infinite</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether to loop slides (default: true)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { AnimatedCarousel } from "@/components/ui/animated-carousel"

export function Example() {
  return (
    <div className="h-[300px]">
      <AnimatedCarousel
        autoPlay={true}
        interval={5000}
        animation="slide"
        showArrows={true}
        showDots={true}
      >
        <div className="h-full flex items-center justify-center bg-primary/10">
          <h3 className="text-2xl font-bold">Slide 1</h3>
        </div>
        <div className="h-full flex items-center justify-center bg-secondary/10">
          <h3 className="text-2xl font-bold">Slide 2</h3>
        </div>
        <div className="h-full flex items-center justify-center bg-muted">
          <h3 className="text-2xl font-bold">Slide 3</h3>
        </div>
      </AnimatedCarousel>
    </div>
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "data-table":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">DataTable</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    DataTable provides a powerful way to display and interact with tabular data, including sorting,
                    filtering, pagination, and row actions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DataTable
                    columns={tableColumns}
                    data={tableData}
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
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>columns</div>
                      <div className="text-muted-foreground">ColumnDef[]</div>
                      <div className="text-muted-foreground">Column definitions for the table</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>data</div>
                      <div className="text-muted-foreground">any[]</div>
                      <div className="text-muted-foreground">Data to display in the table</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>searchColumn</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">Column to search by default</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>enableRowSelection</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether to allow row selection</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>rowActions</div>
                      <div className="text-muted-foreground">object[]</div>
                      <div className="text-muted-foreground">Actions to perform on rows</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { DataTable } from "@/components/ui/data-table"

// Define columns
const columns = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>\${row.original.price.toFixed(2)}</div>,
  },
  {
    accessorKey: "stock",
    header: "Stock",
  },
]

// Sample data
const data = [
  { id: 1, name: "Product A", price: 99.99, stock: 120 },
  { id: 2, name: "Product B", price: 149.99, stock: 75 },
  { id: 3, name: "Product C", price: 29.99, stock: 300 },
]

export function Example() {
  return (
    <DataTable
      columns={columns}
      data={data}
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
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "multi-step-form":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">MultiStepForm</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    MultiStepForm provides a way to break complex forms into manageable steps with smooth animations
                    between transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md p-6">
                    <MultiStepForm
                      onComplete={(data) => console.log("Form completed with data:", data)}
                      showStepIndicator={true}
                      animationVariant="slide"
                    >
                      <FormStep>
                        <h3 className="text-lg font-medium mb-4">Step 1: Personal Information</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="firstName">First Name</Label>
                              <Input id="firstName" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="lastName">Last Name</Label>
                              <Input id="lastName" />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" />
                          </div>
                        </div>
                      </FormStep>
                      <FormStep>
                        <h3 className="text-lg font-medium mb-4">Step 2: Account Details</h3>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="username">Username</Label>
                            <Input id="username" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" />
                          </div>
                        </div>
                      </FormStep>
                      <FormStep>
                        <h3 className="text-lg font-medium mb-4">Step 3: Review</h3>
                        <p>Please review your information and submit the form.</p>
                      </FormStep>
                    </MultiStepForm>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>children</div>
                      <div className="text-muted-foreground">ReactNode</div>
                      <div className="text-muted-foreground">FormStep components to render</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>onComplete</div>
                      <div className="text-muted-foreground">function</div>
                      <div className="text-muted-foreground">Callback when form is completed</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>initialData</div>
                      <div className="text-muted-foreground">object</div>
                      <div className="text-muted-foreground">Initial form data</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>showStepIndicator</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether to show step indicators</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>animationVariant</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">"slide" | "fade" | "zoom" (default: "slide")</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { MultiStepForm, FormStep, useMultiStepForm } from "@/components/ui/multi-step-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function PersonalInfoStep() {
  const { updateFormData, formData, setStepValidity } = useMultiStepForm()
  
  // Validate the step and update validity
  const validateStep = () => {
    const valid = Boolean(formData.name?.trim())
    setStepValidity(0, valid)
  }
  
  return (
    <FormStep>
      <h3 className="text-lg font-medium mb-4">Personal Information</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={formData.name || ""}
            onChange={(e) => {
              updateFormData({ name: e.target.value })
              setTimeout(validateStep, 0)
            }}
          />
        </div>
      </div>
    </FormStep>
  )
}

function AccountStep() {
  const { updateFormData, formData, setStepValidity } = useMultiStepForm()
  
  // Always valid for this example
  useState(() => {
    setStepValidity(1, true)
  })
  
  return (
    <FormStep>
      <h3 className="text-lg font-medium mb-4">Account Details</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
        </div>
      </div>
    </FormStep>
  )
}

export function Example() {
  return (
    <MultiStepForm
      onComplete={(data) => console.log("Form completed:", data)}
      showStepIndicator={true}
      animationVariant="slide"
    >
      <PersonalInfoStep />
      <AccountStep />
    </MultiStepForm>
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "form-builder":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">FormBuilder</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    FormBuilder provides a powerful way to create and manage forms with a drag-and-drop interface. It
                    supports various field types and validation options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md p-6">
                    <FormBuilder
                      initialSchema={{
                        id: "contact-form",
                        title: "Contact Form",
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
                            id: "message",
                            type: "textarea",
                            label: "Message",
                            name: "message",
                            required: true,
                          },
                        ],
                      }}
                      onSave={(schema) => console.log("Form saved:", schema)}
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>initialSchema</div>
                      <div className="text-muted-foreground">FormSchema</div>
                      <div className="text-muted-foreground">Initial form schema</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>onSave</div>
                      <div className="text-muted-foreground">function</div>
                      <div className="text-muted-foreground">Callback when form is saved</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>readOnly</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether the form is read-only</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { FormBuilder } from "@/components/ui/form-builder"

export function Example() {
  return (
    <FormBuilder
      initialSchema={{
        id: "contact-form",
        title: "Contact Form",
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
            id: "subject",
            type: "select",
            label: "Subject",
            name: "subject",
            options: [
              { label: "General Inquiry", value: "general" },
              { label: "Support", value: "support" },
              { label: "Feedback", value: "feedback" },
            ],
          },
          {
            id: "message",
            type: "textarea",
            label: "Message",
            name: "message",
            required: true,
          },
        ],
      }}
      onSave={(schema) => {
        console.log("Form saved:", schema)
        // Save to database or perform other actions
      }}
    />
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      case "scroll-reveal":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-6">ScrollReveal</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    ScrollReveal provides a way to animate elements as they enter the viewport during scrolling. It
                    supports various animation types and customization options.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8 py-4">
                    <ScrollReveal animation="fade" delay={0.1}>
                      <div className="p-6 bg-primary/10 rounded-md">
                        <h3 className="text-lg font-medium">Fade Animation</h3>
                        <p>This element fades in when it enters the viewport.</p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide" direction="up" delay={0.2}>
                      <div className="p-6 bg-secondary/10 rounded-md">
                        <h3 className="text-lg font-medium">Slide Up Animation</h3>
                        <p>This element slides up when it enters the viewport.</p>
                      </div>
                    </ScrollReveal>

                    <ScrollReveal animation="scale" delay={0.3}>
                      <div className="p-6 bg-muted rounded-md">
                        <h3 className="text-lg font-medium">Scale Animation</h3>
                        <p>This element scales in when it enters the viewport.</p>
                      </div>
                    </ScrollReveal>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Props</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div className="font-medium">Name</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>animation</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">"fade" | "slide" | "scale" | "flip" (default: "fade")</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>delay</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Delay before animation starts in seconds (default: 0)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>duration</div>
                      <div className="text-muted-foreground">number</div>
                      <div className="text-muted-foreground">Duration of animation in seconds (default: 0.5)</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4 border-b">
                      <div>direction</div>
                      <div className="text-muted-foreground">string</div>
                      <div className="text-muted-foreground">"up" | "down" | "left" | "right" (default: "up")</div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 p-4">
                      <div>once</div>
                      <div className="text-muted-foreground">boolean</div>
                      <div className="text-muted-foreground">Whether to animate only once (default: true)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                    <code>{`import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function Example() {
  return (
    <div className="space-y-8">
      <ScrollReveal animation="fade" delay={0.2}>
        <div className="p-6 bg-primary/10 rounded-md">
          <h3 className="text-lg font-medium">Fade Animation</h3>
          <p>This element fades in when it enters the viewport.</p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal animation="slide" direction="up" delay={0.4}>
        <div className="p-6 bg-secondary/10 rounded-md">
          <h3 className="text-lg font-medium">Slide Up Animation</h3>
          <p>This element slides up when it enters the viewport.</p>
        </div>
      </ScrollReveal>
      
      <ScrollReveal animation="scale" delay={0.6}>
        <div className="p-6 bg-muted rounded-md">
          <h3 className="text-lg font-medium">Scale Animation</h3>
          <p>This element scales in when it enters the viewport.</p>
        </div>
      </ScrollReveal>
    </div>
  )
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-4">Select a component from the sidebar</h2>
            <p className="text-muted-foreground">
              Choose a component from the sidebar to view its documentation and examples.
            </p>
          </div>
        )
    }
  }

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
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-64 shrink-0">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold mb-4">Components</h2>
              <div className="space-y-2">
                {componentCategories.map((category) => (
                  <div key={category.id} className="space-y-1">
                    <button
                      className="flex items-center justify-between w-full text-left font-medium text-sm hover:text-primary"
                      onClick={() => setActiveCategory(category.id === activeCategory ? "" : category.id)}
                    >
                      <span>{category.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeCategory === category.id ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeCategory === category.id && (
                      <div className="pl-4 space-y-1 pt-1">
                        {category.components.map((component) => (
                          <button
                            key={component.id}
                            className={`text-sm w-full text-left py-1 px-2 rounded-md ${
                              activeComponent === component.id
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                            onClick={() => setActiveComponent(component.id)}
                          >
                            {component.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1">{renderComponentExample()}</div>
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
