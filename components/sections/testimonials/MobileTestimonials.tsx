"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { TestimonialsContent } from "./TestimonialsContent"

export function MobileTestimonials() {
  return (
    <SectionWrapper className="block md:hidden py-16">
      <TestimonialsContent mobile />
    </SectionWrapper>
  )
}