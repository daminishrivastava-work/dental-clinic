"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { GalleryContent } from "./GalleryContent"

export function MobileGallery() {
  return (
    <SectionWrapper id="gallery" className="block md:hidden py-16">
      <GalleryContent />
    </SectionWrapper>
  )
}