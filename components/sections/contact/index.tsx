"use client"
import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopContact } from "./DesktopContact"
import { MobileContact } from "./MobileContact"

export function Contact() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="min-h-[300px] invisible" />
  return isDesktop ? <DesktopContact /> : <MobileContact />
}