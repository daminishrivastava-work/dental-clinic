"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/utils"
import { motion } from "framer-motion"

interface NavItemProps {
  title: string
  href: string
  onClick?: () => void
  mobile?: boolean
  active?: boolean
}

export function NavItem({ title, href, onClick, mobile, active }: NavItemProps) {
  const pathname = usePathname()
  const isActive = active !== undefined ? active : pathname === href
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative transition-colors hover:text-accent",
        mobile ? "block py-4 text-2xl font-medium" : "text-sm font-medium",
        isActive 
          ? "text-accent font-semibold" 
          : "text-muted-foreground"
      )}
    >
      {title}
      {isActive && !mobile && (
        <motion.div
          layoutId="nav-indicator"
          className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-accent"
          initial={false}
          transition={{ type: "spring", stiffness: 350, damping: 30 }}
        />
      )}
    </Link>
  )
}
