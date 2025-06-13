"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import SectionTitle from "./section-title"

const processSteps = [
  {
    number: "01",
    title: "Hammadde Hazırlama",
    description: "Yüksek kaliteli polipropilen granüller, özel karışım oranlarında bir araya getirilerek hazırlanır.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "02",
    title: "Ekstrüzyon",
    description: "Hammadde eritilerek ince şeritler halinde çekilir ve soğutulur.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "03",
    title: "Dokuma",
    description: "Şeritler, özel dokuma tezgahlarında istenilen sıklık ve desende dokunur.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "04",
    title: "Laminasyon",
    description: "Gerekli durumlarda, dokuma yüzeyi BOPP film ile kaplanarak su geçirmezlik sağlanır.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "05",
    title: "Baskı",
    description: "Müşteri talebine göre 8 renge kadar yüksek kaliteli baskı uygulanır.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "06",
    title: "Kesim ve Dikiş",
    description: "Dokuma kumaş, istenilen ebatlarda kesilerek çuval formuna dikilir.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "07",
    title: "Kalite Kontrol",
    description: "Her çuval, dayanıklılık ve baskı kalitesi açısından titizlikle kontrol edilir.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    number: "08",
    title: "Paketleme ve Sevkiyat",
    description: "Onaylanan çuvallar paketlenerek sevkiyata hazır hale getirilir.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Horizontal scroll effect
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-brown-100/50 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionTitle title="Üretim Süreci" subtitle="Hammaddeden sevkiyata kadar kaliteli çuval üretim sürecimiz" />

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brown-600 via-gold-500 to-brown-600 rounded-full" />

          <motion.div className="flex space-x-8 pb-8 overflow-hidden" style={{ x }}>
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg border border-brown-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="relative h-48">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="text-3xl font-bold gradient-text mr-3">{step.number}</span>
                    <h3 className="text-xl font-bold gradient-text">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Üretim sürecimiz hakkında daha detaylı bilgi almak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </div>
    </section>
  )
}
