"use client"

import * as React from "react"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { WhyChooseCard } from "./WhyChooseCard"
import { Award, Sparkles, CircleDollarSign, Video } from "lucide-react"

const iconList = [Award, Sparkles, CircleDollarSign, Video]

export function WhyChooseGrid() {
  const { language } = useLanguage()
  const items = translations[language].whyChooseUs.items

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => {
        const mappedItem = {
          id: `why-${index}`,
          title: item.title,
          description: item.description,
          icon: iconList[index] || Award,
        }
        return <WhyChooseCard key={mappedItem.id} item={mappedItem} index={index} />
      })}
    </div>
  )
}

