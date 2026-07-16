"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopServices } from "./DesktopServices"
import { MobileServices } from "./MobileServices"

export function Services() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-[500px] invisible" />
  }

  return isDesktop ? <DesktopServices /> : <MobileServices />
}
