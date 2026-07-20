"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

interface HeroContentProps {
  headline: string
  description: string
  trustIndicators: string[]
}

export function HeroContent({ headline, description, trustIndicators }: HeroContentProps) {
  return (
    <div className="flex flex-col gap-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground"
      >
<<<<<<< HEAD
        <span dangerouslySetInnerHTML={{ __html: headline }} />
=======
        {headline}
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl"
      >
<<<<<<< HEAD
        <span dangerouslySetInnerHTML={{ __html: description }} />
=======
        {description}
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 gap-x-4 gap-y-3 mt-4 md:flex md:flex-wrap md:items-center md:gap-x-6"
      >
<<<<<<< HEAD
        {trustIndicators.map((indicator, index) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-accent shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-foreground leading-tight" dangerouslySetInnerHTML={{ __html: indicator }}></span>
=======
        {trustIndicators.map((indicator) => (
          <div key={indicator} className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-accent shrink-0" />
            <span className="text-xs md:text-sm font-semibold text-foreground leading-tight">{indicator}</span>
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
          </div>
        ))}
      </motion.div>
    </div>
  )
}
