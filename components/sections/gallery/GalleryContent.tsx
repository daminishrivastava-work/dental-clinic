"use client"

import * as React from "react"
import Image from "next/image"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { motion, AnimatePresence } from "framer-motion"

export function GalleryContent({ desktop }: { desktop?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language].gallery

  const images = [
    { src: "/images/banner/1.png", alt: "Clinic Interior 1", caption: language === "en" ? "Modern Dental Operatory" : "आधुनिक डेंटल ऑपरेटरी" },
    { src: "/images/banner/2.jpeg", alt: "Clinic Interior 2", caption: language === "en" ? "Advanced Implant Equipment" : "उन्नत इम्प्लांट उपकरण" },
    { src: "/images/banner/3.jpeg", alt: "Clinic Interior 3", caption: language === "en" ? "State-of-the-Art Diagnostics" : "अत्याधुनिक निदान केंद्र" },
    { src: "/images/banner/4.jpeg", alt: "Clinic Entrance & Lobby", caption: language === "en" ? "Sterilized Clinical Environment" : "सटीक स्टेरलाइज्ड वातावरण" },
  ]

  // Duplicate items for seamless infinite loop
  const marqueeItems = [...images, ...images, ...images]

  const [selectedImage, setSelectedImage] = React.useState<typeof images[0] | null>(null)
  
  // Drag and Autoplay state logic
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeftState, setScrollLeftState] = React.useState(0)

  // Autoplay loop using requestAnimationFrame for smooth movement
  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let lastTime = performance.now()
    const speed = 50 // Pixels per second

    const scroll = (time: number) => {
      if (!isPaused && !isDragging) {
        const delta = (time - lastTime) / 1000
        container.scrollLeft += speed * delta

        // Seamless wrap around loop
        const maxScroll = container.scrollWidth / 3
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft -= maxScroll
        }
      }
      lastTime = time
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isPaused, isDragging])

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = containerRef.current
    if (!container) return
    setIsDragging(true)
    setIsPaused(true)
    setStartX(e.pageX - container.offsetLeft)
    setScrollLeftState(container.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const container = containerRef.current
    if (!container) return
    const x = e.pageX - container.offsetLeft
    const walk = (x - startX) * 1.5 // Drag scroll speed multiplier
    container.scrollLeft = scrollLeftState - walk
  }

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      // Resume autoplay after a tiny delay
      setTimeout(() => setIsPaused(false), 1500)
    }
  }

  // Touch Handlers for mobile swipe scroll
  const handleTouchStart = () => {
    setIsPaused(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 1500)
  }

  const handleScroll = () => {
    const container = containerRef.current
    if (!container) return
    const maxScroll = container.scrollWidth / 3
    if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft -= maxScroll
    } else if (container.scrollLeft <= 5) {
      container.scrollLeft += maxScroll
    }
  }

  return (
    <div className="w-full flex flex-col items-center overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />

      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
          {t.title}
        </h2>
        <p className="text-muted-foreground mt-2 max-w-2xl text-base">
          {t.subtitle}
        </p>
      </div>

      {/* Physical Scrollable Autoplay Carousel Container */}
      <div className="relative w-full overflow-hidden py-4 bg-muted/20 border-y border-border">
        {/* Left & Right subtle fade overlays for glass look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          className="flex gap-6 px-4 overflow-x-auto no-scrollbar select-none cursor-grab active:cursor-grabbing"
        >
          {marqueeItems.map((img, i) => (
            <motion.div 
              key={i} 
              onClick={() => {
                if (!isDragging) {
                  setSelectedImage(img)
                }
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative rounded-[2rem] overflow-hidden border border-border bg-background shadow-md group shrink-0 ${
                desktop 
                  ? "w-[420px] aspect-[16/10]" 
                  : "w-[280px] aspect-[16/10]"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={desktop ? "420px" : "280px"}
                className="object-cover transition-transform duration-500 group-hover:scale-103 pointer-events-none"
              />
              {/* Overlay Caption on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10 text-left pointer-events-none">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  Archana Dental Clinic
                </span>
                <h4 className="text-white font-bold text-lg leading-tight">
                  {img.caption}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / pop-out Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full aspect-[16/10] bg-background/5 p-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors flex items-center justify-center cursor-pointer font-bold border border-white/10"
              >
                ✕
              </button>
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/20">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
                {/* Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-left">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-1 inline-block">
                    Archana Dental Clinic
                  </span>
                  <h3 className="text-white font-bold text-xl">{selectedImage.caption}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}