"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useScroll } from "@/hooks/use-scroll"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { NavItem } from "./nav-item"
import { CTAButton } from "./cta-button"
import { WhatsAppModal } from "../ui/whatsapp-modal"
import { cn } from "@/utils"
import { Globe } from "lucide-react"

export function DesktopNav() {
  const scrolled = useScroll(20)
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [isWhatsAppOpen, setIsWhatsAppOpen] = React.useState(false)
  const [activeSection, setActiveSection] = React.useState("")

  const localNavigation = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.about, href: "#about" },
    { title: t.nav.gallery, href: "#gallery" },
    { title: t.nav.services, href: "#services" },
    { title: t.nav.contact, href: "#contact" },
    { title: t.nav.faq, href: "#faq" },
  ]

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "gallery", "services", "contact", "faq"]
      const scrollPosition = window.scrollY + 200 // Offset for header height

      if (window.scrollY < 100) {
        setActiveSection("")
        return
      }

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          scrolled 
            ? "bg-background/80 backdrop-blur-lg shadow-sm border-b" 
            : "bg-transparent border-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-85">
            <div className="relative h-12 w-12 rounded-xl bg-primary/10 p-1 flex items-center justify-center shadow-sm">
              <Image
                src="/images/logo.png"
                alt="Archana Dental Clinic Logo"
                fill
                sizes="48px"
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold leading-tight tracking-tight text-foreground">
                Archana Dental Clinic
              </span>
              <span className="text-[10px] font-semibold text-primary tracking-wider uppercase leading-none mt-0.5">
                & Implant Centre
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <nav className="hidden md:flex items-center gap-6">
            {localNavigation.map((item) => (
              <NavItem 
                key={item.href} 
                title={item.title} 
                href={item.href} 
                active={item.href === "/" ? activeSection === "" : activeSection === item.href}
              />
            ))}
          </nav>

          {/* CTAs & Language Switcher */}
          <div className="flex items-center gap-4">
            {/* Language Switch Button */}
            <button
              onClick={() => setLanguage(language === "en" ? "hi" : "en")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition-colors text-xs font-semibold text-foreground cursor-pointer"
              title="Change Language / भाषा बदलें"
            >
              <Globe className="h-3.5 w-3.5 text-primary" />
              <span>{language === "en" ? "हिंदी" : "English"}</span>
            </button>

            <CTAButton 
              variant="secondary" 
              className="hidden lg:flex bg-[#25D366] text-white hover:bg-[#20ba5a] hover:text-white border-none shadow-sm" 
              onWhatsAppClick={() => setIsWhatsAppOpen(true)} 
            />
            <CTAButton variant="primary" />
          </div>
        </div>
      </header>

      <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
    </>
  )
}

