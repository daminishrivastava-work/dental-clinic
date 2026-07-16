"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { DoctorsContent } from "./DoctorsContent"

export function DesktopDoctors() {
  return (
    <SectionWrapper id="about" className="hidden md:block py-24">
      <DoctorsContent desktop />
    </SectionWrapper>
  )
}