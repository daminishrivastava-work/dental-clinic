"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { GalleryContent } from "./GalleryContent"

export function DesktopGallery() {
  return (
    <SectionWrapper id="gallery" className="hidden md:block py-24">
      <GalleryContent desktop />
    </SectionWrapper>
  )
}