"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { WhyChooseHeader } from "./WhyChooseHeader"
import { WhyChooseGrid } from "./WhyChooseGrid"

export function MobileWhyChooseUs() {
  return (
    <SectionWrapper id="why-choose-us" className="block md:hidden py-16">
      <WhyChooseHeader />
      {/* Adding overflow-hidden to prevent horizontal scrolling issues on mobile */}
      <div className="px-2">
        <WhyChooseGrid />
      </div>
    </SectionWrapper>
  )
}
