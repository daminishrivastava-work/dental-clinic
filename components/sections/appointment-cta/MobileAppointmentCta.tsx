"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { AppointmentCtaContent } from "./AppointmentCtaContent"

export function MobileAppointmentCta() {
  return (
    <SectionWrapper className="block md:hidden py-16">
      <AppointmentCtaContent mobile />
    </SectionWrapper>
  )
}