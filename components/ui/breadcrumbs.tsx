"use client"

import { Fragment, type ReactNode } from "react"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: ReactNode
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  separator?: ReactNode
  className?: string
  homeHref?: string
  showHomeIcon?: boolean
  animated?: boolean
}

export function Breadcrumbs({
  items,
  separator = <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />,
  className,
  homeHref = "/",
  showHomeIcon = true,
  animated = false,
}: BreadcrumbsProps) {
  const allItems = showHomeIcon
    ? [{ label: "Home", href: homeHref, icon: <Home className="h-4 w-4" /> }, ...items]
    : items

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  }

  const BreadcrumbsContainer = animated ? motion.nav : "nav"
  const BreadcrumbItem = animated ? motion.li : "li"

  const containerProps = animated
    ? {
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
      }
    : {}

  const itemProps = animated
    ? {
        variants: itemVariants,
      }
    : {}

  return (
    <BreadcrumbsContainer aria-label="Breadcrumbs" className={cn("mb-4", className)} {...containerProps}>
      <ol className="flex flex-wrap items-center text-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1
          return (
            <Fragment key={index}>
              <BreadcrumbItem
                className={cn(
                  "flex items-center",
                  isLast ? "font-medium text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                {...itemProps}
              >
                {item.href && !isLast ? (
                  <Link href={item.href} className="flex items-center">
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}
                  </Link>
                ) : (
                  <span className="flex items-center" aria-current={isLast ? "page" : undefined}>
                    {item.icon && <span className="mr-1">{item.icon}</span>}
                    {item.label}
                  </span>
                )}
              </BreadcrumbItem>
              {!isLast && <li aria-hidden="true">{separator}</li>}
            </Fragment>
          )
        })}
      </ol>
    </BreadcrumbsContainer>
  )
}
