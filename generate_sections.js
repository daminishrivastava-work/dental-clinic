const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'components', 'sections');
const configDir = path.join(__dirname, 'config');

if (!fs.existsSync(baseDir)) fs.mkdirSync(baseDir, { recursive: true });
if (!fs.existsSync(configDir)) fs.mkdirSync(configDir, { recursive: true });

// --- CONFIG FILES ---
const configs = {
  'doctors.ts': `import { Stethoscope, Activity, Star } from "lucide-react";
export const doctors = [
  { id: "dr-smith", name: "Dr. Sarah Smith", role: "Chief Dental Surgeon", specialization: "Implantology", icon: Stethoscope },
  { id: "dr-jones", name: "Dr. Michael Jones", role: "Orthodontist", specialization: "Braces & Aligners", icon: Activity },
  { id: "dr-williams", name: "Dr. Emma Williams", role: "Pediatric Dentist", specialization: "Child Dental Care", icon: Star },
];`,
  'testimonials.ts': `export const testimonials = [
  { id: "1", name: "John Doe", text: "Best dental experience I've ever had. Painless and professional.", rating: 5 },
  { id: "2", name: "Jane Smith", text: "The clinic feels like a premium spa. Highly recommend for anxious patients.", rating: 5 },
  { id: "3", name: "Robert Johnson", text: "Got my implants here. Flawless procedure and great aftercare.", rating: 5 },
];`,
  'gallery.ts': `export const gallery = [
  { id: "g1", title: "Modern Reception", category: "Clinic" },
  { id: "g2", title: "Advanced Treatment Room", category: "Equipment" },
  { id: "g3", title: "Sterilization Center", category: "Hygiene" },
  { id: "g4", title: "Patient Lounge", category: "Comfort" },
];`,
  'faq.ts': `export const faqs = [
  { id: "f1", question: "Do you accept walk-in appointments?", answer: "We recommend booking in advance to ensure no waiting time, but we do accommodate dental emergencies." },
  { id: "f2", question: "Is the teeth whitening process painful?", answer: "Not at all. We use advanced laser technology that minimizes sensitivity." },
  { id: "f3", question: "What are your clinic hours?", answer: "We are open Monday to Saturday, from 9 AM to 8 PM." },
  { id: "f4", question: "Do you offer flexible payment plans?", answer: "Yes, we provide EMI options and transparent pricing for larger treatments." },
];`,
  'contact.ts': `import { MapPin, Phone, Mail, Clock } from "lucide-react";
export const contactInfo = [
  { id: "address", label: "Address", value: "123 Premium Dental Way, Mumbai, India", icon: MapPin },
  { id: "phone", label: "Phone", value: "+91 98765 43210", icon: Phone },
  { id: "email", label: "Email", value: "hello@dentalai.com", icon: Mail },
  { id: "hours", label: "Hours", value: "Mon - Sat: 9 AM - 8 PM", icon: Clock },
];`,
};

for (const [file, content] of Object.entries(configs)) {
  fs.writeFileSync(path.join(configDir, file), content);
}

// --- SECTIONS ---
const sections = ['doctors', 'testimonials', 'gallery', 'appointment-cta', 'faq', 'contact', 'footer'];

sections.forEach(section => {
  const dir = path.join(baseDir, section);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  
  const camelCase = section.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');
  
  // Create index.tsx
  const indexContent = `"use client"
import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Desktop${camelCase} } from "./Desktop${camelCase}"
import { Mobile${camelCase} } from "./Mobile${camelCase}"

export function ${camelCase}() {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="min-h-[300px] invisible" />
  return isDesktop ? <Desktop${camelCase} /> : <Mobile${camelCase} />
}`;
  fs.writeFileSync(path.join(dir, 'index.tsx'), indexContent);

  // Desktop Component
  const desktopContent = `"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ${camelCase}Content } from "./${camelCase}Content"

export function Desktop${camelCase}() {
  return (
    <SectionWrapper className="hidden md:block py-24">
      <${camelCase}Content desktop />
    </SectionWrapper>
  )
}`;
  fs.writeFileSync(path.join(dir, `Desktop${camelCase}.tsx`), desktopContent);

  // Mobile Component
  const mobileContent = `"use client"
import * as React from "react"
import { SectionWrapper } from "@/components/layout/section-wrapper"
import { ${camelCase}Content } from "./${camelCase}Content"

export function Mobile${camelCase}() {
  return (
    <SectionWrapper className="block md:hidden py-16">
      <${camelCase}Content mobile />
    </SectionWrapper>
  )
}`;
  fs.writeFileSync(path.join(dir, `Mobile${camelCase}.tsx`), mobileContent);
});

console.log("Scaffold complete.");
