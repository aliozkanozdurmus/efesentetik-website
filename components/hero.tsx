"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brown-100/50 via-background to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-brown-300/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-brown-500/10 blur-[100px]" />
      </div>

      <div className="container relative z-10 flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="bg-gradient-to-br from-brown-900 from-30% via-brown-800 to-brown-700 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Kaliteli Çuval Üretiminde
            <br />
            <span className="text-primary">Gaziantep'in Öncüsü</span>
          </motion.h1>
          <motion.p
            className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Efe Sentetik olarak uzun yıllardır edindiğimiz tecrübemizle, tarım, gıda ve sanayi sektörlerine yönelik yüksek kaliteli
            çuval çözümleri sunuyoruz. PP çuval, jüt çuval ve özel üretim çuvallarımızla ihtiyaçlarınıza uygun çözümler
            üretiyoruz.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-brown-700 to-brown-600 hover:opacity-90 group relative overflow-hidden"
          >
            <span className="relative z-10">Ürünlerimizi Keşfedin</span>
            <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
            <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
          </Button>
          <Button variant="outline" size="lg" className="border-brown-300 text-brown-800">
            İletişime Geçin
          </Button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            repeatDelay: 1,
          }}
        >
          <ArrowRight className="h-6 w-6 rotate-90 text-brown-500" />
        </motion.div>
      </div>
    </section>
  )
}
