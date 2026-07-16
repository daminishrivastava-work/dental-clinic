"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ServicesHeader } from "./ServicesHeader"
import { ServicesGrid } from "./ServicesGrid"

export function MobileServices() {
  return (
    <SectionWrapper id="services" className="block md:hidden bg-muted/30 mt-8 mb-16 py-16">
      <ServicesHeader />
      <ServicesGrid />
    </SectionWrapper>
  )
}
