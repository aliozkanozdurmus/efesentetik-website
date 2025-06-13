"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Contact() {
  return (
    <section id="iletisim" className="py-20 bg-brown-50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-brown-200/30 blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-brown-300/20 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="mx-auto max-w-[58rem] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-brown-800">İletişim</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-brown-800">İletişim Bilgileri</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p className="text-muted-foreground">
                      Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8,
                      <br />
                      Şehitkamil / Gaziantep
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <p className="text-muted-foreground">+90 342 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">E-posta</p>
                    <p className="text-muted-foreground">info@efesentetik.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Çalışma Saatleri</p>
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
              <h3 className="text-2xl font-bold mb-4 text-brown-800">Harita</h3>
              <div className="aspect-video bg-white rounded-lg border border-brown-100 overflow-hidden">
                {/* Replace with actual Google Maps embed */}
                <div className="w-full h-full bg-brown-100 flex items-center justify-center">
                  <p className="text-muted-foreground">Google Harita Yerleşimi</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-brown-100"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-brown-800">İletişim Formu</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ad Soyad
                  </label>
                  <Input id="name" placeholder="Ad Soyad" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    E-posta
                  </label>
                  <Input id="email" type="email" placeholder="E-posta" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </label>
                <Input id="phone" placeholder="Telefon" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Konu
                </label>
                <Input id="subject" placeholder="Konu" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesaj
                </label>
                <Textarea id="message" placeholder="Mesajınız" rows={5} />
              </div>
              <Button className="w-full bg-gradient-to-r from-brown-700 to-brown-600 hover:opacity-90">Gönder</Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
