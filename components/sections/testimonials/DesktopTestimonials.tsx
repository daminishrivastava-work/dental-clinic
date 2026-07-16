"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { TestimonialsContent } from "./TestimonialsContent"

export function DesktopTestimonials() {
  return (
    <SectionWrapper className="hidden md:block py-24">
      <TestimonialsContent desktop />
    </SectionWrapper>
  )
}