import * as React from "react"
import { cn } from "@/utils"

export function NavigationPlaceholder() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="h-8 w-8 rounded-lg bg-primary/20 animate-pulse" />
          <span className="text-lg font-medium tracking-tight">Dental AI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <div className="h-4 w-16 rounded bg-muted animate-pulse" />
          <div className="h-4 w-16 rounded bg-muted animate-pulse" />
          <div className="h-4 w-16 rounded bg-muted animate-pulse" />
        </nav>
        <div className="flex items-center gap-4">
          <div className="h-9 w-24 rounded-full bg-primary/10 animate-pulse" />
        </div>
      </div>
    </header>
  )
}
