"use client"
import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { ChevronDown } from "lucide-react"

export function FaqContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language].faq
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">
          {t.badge}
        </span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
          {t.title}
        </h2>
      </div>
      <div className="w-full flex flex-col gap-4">
        {t.items.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.05 }} 
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="border border-border rounded-2xl p-6 bg-background hover:border-primary/30 transition-colors group cursor-pointer"
            >
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-muted-foreground group-hover:text-primary transition-colors"
                >
                  <ChevronDown className="h-5 w-5" />
                </motion.div>
              </div>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground mt-4 pr-8 text-sm leading-relaxed border-t border-border pt-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}