"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { WhatsAppModal } from "@/components/ui/whatsapp-modal"

interface ServiceCardProps {
  service: {
    id: string
    title: string
    description: string
    icon: any
    highlight?: string
    ctaLabel: string
  }
  index: number
}

// Color variations mapped from the UI inspo images (Yellow, Purple, Blue, Green pastels)
const cardThemes = [
  {
    bg: "bg-[#FDF0CD]/70 hover:bg-[#FDF0CD] border-[#EADAA7]/50 hover:border-[#EADAA7]",
    text: "text-amber-950",
    mutedText: "text-amber-900/70",
    iconBg: "bg-amber-950/10 text-amber-950",
    accentBg: "bg-amber-950/10 text-amber-950",
  },
  {
    bg: "bg-[#F0E5FC]/70 hover:bg-[#F0E5FC] border-[#D8C2F2]/50 hover:border-[#D8C2F2]",
    text: "text-purple-950",
    mutedText: "text-purple-900/70",
    iconBg: "bg-purple-950/10 text-purple-950",
    accentBg: "bg-purple-950/10 text-purple-950",
  },
  {
    bg: "bg-[#DDF0FF]/70 hover:bg-[#DDF0FF] border-[#C3DCF2]/50 hover:border-[#C3DCF2]",
    text: "text-blue-950",
    mutedText: "text-blue-900/70",
    iconBg: "bg-blue-950/10 text-blue-950",
    accentBg: "bg-blue-950/10 text-blue-950",
  },
  {
    bg: "bg-[#E4F0DB]/70 hover:bg-[#E4F0DB] border-[#C9DCBC]/50 hover:border-[#C9DCBC]",
    text: "text-emerald-950",
    mutedText: "text-emerald-900/70",
    iconBg: "bg-emerald-950/10 text-emerald-950",
    accentBg: "bg-emerald-950/10 text-emerald-950",
  },
]

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = service.icon
  const [isWhatsAppOpen, setIsWhatsAppOpen] = React.useState(false)
  const theme = cardThemes[index % cardThemes.length]

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setIsWhatsAppOpen(true)}
        className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border p-8 shadow-sm transition-all hover:shadow-lg cursor-pointer ${theme.bg}`}
      >
        <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-black/5 transition-transform duration-500 group-hover:scale-150" />
        
        <div className="relative z-10 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shrink-0 ${theme.iconBg}`}>
              <Icon className="h-7 w-7" />
            </div>
            {service.highlight && (
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${theme.accentBg}`}>
                {service.highlight}
              </span>
            )}
          </div>

          <div className="space-y-3">
<<<<<<< HEAD
            <h3 className={`text-xl font-bold tracking-tight ${theme.text}`}><span dangerouslySetInnerHTML={{ __html: service.title }} /></h3>
=======
            <h3 className={`text-xl font-bold tracking-tight ${theme.text}`}>{service.title}</h3>
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
            <p className={`leading-relaxed text-sm ${theme.mutedText}`}>
              {service.description}
            </p>
          </div>
        </div>

        <div className={`relative z-10 mt-8 flex items-center text-sm font-bold ${theme.text}`}>
          <span className="group-hover:mr-2 transition-all">{service.ctaLabel}</span>
          <ArrowRight className="h-4 w-4 opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
        </div>
      </motion.div>

      <WhatsAppModal 
        isOpen={isWhatsAppOpen} 
        onClose={() => setIsWhatsAppOpen(false)} 
        defaultConcern={service.title} 
      />
    </>
  )
}


