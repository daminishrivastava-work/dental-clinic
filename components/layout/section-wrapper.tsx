import * as React from "react"
import { cn } from "@/utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function SectionWrapper({ children, className, ...props }: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20 lg:py-24",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}
