"use client"

import { useState, useRef, createContext, useContext, type ReactNode, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, ChevronLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// Context for the multi-step form
interface MultiStepFormContextValue {
  currentStep: number
  totalSteps: number
  goToStep: (step: number) => void
  nextStep: () => void
  prevStep: () => void
  isFirstStep: boolean
  isLastStep: boolean
  formData: Record<string, any>
  updateFormData: (data: Record<string, any>) => void
  isStepValid: (step: number) => boolean
  setStepValidity: (step: number, isValid: boolean) => void
}

const MultiStepFormContext = createContext<MultiStepFormContextValue | undefined>(undefined)

export function useMultiStepForm() {
  const context = useContext(MultiStepFormContext)
  if (!context) {
    throw new Error("useMultiStepForm must be used within a MultiStepFormProvider")
  }
  return context
}

interface MultiStepFormProps {
  children: ReactNode
  onComplete?: (data: Record<string, any>) => void
  initialData?: Record<string, any>
  className?: string
  showStepIndicator?: boolean
  showNavigation?: boolean
  animationVariant?: "slide" | "fade" | "zoom"
  navigationPosition?: "bottom" | "between" | "top"
  onStepChange?: (prevStep: number, nextStep: number) => void
  validators?: Record<number, (data: Record<string, any>) => boolean | { valid: boolean; message?: string }>
}

export function MultiStepForm({
  children,
  onComplete,
  initialData = {},
  className,
  showStepIndicator = true,
  showNavigation = true,
  animationVariant = "slide",
  navigationPosition = "bottom",
  onStepChange,
  validators,
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Record<string, any>>(initialData)
  const [stepValidity, setStepValidity] = useState<Record<number, boolean>>({})
  const stepsRef = useRef(Array.isArray(children) ? children : [children])
  const totalSteps = stepsRef.current.length

  const goToStep = (step: number) => {
    if (step >= 0 && step < totalSteps) {
      const prevStep = currentStep
      setCurrentStep(step)
      onStepChange?.(prevStep, step)
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      const prevStep = currentStep
      setCurrentStep((prev) => prev + 1)
      onStepChange?.(prevStep, prevStep + 1)
    } else if (currentStep === totalSteps - 1) {
      onComplete?.(formData)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      const prevStep = currentStep
      setCurrentStep((prev) => prev - 1)
      onStepChange?.(prevStep, prevStep - 1)
    }
  }

  const updateFormData = (data: Record<string, any>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const isStepValid = (step: number) => {
    // If there's a validator for this step, use it
    if (validators && validators[step]) {
      const result = validators[step](formData)
      if (typeof result === "boolean") {
        return result
      } else {
        return result.valid
      }
    }
    // Otherwise use the stored validity state
    return stepValidity[step] ?? false
  }

  // Memoize this function to prevent it from changing on every render
  const setStepValidityHandler = useCallback((step: number, isValid: boolean) => {
    setStepValidity((prev) => {
      // Only update if the value is actually changing
      if (prev[step] === isValid) return prev
      return { ...prev, [step]: isValid }
    })
  }, [])

  // Animation variants
  const getVariants = () => {
    switch (animationVariant) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
          exit: { opacity: 0 },
        }
      case "zoom":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
        }
      case "slide":
      default:
        return {
          hidden: { x: "100%", opacity: 0 },
          visible: { x: 0, opacity: 1 },
          exit: { x: "-100%", opacity: 0 },
        }
    }
  }

  const contextValue: MultiStepFormContextValue = {
    currentStep,
    totalSteps,
    goToStep,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === totalSteps - 1,
    formData,
    updateFormData,
    isStepValid,
    setStepValidity: setStepValidityHandler,
  }

  const renderNavigation = () => (
    <div className="flex justify-between mt-6">
      <Button
        variant="outline"
        onClick={prevStep}
        disabled={currentStep === 0}
        className={cn("flex items-center gap-1", currentStep === 0 && "opacity-50 cursor-not-allowed")}
      >
        <ChevronLeft className="h-4 w-4" />
        Previous
      </Button>
      <Button
        onClick={nextStep}
        disabled={!isStepValid(currentStep)}
        className={cn("flex items-center gap-1", !isStepValid(currentStep) && "opacity-50 cursor-not-allowed")}
      >
        {currentStep === totalSteps - 1 ? "Complete" : "Next"}
        {currentStep === totalSteps - 1 ? <Check className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
    </div>
  )

  return (
    <MultiStepFormContext.Provider value={contextValue}>
      <div className={cn("w-full", className)}>
        {/* Step Indicator */}
        {showStepIndicator && (
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors",
                      index < currentStep
                        ? "bg-primary border-primary text-primary-foreground"
                        : index === currentStep
                          ? "border-primary text-primary"
                          : "border-muted-foreground text-muted-foreground",
                    )}
                  >
                    {index < currentStep ? <Check className="h-5 w-5" /> : index + 1}
                  </div>
                  {index < totalSteps - 1 && (
                    <div
                      className={cn(
                        "h-1 w-full min-w-[3rem] transition-colors",
                        index < currentStep ? "bg-primary" : "bg-muted",
                      )}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Navigation - Top Position */}
        {showNavigation && navigationPosition === "top" && renderNavigation()}

        {/* Form Steps */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={getVariants()}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {stepsRef.current[currentStep]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation - Between Position */}
        {showNavigation && navigationPosition === "between" && renderNavigation()}

        {/* Step Content */}
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Step {currentStep + 1} of {totalSteps}
        </div>

        {/* Navigation - Bottom Position */}
        {showNavigation && navigationPosition === "bottom" && renderNavigation()}
      </div>
    </MultiStepFormContext.Provider>
  )
}

interface FormStepProps {
  children: ReactNode
  onValidityChange?: (isValid: boolean) => void
  className?: string
  validator?: (data: Record<string, any>) => boolean | { valid: boolean; message?: string }
}

export function FormStep({ children, onValidityChange, className, validator }: FormStepProps) {
  const { currentStep, formData, setStepValidity } = useMultiStepForm()
  const [isValid, setIsValid] = useState(true)
  const [validationMessage, setValidationMessage] = useState<string | undefined>(undefined)

  // Store the step number in a ref to avoid it being a dependency
  const stepRef = useRef(currentStep)

  // Update the ref when currentStep changes
  useEffect(() => {
    stepRef.current = currentStep
  }, [currentStep])

  // Store the previous validation result to avoid unnecessary updates
  const prevValidRef = useRef<boolean>(true)

  // Run validation when formData changes or validator changes
  useEffect(() => {
    // Skip validation if this isn't the current step
    if (stepRef.current !== currentStep) return

    let newIsValid = true
    let newMessage: string | undefined = undefined

    if (validator) {
      const result = validator(formData)
      if (typeof result === "boolean") {
        newIsValid = result
      } else {
        newIsValid = result.valid
        newMessage = result.message
      }
    }

    // Only update state if validation result has changed
    if (prevValidRef.current !== newIsValid) {
      setIsValid(newIsValid)
      setValidationMessage(newMessage)
      setStepValidity(stepRef.current, newIsValid)
      onValidityChange?.(newIsValid)
      prevValidRef.current = newIsValid
    }
  }, [validator, formData, currentStep, setStepValidity, onValidityChange])

  // Set initial validity on mount
  useEffect(() => {
    // Default to valid if no validation is provided
    if (!validator) {
      setStepValidity(stepRef.current, true)
      onValidityChange?.(true)
    }
  }, [])

  return (
    <div className={cn("space-y-4", className)}>
      {children}
      {!isValid && validationMessage && <div className="text-sm text-red-500 mt-2">{validationMessage}</div>}
    </div>
  )
}
