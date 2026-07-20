"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations, nearbyLocalities } from "@/constants/translations"
import { MapPin, Phone, Mail, Clock, CreditCard, Map } from "lucide-react"

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507A3.003 3.003 0 0 0 .503 6.163C0 8.044 0 12 0 12s0 3.956.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.956 24 12 24 12s0-3.956-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

export function ContactContent({ desktop }: { desktop?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language].contact

  const contactData = [
    { id: "address", label: t.addressLabel, value: t.addressValue, icon: MapPin },
    { id: "phone", label: t.phoneLabel, value: `${t.phoneDoctor} \n ${t.phoneClinic}`, icon: Phone },
    { id: "email", label: t.emailLabel, value: t.emailValue, icon: Mail },
    { id: "hours", label: t.hoursLabel, value: t.hoursValue, icon: Clock },
    { id: "fee", label: t.feesLabel, value: t.feesValue, icon: CreditCard },
  ]

  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">
          {t.badge}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
          {t.title}
        </h2>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full items-start">
        
        {/* Left Column: Cards */}
        <div className="flex flex-col gap-6 w-full">
          {contactData.map((info, i) => {
            const Icon = info.icon
            return (
              <motion.div 
                key={info.id} 
                initial={{ opacity: 0, x: -20 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.05 }} 
                className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-background/50 backdrop-blur-sm"
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">{info.label}</p>
                  <p className="font-bold text-foreground whitespace-pre-line text-sm md:text-base leading-relaxed">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            )
          })}

          {/* YouTube Social Card */}
          <motion.a 
            href="https://www.youtube.com/@anilprajapatinzs/shorts"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="flex items-center gap-4 p-5 rounded-2xl border border-red-500/20 bg-red-500/5 hover:bg-red-500/10 hover:border-red-500/35 transition-colors cursor-pointer group"
          >
            <div className="h-12 w-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
              <YoutubeIcon className="h-6 w-6 fill-current" />
            </div>
            <div>
              <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-1">
                {t.youtubeLabel}
              </p>
              <p className="font-bold text-foreground text-sm md:text-base group-hover:text-red-500 transition-colors">
                {t.youtubeText}
              </p>
            </div>
          </motion.a>
        </div>

        {/* Right Column: Google Maps & Localities */}
        <div className="flex flex-col gap-6 w-full">
          {/* Map Frame Card */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            className="rounded-3xl border border-border bg-muted/20 p-2 overflow-hidden flex flex-col h-full min-h-[320px] shadow-sm relative group"
          >
            <div className="w-full h-full min-h-[300px] rounded-2xl overflow-hidden bg-muted relative">
              <iframe 
                src="https://maps.google.com/maps?q=Archana%20Dental%20Clinic%20%26%20Implant%20centre%20Umaria%20Fazilganj&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex items-center justify-between p-3">
              <span className="text-xs text-muted-foreground font-medium">{t.directionsLabel}</span>
              <a 
                href="https://maps.app.goo.gl/yB1YCTBXpCgpqXYEA"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary font-bold hover:underline flex items-center gap-1"
              >
                <Map className="h-3.5 w-3.5" />
                {t.viewMap}
              </a>
            </div>
          </motion.div>

          {/* Localities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-border p-6 bg-background/50 backdrop-blur-sm shadow-sm"
          >
            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">
              {t.localitiesLabel}
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {nearbyLocalities.map((loc) => (
                <div 
                  key={loc.id} 
                  className="flex items-center gap-2 p-2 rounded-xl bg-muted/30 border border-border/50 text-xs font-semibold text-muted-foreground hover:text-foreground hover:bg-primary/5 hover:border-primary/20 transition-all"
                >
                  <div className="h-2 w-2 rounded-full bg-primary/60" />
<<<<<<< HEAD
                  <span className="truncate" dangerouslySetInnerHTML={{ __html: language === "en" ? loc.en : loc.hi }} />
=======
                  <span className="truncate">{language === "en" ? loc.en : loc.hi}</span>
>>>>>>> 7473025b3d3335fc59674e94f6a807049427e64b
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}