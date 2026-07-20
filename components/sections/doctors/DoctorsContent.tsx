"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { Calendar, Mail, Phone, Award, ShieldCheck, Clock, CreditCard, Stethoscope } from "lucide-react"

export function DoctorsContent({ desktop }: { desktop?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language].about
  const c = translations[language].contact

  return (
    <div className="flex flex-col items-center w-full">
      {/* Section Header */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">
          {t.badge}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
          {language === "en" ? "About Our Chief Dentist" : "हमारे मुख्य दंत चिकित्सक के बारे में"}
        </h2>
      </div>

      {/* Main Info Layout */}
      <div className={`grid grid-cols-1 ${desktop ? "md:grid-cols-12" : ""} gap-12 w-full max-w-6xl mx-auto items-start`}>
        {/* Left Column: Profile Card */}
        <div className={`${desktop ? "md:col-span-5" : "w-full"} flex flex-col items-center`}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[340px] aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary/20 bg-muted/40 shadow-xl group"
          >
            {/* Background decorative glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-50 z-10" />
            <Image
              src="/images/about/Profilepic_Anil.png"
              alt="Dr. Anil Prajapati"
              fill
              sizes="(max-w-768px) 340px, 450px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </motion.div>
        </div>

        {/* Right Column: Bio Details */}
        <div className={`${desktop ? "md:col-span-7" : "w-full"} flex flex-col gap-6 text-left`}>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <h3 className="text-3xl font-extrabold tracking-tight text-foreground"><span dangerouslySetInnerHTML={{ __html: t.title }} /></h3>
            <p className="text-lg font-semibold text-primary"><span dangerouslySetInnerHTML={{ __html: t.subtitle }} /></p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base text-muted-foreground leading-relaxed"
          >
            <span dangerouslySetInnerHTML={{ __html: t.description }} />
          </motion.p>

          <div className="h-px bg-border my-2" />

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-[#EADAA7] bg-[#FDF0CD]/60 shadow-sm"
            >
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-amber-950/10 flex items-center justify-center text-amber-950 shrink-0">
                <Award className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-amber-900/70 uppercase font-bold tracking-wider leading-none mb-0.5">Education</p>
                <p className="font-bold text-amber-950 text-xs md:text-base leading-tight">BDS (16 Yrs Exp.)</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-[#EADAA7] bg-[#FDF0CD]/60 shadow-sm"
            >
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-amber-950/10 flex items-center justify-center text-amber-950 shrink-0">
                <Stethoscope className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-amber-900/70 uppercase font-bold tracking-wider leading-none mb-0.5">Specialities</p>
                <p className="font-bold text-amber-950 text-[10px] md:text-sm line-clamp-1 leading-tight" title={t.speciality}>
                  {t.speciality}
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-[#EADAA7] bg-[#FDF0CD]/60 shadow-sm"
            >
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-amber-950/10 flex items-center justify-center text-amber-950 shrink-0">
                <Clock className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-amber-900/70 uppercase font-bold tracking-wider leading-none mb-0.5">Timings</p>
                <p className="font-bold text-amber-950 text-[10px] md:text-xs leading-tight">
                  10am - 2pm | 4pm - 8pm
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 md:gap-3 p-3 md:p-4 rounded-2xl border border-[#EADAA7] bg-[#FDF0CD]/60 shadow-sm"
            >
              <div className="h-8 w-8 md:h-10 md:w-10 rounded-xl bg-amber-950/10 flex items-center justify-center text-amber-950 shrink-0">
                <CreditCard className="h-4 w-4 md:h-5 md:w-5" />
              </div>
              <div>
                <p className="text-[9px] md:text-xs text-amber-900/70 uppercase font-bold tracking-wider leading-none mb-0.5">Consultation Fee</p>
                <p className="font-bold text-amber-950 text-[10px] md:text-xs leading-tight">₹200/- (Physical / VC)</p>
              </div>
            </motion.div>
          </div>

          {/* Direct contact links */}
          <div className="flex flex-col gap-3 mt-4 text-sm font-medium">
            <div className="flex items-center gap-2 text-foreground">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <span>{c.phoneDoctor}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <span>{c.phoneClinic} (Clinic Support)</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>{t.consultType}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}