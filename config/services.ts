import { ShieldPlus, Sparkles, Activity, Stethoscope, SmilePlus, Anchor, Baby, HeartPulse } from "lucide-react"

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: any
  highlight?: string
  ctaLabel: string
}

export const services: ServiceItem[] = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Comprehensive oral care, exams, and preventive treatments for long-term health.",
    icon: Stethoscope,
    ctaLabel: "Learn More",
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    description: "Professional deep cleaning to remove plaque and maintain healthy gums.",
    icon: Sparkles,
    ctaLabel: "Book Cleaning",
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Permanent, natural-looking tooth replacements for a confident smile.",
    icon: Anchor,
    highlight: "Popular",
    ctaLabel: "View Options",
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Painless, advanced therapy to save infected or damaged teeth.",
    icon: ShieldPlus,
    ctaLabel: "Learn More",
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Advanced laser treatments for a brighter, more radiant smile in one visit.",
    icon: SmilePlus,
    highlight: "Quick Results",
    ctaLabel: "Book Session",
  },
  {
    id: "braces-aligners",
    title: "Braces & Aligners",
    description: "Invisible and traditional orthodontic solutions for perfect alignment.",
    icon: Activity,
    ctaLabel: "Explore Aligners",
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle, stress-free dental care designed specifically for children.",
    icon: Baby,
    ctaLabel: "Learn More",
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Custom smile makeovers, veneers, and aesthetic treatments.",
    icon: HeartPulse,
    ctaLabel: "View Gallery",
  },
]
