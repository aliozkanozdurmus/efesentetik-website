"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-brown-500/90 to-brown-600/90 text-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10" />
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-brown-400/20 blur-[100px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-brown-500/20 blur-[100px]" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">İhtiyacınıza Uygun Çuval Çözümleri İçin</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Sektörünüze ve ürünlerinize özel çuval çözümleri için hemen bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-brown-800 hover:bg-brown-50">
              Teklif Alın
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Ürün Kataloğu İndirin
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
