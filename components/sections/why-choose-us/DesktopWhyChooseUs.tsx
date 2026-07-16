"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { WhyChooseHeader } from "./WhyChooseHeader"
import { WhyChooseGrid } from "./WhyChooseGrid"

export function DesktopWhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" className="hidden md:block py-24">
      <WhyChooseHeader />
      <WhyChooseGrid />
    </SectionWrapper>
  )
}
