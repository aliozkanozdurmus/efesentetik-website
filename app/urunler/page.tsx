"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: "all", name: "Tüm Ürünler" },
  { id: "pp", name: "PP Çuvallar" },
  { id: "jute", name: "Jüt Çuvallar" },
  { id: "laminated", name: "Lamine Çuvallar" },
  { id: "valve", name: "Ventilli Çuvallar" },
  { id: "biodegradable", name: "Biyobozunur Çuvallar" },
  { id: "bigbag", name: "Big Bag Çuvallar" },
]

const products = [
  {
    id: 1,
    name: "PP Çuvallar",
    category: "pp",
    description:
      "Polipropilen hammaddeden üretilen, dayanıklı ve hafif çuvallar. Gıda, tarım ve inşaat sektörlerinde yaygın olarak kullanılır.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Yüksek dayanıklılık", "Nem geçirmez", "Hafif", "Çeşitli ebatlar"],
    specs: {
      weight: "50-100 gr/m²",
      sizes: "40x60cm, 50x80cm, 60x100cm",
      capacity: "5kg - 50kg",
      colors: "Beyaz, Şeffaf, Renkli",
    },
    popular: true,
  },
  {
    id: 2,
    name: "Jüt Çuvallar",
    category: "jute",
    description:
      "Doğal jüt liflerinden üretilen, çevre dostu ve estetik görünümlü çuvallar. Özellikle kahve, kakao ve kuruyemiş paketlemede tercih edilir.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Doğal malzeme", "Nefes alabilir", "Estetik görünüm", "Sürdürülebilir"],
    specs: {
      weight: "250-400 gr/m²",
      sizes: "30x50cm, 40x60cm, 50x80cm",
      capacity: "1kg - 25kg",
      special: "El yapımı, Doğal dokuma",
    },
    eco: true,
  },
  {
    id: 3,
    name: "Lamine Çuvallar",
    category: "laminated",
    description:
      "PP çuvalların dış yüzeyinin BOPP film ile kaplanması sonucu elde edilen, baskı kalitesi yüksek çuvallar.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Yüksek baskı kalitesi", "UV koruması", "Su geçirmez", "Parlak görünüm"],
    specs: {
      weight: "80-120 gr/m²",
      sizes: "40x60cm, 50x80cm, 60x100cm",
      capacity: "5kg - 50kg",
      print: "8 renge kadar yüksek çözünürlüklü baskı",
    },
  },
  {
    id: 4,
    name: "Ventilli Çuvallar",
    category: "valve",
    description:
      "Özellikle çimento, alçı gibi toz ürünlerin paketlenmesinde kullanılan, dolum ve boşaltım için özel ventil sistemine sahip çuvallar.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Kolay dolum", "Toz sızdırmaz", "Otomatik dolum uyumlu", "Yüksek mukavemet"],
    specs: {
      weight: "90-130 gr/m²",
      sizes: "50x80cm, 60x100cm",
      capacity: "25kg - 50kg",
      valve: "Tek taraflı veya çift taraflı",
    },
  },
  {
    id: 5,
    name: "Biyobozunur Çuvallar",
    category: "biodegradable",
    description: "Doğada tamamen çözünebilen, çevre dostu hammaddelerden üretilen yenilikçi çuval çözümlerimiz.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Çevre dostu", "2-3 yılda çözünür", "Gıdaya uygun", "Sürdürülebilir"],
    specs: {
      weight: "60-100 gr/m²",
      sizes: "40x60cm, 50x80cm",
      capacity: "5kg - 30kg",
      certificate: "Biyobozunur Malzeme Sertifikası",
    },
    eco: true,
    new: true,
  },
  {
    id: 6,
    name: "Big Bag Çuvallar",
    category: "bigbag",
    description: "Büyük hacimli ürünlerin taşınması ve depolanması için tasarlanmış, yüksek mukavemetli çuvallar.",
    image: "/placeholder.svg?height=400&width=600",
    features: ["Yüksek kapasite", "Dayanıklı", "Tekrar kullanılabilir", "UV korumalı"],
    specs: {
      weight: "180-250 gr/m²",
      sizes: "90x90x120cm, 90x90x150cm",
      capacity: "500kg - 2000kg",
      features: "Taşıma kulplu, Alt boşaltma ventilli",
    },
  },
]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-50 via-white to-red-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-red-200/30 blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Ürünlerimiz</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Farklı sektörlere yönelik çeşitli ebat ve özelliklerde ürettiğimiz kaliteli çuval çözümlerimiz
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "gradient-bg-secondary text-white hover:opacity-90 button-3d"
                    : "border-navy-300 text-navy-800 hover:border-navy-500 button-3d"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-navy-100 hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.popular && <Badge className="bg-red-500 text-white">Popüler</Badge>}
                    {product.eco && <Badge className="bg-green-500 text-white">Çevre Dostu</Badge>}
                    {product.new && <Badge className="bg-blue-500 text-white">Yeni</Badge>}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold gradient-text mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{product.description}</p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-navy-700 mb-2">Özellikler:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.features.slice(0, 3).map((feature, i) => (
                        <span key={i} className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                      {product.features.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          +{product.features.length - 3} daha
                        </span>
                      )}
                    </div>
                  </div>

                  <Button asChild className="w-full gradient-bg-secondary text-white hover:opacity-90 button-3d">
                    <Link href={`/urunler/${product.id}`}>Detaylı Bilgi</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">Özel İhtiyaçlarınız İçin</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Standart ürünlerimizin yanı sıra, özel ihtiyaçlarınıza uygun çuval çözümleri de üretebiliyoruz.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="gradient-bg-secondary text-white hover:opacity-90 button-3d">
                <Link href="/iletisim">Özel Teklif Alın</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-navy-300 text-navy-800 hover:border-navy-500 button-3d"
              >
                <Link href="/hakkimizda">Üretim Sürecimiz</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
