"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { AppointmentCtaContent } from "./AppointmentCtaContent"

export function DesktopAppointmentCta() {
  return (
    <SectionWrapper className="hidden md:block py-24">
      <AppointmentCtaContent desktop />
    </SectionWrapper>
  )
}