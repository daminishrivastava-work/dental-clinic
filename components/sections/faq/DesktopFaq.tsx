"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FaqContent } from "./FaqContent"

export function DesktopFaq() {
  return (
    <SectionWrapper id="faq" className="hidden md:block py-24">
      <FaqContent desktop />
    </SectionWrapper>
  )
}