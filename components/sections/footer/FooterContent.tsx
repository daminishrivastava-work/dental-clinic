"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"

export function FooterContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <footer className="w-full border-t border-border bg-muted/20 pb-8 pt-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-lg bg-primary/10 p-0.5 flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  fill
                  sizes="36px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground leading-none">Archana Dental Clinic</span>
                <span className="text-[10px] font-medium text-primary tracking-wide uppercase leading-none mt-0.5">
                  & Implant Centre
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {t.hero.description}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground mb-2">{language === "en" ? "Quick Links" : "त्वरित लिंक"}</h4>
            <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{t.nav.home}</Link>
            <Link href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{t.nav.services}</Link>
            <Link href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{t.nav.about}</Link>
            <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">{t.nav.dashboard}</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground mb-2">{language === "en" ? "Support" : "सहायता"}</h4>
            <span className="text-sm text-muted-foreground">{t.contact.phoneDoctor}</span>
            <span className="text-sm text-muted-foreground">{t.contact.phoneClinic}</span>
            <span className="text-sm text-muted-foreground truncate">{t.contact.emailValue}</span>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Archana Dental Clinic & Implant Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}