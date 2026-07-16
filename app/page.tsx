import { Hero } from "@/components/hero"
import { Services } from "@/components/sections/services"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
import { Doctors } from "@/components/sections/doctors"
import { Testimonials } from "@/components/sections/testimonials"
import { Gallery } from "@/components/sections/gallery"
import { AppointmentCta } from "@/components/sections/appointment-cta"
import { Faq } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col w-full gap-16 md:gap-24 mb-16">
      <Hero />
      <Doctors />
      <Gallery />
      <Services />
      <Contact />
      <WhyChooseUs />
      <Testimonials />
      <AppointmentCta />
      <Faq />
    </div>
  )
}
