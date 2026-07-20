"use client"

import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { HeroContent } from "./HeroContent"
import { HeroButtons } from "./HeroButtons"
import { HeroStats } from "./HeroStats"
import { HeroIllustration } from "./HeroIllustration"
import { HeroTrustBadge } from "./HeroTrustBadge"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { WhatsAppModal } from "../ui/whatsapp-modal"

export function DesktopHero() {
  const { language } = useLanguage()
  const t = translations[language].hero
  const [isWhatsAppOpen, setIsWhatsAppOpen] = React.useState(false)

  const trustIndicators = language === "en"
    ? ["16+ Years of Experience", "Fixed Dental Implants", "Intraoral 3D Scanner", "Aligners & Braces", "Digital X-Ray", "Root Canal Specialist"]
    : ["16+ वर्षों का अनुभव", "फिक्स डेंटल इम्प्लांट्स", "इंट्राओरल 3D स्कैनर", "अलाइनर और ब्रेसेस", "डिजिटल एक्स-रे", "रूट कैनाल स्पेशलिस्ट"]

  const stats = [
    { label: language === "en" ? "Experience" : "अनुभव", value: "16+ Years" },
    { label: language === "en" ? "Happy Smiles" : "मुस्कुराते चेहरे", value: "40,000+" },
    { label: language === "en" ? "Consultation Fee" : "परामर्श शुल्क", value: "₹200" },
    { label: language === "en" ? "Daily Hours" : "दैनिक समय", value: "8 Hours" },
  ]

  return (
    <>
      <SectionWrapper className="relative hidden md:flex min-h-[calc(100vh-5rem)] items-center pt-8">
        <div className="grid grid-cols-2 gap-12 lg:gap-24 items-center w-full">
          {/* Left Column - Content */}
          <div className="flex flex-col z-10 pt-10 pb-20">
            <HeroContent 
              headline={t.title + " " + t.subtitle}
              description={t.description}
              trustIndicators={trustIndicators}
            />
            <HeroButtons onWhatsAppClick={() => setIsWhatsAppOpen(true)} />
            <HeroStats stats={stats} />
            <div className="mt-4">
              <HeroTrustBadge />
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative h-full min-h-[500px] w-full flex items-center justify-center">
            <HeroIllustration onWhatsAppClick={() => setIsWhatsAppOpen(true)} />
          </div>
        </div>
      </SectionWrapper>

      <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
    </>
  )
}

