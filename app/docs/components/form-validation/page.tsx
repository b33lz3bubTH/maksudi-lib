"use client"

import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MultiStepForm, FormStep } from "@/components/ui/multi-step-form"
import { FormBuilder } from "@/components/ui/form-builder"
import { RichTextEditor } from "@/components/ui/rich-text-editor"

export default function FormValidationDocPage() {
  const [formData, setFormData] = useState({})
  const [richTextContent, setRichTextContent] = useState("<p>This is a rich text editor</p>")

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
          <h1 className="text-3xl font-bold mb-2">Form Validation</h1>
          <p className="text-muted-foreground mb-8">Comprehensive guide to form validation in Maksudi-Lib components</p>

          <Tabs defaultValue="overview" className="mb-10">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="multi-step-form">MultiStepForm</TabsTrigger>
              <TabsTrigger value="form-builder">FormBuilder</TabsTrigger>
              <TabsTrigger value="rich-text">RichTextEditor</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Form Validation Overview</CardTitle>
                  <CardDescription>
                    Maksudi-Lib provides comprehensive form validation capabilities across all form components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p>
                      Form validation is a critical aspect of any user interface. Maksudi-Lib provides several ways to
                      validate forms:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Built-in Validation</strong> - Basic validation like required fields, min/max values,
                        and pattern matching
                      </li>
                      <li>
                        <strong>Custom Validation Functions</strong> - Pass custom validation functions to validate
                        fields based on complex logic
                      </li>
                      <li>
                        <strong>Cross-Field Validation</strong> - Validate fields based on the values of other fields
                        (e.g., password confirmation)
                      </li>
                      <li>
                        <strong>Validation Timing</strong> - Control when validation occurs (on change, on blur, on
                        submit)
                      </li>
                    </ul>

                    <h3 className="text-xl font-medium mt-6">Validation Features</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Required Fields</strong> - Mark fields as required and provide custom error messages
                      </li>
                      <li>
                        <strong>Pattern Validation</strong> - Validate text input against regular expressions
                      </li>
                      <li>
                        <strong>Length Validation</strong> - Validate minimum and maximum length of text input
                      </li>
                      <li>
                        <strong>Range Validation</strong> - Validate minimum and maximum values for numeric input
                      </li>
                      <li>
                        <strong>Custom Validation</strong> - Provide custom validation functions for complex validation
                        logic
                      </li>
                      <li>
                        <strong>Field Matching</strong> - Validate that fields match (e.g., password confirmation)
                      </li>
                      <li>
                        <strong>Error Messages</strong> - Customize error messages for each validation rule
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="multi-step-form">
              <Card>
                <CardHeader>
                  <CardTitle>MultiStepForm Validation</CardTitle>
                  <CardDescription>Learn how to implement validation in multi-step forms.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p>
                      The MultiStepForm component supports validation at each step. You can validate each step
                      individually and prevent users from proceeding to the next step if the current step is invalid.
                    </p>

                    <h3 className="text-xl font-medium">Validation Methods</h3>
                    <p>There are two main ways to implement validation in MultiStepForm:</p>

                    <div className="space-y-4 mt-4">
                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">1. Using the validator prop</h4>
                        <p className="mb-2">
                          You can pass a validator function to each FormStep component to validate the step:
                        </p>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code>{`<FormStep
  validator={(formData) => {
    // Return true if valid, false if invalid
    return Boolean(formData.name?.trim());
    
    // Or return an object with validation result and message
    return {
      valid: Boolean(formData.name?.trim()),
      message: "Name is required"
    };
  }}
>
  {/* Step content */}
</FormStep>`}</code>
                        </pre>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">2. Using the validators prop on MultiStepForm</h4>
                        <p className="mb-2">
                          You can pass a validators object to the MultiStepForm component to validate all steps:
                        </p>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code>{`<MultiStepForm
  validators={{
    0: (formData) => Boolean(formData.name?.trim()),
    1: (formData) => Boolean(formData.email?.trim()),
    2: (formData) => {
      return {
        valid: formData.password === formData.confirmPassword,
        message: "Passwords do not match"
      };
    }
  }}
>
  {/* Steps */}
</MultiStepForm>`}</code>
                        </pre>
                      </div>

                      <div className="border rounded-md p-4">
                        <h4 className="font-medium mb-2">3. Using the setStepValidity function</h4>
                        <p className="mb-2">
                          You can use the setStepValidity function from the useMultiStepForm hook to manually set the
                          validity of a step:
                        </p>
                        <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                          <code>{`function MyStep() {
  const { formData, setStepValidity } = useMultiStepForm();
  
  useEffect(() => {
    const isValid = Boolean(formData.name?.trim());
    setStepValidity(0, isValid);
  }, [formData.name, setStepValidity]);
  
  return (
    <FormStep>
      {/* Step content */}
    </FormStep>
  );
}`}</code>
                        </pre>
                      </div>
                    </div>

                    <h3 className="text-xl font-medium mt-6">Example: Password Matching Validation</h3>
                    <div className="border rounded-md p-6">
                      <MultiStepForm
                        validators={{
                          0: (data) => Boolean(data.password?.trim()),
                          1: (data) => {
                            return {
                              valid: data.password === data.confirmPassword,
                              message: "Passwords do not match",
                            }
                          },
                        }}
                        onComplete={(data) => console.log("Form completed:", data)}
                      >
                        <FormStep>
                          <h3 className="text-lg font-medium mb-4">Step 1: Create Password</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="password">Password</Label>
                              <Input
                                id="password"
                                type="password"
                                value={formData.password || ""}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                              />
                            </div>
                          </div>
                        </FormStep>
                        <FormStep>
                          <h3 className="text-lg font-medium mb-4">Step 2: Confirm Password</h3>
                          <div className="space-y-4">
                            <div className="space-y-2">
                              <Label htmlFor="confirmPassword">Confirm Password</Label>
                              <Input
                                id="confirmPassword"
                                type="password"
                                value={formData.confirmPassword || ""}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                              />
                            </div>
                          </div>
                        </FormStep>
                      </MultiStepForm>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="form-builder">
              <Card>
                <CardHeader>
                  <CardTitle>FormBuilder Validation</CardTitle>
                  <CardDescription>Learn how to implement validation in the FormBuilder component.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p>
                      The FormBuilder component provides a comprehensive validation system that allows you to validate
                      forms in various ways.
                    </p>

                    <h3 className="text-xl font-medium">Validation Features</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Required Fields</strong> - Mark fields as required and provide custom error messages
                      </li>
                      <li>
                        <strong>Pattern Validation</strong> - Validate text input against regular expressions
                      </li>
                      <li>
                        <strong>Length Validation</strong> - Validate minimum and maximum length of text input
                      </li>
                      <li>
                        <strong>Range Validation</strong> - Validate minimum and maximum values for numeric input
                      </li>
                      <li>
                        <strong>Custom Validation</strong> - Provide custom validation functions for complex validation
                        logic
                      </li>
                      <li>
                        <strong>Field Matching</strong> - Validate that fields match (e.g., password confirmation)
                      </li>
                      <li>
                        <strong>Error Messages</strong> - Customize error messages for each validation rule
                      </li>
                    </ul>

                    <h3 className="text-xl font-medium mt-6">Example: Form with Validation</h3>
                    <div className="border rounded-md p-6">
                      <FormBuilder
                        initialSchema={{
                          id: "contact-form",
                          title: "Contact Form with Validation",
                          fields: [
                            {
                              id: "name",
                              type: "text",
                              label: "Name",
                              name: "name",
                              required: true,
                              validation: {
                                required: true,
                                minLength: 2,
                                customMessage: "Please enter your name (at least 2 characters)",
                              },
                            },
                            {
                              id: "email",
                              type: "email",
                              label: "Email",
                              name: "email",
                              required: true,
                              validation: {
                                required: true,
                                pattern: "^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$",
                                customMessage: "Please enter a valid email address",
                              },
                            },
                            {
                              id: "password",
                              type: "password",
                              label: "Password",
                              name: "password",
                              required: true,
                              validation: {
                                required: true,
                                minLength: 8,
                                customMessage: "Password must be at least 8 characters",
                              },
                            },
                            {
                              id: "confirmPassword",
                              type: "password",
                              label: "Confirm Password",
                              name: "confirmPassword",
                              required: true,
                              validation: {
                                required: true,
                                matchField: "password",
                                customMessage: "Passwords do not match",
                              },
                            },
                          ],
                        }}
                        onSubmit={(data) => console.log("Form submitted:", data)}
                      />
                    </div>

                    <h3 className="text-xl font-medium mt-6">Custom Validation Functions</h3>
                    <p>You can provide custom validation functions to validate fields based on complex logic:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                      <code>{`{
  id: "username",
  type: "text",
  label: "Username",
  name: "username",
  required: true,
  validation: {
    required: true,
    validate: (value, formValues) => {
      // Check if username is already taken
      return !["admin", "user", "moderator"].includes(value) || "Username is already taken";
    }
  }
}`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rich-text">
              <Card>
                <CardHeader>
                  <CardTitle>RichTextEditor Component</CardTitle>
                  <CardDescription>Learn how to use the RichTextEditor component in forms.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <p>
                      The RichTextEditor component provides a rich text editing experience with various formatting
                      options. It can be used independently or as part of a form.
                    </p>

                    <h3 className="text-xl font-medium">Features</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        <strong>Text Formatting</strong> - Bold, italic, underline, headings, etc.
                      </li>
                      <li>
                        <strong>Lists</strong> - Bullet lists and ordered lists
                      </li>
                      <li>
                        <strong>Links</strong> - Add and edit links
                      </li>
                      <li>
                        <strong>Images</strong> - Add images by URL
                      </li>
                      <li>
                        <strong>Text Alignment</strong> - Left, center, and right alignment
                      </li>
                      <li>
                        <strong>Code Blocks</strong> - Add code blocks with syntax highlighting
                      </li>
                    </ul>

                    <h3 className="text-xl font-medium mt-6">Example: Standalone RichTextEditor</h3>
                    <div className="border rounded-md p-6">
                      <RichTextEditor
                        label="Rich Text Editor"
                        value={richTextContent}
                        onChange={setRichTextContent}
                        placeholder="Start typing..."
                      />
                    </div>

                    <h3 className="text-xl font-medium mt-6">Using with FormBuilder</h3>
                    <p>The RichTextEditor component can be used as a field type in the FormBuilder component:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto mt-2">
                      <code>{`{
  id: "description",
  type: "richtext",
  label: "Description",
  name: "description",
  required: true,
  validation: {
    required: true,
    customMessage: "Please enter a description"
  }
}`}</code>
                    </pre>

                    <h3 className="text-xl font-medium mt-6">Props</h3>
                    <div className="border rounded-md">
                      <div className="grid grid-cols-3 gap-4 p-4 border-b bg-muted/50">
                        <div className="font-medium">Prop</div>
                        <div className="font-medium">Type</div>
                        <div className="font-medium">Description</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 border-b">
                        <div>value</div>
                        <div className="text-muted-foreground">string</div>
                        <div className="text-muted-foreground">HTML content of the editor</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 border-b">
                        <div>onChange</div>
                        <div className="text-muted-foreground">function</div>
                        <div className="text-muted-foreground">Callback when content changes</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 border-b">
                        <div>placeholder</div>
                        <div className="text-muted-foreground">string</div>
                        <div className="text-muted-foreground">Placeholder text</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4 border-b">
                        <div>label</div>
                        <div className="text-muted-foreground">string</div>
                        <div className="text-muted-foreground">Label for the editor</div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <div>error</div>
                        <div className="text-muted-foreground">string</div>
                        <div className="text-muted-foreground">Error message to display</div>
                      </div>
                    </div>
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
