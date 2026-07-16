"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopWhyChooseUs } from "./DesktopWhyChooseUs"
import { MobileWhyChooseUs } from "./MobileWhyChooseUs"

export function WhyChooseUs() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-[500px] invisible" />
  }

  return isDesktop ? <DesktopWhyChooseUs /> : <MobileWhyChooseUs />
}
