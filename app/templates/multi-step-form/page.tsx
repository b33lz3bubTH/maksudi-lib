"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Package } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AnimatedCheckbox } from "@/components/ui/animated-checkbox"
import { AnimatedSwitch } from "@/components/ui/animated-switch"
import { MultiStepForm, FormStep, useMultiStepForm } from "@/components/ui/multi-step-form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useEffect } from "react"

export default function MultiStepFormTemplate() {
  const [formData, setFormData] = useState({})

  const handleFormComplete = (data: Record<string, any>) => {
    console.log("Form completed with data:", data)
    setFormData(data)
  }

  return (
    <div className="min-h-screen bg-muted/30">
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
              <Link href="/templates">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Templates
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="container py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Multi-Step Form Example</h1>

          {Object.keys(formData).length > 0 ? (
            <Card>
              <CardHeader>
                <CardTitle>Form Submitted Successfully!</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>Thank you for submitting the form. Here's a summary of your information:</p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto">{JSON.stringify(formData, null, 2)}</pre>
                  <Button onClick={() => setFormData({})}>Start Over</Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
              </CardHeader>
              <CardContent>
                <MultiStepForm onComplete={handleFormComplete} showStepIndicator={true} animationVariant="slide">
                  <PersonalInfoStep />
                  <AccountDetailsStep />
                  <PreferencesStep />
                  <ReviewStep />
                </MultiStepForm>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

function PersonalInfoStep() {
  const { updateFormData, formData, setStepValidity } = useMultiStepForm()
  const [isValid, setIsValid] = useState(false)

  const validateStep = () => {
    const requiredFields = ["firstName", "lastName", "email"]
    const valid = requiredFields.every((field) => formData[field]?.trim())
    setIsValid(valid)
    setStepValidity(0, valid)
  }

  return (
    <FormStep>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName || ""}
              onChange={(e) => {
                updateFormData({ firstName: e.target.value })
                setTimeout(validateStep, 0)
              }}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="lastName"
              value={formData.lastName || ""}
              onChange={(e) => {
                updateFormData({ lastName: e.target.value })
                setTimeout(validateStep, 0)
              }}
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email || ""}
            onChange={(e) => {
              updateFormData({ email: e.target.value })
              setTimeout(validateStep, 0)
            }}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone || ""}
            onChange={(e) => updateFormData({ phone: e.target.value })}
          />
        </div>
      </div>
    </FormStep>
  )
}

function AccountDetailsStep() {
  const { updateFormData, formData, setStepValidity } = useMultiStepForm()
  const [isValid, setIsValid] = useState(false)

  const validateStep = () => {
    const valid = formData.username?.trim() && formData.password?.trim() && formData.password?.length >= 8
    setIsValid(valid)
    setStepValidity(1, valid)
  }

  return (
    <FormStep>
      <h2 className="text-xl font-semibold mb-4">Account Details</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">
            Username <span className="text-red-500">*</span>
          </Label>
          <Input
            id="username"
            value={formData.username || ""}
            onChange={(e) => {
              updateFormData({ username: e.target.value })
              setTimeout(validateStep, 0)
            }}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">
            Password <span className="text-red-500">*</span>
          </Label>
          <Input
            id="password"
            type="password"
            value={formData.password || ""}
            onChange={(e) => {
              updateFormData({ password: e.target.value })
              setTimeout(validateStep, 0)
            }}
            required
          />
          <p className="text-xs text-muted-foreground">Password must be at least 8 characters long</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="accountType">Account Type</Label>
          <Select
            value={formData.accountType || "personal"}
            onValueChange={(value) => updateFormData({ accountType: value })}
          >
            <SelectTrigger id="accountType">
              <SelectValue placeholder="Select account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="personal">Personal</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="education">Education</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </FormStep>
  )
}

function PreferencesStep() {
  const { updateFormData, formData, setStepValidity } = useMultiStepForm()

  // This step is always valid
  useEffect(() => {
    updateFormData({
      receiveEmails: formData.receiveEmails ?? true,
      darkMode: formData.darkMode ?? false,
    })
    // Set this step as always valid
    setStepValidity(2, true)
  }, []) // Empty dependency array ensures this only runs once

  return (
    <FormStep>
      <h2 className="text-xl font-semibold mb-4">Preferences</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <AnimatedCheckbox
            id="receiveEmails"
            checked={formData.receiveEmails ?? true}
            onChange={(e) => updateFormData({ receiveEmails: e.target.checked })}
          />
          <Label htmlFor="receiveEmails">Receive email notifications</Label>
        </div>
        <div className="flex items-center space-x-2">
          <AnimatedSwitch
            id="darkMode"
            checked={formData.darkMode ?? false}
            onChange={(e) => updateFormData({ darkMode: e.target.checked })}
          />
          <Label htmlFor="darkMode">Enable dark mode</Label>
        </div>
        <div className="space-y-2">
          <Label htmlFor="bio">Bio</Label>
          <Textarea
            id="bio"
            value={formData.bio || ""}
            onChange={(e) => updateFormData({ bio: e.target.value })}
            placeholder="Tell us about yourself"
            className="min-h-[100px]"
          />
        </div>
      </div>
    </FormStep>
  )
}

function ReviewStep() {
  const { formData } = useMultiStepForm()

  return (
    <FormStep>
      <h2 className="text-xl font-semibold mb-4">Review Your Information</h2>
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-medium">Personal Information</h3>
          <div className="bg-muted p-4 rounded-md">
            <p>
              <strong>Name:</strong> {formData.firstName} {formData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone || "Not provided"}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Account Details</h3>
          <div className="bg-muted p-4 rounded-md">
            <p>
              <strong>Username:</strong> {formData.username}
            </p>
            <p>
              <strong>Password:</strong> ••••••••
            </p>
            <p>
              <strong>Account Type:</strong> {formData.accountType || "Personal"}
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="font-medium">Preferences</h3>
          <div className="bg-muted p-4 rounded-md">
            <p>
              <strong>Receive Emails:</strong> {formData.receiveEmails ? "Yes" : "No"}
            </p>
            <p>
              <strong>Dark Mode:</strong> {formData.darkMode ? "Enabled" : "Disabled"}
            </p>
            <p>
              <strong>Bio:</strong> {formData.bio || "Not provided"}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          Please review your information above. Click "Complete" to submit your registration.
        </p>
      </div>
    </FormStep>
  )
}
