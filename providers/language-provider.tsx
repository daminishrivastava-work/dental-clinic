"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

type Language = "en" | "hi"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en")
  const [showOverlay, setShowOverlay] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    } else {
      setShowOverlay(true)
    }
    setMounted(true)
  }, [])

  const setLanguage = (lang: Language) => {
    localStorage.setItem("preferred-language", lang)
    setLanguageState(lang)
    setShowOverlay(false)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {mounted && (
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-2xl"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 180 }}
                className="w-full max-w-lg mx-4 rounded-3xl border border-white/10 bg-gradient-to-b from-background/90 to-background/50 p-8 shadow-2xl text-center relative overflow-hidden backdrop-blur-md"
              >
                {/* Decorative background gradients */}
                <div className="absolute -left-12 -top-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* Logo */}
                <div className="relative mx-auto mb-6 h-20 w-20 rounded-2xl bg-primary/10 p-2 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Archana Dental Clinic Logo"
                    fill
                    sizes="80px"
                    className="object-contain p-1"
                    priority
                  />
                </div>

                <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-1">
                  Archana Dental Clinic
                </h1>
                <p className="text-sm text-primary font-medium tracking-wide uppercase mb-6">
                  & Implant Centre
                </p>

                <div className="h-px bg-border my-6" />

                <h2 className="text-lg font-semibold mb-2 text-foreground">Select Your Language</h2>
                <p className="text-sm text-muted-foreground mb-8">अपनी पसंदीदा भाषा का चयन करें</p>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setLanguage("en")}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-background hover:bg-primary/5 hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    <span className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      English
                    </span>
                    <span className="text-xs text-muted-foreground">Continue in English</span>
                  </button>

                  <button
                    onClick={() => setLanguage("hi")}
                    className="group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-background hover:bg-primary/5 hover:border-primary transition-all duration-300 shadow-sm"
                  >
                    <span className="text-xl font-bold mb-1 text-foreground group-hover:text-primary transition-colors">
                      हिंदी
                    </span>
                    <span className="text-xs text-muted-foreground">हिंदी में जारी रखें</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
