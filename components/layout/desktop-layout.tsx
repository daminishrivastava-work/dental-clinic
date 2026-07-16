"use client"

import * as React from "react"
import { DesktopNav } from "../navigation/desktop-nav"
import { Footer } from "../sections/footer"
import { PageContainer } from "./page-container"

export function DesktopLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageContainer className="hidden md:flex">
      <DesktopNav />
      <div className="flex-1 w-full">
        {children}
      </div>
      <Footer />
    </PageContainer>
  )
}
