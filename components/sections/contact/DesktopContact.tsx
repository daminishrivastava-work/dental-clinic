"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ContactContent } from "./ContactContent"

export function DesktopContact() {
  return (
    <SectionWrapper id="contact" className="hidden md:block py-24">
      <ContactContent desktop />
    </SectionWrapper>
  )
}