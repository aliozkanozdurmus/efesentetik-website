"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  Award,
  Users,
  Globe,
  CheckCircle,
  Factory,
  Truck,
  Shield,
  Target,
  Calendar,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useRef, useEffect } from "react" // useState, useRef, useEffect eklendi
import ImageGalleryDialog from "@/components/image-gallery-dialog"

const stats = [
  { number: "40+", label: "Yıllık Tecrübe" },
  { number: "5+", label: "İhracat Ülkesi" },
  { number: "5000+", label: "Mutlu Müşteri" },
]

const features = [
  {
    icon: <Award className="h-8 w-8 text-red-500" />,
    title: "Kalite Güvencesi",
    description: "Uluslararası standartlara uygun üretim ve kalite kontrol sistemleri",
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: "Deneyimli Ekip",
    description: "40+ yıllık sektör deneyimi ile uzman kadromuz",
  },
  {
    icon: <Globe className="h-8 w-8 text-red-500" />,
    title: "Global Erişim",
    description: "5+ ülkeye ihracat ve dünya çapında güvenilir hizmet",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-red-500" />,
    title: "Müşteri Memnuniyeti",
    description: "5000+ mutlu müşteri ile kanıtlanmış güvenilirlik",
  },
]

// Ürünler sayfasındaki güncel ürün verileri buraya taşındı
const products = [
  {
    id: 1,
    name: "Polipropilen Dokuma Çuval",
    category: "cuval",
    description:
      "Cazip özellikleri nedeniyle PP çuvallar piyasada hızla popülerlik kazanmıştır ve günümüzde bunlar çeşitli endüstriler tarafından yaygın olarak benimsenmiştir. PP Torbalar, Un, şeker, bakliyat, tuz, kepek, yem, tekstil, kuruyemiş, gübre, çimento, granül halindeki kimyasalların vb. paketlenmesinde yaygın olarak kullanıldığı endüstriyel ambalajlama için ideal bir seçim haline gelmiştir.PP torbalar, çeşitli kalite, desen, baskı, renk, ebat ve farklı kapasitelerde PP dokuma kumaşlar kullanılarak hazırlanır.30-150 cm enlerinde çuval üretimi yapılabilir. Ağzı overloklu ya da sıcak kesim olarak üretilebilir. Rulodan ruloya 8 renge kadar flekso baskı yapılabilir. 125, 250, 500 ve 1000 adetlik balyalar halinde ambalajlanabilir. Rulo halinde (tubular) hortum kumaş şeklinde üretimi yapılabilir. İstenilen renklerde üretimi yapılabilir. PE iç torba manşet katlama ya da ağızdan dikişli olarak eklenebilir.",
    images: ["/products/pp-woven-bag-colors.jpeg", "/products/pp-woven-bag-types.jpeg"],
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
    image: "/products/big-bag-types.jpeg",
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
  {
    id: 6,
    name: "Özel PP Dokumalar",
    category: "ozel-dokumalar",
    description:
      "Müşterilerimizin özel ihtiyaçlarına yönelik, farklı renk, desen ve özelliklerde PP dokuma kumaşlar üretiyoruz. Yüksek kaliteli hammaddeler ve ileri teknoloji ile dayanıklı ve estetik çözümler sunuyoruz.",
    images: [
      "/products/pp-woven-roll-striped-1.jpeg",
      "/products/pp-woven-patterns.jpeg",
      "/products/pp-woven-production-1.jpeg",
      "/products/pp-woven-roll-striped-2.jpeg",
      "/products/pp-woven-roll-striped-3.jpeg",
    ],
    features: [
      "Özel Renkler",
      "Farklı Desenler",
      "Yüksek Mukavemet",
      "UV Korumalı",
      "Geniş En Seçenekleri",
      "Esnek Üretim",
    ],
    specs: {
      kullanim: "Özel Ambalaj, Tarım, İnşaat, Endüstriyel Uygulamalar",
      cesitler: "Rulo Kumaş, Özel Kesimler, Farklı Gramajlar",
      ozellikler: "Suya Dayanıklı, Nefes Alabilen, Kimyasallara Dayanıklı",
      ekstra: "Müşteriye Özel Çözümler, Hızlı Teslimat",
    },
    new: true,
  },
  {
    id: 7,
    name: "PP+BOPP Çuval",
    category: "cuval",
    description:
      "BOPP Film tabakalarının birden çok renkli baskı yapılabilmesi, resme varan baskılar yapılabilmesi açısından bir çok sektörde yoğun talep görmektedir.İsteğe göre tek yüz veya çift yüz OPP Film kaplaması yapılabilir.BOPP Çuvallarının en büyük özelliği; kendi özel OPP tabakası sentetik çuvallara kaplanması sayesinde tüm nem ve su geçirmez özelliğe sahip olmasıdır.",
    images: [
      "/products/pp-bopp-coffee-bag.jpeg",
      "/products/pp-bopp-fertilizer-bag-black.jpeg",
      "/products/pp-bopp-fertilizer-bag-green.jpeg",
    ],
    features: [
      "Çok Renkli Baskı",
      "Resme Varan Baskı",
      "Tek/Çift Yüz OPP Kaplama",
      "Nem ve Su Geçirmez",
      "Yüksek Kalite",
      "Çeşitli Sektörler İçin",
    ],
    specs: {
      kullanim: "Un, Şeker, Bakliyat, Tuz, Kepek, Yem, Tekstil, Kuruyemiş, Gübre, Çimento, Kimyasallar",
      ozellikler: "Yüksek Çözünürlüklü Baskı, Dayanıklı Yapı, Uzun Ömürlü",
      avantajlar: "Ürün Görünürlüğü, Marka Bilinirliği, Koruma",
      ekstra: "Özel Boyut ve Tasarım Seçenekleri",
    },
    new: true,
  },
]

const advantages = [
  {
    icon: <Factory className="h-6 w-6 text-red-500" />,
    title: "Modern Üretim Tesisi",
    description: "Gaziantep OSB'de son teknoloji ile donatılmış üretim tesisimiz",
  },
  {
    icon: <Truck className="h-6 w-6 text-red-500" />,
    title: "Hızlı Teslimat",
    description: "Türkiye geneli ve ihracat için organize lojistik ağımız",
  },
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: "Güvenilir Kalite",
    description: "EFIBCA akreditasyonu ile test edilmiş ürün kalitesi",
  },
  {
    icon: <Target className="h-6 w-6 text-red-500" />,
    title: "Özel Çözümler",
    description: "Müşteri ihtiyaçlarına özel tasarım ve üretim hizmetleri",
  },
]

