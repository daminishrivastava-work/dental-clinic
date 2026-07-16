"use client"
import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopAppointmentCta } from "./DesktopAppointmentCta"
import { MobileAppointmentCta } from "./MobileAppointmentCta"

export function AppointmentCta() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="min-h-[300px] invisible" />
  return isDesktop ? <DesktopAppointmentCta /> : <MobileAppointmentCta />
}