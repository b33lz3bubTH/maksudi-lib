"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PlusCircle, Trash2, Settings, MoveVertical, Save } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnimatedCheckbox } from "@/components/ui/animated-checkbox"
import { AnimatedSwitch } from "@/components/ui/animated-switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { RichTextEditor } from "@/components/ui/rich-text-editor"

// Field types
export type FieldType =
  | "text"
  | "number"
  | "email"
  | "password"
  | "textarea"
  | "select"
  | "checkbox"
  | "switch"
  | "radio"
  | "date"
  | "richtext"

export interface FieldOption {
  label: string
  value: string
}

export interface FieldValidation {
  required?: boolean
  pattern?: string
  min?: number
  max?: number
  minLength?: number
  maxLength?: number
  validate?: (value: any, formValues: Record<string, any>) => boolean | string
  matchField?: string // For password confirmation
  customMessage?: string
}

export interface FormField {
  id: string
  type: FieldType
  label: string
  name: string
  placeholder?: string
  required?: boolean
  options?: FieldOption[]
  defaultValue?: any
  validation?: FieldValidation
  className?: string
  description?: string
  disabled?: boolean
  readOnly?: boolean
}

export interface FormSchema {
  id: string
  title: string
  fields: FormField[]
}

interface FormBuilderProps {
  initialSchema?: FormSchema
  onSave?: (schema: FormSchema) => void
  onSubmit?: (data: Record<string, any>) => void
  className?: string
  readOnly?: boolean
  validateOnChange?: boolean
  validateOnBlur?: boolean
}

