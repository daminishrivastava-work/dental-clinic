"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface StatProps {
  value: string
  label: string
}

export function HeroStats({ stats }: { stats: StatProps[] }) {
  return (
    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:mt-16">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
          className="flex flex-col gap-y-2 border-l-2 border-primary/20 pl-4"
        >
          <dt className="text-sm font-medium text-muted-foreground">{stat.label}</dt>
          <dd className="text-2xl font-semibold tracking-tight text-foreground">{stat.value}</dd>
        </motion.div>
      ))}
    </div>
  )
}
