import { ShieldCheck, Microscope, UserCheck, HeartHandshake, BadgeDollarSign, Sofa } from "lucide-react"

export interface WhyChooseItem {
  id: string
  title: string
  description: string
  icon: any
  highlight?: string
}

export const whyChooseUs: WhyChooseItem[] = [
  {
    id: "advanced-technology",
    title: "Advanced Technology",
    description: "State-of-the-art diagnostic and treatment tools for precise, painless care.",
    icon: Microscope,
    highlight: "State-of-the-art",
  },
  {
    id: "highly-sterilized",
    title: "Highly Sterilized Clinic",
    description: "Stringent hygiene protocols exceeding international safety standards.",
    icon: ShieldCheck,
  },
  {
    id: "experienced-specialists",
    title: "Experienced Specialists",
    description: "A dedicated team of top-tier professionals with decades of combined expertise.",
    icon: UserCheck,
    highlight: "15+ Years",
  },
  {
    id: "personalized-treatment",
    title: "Personalized Treatment",
    description: "Customized dental care plans tailored specifically to your unique needs.",
    icon: HeartHandshake,
  },
  {
    id: "transparent-pricing",
    title: "Transparent Pricing",
    description: "Clear, upfront costs with no hidden fees and flexible payment options.",
    icon: BadgeDollarSign,
  },
  {
    id: "comfortable-experience",
    title: "Comfortable Experience",
    description: "A relaxing, spa-like environment designed to ease anxiety and ensure comfort.",
    icon: Sofa,
  },
]
