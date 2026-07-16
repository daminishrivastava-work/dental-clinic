"use client"

import * as React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface HeroIllustrationProps {
  onWhatsAppClick?: () => void
}

const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.516 0-9.387.507A3.003 3.003 0 0 0 .503 6.163C0 8.044 0 12 0 12s0 3.956.503 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.507 9.387.507 9.387.507s7.517 0 9.387-.507a3.003 3.003 0 0 0 2.11-2.11C24 15.956 24 12 24 12s0-3.956-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.114-2.903-6.989-1.873-1.873-4.353-2.903-6.992-2.905-5.437 0-9.86 4.417-9.864 9.861-.001 1.705.452 3.371 1.31 4.842l-.994 3.63 3.754-.986zm11.332-6.52c-.31-.155-1.838-.908-2.11-.998-.27-.099-.467-.148-.665.148-.197.297-.765.986-.938 1.183-.173.197-.346.223-.655.068-.31-.155-1.307-.482-2.49-1.537-.92-.821-1.542-1.836-1.722-2.146-.18-.31-.019-.477.136-.631.14-.139.31-.361.465-.542.155-.18.207-.31.31-.517.103-.207.052-.387-.026-.542-.078-.155-.665-1.602-.912-2.197-.24-.578-.48-.5-.665-.51-.173-.008-.371-.01-.57-.01-.197 0-.518.074-.79.371-.271.297-1.036 1.012-1.036 2.47s1.06 2.859 1.209 3.058c.148.197 2.085 3.184 5.05 4.467.705.305 1.256.488 1.684.624.708.226 1.353.194 1.863.118.568-.084 1.838-.752 2.097-1.442.26-.69.26-1.282.182-1.402-.078-.12-.283-.197-.593-.352z"/>
  </svg>
)

export function HeroIllustration({ onWhatsAppClick }: HeroIllustrationProps) {
  const handleWhatsApp = () => {
    if (onWhatsAppClick) {
      onWhatsAppClick()
    } else {
      window.open("https://wa.me/919039112260", "_blank")
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center gap-6 w-full max-w-sm mx-auto"
    >
      {/* Decorative background glow blobs */}
      <div className="absolute inset-0 flex items-center justify-center -z-10 pointer-events-none">
        <div className="h-[380px] w-[380px] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-[280px] w-[280px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      {/* 1. Logo Container (Aligned Upwards) */}
      <div className="relative h-36 w-72 md:h-40 md:w-80 -mt-12 mb-2 transition-transform hover:scale-102 duration-300">
        <Image
          src="/images/logo.png"
          alt="Archana Dental Clinic Logo"
          fill
          sizes="320px"
          className="object-contain drop-shadow-sm"
          priority
        />
      </div>

      {/* 2. Services scanned catalog - complete image visible, always larger than logo */}
      <div className="relative w-full max-w-sm aspect-[4/3] rounded-3xl border border-border/80 bg-white p-4 shadow-lg hover:shadow-xl transition-shadow group">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-amber-500/5 via-transparent to-primary/5 pointer-events-none" />
        <div className="relative w-full h-full">
          <Image
            src="/images/about/services.png"
            alt="Services Brochure"
            fill
            sizes="(max-w-768px) 100vw, 400px"
            className="object-contain transition-transform duration-500 group-hover:scale-101"
            priority
          />
        </div>
      </div>

      {/* 3. YouTube and WhatsApp Icons right below the image */}
      <div className="flex items-center gap-6 mt-2">
        {/* YouTube Link */}
        <a
          href="https://www.youtube.com/@anilprajapatinzs/shorts"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF0000]/10 text-[#FF0000] border border-[#FF0000]/20 shadow-md hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Subscribe on YouTube"
        >
          <YoutubeIcon className="h-6 w-6" />
        </a>

        {/* WhatsApp Modal Trigger */}
        <button
          onClick={handleWhatsApp}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 shadow-md hover:bg-[#25D366] hover:text-white hover:border-[#25D366] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </button>
      </div>
    </motion.div>
  )
}
