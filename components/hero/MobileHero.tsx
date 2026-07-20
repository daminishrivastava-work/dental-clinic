"use client"

import * as React from "react"
import Image from "next/image"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { HeroContent } from "./HeroContent"
import { HeroTrustBadge } from "./HeroTrustBadge"
import { CTAButton } from "@/components/navigation/cta-button"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { WhatsAppModal } from "../ui/whatsapp-modal"

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507A3.003 3.003 0 0 0 .503 6.163C0 8.044 0 12 0 12s0 3.956.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.956 24 12 24 12s0-3.956-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.903-6.989-1.873-1.873-4.353-2.903-6.992-2.905-5.437 0-9.86 4.417-9.864 9.861-.001 1.705.452 3.371 1.31 4.842l-.994 3.63 3.754-.986zm11.332-6.52c-.31-.155-1.838-.908-2.11-.998-.27-.099-.467-.148-.665.148-.197.297-.765.986-.938 1.183-.173.197-.346.223-.655.068-.31-.155-1.307-.482-2.49-1.537-.92-.821-1.542-1.836-1.722-2.146-.18-.31-.019-.477.136-.631.14-.139.31-.361.465-.542.155-.18.207-.31.31-.517.103-.207.052-.387-.026-.542-.078-.155-.665-1.602-.912-2.197-.24-.578-.48-.5-.665-.51-.173-.008-.371-.01-.57-.01-.197 0-.518.074-.79.371-.271.297-1.036 1.012-1.036 2.47s1.06 2.859 1.209 3.058c.148.197 2.085 3.184 5.05 4.467.705.305 1.256.488 1.684.624.708.226 1.353.194 1.863.118.568-.084 1.838-.752 2.097-1.442.26-.69.26-1.282.182-1.402-.078-.12-.283-.197-.593-.352z"/>
  </svg>
)

export function MobileHero() {
  const { language } = useLanguage()
  const t = translations[language].hero
  const [isWhatsAppOpen, setIsWhatsAppOpen] = React.useState(false)

  const trustIndicators = language === "en"
    ? ["16+ Years of Experience", "Fixed Dental Implants", "Intraoral 3D Scanner", "Aligners & Braces", "Digital X-Ray", "Root Canal Specialist"]
    : ["16+ वर्षों का अनुभव", "फिक्स डेंटल इम्प्लांट्स", "इंट्राओरल 3D स्कैनर", "अलाइनर और ब्रेसेस", "डिजिटल एक्स-रे", "रूट कैनाल स्पेशलिस्ट"]

  const stats = [
    { label: language === "en" ? "Experience" : "अनुभव", value: "16+ Years" },
    { label: language === "en" ? "Happy Smiles" : "मुस्कुराते चेहरे", value: "10,000+" },
    { label: language === "en" ? "Consultation Fee" : "परामर्श शुल्क", value: "₹200" },
    { label: language === "en" ? "Daily Hours" : "दैनिक समय", value: "8 Hours" },
  ]

  return (
    <>
      <SectionWrapper className="flex md:hidden flex-col pt-4 pb-16 min-h-[calc(100vh-4rem)]">
        {/* 1. Headline, Description and 2x2 trust Indicators */}
        <div className="flex flex-col z-10 w-full mb-6">
          <HeroContent 
            headline={t.title + " " + t.subtitle}
            description={t.description}
            trustIndicators={trustIndicators}
          />
        </div>

        {/* 2. Split Logo & CTA Action Block */}
        <div className="grid grid-cols-2 gap-4 items-stretch w-full mb-8">
          {/* Left Side: Logo card with same spacing */}
          <div className="relative w-full aspect-[4/3] rounded-[1.5rem] border border-border/80 bg-white p-1.5 shadow-md flex items-center justify-center">
            <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-tr from-amber-500/5 via-transparent to-primary/5 pointer-events-none" />
            <div className="relative w-full h-full">
              <Image
                src="/images/logo.png"
                alt="Clinic Logo"
                fill
                sizes="180px"
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side: Primary and Green WhatsApp Stack */}
          <div className="flex flex-col justify-between gap-2.5 w-full h-full py-0.5">
            <CTAButton 
              variant="primary" 
              mobile 
              className="py-3 text-[11px] font-bold tracking-tight h-[48%] flex items-center justify-center shadow-sm" 
            />
            <CTAButton 
              variant="secondary" 
              mobile 
              className="py-3 text-[11px] font-bold tracking-tight h-[48%] flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20ba5a] border-none shadow-sm"
              onWhatsAppClick={() => setIsWhatsAppOpen(true)}
            />
          </div>
        </div>

        {/* 3. Services Scanned Brochure Image */}
        <div className="relative w-full aspect-[4/3] rounded-3xl border border-border/80 bg-white p-4 shadow-lg mb-6">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/5 via-transparent to-primary/5 pointer-events-none" />
          <div className="relative w-full h-full">
            <Image
              src="/images/about/services.png"
              alt="Services Brochure"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 4. Social Circular Quick Actions */}
        <div className="flex items-center gap-6 justify-center mb-8">
          <a
            href="https://www.youtube.com/@anilprajapatinzs/shorts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20 shadow-md active:scale-95 transition-all duration-300"
            title="YouTube"
          >
            <YoutubeIcon className="h-5 w-5" />
          </a>

          <button
            onClick={() => setIsWhatsAppOpen(true)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 shadow-md active:scale-95 transition-all duration-300"
            title="WhatsApp"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </button>
        </div>

        {/* 5. Four Stats below the circular buttons */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-border/40 pt-6 w-full mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 border-l-2 border-accent pl-3.5">
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</span>
              <span className="text-lg font-extrabold text-foreground leading-none">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* 6. Golden Rating Badge */}
        <div className="flex justify-center w-full">
          <HeroTrustBadge />
        </div>
      </SectionWrapper>

      <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
    </>
  )
}
