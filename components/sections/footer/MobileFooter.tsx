"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FooterContent } from "./FooterContent"

export function MobileFooter() {
  return (
    <SectionWrapper className="block md:hidden py-16">
      <FooterContent mobile />
    </SectionWrapper>
  )
}