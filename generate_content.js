const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, 'components', 'sections');

// 1. DoctorsContent
const doctors = `"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { doctors } from "@/config/doctors"

export function DoctorsContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">Our Team</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Specialists</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
        {doctors.map((doc, i) => {
          const Icon = doc.icon;
          return (
            <motion.div key={doc.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center text-center p-6 rounded-3xl border bg-background/50 shadow-sm">
              <div className="h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Icon className="h-10 w-10" />
              </div>
              <h3 className="text-xl font-bold">{doc.name}</h3>
              <p className="text-primary font-medium text-sm mt-1">{doc.role}</p>
              <p className="text-muted-foreground mt-2">{doc.specialization}</p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'doctors', 'DoctorsContent.tsx'), doctors);

// 2. TestimonialsContent
const testimonials = `"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { testimonials } from "@/config/testimonials"
import { Star } from "lucide-react"

export function TestimonialsContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <div className="flex flex-col items-center bg-muted/30 rounded-3xl py-16 px-4 md:px-8">
      <div className="text-center mb-12">
        <span className="text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 px-4 py-2 rounded-full">Patient Stories</span>
        <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Patients Say</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
        {testimonials.map((test, i) => (
          <motion.div key={test.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-8 rounded-3xl border bg-background shadow-sm flex flex-col gap-4">
            <div className="flex gap-1 text-yellow-400">
              {[...Array(test.rating)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="text-muted-foreground italic flex-1">"{test.text}"</p>
            <h4 className="font-semibold">{test.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'testimonials', 'TestimonialsContent.tsx'), testimonials);

// 3. GalleryContent
const gallery = `"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { gallery } from "@/config/gallery"
import { ImageIcon } from "lucide-react"

export function GalleryContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Clinic Gallery</h2>
        <p className="text-muted-foreground mt-2">A glimpse into our premium facilities</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-5xl mx-auto">
        {gallery.map((item, i) => (
          <motion.div key={item.id} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative aspect-video rounded-3xl bg-muted/50 overflow-hidden flex items-center justify-center border">
            <ImageIcon className="h-12 w-12 text-muted-foreground/30" />
            <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-sm text-primary">{item.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'gallery', 'GalleryContent.tsx'), gallery);

// 4. AppointmentCTAContent
const appointment = `"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { CTAButton } from "@/components/navigation/cta-button"

export function AppointmentCtaContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full max-w-5xl mx-auto bg-primary rounded-3xl p-8 md:p-16 text-primary-foreground text-center shadow-xl flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready for a Brighter Smile?</h2>
      <p className="text-primary-foreground/80 mb-8 max-w-2xl text-lg">Book your consultation today and discover how our premium dental care can transform your health and confidence.</p>
      <CTAButton variant="secondary" className="bg-background text-foreground hover:bg-background/90" mobile={mobile} />
    </motion.div>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'appointment-cta', 'AppointmentCtaContent.tsx'), appointment);

// 5. FaqContent
const faq = `"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { faqs } from "@/config/faq"
import { Plus } from "lucide-react"

export function FaqContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <div className="flex flex-col items-center max-w-3xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
      </div>
      <div className="w-full flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <motion.div key={faq.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="border rounded-2xl p-6 bg-background hover:border-primary/30 transition-colors group cursor-pointer">
            <div className="flex justify-between items-center gap-4">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <Plus className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            {/* Simple static answer for now to keep components light */}
            <p className="text-muted-foreground mt-2 pr-8">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'faq', 'FaqContent.tsx'), faq);

// 6. ContactContent
const contact = `"use client"
import * as React from "react"
import { motion } from "framer-motion"
import { contactInfo } from "@/config/contact"

export function ContactContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col gap-6">
          {contactInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <motion.div key={info.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex items-center gap-4 p-4 rounded-2xl border bg-background/50">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                  <p className="font-semibold">{info.value}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-3xl border bg-muted/30 p-8 flex flex-col justify-center text-center">
          <p className="text-muted-foreground mb-4">Interactive map or contact form placeholder</p>
          <div className="h-48 rounded-2xl bg-background border flex items-center justify-center text-muted-foreground/50">
            Map Placeholder
          </div>
        </motion.div>
      </div>
    </div>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'contact', 'ContactContent.tsx'), contact);

// 7. FooterContent
const footer = `"use client"
import * as React from "react"

export function FooterContent({ desktop, mobile }: { desktop?: boolean, mobile?: boolean }) {
  return (
    <footer className="w-full border-t bg-muted/20 pb-8 pt-16 mt-auto">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-bold">D</span>
              </div>
              <span className="text-xl font-semibold">Dental AI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Premium healthcare for the modern era. Designed for comfort, built for scale.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Home</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Services</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">About Us</span>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold mb-2">Legal</h4>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Privacy Policy</span>
            <span className="text-sm text-muted-foreground hover:text-foreground cursor-pointer">Terms of Service</span>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Dental AI Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}`;
fs.writeFileSync(path.join(baseDir, 'footer', 'FooterContent.tsx'), footer);

console.log("Content generation complete.");
