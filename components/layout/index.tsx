"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopLayout } from "./desktop-layout"
import { MobileLayout } from "./mobile-layout"

export function AppShell({ children }: { children: React.ReactNode }) {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by rendering a minimal wrapper initially
  if (!mounted) {
    return <div className="min-h-screen invisible">{children}</div>
  }

  return isDesktop ? (
    <DesktopLayout>{children}</DesktopLayout>
  ) : (
    <MobileLayout>{children}</MobileLayout>
  )
}
