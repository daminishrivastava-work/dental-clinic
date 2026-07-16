"use client"
import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopTestimonials } from "./DesktopTestimonials"
import { MobileTestimonials } from "./MobileTestimonials"

export function Testimonials() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="min-h-[300px] invisible" />
  return isDesktop ? <DesktopTestimonials /> : <MobileTestimonials />
}