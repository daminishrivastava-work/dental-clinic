"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Globe } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { NavItem } from "./nav-item"
import { CTAButton } from "./cta-button"
import { WhatsAppModal } from "../ui/whatsapp-modal"

interface MobileDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]
  const [isWhatsAppOpen, setIsWhatsAppOpen] = React.useState(false)

  // Prevent scrolling when drawer is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const [activeSection, setActiveSection] = React.useState("")

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "gallery", "services", "contact", "faq"]
      const scrollPosition = window.scrollY + 200

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

  const localNavigation = [
    { title: t.nav.home, href: "/" },
    { title: t.nav.about, href: "#about" },
    { title: t.nav.gallery, href: "#gallery" },
    { title: t.nav.services, href: "#services" },
    { title: t.nav.contact, href: "#contact" },
    { title: t.nav.faq, href: "#faq" },
  ]

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-50 h-full w-[85%] max-w-sm border-l bg-background px-6 py-6 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <Link href="/" onClick={onClose} className="flex items-center gap-2">
                  <div className="relative h-10 w-10 rounded-xl bg-primary/10 p-0.5 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      fill
                      sizes="40px"
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
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-muted text-foreground transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Language toggle inside drawer */}
              <div className="mb-6 pb-6 border-b border-border flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Language / भाषा</span>
                <button
                  onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-background hover:bg-muted transition-colors text-xs font-semibold text-foreground cursor-pointer"
                >
                  <Globe className="h-3.5 w-3.5 text-primary" />
                  <span>{language === "en" ? "हिंदी (Hindi)" : "English (EN)"}</span>
                </button>
              </div>

              <nav className="flex flex-col gap-1 flex-1 overflow-y-auto">
                {localNavigation.map((item) => (
                  <NavItem
                    key={item.href}
                    title={item.title}
                    href={item.href}
                    mobile
                    onClick={onClose}
                    active={item.href === "/" ? activeSection === "" : activeSection === item.href}
                  />
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-4 pt-6 border-t pb-safe">
                <CTAButton 
                  variant="secondary" 
                  mobile 
                  className="bg-[#25D366] text-white hover:bg-[#20ba5a] hover:text-white border-none shadow-md"
                  onWhatsAppClick={() => {
                    onClose()
                    setIsWhatsAppOpen(true)
                  }} 
                />
                <CTAButton variant="primary" mobile onClick={onClose} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
    </>
  )
}

