"use client"

import { useState, useEffect, forwardRef } from "react"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Underline from "@tiptap/extension-underline"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import TextAlign from "@tiptap/extension-text-align"
import {
  Bold,
  Italic,
  UnderlineIcon,
  LinkIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
  ImageIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Code,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export interface RichTextEditorProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
  minHeight?: string
  maxHeight?: string
  label?: string
  error?: string
  id?: string
  name?: string
  required?: boolean
  disabled?: boolean
  readOnly?: boolean
  toolbarClassName?: string
  contentClassName?: string
}

export const RichTextEditor = forwardRef<HTMLDivElement, RichTextEditorProps>(
  (
    {
      value = "",
      onChange,
      placeholder = "Write something...",
      className,
      minHeight = "200px",
      maxHeight = "500px",
      label,
      error,
      id,
      name,
      required,
      disabled,
      readOnly,
      toolbarClassName,
      contentClassName,
    },
    ref,
  ) => {
    const [linkUrl, setLinkUrl] = useState("")
    const [linkOpen, setLinkOpen] = useState(false)
    const [imageUrl, setImageUrl] = useState("")
    const [imageOpen, setImageOpen] = useState(false)
    const [editorContent, setEditorContent] = useState(value)

    const editor = useEditor({
      extensions: [
        StarterKit,
        Underline,
        Link.configure({
          openOnClick: false,
          HTMLAttributes: {
            class: "text-primary underline",
          },
        }),
        Image.configure({
          HTMLAttributes: {
            class: "rounded-md max-w-full",
          },
        }),
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
      ],
      content: value,
      editable: !disabled && !readOnly,
      onUpdate: ({ editor }) => {
        const html = editor.getHTML()
        setEditorContent(html)
        onChange?.(html)
      },
      editorProps: {
        attributes: {
          class: cn(
            "prose prose-sm sm:prose-base dark:prose-invert focus:outline-none w-full max-w-none",
            disabled && "opacity-50 cursor-not-allowed",
            readOnly && "cursor-default",
            contentClassName,
          ),
          id,
          style: `min-height: ${minHeight}; max-height: ${maxHeight}; overflow-y: auto;`,
        },
      },
    })

    useEffect(() => {
      if (editor && value !== editorContent) {
        editor.commands.setContent(value)
      }
    }, [editor, value, editorContent])

    const addLink = () => {
      if (!linkUrl) return

      editor?.chain().focus().extendMarkRange("link").setLink({ href: linkUrl }).run()
      setLinkUrl("")
      setLinkOpen(false)
    }

    const addImage = () => {
      if (!imageUrl) return

      editor?.chain().focus().setImage({ src: imageUrl }).run()
      setImageUrl("")
      setImageOpen(false)
    }

    if (!editor) {
      return null
    }

    return (
      <div className={cn("space-y-2", className)} ref={ref}>
        {label && (
          <Label htmlFor={id} className="text-sm font-medium">
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
        )}

        <div className={cn("border rounded-md overflow-hidden", error && "border-red-500")}>
          <div className={cn("flex flex-wrap gap-1 p-1 border-b bg-muted/50", toolbarClassName)}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={cn(editor.isActive("bold") && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <Bold className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Bold</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={cn(editor.isActive("italic") && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <Italic className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Italic</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={cn(editor.isActive("underline") && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <UnderlineIcon className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Underline</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <Popover open={linkOpen} onOpenChange={setLinkOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(editor.isActive("link") && "bg-muted")}
                  disabled={disabled || readOnly}
                >
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <Label htmlFor="link-url">Link URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="link-url"
                      value={linkUrl}
                      onChange={(e) => setLinkUrl(e.target.value)}
                      placeholder="https://example.com"
                    />
                    <Button onClick={addLink}>Add</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <Popover open={imageOpen} onOpenChange={setImageOpen}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" disabled={disabled || readOnly}>
                  <ImageIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-2">
                  <Label htmlFor="image-url">Image URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="image-url"
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="https://example.com/image.jpg"
                    />
                    <Button onClick={addImage}>Add</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={cn(editor.isActive("heading", { level: 1 }) && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <Heading1 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Heading 1</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={cn(editor.isActive("heading", { level: 2 }) && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <Heading2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Heading 2</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={cn(editor.isActive("heading", { level: 3 }) && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <Heading3 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Heading 3</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={cn(editor.isActive("bulletList") && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Bullet List</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={cn(editor.isActive("orderedList") && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <ListOrdered className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Ordered List</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={cn(editor.isActive("codeBlock") && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <Code className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Code Block</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().setTextAlign("left").run()}
                    className={cn(editor.isActive({ textAlign: "left" }) && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <AlignLeft className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Align Left</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().setTextAlign("center").run()}
                    className={cn(editor.isActive({ textAlign: "center" }) && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <AlignCenter className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Align Center</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => editor.chain().focus().setTextAlign("right").run()}
                    className={cn(editor.isActive({ textAlign: "right" }) && "bg-muted")}
                    disabled={disabled || readOnly}
                  >
                    <AlignRight className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Align Right</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <EditorContent editor={editor} />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    )
  },
)

RichTextEditor.displayName = "RichTextEditor"
