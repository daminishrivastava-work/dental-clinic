"use client"

import * as React from "react"
import { CTAButton } from "@/components/navigation/cta-button"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { motion } from "framer-motion"

interface HeroButtonsProps {
  stacked?: boolean
  onWhatsAppClick?: () => void
}

export function HeroButtons({ 
  stacked = false,
  onWhatsAppClick
}: HeroButtonsProps) {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`mt-10 flex ${stacked ? 'flex-col gap-4 w-full' : 'items-center gap-x-6'}`}
    >
      <CTAButton 
        variant="primary" 
        mobile={stacked}
        className={stacked ? "w-full py-6 text-lg" : "px-8 py-6 text-lg"} 
      />
      <CTAButton 
        variant="secondary" 
        mobile={stacked}
        className={stacked ? "w-full py-6 text-lg bg-[#25D366] text-white hover:bg-[#20ba5a] border-none shadow-md hover:shadow-lg" : "px-8 py-6 text-lg bg-[#25D366] text-white hover:bg-[#20ba5a] border-none shadow-md hover:shadow-lg"} 
        onWhatsAppClick={onWhatsAppClick}
      />
    </motion.div>
  )
}

