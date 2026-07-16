"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ServicesHeader } from "./ServicesHeader"
import { ServicesGrid } from "./ServicesGrid"

export function DesktopServices() {
  return (
    <SectionWrapper id="services" className="hidden md:block bg-muted/30 rounded-3xl mt-12 mb-24 py-24">
      <ServicesHeader />
      <ServicesGrid />
    </SectionWrapper>
  )
}
