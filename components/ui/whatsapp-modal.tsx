"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageSquare, Phone } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"

interface WhatsAppModalProps {
  isOpen: boolean
  onClose: () => void
  defaultConcern?: string
}

export function WhatsAppModal({ isOpen, onClose, defaultConcern = "" }: WhatsAppModalProps) {
  const { language } = useLanguage()
  const t = translations[language].whatsappModal

  const [formData, setFormData] = React.useState({
    name: "",
    slot: "",
    concern: defaultConcern,
  })

  // Sync default concern if it changes
  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, concern: defaultConcern }))
    }
  }, [defaultConcern, isOpen])


  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text = language === "en" 
      ? `Hello Archana Dental Clinic & Implant Centre,

I would like to request an appointment:
• Name: ${formData.name || "Not Specified"}
• Preferred Slot: ${formData.slot || "Anytime"}
• Dental Concern: ${formData.concern || "General consultation"}
• Preferred Chat Language: English

Thank you.`
      : `नमस्ते अर्चना डेंटल क्लीनिक एंड इंप्लांट सेंटर,

मैं एक अपॉइंटमेंट बुक करना चाहता हूँ:
• नाम: ${formData.name || "निर्दिष्ट नहीं"}
• पसंदीदा समय: ${formData.slot || "किसी भी समय"}
• समस्या/पूछताछ: ${formData.concern || "सामान्य परामर्श"}
• चैट के लिए पसंदीदा भाषा: हिंदी

धन्यवाद।`

    const url = `https://wa.me/919039112260?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    onClose()
  }

  const handleSkip = () => {
    const text = language === "en"
      ? "Hello Dr. Anil, I would like to consult with you regarding dental care."
      : "नमस्ते डॉ. अनिल, मैं दंत चिकित्सा के संबंध में आपसे परामर्श करना चाहता हूँ।"
    const url = `https://wa.me/919039112260?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="w-full max-w-lg rounded-3xl border border-border bg-background p-6 md:p-8 shadow-2xl pointer-events-auto relative overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500">
                    <MessageSquare className="h-5 w-5 fill-current" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg md:text-xl text-foreground">{t.title}</h3>
                    <p className="text-xs text-muted-foreground">wa.me/919039112260</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="rounded-full p-2 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                {t.description}
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {t.formName}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.formNamePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {t.formSlot}
                  </label>
                  <input
                    type="text"
                    placeholder={t.formSlotPlaceholder}
                    value={formData.slot}
                    onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {t.formConcern}
                  </label>
                  <input
                    type="text"
                    placeholder={t.formConcernPlaceholder}
                    value={formData.concern}
                    onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                    className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold py-3 text-sm shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {t.submitBtn}
                  </button>
                </div>
              </form>

              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-border"></div>
                <span className="flex-shrink mx-4 text-xs text-muted-foreground uppercase font-medium">Or</span>
                <div className="flex-grow border-t border-border"></div>
              </div>

              <button
                onClick={handleSkip}
                className="w-full rounded-xl border border-border bg-muted/20 hover:bg-muted/40 text-muted-foreground hover:text-foreground font-semibold py-3 text-sm transition-colors flex items-center justify-center gap-2"
              >
                {t.skipBtn}
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
