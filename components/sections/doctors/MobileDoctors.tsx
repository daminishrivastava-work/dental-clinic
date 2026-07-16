"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { DoctorsContent } from "./DoctorsContent"

export function MobileDoctors() {
  return (
    <SectionWrapper id="about" className="block md:hidden py-16">
      <DoctorsContent />
    </SectionWrapper>
  )
}