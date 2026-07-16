"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FaqContent } from "./FaqContent"

export function MobileFaq() {
  return (
    <SectionWrapper id="faq" className="block md:hidden py-16">
      <FaqContent mobile />
    </SectionWrapper>
  )
}