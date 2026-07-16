"use client"

import * as React from "react"
import { MobileNav } from "../navigation/mobile-nav"
import { Footer } from "../sections/footer"
import { PageContainer } from "./page-container"

export function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer className="flex md:hidden">
      <MobileNav />
      <div className="flex-1 w-full flex flex-col">
        {children}
      </div>
      <Footer />
    </PageContainer>
  )
}
