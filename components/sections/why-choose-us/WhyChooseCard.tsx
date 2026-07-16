"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { WhyChooseItem } from "@/config/whyChooseUs"

interface WhyChooseCardProps {
  item: WhyChooseItem
  index: number
}

export function WhyChooseCard({ item, index }: WhyChooseCardProps) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col items-center text-center gap-6 overflow-hidden rounded-3xl border bg-background/50 p-8 shadow-sm backdrop-blur-md transition-all hover:bg-background hover:shadow-xl hover:border-primary/20"
    >
      {/* Soft background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-110">
        <Icon className="h-10 w-10" />
      </div>

      <div className="relative z-10 space-y-3">
        <div className="flex flex-col items-center gap-2">
          <h3 className="text-xl font-bold tracking-tight">{item.title}</h3>
          {item.highlight && (
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
              {item.highlight}
            </span>
          )}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}
