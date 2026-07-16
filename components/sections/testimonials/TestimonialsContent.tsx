"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"
import { Star } from "lucide-react"

export function TestimonialsContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  const { language } = useLanguage()
  const t = translations[language].testimonials

  // Duplicate items for infinite marquee loop wrapping
  const marqueeItems = [...t.items, ...t.items, ...t.items]

  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const [isDragging, setIsDragging] = React.useState(false)
  const [startX, setStartX] = React.useState(0)
  const [scrollLeftState, setScrollLeftState] = React.useState(0)

  // Autoplay animation using requestAnimationFrame
  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationFrameId: number
    let lastTime = performance.now()
    const speed = 25 // Steady slow reading speed in px/sec

    const scroll = (time: number) => {
      if (!isPaused && !isDragging) {
        const delta = (time - lastTime) / 1000
        container.scrollLeft += speed * delta

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
    const walk = (x - startX) * 1.5
    container.scrollLeft = scrollLeftState - walk
  }

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setTimeout(() => setIsPaused(false), 2000)
    }
  }

  // Touch Swipe handlers
  const handleTouchStart = () => {
    setIsPaused(true)
  }

  const handleTouchEnd = () => {
    setTimeout(() => setIsPaused(false), 2000)
  }

  // Scroll wrapping loop listener
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
      <div className="text-center mb-10">
        <span className="text-xs font-bold tracking-wider text-[#C49B5E] uppercase bg-[#C49B5E]/10 px-4.5 py-1.5 rounded-full">
          {t.badge}
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
          {t.title}
        </h2>
      </div>

      {/* Testimonials Marquee Carousel */}
      <div className="relative w-full overflow-hidden py-4 bg-muted/10 border-y border-border/80">
        {/* Shadow Overlay Fades */}
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
          {marqueeItems.map((test, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.01, translateY: -2 }}
              className="w-[280px] md:w-[350px] p-6 rounded-3xl border border-[#EADFCB] bg-white shadow-sm flex flex-col gap-3 shrink-0 text-left transition-all duration-300"
            >
              {/* Rating stars */}
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(test.rating)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic flex-1">
                "{test.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border/40 pt-2 mt-1">
                <h4 className="font-bold text-xs md:text-sm text-foreground">{test.name}</h4>
                <p className="text-[10px] text-muted-foreground/80 font-medium">Verified Patient</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}