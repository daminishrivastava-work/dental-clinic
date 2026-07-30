"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { Calendar, MessageSquare } from "lucide-react"
import { useLanguage } from "@/providers/language-provider"
import { translations } from "@/constants/translations"

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  mobile?: boolean
  onWhatsAppClick?: () => void
}

export function CTAButton({ variant = "primary", mobile, className, onWhatsAppClick, ...props }: CTAButtonProps) {
  const { language } = useLanguage()
  const t = translations[language].nav
  const isPrimary = variant === "primary"

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isPrimary) {
      window.open("https://calendar.app.google/fM6aH2NnGysJswex7", "_blank", "noopener,noreferrer")
    } else if (onWhatsAppClick) {
      onWhatsAppClick()
    } else if (props.onClick) {
      props.onClick(e)
    }
  }

  return (
    <Button
      className={cn(
        "rounded-full font-medium transition-all duration-300 cursor-pointer",
        isPrimary 
          ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg" 
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border",
        mobile ? "w-full py-6 text-lg" : "px-6",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {isPrimary ? (
        <>
          <Calendar className={cn("mr-2", mobile ? "h-5 w-5" : "h-4 w-4")} />
          {t.bookAppointment}
        </>
      ) : (
        <>
          <MessageSquare className={cn("mr-2", mobile ? "h-5 w-5" : "h-4 w-4")} />
          {t.chatWhatsApp}
        </>
      )}
    </Button>
  )
}

