import * as React from "react"
import { cn } from "@/utils"

export function FooterPlaceholder() {
  return (
    <footer className="w-full border-t bg-muted/20 pb-8 pt-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-primary/20" />
              <span className="text-base font-medium">Dental AI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Premium healthcare for the modern era. Designed for comfort, built for scale.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-4 w-20 rounded bg-muted mb-2" />
            <div className="h-3 w-16 rounded bg-muted/60" />
            <div className="h-3 w-16 rounded bg-muted/60" />
          </div>
          <div className="flex flex-col gap-3">
            <div className="h-4 w-20 rounded bg-muted mb-2" />
            <div className="h-3 w-16 rounded bg-muted/60" />
            <div className="h-3 w-16 rounded bg-muted/60" />
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dental AI Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
