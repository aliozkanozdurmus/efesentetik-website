"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import SectionTitle from "./section-title"

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Animation for contact form
  const formOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1])
  const formScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-navy-50/50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-red-200/30 blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-navy-300/20 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionTitle title="İletişim" subtitle="Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium gradient-text">Adres</p>
                    <p className="text-muted-foreground">
                      Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8,
                      <br />
                      Şehitkamil / Gaziantep
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium gradient-text">Telefon</p>
                    <p className="text-muted-foreground">+90 342 360 58 58</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium gradient-text">E-posta</p>
                    <p className="text-muted-foreground">info@tunasentetik.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium gradient-text">Çalışma Saatleri</p>
                    <p className="text-muted-foreground">
                      Pazartesi - Cuma: 08:30 - 18:00
                      <br />
                      Cumartesi: 09:00 - 13:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">Harita</h3>
              <div className="aspect-video bg-white rounded-lg border border-navy-100 overflow-hidden shadow-lg">
                {/* Replace with actual Google Maps embed */}
                <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
                  <p className="text-muted-foreground">Google Harita Yerleşimi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border border-navy-100 fancy-border"
            style={{ opacity: formOpacity, scale: formScale }}
          >
            <h3 className="text-2xl font-bold mb-6 gradient-text">İletişim Formu</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ad Soyad
                  </label>
                  <Input id="name" placeholder="Ad Soyad" className="border-navy-200 focus:border-navy-400" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta"
                    className="border-navy-200 focus:border-navy-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </label>
                <Input id="phone" placeholder="Telefon" className="border-navy-200 focus:border-navy-400" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Konu
                </label>
                <Input id="subject" placeholder="Konu" className="border-navy-200 focus:border-navy-400" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  placeholder="Mesajınız"
                  rows={5}
                  className="border-navy-200 focus:border-navy-400"
                />
              </div>
              <Button className="w-full gradient-bg-secondary text-white hover:opacity-90 button-3d">
                <span className="relative z-10">Gönder</span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
