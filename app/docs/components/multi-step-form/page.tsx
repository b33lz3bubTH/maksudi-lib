"use client"

import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MultiStepForm, FormStep } from "@/components/ui/multi-step-form"

export default function MultiStepFormDocPage() {
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
              <Link href="/docs">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Docs
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">MultiStepForm</h1>
          <p className="text-muted-foreground mb-8">
            A component for creating multi-step forms with smooth animations and state management.
          </p>

          <Tabs defaultValue="overview" className="mb-10">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                  <CardDescription>
                    MultiStepForm is a component that allows you to break complex forms into manageable steps with
                    smooth animations between transitions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p>
                      The MultiStepForm component is designed to simplify the creation of multi-step forms by providing:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Step-by-step navigation with smooth animations</li>
                      <li>Centralized form state management</li>
                      <li>Step validation</li>
                      <li>Visual indicators for form progress</li>
                      <li>Customizable navigation controls</li>
                    </ul>

                    <div className="border rounded-md p-6 mt-6">
                      <h3 className="text-lg font-medium mb-4">Live Example</h3>
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
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card>
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>
                    Detailed API documentation for the MultiStepForm component and related hooks.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4">MultiStepForm Props</h3>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                          <div className="font-medium">Prop</div>
                          <div className="font-medium">Type</div>
                          <div className="font-medium">Default</div>
                          <div className="font-medium">Description</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>children</div>
                          <div className="text-muted-foreground">ReactNode</div>
                          <div className="text-muted-foreground">-</div>
                          <div className="text-muted-foreground">FormStep components to render</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>onComplete</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">-</div>
                          <div className="text-muted-foreground">Callback when form is completed</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>initialData</div>
                          <div className="text-muted-foreground">object</div>
                          <div className="text-muted-foreground">{"{}"}</div>
                          <div className="text-muted-foreground">Initial form data</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>showStepIndicator</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">true</div>
                          <div className="text-muted-foreground">Whether to show step indicators</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>showNavigation</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">true</div>
                          <div className="text-muted-foreground">Whether to show navigation buttons</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>animationVariant</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">"slide"</div>
                          <div className="text-muted-foreground">"slide" | "fade" | "zoom"</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>navigationPosition</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">"bottom"</div>
                          <div className="text-muted-foreground">"bottom" | "between" | "top"</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">FormStep Props</h3>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-4 gap-4 p-4 border-b bg-muted/50">
                          <div className="font-medium">Prop</div>
                          <div className="font-medium">Type</div>
                          <div className="font-medium">Default</div>
                          <div className="font-medium">Description</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>children</div>
                          <div className="text-muted-foreground">ReactNode</div>
                          <div className="text-muted-foreground">-</div>
                          <div className="text-muted-foreground">Content of the step</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4 border-b">
                          <div>onValidityChange</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">-</div>
                          <div className="text-muted-foreground">Callback when validity changes</div>
                        </div>
                        <div className="grid grid-cols-4 gap-4 p-4">
                          <div>className</div>
                          <div className="text-muted-foreground">string</div>
                          <div className="text-muted-foreground">-</div>
                          <div className="text-muted-foreground">Additional CSS classes</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">useMultiStepForm Hook</h3>
                      <p className="mb-4">
                        The useMultiStepForm hook provides access to the form state and navigation functions.
                      </p>
                      <div className="border rounded-md">
                        <div className="grid grid-cols-3 gap-4 p-4 border-b bg-muted/50">
                          <div className="font-medium">Property</div>
                          <div className="font-medium">Type</div>
                          <div className="font-medium">Description</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>currentStep</div>
                          <div className="text-muted-foreground">number</div>
                          <div className="text-muted-foreground">Current step index</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>totalSteps</div>
                          <div className="text-muted-foreground">number</div>
                          <div className="text-muted-foreground">Total number of steps</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>goToStep</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">Navigate to a specific step</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>nextStep</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">Navigate to the next step</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>prevStep</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">Navigate to the previous step</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>isFirstStep</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">Whether the current step is the first step</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>isLastStep</div>
                          <div className="text-muted-foreground">boolean</div>
                          <div className="text-muted-foreground">Whether the current step is the last step</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>formData</div>
                          <div className="text-muted-foreground">object</div>
                          <div className="text-muted-foreground">Current form data</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>updateFormData</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">Update form data</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4 border-b">
                          <div>isStepValid</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">Check if a step is valid</div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 p-4">
                          <div>setStepValidity</div>
                          <div className="text-muted-foreground">function</div>
                          <div className="text-muted-foreground">Set the validity of a step</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="examples">
              <Card>
                <CardHeader>
                  <CardTitle>Examples</CardTitle>
                  <CardDescription>Various examples of how to use the MultiStepForm component.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-medium mb-4">Basic Example</h3>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code>{`import { MultiStepForm, FormStep } from "@/components/ui/multi-step-form"

export function BasicExample() {
  return (
    <MultiStepForm onComplete={(data) => console.log("Form completed:", data)}>
      <FormStep>
        <h3>Step 1</h3>
        <p>This is the first step.</p>
      </FormStep>
      <FormStep>
        <h3>Step 2</h3>
        <p>This is the second step.</p>
      </FormStep>
      <FormStep>
        <h3>Step 3</h3>
        <p>This is the final step.</p>
      </FormStep>
    </MultiStepForm>
  )
}`}</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">Form with Validation</h3>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code>{`import { useState } from "react"
import { MultiStepForm, FormStep, useMultiStepForm } from "@/components/ui/multi-step-form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function PersonalInfoStep() {
  const { updateFormData, formData, setStepValidity } = useMultiStepForm()
  const [isValid, setIsValid] = useState(false)

  const validateStep = () => {
    const valid = Boolean(formData.name?.trim())
    setIsValid(valid)
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
          {!isValid && (
            <p className="text-sm text-red-500">Name is required</p>
          )}
        </div>
      </div>
    </FormStep>
  )
}

