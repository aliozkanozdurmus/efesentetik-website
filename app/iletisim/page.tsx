"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-50 via-white to-red-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-red-200/30 blur-[80px]" />
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-navy-200/20 blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">İletişim</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-8">İletişim Bilgileri</h2>
                <div className="space-y-6">
                  <div className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                    <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold gradient-text mb-2">Adres</h3>
                      <p className="text-muted-foreground">
                        Gaziantep Organize Sanayi Bölgesi
                        <br />
                        83120. Cadde No: 8<br />
                        Şehitkamil / Gaziantep
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                    <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold gradient-text mb-2">Telefon</h3>
                      <p className="text-muted-foreground">+90 342 123 4567</p>
                      <p className="text-muted-foreground">+90 342 123 4568 (Fax)</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                    <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold gradient-text mb-2">E-posta</h3>
                      <p className="text-muted-foreground">info@tunasentetik.com</p>
                      <p className="text-muted-foreground">satis@tunasentetik.com</p>
                    </div>
                  </div>

                  <div className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                    <Clock className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold gradient-text mb-2">Çalışma Saatleri</h3>
                      <p className="text-muted-foreground">
                        Pazartesi - Cuma: 08:30 - 18:00
                        <br />
                        Cumartesi: 09:00 - 13:00
                        <br />
                        Pazar: Kapalı
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-2xl font-bold gradient-text mb-4">Konum</h3>
                <div className="aspect-video bg-white rounded-xl border border-navy-100 overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-navy-100 to-navy-50 flex items-center justify-center">
                    <p className="text-muted-foreground">Google Harita Yerleşimi</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-navy-100"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-6">Bize Yazın</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-navy-700">
                      Ad *
                    </label>
                    <Input
                      id="firstName"
                      placeholder="Adınız"
                      className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-navy-700">
                      Soyad *
                    </label>
                    <Input
                      id="lastName"
                      placeholder="Soyadınız"
                      className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-navy-700">
                    E-posta *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-navy-700">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    placeholder="Telefon numaranız"
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-navy-700">
                    Firma Adı
                  </label>
                  <Input
                    id="company"
                    placeholder="Firma adınız"
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-navy-700">
                    Konu *
                  </label>
                  <Input
                    id="subject"
                    placeholder="Mesaj konusu"
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-navy-700">
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Mesajınızı buraya yazın..."
                    rows={6}
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                    required
                  />
                </div>

                <Button className="w-full gradient-bg-secondary text-white hover:opacity-90 button-3d group">
                  <Send className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Mesaj Gönder
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * işaretli alanlar zorunludur. Kişisel verileriniz gizlilik politikamız kapsamında korunmaktadır.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-red-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hızlı İletişim</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Acil durumlar için doğrudan arayabilir veya WhatsApp üzerinden mesaj gönderebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-navy-900 hover:bg-white/90 button-3d">
                <Phone className="mr-2 h-4 w-4" />
                Hemen Ara
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