const timeline = [
  { year: "1984", event: "Huzeyfe Durmaz tarafından Tuna Şirketler Grubu'nun temelleri atıldı" },
  { year: "1990", event: "Sentetik dokuma kumaş üretiminde uzmanlaşma" },
  { year: "2000", event: "Çuval üretiminde kapasite artırımı" },
  { year: "2010", event: "İhracata başlangıç ve uluslararası sertifikasyonlar" },
  { year: "2020", event: "Modern tesise taşınma ve teknoloji yatırımları" },
  { year: "2024", event: "5+ ülkeye ihracat ve sürdürülebilir üretim" },
]

export default function HomePage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [currentProduct, setCurrentProduct] = useState<typeof products[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = (product: typeof products[0], imageIndex: number = 0) => {
    setCurrentProduct(product)
    setCurrentImageIndex(imageIndex)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setCurrentProduct(null)
    setCurrentImageIndex(0)
  }

  const getProductImages = (product: typeof products[0]) => {
    if (product.images) return product.images
    if (product.image) return [product.image]
    return ["/placeholder.svg"]
  }

  return (
    <div className="relative">
      {/* Hero Section - Creative Wide Design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Left Content - 3 columns */}
            <motion.div 
              className="lg:col-span-3 text-navy-900"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full mb-8 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">1984'ten Bu Yana Güvenilir Kalite</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="block gradient-text">Polipropilen Dokuma</span>
                <span className="block text-navy-900 mt-2">Çuval Üretiminde</span>
                <span className="block text-red-600 font-bold mt-2">Türkiye'nin Lideri</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 max-w-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Tuna Şirketler Grubu olarak 1984'ten bu yana sentetik dokuma kumaş ve çuval sektöründe faaliyet göstermekteyiz. 
                Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli PP çuval üretimi gerçekleştiriyoruz.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button asChild size="lg" className="gradient-bg-secondary text-white hover:opacity-90 button-3d group">
                  <Link href="/urunler" className="flex items-center">
                    <span>Ürünlerimizi İnceleyin</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-red-300 text-red-700 hover:bg-red-50 hover:border-red-500 transition-all duration-300"
                >
                  <Link href="/hakkimizda">Hikayemizi Keşfedin</Link>
                </Button>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-6 sm:gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">40+</div>
                  <div className="text-sm text-gray-600 mt-1">Yıllık Tecrübe</div>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-gray-600 mt-1">İhracat Ülkesi</div>
                </motion.div>
                <motion.div 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-3xl sm:text-4xl font-bold gradient-text">5000+</div>
                  <div className="text-sm text-gray-600 mt-1">Mutlu Müşteri</div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Content - 2 columns */}
            <motion.div 
              className="lg:col-span-2 relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Main Image */}
              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/production-facility.jpeg"
                  alt="Tuna Sentetik Üretim Tesisi"
                  fill
                  className="object-cover transform scale-105 transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Floating Badge */}
                <motion.div
                  className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm flex items-center space-x-2"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Aktif Üretim</span>
                </motion.div>

                {/* Side Info Card */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20 max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-navy-900">Modern Teknoloji</span>
                  </div>
                  <p className="text-sm text-gray-600">Gaziantep OSB'deki son teknoloji üretim tesisimizle 40 yıllık tecrübemizi birleştiriyoruz.</p>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full opacity-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-10 blur-2xl"
                animate={{
                  scale: [1, 0.8, 1],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />
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
              40 yıllık tecrübemiz ve modern üretim anlayışımızla sektörde öncü konumumuzu sürdürüyoruz
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


      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">40 Yıllık Yolculuğumuz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              1984'ten günümüze kadar olan gelişimimiz ve başarı hikayemiz
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-navy-500"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-6 sm:mb-8 ${
                    index % 2 === 0 ? "justify-start md:justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-full md:w-5/12 ${
                    index % 2 === 0 
                      ? "text-right pr-0 md:pr-8" 
                      : "text-left pl-0 md:pl-8"
                  }`}>
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-navy-100">
                      <div className="text-lg sm:text-2xl font-bold gradient-text mb-1 sm:mb-2">{item.year}</div>
                      <p className="text-sm sm:text-base text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Rekabet Avantajlarımız</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Müşterilerimize sunduğumuz değer ve fark yaratan hizmetlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-navy-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-semibold gradient-text mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold gradient-text">Misyonumuz</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli PP çuval üretimi gerçekleştirmek.
                Müşteri memnuniyetini ve iş birliğini ön planda tutarak, üretim süreçlerimize en son teknolojik
                yenilikleri entegre etmek ve çevreye duyarlı yaklaşımımızla topluma değer katmak.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-sm">Sürekli İyileştirme</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-sm">Zamanında Teslimat</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-sm">Kalite Güvencesi</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-5 w-5 text-red-500 mr-3" />
                  <span className="text-sm">Müşteri Odaklılık</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/mission-image.jpeg" alt="Tuna Sentetik Misyon" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section - Removed "Ürün Kataloğu" button */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">İhtiyacınıza Özel Çuval Çözümleri</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              40 yıllık tecrübemiz ve modern üretim teknolojimizle size en uygun çözümleri sunuyoruz. Hemen iletişime
              geçin ve özel teklifinizi alın.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-navy-900 hover:bg-white/90 button-3d"
              >
                <Link href="/iletisim">Teklif Alın</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Bizimle İletişime Geçin</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sorularınız ve talepleriniz için bizimle iletişime geçebilirsiniz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">İletişim Bilgileri</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold gradient-text mb-1">Adres</p>
                      <p className="text-muted-foreground">
                        Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8,
                        <br />
                        Şehitkamil / Gaziantep
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold gradient-text mb-1">Telefon</p>
                      <p className="text-muted-foreground">+90 342 123 4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-500 mr-4 mt-1" />
                    <div>
                      <p className="font-semibold gradient-text mb-1">E-posta</p>
                      <p className="text-muted-foreground">info@tunasentetik.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                <h4 className="text-lg font-semibold gradient-text mb-4">Çalışma Saatleri</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazartesi - Cuma:</span>
                    <span className="font-medium">08:30 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cumartesi:</span>
                    <span className="font-medium">09:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Pazar:</span>
                    <span className="font-medium">Kapalı</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl border border-navy-100"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text">İletişim Formu</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-navy-800">
                      Ad Soyad *
                    </label>
                    <Input
                      id="name"
                      placeholder="Ad Soyad"
                      className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-navy-800">
                      E-posta *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="E-posta"
                      className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-navy-800">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    placeholder="Telefon"
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-navy-800">
                    Konu *
                  </label>
                  <Input
                    id="subject"
                    placeholder="Konu"
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-navy-800">
                    Mesaj *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Mesajınız"
                    rows={5}
                    className="border-navy-200 focus:border-red-400 focus:ring-red-400"
                    required
                  />
                </div>
                <Button className="w-full gradient-bg-secondary text-white hover:opacity-90 button-3d">
                  <span className="relative z-10">Gönder</span>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Dialog */}
      {currentProduct && (
        <ImageGalleryDialog
          images={getProductImages(currentProduct)}
          initialIndex={currentImageIndex}
          isOpen={isGalleryOpen}
          onClose={closeGallery}
          productName={currentProduct.name}
        />
      )}
    </div>
  )
}

// Yeni ProductDescriptionWithToggle bileşeni
function ProductDescriptionWithToggle({ description }: { description: string }) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)
  const maxLines = 3

  useEffect(() => {
    if (textRef.current) {
      // Metni başlangıçta kısıtlı olarak ayarla
      textRef.current.style.webkitLineClamp = `${maxLines}`
      const clampedClientHeight = textRef.current.clientHeight // Kısıtlı yükseklik

      // Metni tam olarak göster
      textRef.current.style.webkitLineClamp = "unset"
      const fullScrollHeight = textRef.current.scrollHeight // Tam yükseklik

      // Taşma olup olmadığını kontrol et
      setIsOverflowing(fullScrollHeight > clampedClientHeight)

      // showFullDescription durumuna göre clamp'i tekrar ayarla
      textRef.current.style.webkitLineClamp = showFullDescription ? "unset" : `${maxLines}`
    }
  }, [description, showFullDescription])

  const descriptionStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical" as const,
    WebkitLineClamp: showFullDescription ? "unset" : maxLines,
  }

  return (
    <div className="mb-4">
      <p ref={textRef} className="text-muted-foreground" style={descriptionStyle}>
        {description}
      </p>
      {isOverflowing && (
        <Button
          variant="link"
          onClick={() => setShowFullDescription(!showFullDescription)}
          className="p-0 h-auto text-sm text-navy-600 hover:text-navy-800"
        >
          {showFullDescription ? "Daha Az Göster" : "Daha Fazlasını Göster"}
        </Button>
      )}
    </div>
  )
}
