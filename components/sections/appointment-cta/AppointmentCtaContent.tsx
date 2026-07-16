"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CTAButton } from "@/components/navigation/cta-button"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { WhatsAppModal } from "@/components/ui/whatsapp-modal"

export function AppointmentCtaContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  const { language } = useLanguage()
  const [isWhatsAppOpen, setIsWhatsAppOpen] = React.useState(false)

  const title = language === "en" ? "Ready for a Healthy Smile?" : "स्वस्थ मुस्कान के लिए तैयार हैं?"
  const desc = language === "en"
    ? "Book your slot online via Bajaj Finserv Health or consult directly with Dr. Anil Prajapati on WhatsApp."
    : "बजाज फिनसर्व हेल्थ के माध्यम से ऑनलाइन स्लॉट बुक करें या व्हाट्सएप पर डॉ. अनिल प्रजापति से सीधे परामर्श करें।"

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="w-full max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground text-center shadow-xl flex flex-col items-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
        <p className="text-primary-foreground/80 mb-8 max-w-2xl text-base md:text-lg leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
          <CTAButton variant="primary" mobile className="bg-background text-foreground hover:bg-background/90" />
          <CTAButton variant="secondary" mobile onWhatsAppClick={() => setIsWhatsAppOpen(true)} className="bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 border-white/20" />
        </div>
      </motion.div>

      <WhatsAppModal isOpen={isWhatsAppOpen} onClose={() => setIsWhatsAppOpen(false)} />
    </>
  )
}