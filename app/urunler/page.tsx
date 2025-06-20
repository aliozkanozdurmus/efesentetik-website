"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { id: "all", name: "Tüm Ürünler" },
  { id: "cuval", name: "Çuvallar" },
  { id: "iplik", name: "İplikler" },
  { id: "torba", name: "Torbalar" },
]

const products = [
  {
    id: 1,
    name: "Polipropilen Dokuma Çuval",
    category: "cuval",
    description:
      "Un, şeker, bakliyat, hububat, tuz, kepek, yem, pirinç için ideal çözümler. Standart, lamineli, şeffaf ve delikli çeşitleri mevcuttur.",
    image: "/products/polipropilen-dokuma-cuval.webp",
    features: ["Standart Çuval", "Lamineli Çuval", "Şeffaf Çuval", "Delikli Çuval", "OPP Kaplama", "Metalize Çuval"],
    specs: {
      kullanim: "Un, Şeker, Bakliyat, Hububat, Tuz, Kepek, Yem, Pirinç",
      cesitler: "Standart, Lamineli, Şeffaf, Delikli, OPP Kaplama, Metalize",
      ozellikler: "Kömür, Gübre, Granül, Kimyasallar, Kireç için lamineli çeşit",
      ekstra: "Patates ve diğer sebzeler için delikli çeşit",
    },
    popular: true,
  },
  {
    id: 2,
    name: "Big Bag Çuvallar",
    category: "cuval",
    description:
      "500-2000 kg kapasiteli, endüstriyel kullanım için tasarlanmış. EFIBCA sertifikalı ve antistatik seçenekleri mevcuttur.",
    image: "/products/big-bag.webp",
    features: [
      "EFIBCA Sertifikalı",
      "Antistatik Seçenekler",
      "PE İç Torba",
      "4 Yüze Baskı",
      "Toz Fitili",
      "Doküman Cebi",
    ],
    specs: {
      swl: "500 - 2000 kg",
      sf: "5:1 - 6:1",
      kumaş: "Lamineli, Laminesiz",
      antistatik: "Tüm modeller antistatik olarak üretilebilir",
      sertifika: "EFIBCA akredite LABORDATA Enstitüsü testli",
      seçenekler: "PE İç Torba, Toz Fitili, Doküman cebi, Etiket",
    },
  },
  {
    id: 3,
    name: "Polipropilen CF İplik",
    category: "iplik",
    description: "Yüksek mukavemet, mükemmel mekanik özellikler ve kimyasal dayanım. 300-500 denye aralığında üretim.",
    image: "/products/polipropilen-cf-iplik.webp",
    features: ["300-500 Denye", "UV Korumalı", "Gıda Uygunluğu", "Çift Kat Bükümlü", "S veya Z Büküm", "Özel Renkler"],
    specs: {
      mukavemet: "Yüksek ve Orta Mukavemet",
      denye: "300-500 Denye",
      filament: "50-72-100-144-200-400 Filament",
      kesim: "Delta & Round kesimli",
      bukum: "Düz / Puntalı / Bükümlü / Çift Kat Bükümlü",
      ozellikler: "UV ve özel katkı maddeleri, gıda uygunluğu",
    },
  },
  {
    id: 4,
    name: "Polipropilen Şerit İplik",
    category: "iplik",
    description: "Düz & fibrilize, yüksek mukavemet ve üstün dayanım özellikleri. 600-13.500 denye aralığında üretim.",
    image: "/products/polipropilen-serit-iplik.webp",
    features: ["600-13.500 Denye", "2mm-15mm İp Eni", "Özel Renkler", "Size Özel Çözümler", "UV Korumalı", "Fibrilize"],
    specs: {
      tip: "Düz & Fibrilize",
      mukavemet: "Yüksek ve Orta Mukavemet",
      denye: "600-13.500 Denye",
      genislik: "2mm-15mm İp Eni",
      renkler: "Müşteri talebi doğrultusunda istenilen renklerde",
      ozellikler: "UV ve özel katkı maddeleri, size özel çözümler",
    },
  },
  {
    id: 5,
    name: "Ventilli & Block Bottom Torba",
    category: "torba",
    description: "Çimento, kireç, gübre, hububat için özel tasarım. Sıfıra yakın fire ve maksimum istifleme imkanı.",
    image: "/products/ventilli-block-bottom-torba.webp",
    features: [
      "Sıfıra Yakın Fire",
      "Ergonomik Dizayn",
      "Maksimum İstifleme",
      "Otomatik Sistem Uyumlu",
      "Valf Sistemi",
      "Kübik Dizayn",
    ],
    specs: {
      kullanim: "Çimento, Kireç, Gübre, Hububat, Yem, Şeker, Un, Tuz, Pirinç, Alçı, Granul, Kimyasallar",
      avantajlar: "En ağır yükleme şartlarında sıfıra yakın fire",
      dayanim: "Suya ve neme üstün dayanım",
      ozellikler: "Hava geçirgenliği, nefes aldırma özelliği",
      sistem: "Manuel ve tam otomatik sistemler için ergonomik dizayn",
      performans: "Minimum işçilik, maksimum hız, üstün performans",
    },
    new: true,
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
              1984'ten bu yana ürettiğimiz kaliteli polipropilen dokuma çuval, iplik ve torba çözümlerimiz
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-navy-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                      {product.popular && <Badge className="bg-red-500 text-white">Popüler</Badge>}
                      {product.new && <Badge className="bg-green-500 text-white">Yeni</Badge>}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold gradient-text mb-3">{product.name}</h3>
                      <p className="text-muted-foreground mb-4">{product.description}</p>

                      {/* Features */}
                      <div className="mb-4">
                        <h4 className="font-semibold text-navy-700 mb-2">Özellikler:</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {product.features.slice(0, 4).map((feature, i) => (
                            <span key={i} className="text-xs bg-navy-50 text-navy-700 px-2 py-1 rounded-full w-fit">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Detailed Specs - Expandable */}
                <div className="border-t border-navy-100 p-6 bg-gradient-to-br from-navy-50/50 to-red-50/50">
                  <h4 className="font-semibold text-navy-700 mb-3">Teknik Özellikler:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    {Object.entries(product.specs).map(([key, value], i) => (
                      <div key={i} className="flex flex-col">
                        <span className="font-medium text-navy-600 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
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
              Standart ürünlerimizin yanı sıra, özel ihtiyaçlarınıza uygun çuval ve iplik çözümleri de üretebiliyoruz.
              40 yıllık tecrübemizle size en uygun çözümü sunuyoruz.
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
