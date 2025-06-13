"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-brown-800 via-brown-700 to-brown-800 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-gold-600/20 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-gold-500/20 blur-[100px]" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text-light">İhtiyacınıza Uygun Çuval Çözümleri İçin</h2>
          <div className="w-24 h-1 mx-auto my-4 rounded-full bg-gradient-to-r from-gold-400 to-gold-300"></div>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Sektörünüze ve ürünlerinize özel çuval çözümleri için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-gradient-to-r from-gold-500 to-gold-400 text-brown-900 hover:opacity-90 button-3d group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Teklif Alın
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 button-3d group">
              <span className="relative z-10 flex items-center">
                Ürün Kataloğu İndirin
                <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
