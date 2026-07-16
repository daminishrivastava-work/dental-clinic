"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"

export function WhyChooseHeader() {
  const { language } = useLanguage()
  const t = translations[language].whyChooseUs

  return (
    <div className="flex flex-col items-center text-center mb-16 gap-4">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">
          {t.badge}
        </span>
      </motion.div>
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground"
      >
        {t.title}
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-lg text-muted-foreground mt-2"
      >
        {language === "en" 
          ? "We combine clinical perfection with patient convenience to make your dental care journey comfortable and seamless."
          : "हम आपकी दंत चिकित्सा यात्रा को आरामदायक और सुगम बनाने के लिए नैदानिक उत्कृष्टता के साथ रोगी सुविधा को जोड़ते हैं।"}
      </motion.p>
    </div>
  )
}