export function ValidationExample() {
  return (
    <MultiStepForm onComplete={(data) => console.log("Form completed:", data)}>
      <PersonalInfoStep />
      <FormStep>
        <h3 className="text-lg font-medium mb-4">Review</h3>
        <p>Please review your information and submit the form.</p>
      </FormStep>
    </MultiStepForm>
  )
}`}</code>
                      </pre>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium mb-4">Custom Animation</h3>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code>{`import { MultiStepForm, FormStep } from "@/components/ui/multi-step-form"

export function AnimationExample() {
  return (
    <MultiStepForm 
      onComplete={(data) => console.log("Form completed:", data)}
      animationVariant="zoom"
      showStepIndicator={true}
      navigationPosition="between"
    >
      <FormStep>
        <h3>Step 1</h3>
        <p>This step uses zoom animation.</p>
      </FormStep>
      <FormStep>
        <h3>Step 2</h3>
        <p>Navigation buttons are between steps.</p>
      </FormStep>
      <FormStep>
        <h3>Step 3</h3>
        <p>This is the final step.</p>
      </FormStep>
    </MultiStepForm>
  )
}`}</code>
                      </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="usage">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Guide</CardTitle>
                  <CardDescription>
                    Learn how to use the MultiStepForm component effectively in your projects.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <h3 className="text-xl font-medium">Getting Started</h3>
                    <p>To use the MultiStepForm component, you need to import it along with the FormStep component:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`import { MultiStepForm, FormStep, useMultiStepForm } from "@/components/ui/multi-step-form"`}</code>
                    </pre>

                    <h3 className="text-xl font-medium mt-8">Basic Structure</h3>
                    <p>
                      The MultiStepForm component acts as a container for your form steps. Each step is defined using
                      the FormStep component:
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`<MultiStepForm onComplete={handleComplete}>
  <FormStep>
    {/* Step 1 content */}
  </FormStep>
  <FormStep>
    {/* Step 2 content */}
  </FormStep>
  <FormStep>
    {/* Step 3 content */}
  </FormStep>
</MultiStepForm>`}</code>
                    </pre>

                    <h3 className="text-xl font-medium mt-8">Form State Management</h3>
                    <p>
                      The MultiStepForm component manages the form state internally. You can access and update the form
                      state using the useMultiStepForm hook:
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`function MyFormStep() {
  const { formData, updateFormData } = useMultiStepForm()
  
  return (
    <FormStep>
      <input
        value={formData.name || ""}
        onChange={(e) => updateFormData({ name: e.target.value })}
      />
    </FormStep>
  )
}`}</code>
                    </pre>

                    <h3 className="text-xl font-medium mt-8">Step Validation</h3>
                    <p>
                      You can validate each step by using the setStepValidity function from the useMultiStepForm hook:
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`function MyFormStep() {
  const { formData, updateFormData, setStepValidity } = useMultiStepForm()
  
  const validateStep = () => {
    const isValid = Boolean(formData.name?.trim())
    setStepValidity(0, isValid) // 0 is the step index
  }
  
  return (
    <FormStep>
      <input
        value={formData.name || ""}
        onChange={(e) => {
          updateFormData({ name: e.target.value })
          validateStep()
        }}
      />
    </FormStep>
  )
}`}</code>
                    </pre>

                    <h3 className="text-xl font-medium mt-8">Navigation</h3>
                    <p>
                      The MultiStepForm component provides navigation buttons by default. You can also programmatically
                      navigate between steps using the navigation functions from the useMultiStepForm hook:
                    </p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code>{`function MyFormStep() {
  const { nextStep, prevStep, goToStep } = useMultiStepForm()
  
  return (
    <FormStep>
      <button onClick={prevStep}>Previous</button>
      <button onClick={nextStep}>Next</button>
      <button onClick={() => goToStep(2)}>Go to Step 3</button>
    </FormStep>
  )
}`}</code>
                    </pre>

                    <h3 className="text-xl font-medium mt-8">Customization</h3>
                    <p>The MultiStepForm component provides several props for customization:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>showStepIndicator</strong> - Whether to show step indicators (default: true)
                      </li>
                      <li>
                        <strong>showNavigation</strong> - Whether to show navigation buttons (default: true)
                      </li>
                      <li>
                        <strong>animationVariant</strong> - Animation type: "slide", "fade", or "zoom" (default:
                        "slide")
                      </li>
                      <li>
                        <strong>navigationPosition</strong> - Position of navigation buttons: "bottom", "between", or
                        "top" (default: "bottom")
                      </li>
                    </ul>

                    <h3 className="text-xl font-medium mt-8">Best Practices</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Keep each step focused on a specific part of the form to avoid overwhelming users.</li>
                      <li>Validate each step before allowing users to proceed to the next step.</li>
                      <li>Provide clear instructions and feedback at each step.</li>
                      <li>
                        Use the onComplete callback to handle form submission when the user completes the final step.
                      </li>
                      <li>Consider using the initialData prop to pre-fill the form with existing data.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
