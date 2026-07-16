"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ContactContent } from "./ContactContent"

export function MobileContact() {
  return (
    <SectionWrapper id="contact" className="block md:hidden py-16">
      <ContactContent />
    </SectionWrapper>
  )
}