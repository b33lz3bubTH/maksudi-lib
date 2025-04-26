"use client"

import { type ReactNode, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import { cn } from "@/lib/utils"

export interface Tab {
  id: string
  label: ReactNode
  content: ReactNode
}

export interface AnimatedTabsProps {
  tabs: Tab[]
  defaultTab?: string
  className?: string
  tabsClassName?: string
  contentClassName?: string
  indicatorClassName?: string
  orientation?: "horizontal" | "vertical"
}

export function AnimatedTabs({
  tabs,
  defaultTab,
  className,
  tabsClassName,
  contentClassName,
  indicatorClassName,
  orientation = "horizontal",
}: AnimatedTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id)

  const isHorizontal = orientation === "horizontal"

  return (
    <div className={cn("w-full", isHorizontal ? "flex flex-col" : "flex flex-row", className)}>
      <div
        className={cn(
          "relative",
          isHorizontal ? "flex flex-row border-b" : "flex flex-col border-r pr-1",
          tabsClassName,
        )}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium transition-colors",
              activeTab === tab.id ? "text-primary" : "text-muted-foreground hover:text-foreground",
              isHorizontal ? "pb-3" : "pr-3",
            )}
          >
            {tab.label}
          </button>
        ))}
        <motion.div
          className={cn(
            "absolute bg-primary",
            isHorizontal ? "bottom-0 h-0.5 rounded-t-sm" : "right-0 w-0.5 rounded-l-sm",
            indicatorClassName,
          )}
          animate={{
            [isHorizontal ? "left" : "top"]: tabs.findIndex((tab) => tab.id === activeTab) * (100 / tabs.length) + "%",
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          style={{
            [isHorizontal ? "width" : "height"]: `${100 / tabs.length}%`,
          }}
        />
      </div>
      <div className={cn("py-4", contentClassName)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {tabs.find((tab) => tab.id === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
