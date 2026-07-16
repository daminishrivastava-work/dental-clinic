"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { FooterContent } from "./FooterContent"

export function DesktopFooter() {
  return (
    <SectionWrapper className="hidden md:block py-24">
      <FooterContent desktop />
    </SectionWrapper>
  )
}