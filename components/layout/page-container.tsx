import * as React from "react"
import { cn } from "@/utils"

interface PageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function PageContainer({ children, className, ...props }: PageContainerProps) {
  return (
    <main
      className={cn(
        "flex min-h-screen w-full flex-col bg-background text-foreground antialiased",
        className
      )}
      {...props}
    >
      {children}
    </main>
  )
}
