"use client"

import * as React from "react"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { ServiceCard } from "./ServiceCard"
import { 
  Activity, 
  Sparkles, 
  Stethoscope, 
  Scan, 
  Anchor, 
  HeartPulse, 
  Scissors, 
  ShieldAlert, 
  Droplets 
} from "lucide-react"

const iconMap: Record<string, any> = {
  "rvg-xray": Stethoscope,
  "intraoral-scanner": Scan,
  "dental-implants": Anchor,
  "rct": HeartPulse,
  "orthodontic-braces": Activity,
  "pyorrhea-periodontitis": Droplets,
  "dissimpaction": Scissors,
  "mandible-fracture": ShieldAlert,
  "composite-restoration": Sparkles,
}

export function ServicesGrid() {
  const { language } = useLanguage()
  const items = translations[language].services.items

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => {
        const mappedService = {
          id: item.id,
          title: item.title,
          description: item.description,
          icon: iconMap[item.id] || Stethoscope,
          highlight: item.highlight,
          ctaLabel: language === "en" ? "Inquire on WhatsApp" : "व्हाट्सएप पर पूछें"
        }
        return <ServiceCard key={item.id} service={mappedService} index={index} />
      })}
    </div>
  )
}

