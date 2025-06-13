"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const products = [
  {
    name: "PP Çuvallar",
    description:
      "Polipropilen hammaddeden üretilen, dayanıklı ve hafif çuvallar. Gıda, tarım ve inşaat sektörlerinde yaygın olarak kullanılır.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Yüksek dayanıklılık", "Nem geçirmez", "Hafif", "Çeşitli ebatlar"],
    details: [
      "Ağırlık: 50-100 gr/m²",
      "Ebatlar: 40x60cm, 50x80cm, 60x100cm",
      "Kapasite: 5kg - 50kg",
      "Renk Seçenekleri: Beyaz, Şeffaf, Renkli",
    ],
  },
  {
    name: "Jüt Çuvallar",
    description:
      "Doğal jüt liflerinden üretilen, çevre dostu ve estetik görünümlü çuvallar. Özellikle kahve, kakao ve kuruyemiş paketlemede tercih edilir.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Doğal malzeme", "Nefes alabilir", "Estetik görünüm", "Sürdürülebilir"],
    details: [
      "Ağırlık: 250-400 gr/m²",
      "Ebatlar: 30x50cm, 40x60cm, 50x80cm",
      "Kapasite: 1kg - 25kg",
      "Özellikler: El yapımı, Doğal dokuma",
    ],
  },
  {
    name: "Lamine Çuvallar",
    description:
      "PP çuvalların dış yüzeyinin BOPP film ile kaplanması sonucu elde edilen, baskı kalitesi yüksek çuvallar.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Yüksek baskı kalitesi", "UV koruması", "Su geçirmez", "Parlak görünüm"],
    details: [
      "Ağırlık: 80-120 gr/m²",
      "Ebatlar: 40x60cm, 50x80cm, 60x100cm",
      "Kapasite: 5kg - 50kg",
      "Baskı: 8 renge kadar yüksek çözünürlüklü baskı",
    ],
  },
  {
    name: "Ventilli Çuvallar",
    description:
      "Özellikle çimento, alçı gibi toz ürünlerin paketlenmesinde kullanılan, dolum ve boşaltım için özel ventil sistemine sahip çuvallar.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Kolay dolum", "Toz sızdırmaz", "Otomatik dolum uyumlu", "Yüksek mukavemet"],
    details: [
      "Ağırlık: 90-130 gr/m²",
      "Ebatlar: 50x80cm, 60x100cm",
      "Kapasite: 25kg - 50kg",
      "Ventil Tipi: Tek taraflı veya çift taraflı",
    ],
  },
  {
    name: "Biyobozunur Çuvallar",
    description: "Doğada tamamen çözünebilen, çevre dostu hammaddelerden üretilen yenilikçi çuval çözümlerimiz.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Çevre dostu", "2-3 yılda çözünür", "Gıdaya uygun", "Sürdürülebilir"],
    details: [
      "Ağırlık: 60-100 gr/m²",
      "Ebatlar: 40x60cm, 50x80cm",
      "Kapasite: 5kg - 30kg",
      "Sertifikalar: Biyobozunur Malzeme Sertifikası",
    ],
  },
  {
    name: "Big Bag Çuvallar",
    description: "Büyük hacimli ürünlerin taşınması ve depolanması için tasarlanmış, yüksek mukavemetli çuvallar.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Yüksek kapasite", "Dayanıklı", "Tekrar kullanılabilir", "UV korumalı"],
    details: [
      "Ağırlık: 180-250 gr/m²",
      "Ebatlar: 90x90x120cm, 90x90x150cm",
      "Kapasite: 500kg - 2000kg",
      "Özellikler: Taşıma kulplu, Alt boşaltma ventilli",
    ],
  },
]

export default function Products() {
  return (
    <section id="urunlerimiz" className="py-20 bg-brown-50/50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[300px] w-[300px] bg-brown-100/50 blur-[80px]" />
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-brown-200/30 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="mx-auto max-w-[58rem] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-brown-800">Ürünlerimiz</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Farklı sektörlere yönelik çeşitli ebat ve özelliklerde ürettiğimiz çuval çözümlerimiz
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-brown-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-brown-800">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-brown-700">Özellikler:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold mb-2 text-brown-700">Teknik Detaylar:</h4>
                  <ul className="space-y-1">
                    {product.details.map((detail, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">Detaylı Bilgi</Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Özel ihtiyaçlarınıza uygun çuval çözümleri için bizimle iletişime geçin.
          </p>
          <Button variant="outline" className="border-brown-300 text-brown-800">
            Tüm Ürünleri Görüntüle
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
