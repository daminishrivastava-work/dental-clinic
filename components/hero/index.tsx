"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopHero } from "./DesktopHero"
import { MobileHero } from "./MobileHero"

export function Hero() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-[calc(100vh-5rem)] invisible" />
  }

  return isDesktop ? <DesktopHero /> : <MobileHero />
}
