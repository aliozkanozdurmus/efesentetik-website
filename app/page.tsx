"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, Globe, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const stats = [
  { number: "20+", label: "Yıllık Tecrübe" },
  { number: "50K", label: "Günlük Üretim" },
  { number: "15+", label: "İhracat Ülkesi" },
  { number: "1000+", label: "Mutlu Müşteri" },
]

const features = [
  {
    icon: <Award className="h-8 w-8 text-red-500" />,
    title: "ISO 9001 Kalite",
    description: "Uluslararası kalite standartlarına uygun üretim",
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: "Uzman Ekip",
    description: "20+ yıllık deneyimli profesyonel kadro",
  },
  {
    icon: <Globe className="h-8 w-8 text-red-500" />,
    title: "Global Erişim",
    description: "15+ ülkeye ihracat ve dünya çapında hizmet",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-red-500" />,
    title: "Güvenilir Kalite",
    description: "Her üründe tutarlı kalite ve dayanıklılık",
  },
]

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-red-200/30 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-navy-200/20 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <motion.h1
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="gradient-text">Kaliteli Çuval</span>
                  <br />
                  <span className="text-navy-900">Üretiminde</span>
                  <br />
                  <span className="text-red-600">Gaziantep'in Öncüsü</span>
                </motion.h1>
                <motion.p
                  className="text-xl text-muted-foreground max-w-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  20+ yıllık tecrübemizle tarım, gıda ve sanayi sektörlerine yönelik yüksek kaliteli çuval çözümleri
                  sunuyoruz.
                </motion.p>
              </div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button asChild size="lg" className="gradient-bg-secondary text-white hover:opacity-90 button-3d group">
                  <Link href="/urunler">
                    <span className="relative z-10">Ürünlerimizi Keşfedin</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-navy-300 text-navy-800 hover:border-navy-500 button-3d"
                >
                  <Link href="/iletisim">İletişime Geçin</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Tuna Sentetik Üretim Tesisi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-navy-900">Aktif Üretim</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">50.000 adet/gün kapasitesi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Neden Tuna Sentetik?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sektörde öncü konumumuzu sağlayan değerlerimiz ve kalite anlayışımız
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-xl bg-gradient-to-br from-navy-50 to-red-50 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold gradient-text mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-red-900 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-red-600/20 blur-[100px]" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-navy-600/20 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">İhtiyacınıza Uygun Çuval Çözümleri</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Sektörünüze ve ürünlerinize özel çuval çözümleri için hemen bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-navy-900 hover:bg-white/90 button-3d"
              >
                <Link href="/iletisim">Teklif Alın</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 button-3d"
              >
                <Link href="/urunler">Ürün Kataloğu</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
