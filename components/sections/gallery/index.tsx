"use client"
import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { DesktopGallery } from "./DesktopGallery"
import { MobileGallery } from "./MobileGallery"

export function Gallery() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="min-h-[300px] invisible" />
  return isDesktop ? <DesktopGallery /> : <MobileGallery />
}