export function FormBuilder({
  initialSchema,
  onSave,
  onSubmit,
  className,
  readOnly = false,
  validateOnChange = true,
  validateOnBlur = true,
}: FormBuilderProps) {
  const [schema, setSchema] = useState<FormSchema>(
    initialSchema || {
      id: crypto.randomUUID(),
      title: "New Form",
      fields: [],
    },
  )
  const [activeTab, setActiveTab] = useState<"preview" | "edit">("edit")
  const [editingField, setEditingField] = useState<FormField | null>(null)
  const [formData, setFormData] = useState<Record<string, any>>({})
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [draggedField, setDraggedField] = useState<number | null>(null)

  // Initialize form data with default values
  useEffect(() => {
    const initialData: Record<string, any> = {}
    schema.fields.forEach((field) => {
      if (field.defaultValue !== undefined) {
        initialData[field.name] = field.defaultValue
      }
    })
    setFormData(initialData)
  }, [schema.fields])

  const addField = (type: FieldType) => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      type,
      label: `New ${type} field`,
      name: `field_${schema.fields.length + 1}`,
      required: false,
    }

    if (type === "select" || type === "radio") {
      newField.options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
      ]
    }

    setSchema({
      ...schema,
      fields: [...schema.fields, newField],
    })
    setEditingField(newField)
  }

  const updateField = (updatedField: FormField) => {
    setSchema({
      ...schema,
      fields: schema.fields.map((field) => (field.id === updatedField.id ? updatedField : field)),
    })
    setEditingField(null)
  }

  const removeField = (id: string) => {
    setSchema({
      ...schema,
      fields: schema.fields.filter((field) => field.id !== id),
    })
    if (editingField?.id === id) {
      setEditingField(null)
    }
  }

  const handleDragStart = (index: number) => {
    setDraggedField(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedField === null || draggedField === index) return

    const newFields = [...schema.fields]
    const draggedItem = newFields[draggedField]
    newFields.splice(draggedField, 1)
    newFields.splice(index, 0, draggedItem)

    setSchema({
      ...schema,
      fields: newFields,
    })
    setDraggedField(index)
  }

  const handleDragEnd = () => {
    setDraggedField(null)
  }

  const validateField = (field: FormField, value: any): string | null => {
    if (!field.validation) return null

    const { validation } = field

    // Required validation
    if (validation.required && (value === undefined || value === null || value === "")) {
      return validation.customMessage || `${field.label} is required`
    }

    // Skip other validations if value is empty and not required
    if (value === undefined || value === null || value === "") {
      return null
    }

    // Pattern validation
    if (validation.pattern && typeof value === "string") {
      const regex = new RegExp(validation.pattern)
      if (!regex.test(value)) {
        return validation.customMessage || `${field.label} has an invalid format`
      }
    }

    // Min/max validation for numbers
    if (typeof value === "number") {
      if (validation.min !== undefined && value < validation.min) {
        return validation.customMessage || `${field.label} must be at least ${validation.min}`
      }
      if (validation.max !== undefined && value > validation.max) {
        return validation.customMessage || `${field.label} must be at most ${validation.max}`
      }
    }

    // Min/max length validation for strings
    if (typeof value === "string") {
      if (validation.minLength !== undefined && value.length < validation.minLength) {
        return validation.customMessage || `${field.label} must be at least ${validation.minLength} characters`
      }
      if (validation.maxLength !== undefined && value.length > validation.maxLength) {
        return validation.customMessage || `${field.label} must be at most ${validation.maxLength} characters`
      }
    }

    // Match field validation (e.g., password confirmation)
    if (validation.matchField && formData[validation.matchField] !== value) {
      return validation.customMessage || `${field.label} does not match ${validation.matchField}`
    }

    // Custom validation function
    if (validation.validate) {
      const result = validation.validate(value, formData)
      if (typeof result === "string") {
        return result
      }
      if (result === false) {
        return validation.customMessage || `${field.label} is invalid`
      }
    }

    return null
  }

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {}
    let isValid = true

    schema.fields.forEach((field) => {
      const value = formData[field.name]
      const error = validateField(field, value)

      if (error) {
        errors[field.name] = error
        isValid = false
      }
    })

    setFormErrors(errors)
    return isValid
  }

  const handleFormDataChange = (name: string, value: any, field: FormField) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (validateOnChange) {
      const error = validateField(field, value)
      setFormErrors((prev) => ({
        ...prev,
        [name]: error || "",
      }))
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit?.(formData)
    }
  }

  const handleBlur = (field: FormField) => {
    if (validateOnBlur) {
      const value = formData[field.name]
      const error = validateField(field, value)
      setFormErrors((prev) => ({
        ...prev,
        [field.name]: error || "",
      }))
    }
  }

  const renderFieldPreview = (field: FormField) => {
    const error = formErrors[field.name]

    switch (field.type) {
      case "text":
      case "email":
      case "password":
      case "number":
        return (
          <div className={cn("space-y-2", field.className)}>
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            <Input
              id={field.id}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleFormDataChange(field.name, e.target.value, field)}
              onBlur={() => handleBlur(field)}
              required={field.required}
              disabled={field.disabled || readOnly}
              readOnly={field.readOnly}
              className={cn(error && "border-red-500")}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      case "textarea":
        return (
          <div className={cn("space-y-2", field.className)}>
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            <Textarea
              id={field.id}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name] || ""}
              onChange={(e) => handleFormDataChange(field.name, e.target.value, field)}
              onBlur={() => handleBlur(field)}
              required={field.required}
              disabled={field.disabled || readOnly}
              readOnly={field.readOnly}
              className={cn(error && "border-red-500")}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      case "richtext":
        return (
          <div className={cn("space-y-2", field.className)}>
            <RichTextEditor
              id={field.id}
              name={field.name}
              label={field.label}
              value={formData[field.name] || ""}
              onChange={(value) => handleFormDataChange(field.name, value, field)}
              placeholder={field.placeholder}
              required={field.required}
              disabled={field.disabled || readOnly}
              readOnly={field.readOnly}
              error={error}
            />
          </div>
        )
      case "select":
        return (
          <div className={cn("space-y-2", field.className)}>
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            <Select
              value={formData[field.name] || ""}
              onValueChange={(value) => handleFormDataChange(field.name, value, field)}
              disabled={field.disabled || readOnly}
            >
              <SelectTrigger id={field.id} className={cn(error && "border-red-500")}>
                <SelectValue placeholder={field.placeholder || "Select an option"} />
              </SelectTrigger>
              <SelectContent>
                {field.options?.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      case "checkbox":
        return (
          <div className={cn("flex items-center space-x-2", field.className)}>
            <AnimatedCheckbox
              id={field.id}
              name={field.name}
              checked={formData[field.name] || false}
              onChange={(e) => handleFormDataChange(field.name, e.target.checked, field)}
              onBlur={() => handleBlur(field)}
              required={field.required}
              disabled={field.disabled || readOnly}
            />
            <div>
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      case "switch":
        return (
          <div className={cn("flex items-center space-x-2", field.className)}>
            <AnimatedSwitch
              id={field.id}
              name={field.name}
              checked={formData[field.name] || false}
              onChange={(e) => handleFormDataChange(field.name, e.target.checked, field)}
              onBlur={() => handleBlur(field)}
              disabled={field.disabled || readOnly}
            />
            <div>
              <Label htmlFor={field.id}>
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      case "radio":
        return (
          <div className={cn("space-y-2", field.className)}>
            <Label>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            <div className="space-y-1">
              {field.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    id={`${field.id}_${option.value}`}
                    name={field.name}
                    value={option.value}
                    checked={formData[field.name] === option.value}
                    onChange={(e) => handleFormDataChange(field.name, e.target.value, field)}
                    onBlur={() => handleBlur(field)}
                    required={field.required}
                    disabled={field.disabled || readOnly}
                    className={cn(error && "border-red-500")}
                  />
                  <Label htmlFor={`${field.id}_${option.value}`}>{option.label}</Label>
                </div>
              ))}
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      case "date":
        return (
          <div className={cn("space-y-2", field.className)}>
            <Label htmlFor={field.id}>
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            {field.description && <p className="text-xs text-muted-foreground">{field.description}</p>}
            <Input
              id={field.id}
              name={field.name}
              type="date"
              value={formData[field.name] || ""}
              onChange={(e) => handleFormDataChange(field.name, e.target.value, field)}
              onBlur={() => handleBlur(field)}
              required={field.required}
              disabled={field.disabled || readOnly}
              readOnly={field.readOnly}
              className={cn(error && "border-red-500")}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
          </div>
        )
      default:
        return <div>Unsupported field type: {field.type}</div>
    }
  }

  const renderFieldEditor = (field: FormField) => {
    return (
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Edit Field</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="field-label">Label</Label>
                <Input
                  id="field-label"
                  value={field.label}
                  onChange={(e) => setEditingField({ ...field, label: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="field-name">Name</Label>
                <Input
                  id="field-name"
                  value={field.name}
                  onChange={(e) => setEditingField({ ...field, name: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="field-placeholder">Placeholder</Label>
              <Input
                id="field-placeholder"
                value={field.placeholder || ""}
                onChange={(e) => setEditingField({ ...field, placeholder: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="field-description">Description</Label>
              <Input
                id="field-description"
                value={field.description || ""}
                onChange={(e) => setEditingField({ ...field, description: e.target.value })}
              />
            </div>

            <div className="flex items-center space-x-2">
              <AnimatedCheckbox
                id="field-required"
                checked={field.required || false}
                onChange={(e) => setEditingField({ ...field, required: e.target.checked })}
              />
              <Label htmlFor="field-required">Required</Label>
            </div>

            <div className="flex items-center space-x-2">
              <AnimatedCheckbox
                id="field-disabled"
                checked={field.disabled || false}
                onChange={(e) => setEditingField({ ...field, disabled: e.target.checked })}
              />
              <Label htmlFor="field-disabled">Disabled</Label>
            </div>

            <div className="flex items-center space-x-2">
              <AnimatedCheckbox
                id="field-readonly"
                checked={field.readOnly || false}
                onChange={(e) => setEditingField({ ...field, readOnly: e.target.checked })}
              />
              <Label htmlFor="field-readonly">Read Only</Label>
            </div>

            {(field.type === "select" || field.type === "radio") && (
              <div className="space-y-2">
                <Label>Options</Label>
                {field.options?.map((option, index) => (
                  <div key={index} className="flex items-center space-x-2 mt-2">
                    <Input
                      value={option.label}
                      onChange={(e) => {
                        const newOptions = [...(field.options || [])]
                        newOptions[index] = { ...newOptions[index], label: e.target.value }
                        setEditingField({ ...field, options: newOptions })
                      }}
                      placeholder="Label"
                      className="flex-1"
                    />
                    <Input
                      value={option.value}
                      onChange={(e) => {
                        const newOptions = [...(field.options || [])]
                        newOptions[index] = { ...newOptions[index], value: e.target.value }
                        setEditingField({ ...field, options: newOptions })
                      }}
                      placeholder="Value"
                      className="flex-1"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        const newOptions = [...(field.options || [])]
                        newOptions.splice(index, 1)
                        setEditingField({ ...field, options: newOptions })
                      }}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const newOptions = [...(field.options || [])]
                    newOptions.push({
                      label: `Option ${newOptions.length + 1}`,
                      value: `option${newOptions.length + 1}`,
                    })
                    setEditingField({ ...field, options: newOptions })
                  }}
                  className="mt-2"
                >
                  Add Option
                </Button>
              </div>
            )}

            <div className="space-y-2">
              <Label>Validation</Label>
              <Card className="p-4">
                <div className="space-y-4">
                  {field.type === "text" || field.type === "email" || field.type === "password" ? (
                    <>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="field-minlength">Min Length</Label>
                          <Input
                            id="field-minlength"
                            type="number"
                            value={field.validation?.minLength || ""}
                            onChange={(e) => {
                              const value = e.target.value ? Number.parseInt(e.target.value) : undefined
                              setEditingField({
                                ...field,
                                validation: {
                                  ...field.validation,
                                  minLength: value,
                                },
                              })
                            }}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="field-maxlength">Max Length</Label>
                          <Input
                            id="field-maxlength"
                            type="number"
                            value={field.validation?.maxLength || ""}
                            onChange={(e) => {
                              const value = e.target.value ? Number.parseInt(e.target.value) : undefined
                              setEditingField({
                                ...field,
                                validation: {
                                  ...field.validation,
                                  maxLength: value,
                                },
                              })
                            }}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field-pattern">Pattern (Regex)</Label>
                        <Input
                          id="field-pattern"
                          value={field.validation?.pattern || ""}
                          onChange={(e) => {
                            setEditingField({
                              ...field,
                              validation: {
                                ...field.validation,
                                pattern: e.target.value,
                              },
                            })
                          }}
                        />
                      </div>
                    </>
                  ) : field.type === "number" ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="field-min">Min Value</Label>
                        <Input
                          id="field-min"
                          type="number"
                          value={field.validation?.min || ""}
                          onChange={(e) => {
                            const value = e.target.value ? Number.parseInt(e.target.value) : undefined
                            setEditingField({
                              ...field,
                              validation: {
                                ...field.validation,
                                min: value,
                              },
                            })
                          }}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="field-max">Max Value</Label>
                        <Input
                          id="field-max"
                          type="number"
                          value={field.validation?.max || ""}
                          onChange={(e) => {
                            const value = e.target.value ? Number.parseInt(e.target.value) : undefined
                            setEditingField({
                              ...field,
                              validation: {
                                ...field.validation,
                                max: value,
                              },
                            })
                          }}
                        />
                      </div>
                    </div>
                  ) : null}

                  {field.type === "password" && (
                    <div className="space-y-2">
                      <Label htmlFor="field-match">Match Field</Label>
                      <Select
                        value={field.validation?.matchField || ""}
                        onValueChange={(value) => {
                          setEditingField({
                            ...field,
                            validation: {
                              ...field.validation,
                              matchField: value,
                            },
                          })
                        }}
                      >
                        <SelectTrigger id="field-match">
                          <SelectValue placeholder="Select a field to match" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="">None</SelectItem>
                          {schema.fields
                            .filter((f) => f.id !== field.id && f.type === "password")
                            .map((f) => (
                              <SelectItem key={f.id} value={f.name}>
                                {f.label}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="field-error-message">Custom Error Message</Label>
                    <Input
                      id="field-error-message"
                      value={field.validation?.customMessage || ""}
                      onChange={(e) => {
                        setEditingField({
                          ...field,
                          validation: {
                            ...field.validation,
                            customMessage: e.target.value,
                          },
                        })
                      }}
                    />
                  </div>
                </div>
              </Card>
            </div>

            <div className="flex justify-end space-x-2 mt-4">
              <Button variant="outline" onClick={() => setEditingField(null)}>
                Cancel
              </Button>
              <Button onClick={() => updateField(field)}>Save Changes</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className={cn("w-full", className)}>
      <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "preview" | "edit")}>
        <div className="flex justify-between items-center mb-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">{schema.title}</h2>
            <p className="text-muted-foreground">
              {readOnly ? "View your form" : "Build your form by adding fields and configuring them."}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <TabsList>
              <TabsTrigger value="edit" disabled={readOnly}>
                Edit
              </TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            {!readOnly && (
              <Button onClick={() => onSave?.(schema)}>
                <Save className="mr-2 h-4 w-4" />
                Save Form
              </Button>
            )}
          </div>
        </div>

        <TabsContent value="edit" className={cn(readOnly && "hidden")}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Form Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  {schema.fields.length === 0 ? (
                    <div className="text-center py-6 text-muted-foreground">
                      No fields added yet. Use the panel on the right to add fields.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {schema.fields.map((field, index) => (
                        <motion.div
                          key={field.id}
                          className={cn(
                            "border rounded-md p-4 cursor-move",
                            draggedField === index && "border-primary",
                          )}
                          draggable
                          onDragStart={() => handleDragStart(index)}
                          onDragOver={(e) => handleDragOver(e, index)}
                          onDragEnd={handleDragEnd}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex items-center">
                              <MoveVertical className="h-5 w-5 mr-2 text-muted-foreground" />
                              <div>
                                <h3 className="font-medium">{field.label}</h3>
                                <p className="text-sm text-muted-foreground">
                                  {field.type} {field.required && "(required)"}
                                </p>
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="ghost" size="icon" onClick={() => setEditingField(field)}>
                                <Settings className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" onClick={() => removeField(field.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {editingField && renderFieldEditor(editingField)}
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Add Fields</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { type: "text", label: "Text" },
                      { type: "number", label: "Number" },
                      { type: "email", label: "Email" },
                      { type: "password", label: "Password" },
                      { type: "textarea", label: "Textarea" },
                      { type: "richtext", label: "Rich Text" },
                      { type: "select", label: "Select" },
                      { type: "checkbox", label: "Checkbox" },
                      { type: "switch", label: "Switch" },
                      { type: "radio", label: "Radio" },
                      { type: "date", label: "Date" },
                    ].map((fieldType) => (
                      <Button
                        key={fieldType.type}
                        variant="outline"
                        className="justify-start"
                        onClick={() => addField(fieldType.type as FieldType)}
                      >
                        <PlusCircle className="mr-2 h-4 w-4" />
                        {fieldType.label}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Form Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="form-title">Form Title</Label>
                      <Input
                        id="form-title"
                        value={schema.title}
                        onChange={(e) => setSchema({ ...schema, title: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <Card>
            <CardHeader>
              <CardTitle>{schema.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {schema.fields.length === 0 ? (
                <div className="text-center py-6 text-muted-foreground">
                  No fields added yet. Switch to Edit mode to add fields.
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {schema.fields.map((field) => (
                    <div key={field.id}>{renderFieldPreview(field)}</div>
                  ))}
                  <Button type="submit">Submit</Button>
                </form>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
