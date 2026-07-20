"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"

export function ServicesHeader() {
  const { language } = useLanguage()
  const t = translations[language].services

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
<<<<<<< HEAD
        <span dangerouslySetInnerHTML={{ __html: t.title }} />
=======
        {t.title}
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl text-lg text-muted-foreground mt-2"
      >
<<<<<<< HEAD
        <span dangerouslySetInnerHTML={{ __html: t.description }} />
=======
        {t.description}
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
      </motion.p>
    </div>
  )
}

