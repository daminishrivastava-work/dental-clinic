"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Globe } from "lucide-react"
import { useScroll } from "@/hooks/use-scroll"
import { useLanguage } from "@/providers/language-provider"
import { MobileDrawer } from "./mobile-drawer"
import { cn } from "@/utils"

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false)
  const scrolled = useScroll(20)
  const { language, setLanguage } = useLanguage()

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          scrolled
            ? "bg-background/90 backdrop-blur-lg shadow-sm border-b"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-9 w-9 rounded-lg bg-primary/10 p-0.5 flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                sizes="36px"
                className="object-contain p-0.5"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-foreground leading-none">Archana Dental Clinic</span>
              <span className="text-[8px] font-semibold text-primary tracking-wide uppercase leading-none mt-0.5">
                & Implant Centre
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            {/* Language switch quick icon */}
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="flex items-center justify-center p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              title="Change Language"
            >
              <Globe className="h-5 w-5 text-primary" />
              <span className="text-[10px] font-bold ml-1">{language === "en" ? "HI" : "EN"}</span>
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="rounded-lg p-2 hover:bg-muted transition-colors text-foreground cursor-pointer"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

