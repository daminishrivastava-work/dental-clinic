"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { Award } from "lucide-react"

export function HeroTrustBadge() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-[#EADAA7] bg-[#FDF0CD]/80 p-4 shadow-sm backdrop-blur-md w-max"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-950/10 text-amber-950">
        <Award className="h-5 w-5" />
      </div>
      <div>
        <p className="text-sm font-bold text-amber-950">{t.badge}</p>
        <p className="text-xs font-medium text-amber-900/80">{translations[language].hero.stats.rating}</p>
      </div>
    </motion.div>
  )
}

