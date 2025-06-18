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

const products = [
  {
    title: "Polipropilen Dokuma Çuval",
    description: "Un, şeker, bakliyat, hububat, tuz, kepek, yem, pirinç için ideal çözümler",
    image: "/products/polipropilen-dokuma-cuval.webp",
    features: ["Standart Çuval", "Lamineli Çuval", "Şeffaf Çuval", "Delikli Çuval"],
  },
  {
    title: "Big Bag Çuvallar",
    description: "500-2000 kg kapasiteli, endüstriyel kullanım için tasarlanmış",
    image: "/products/big-bag.webp",
    features: ["EFIBCA Sertifikalı", "Antistatik Seçenekler", "PE İç Torba", "4 Yüze Baskı"],
  },
  {
    title: "Polipropilen CF İplik",
    description: "Yüksek mukavemet, mükemmel mekanik özellikler ve kimyasal dayanım",
    image: "/products/polipropilen-cf-iplik.webp",
    features: ["300-500 Denye", "UV Korumalı", "Gıda Uygunluğu", "Çift Kat Bükümlü"],
  },
  {
    title: "Polipropilen Şerit İplik",
    description: "Düz & fibrilize, yüksek mukavemet ve üstün dayanım özellikleri",
    image: "/products/polipropilen-serit-iplik.webp",
    features: ["600-13.500 Denye", "2mm-15mm İp Eni", "Özel Renkler", "Size Özel Çözümler"],
  },
  {
    title: "Ventilli & Block Bottom Torba",
    description: "Çimento, kireç, gübre, hububat için özel tasarım ventilli torbalar",
    image: "/products/ventilli-block-bottom-torba.webp",
    features: ["Sıfıra Yakın Fire", "Ergonomik Dizayn", "Maksimum İstifleme", "Otomatik Sistem Uyumlu"],
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
              <div className="space-y-6">
                <motion.div
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <span className="bg-gradient-to-r from-red-100 to-navy-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">
                    1984'ten Bu Yana Güvenilir Kalite
                  </span>
                </motion.div>

                <motion.h1
                  className="text-4xl md:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <span className="gradient-text">Polipropilen Dokuma</span>
                  <br />
                  <span className="text-navy-900">Çuval Üretiminde</span>
                  <br />
                  <span className="text-red-600">Türkiye'nin Lideri</span>
                </motion.h1>

                <motion.p
                  className="text-xl text-muted-foreground max-w-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Tuna Şirketler Grubu olarak 1984'ten bu yana sentetik dokuma kumaş ve çuval sektöründe faaliyet
                  göstermekteyiz. Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli PP çuval
                  üretimi gerçekleştiriyoruz.
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
                    <span className="relative z-10">Ürünlerimizi İnceleyin</span>
                    <ArrowRight className="ml-2 h-4 w-4 relative z-10 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-navy-300 text-navy-800 hover:border-navy-500 button-3d"
                >
                  <Link href="/hakkimizda">Hikayemizi Keşfedin</Link>
                </Button>
              </motion.div>

              {/* Stats - Updated to remove 100K+ production */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-3xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
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
                  src="/production-facility.jpeg"
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
                <p className="text-sm text-muted-foreground mt-1">Modern teknoloji ile üretim</p>
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

      {/* Products Preview Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Ürün Portföyümüz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Endüstriyel ve ticari ihtiyaçlarınıza uygun geniş ürün yelpazemiz
            </p>
          </motion.div>

          {/* First row - 3 products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold gradient-text mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 products centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.slice(3, 5).map((product, index) => (
              <motion.div
                key={index + 3}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold gradient-text mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="space-y-2">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button asChild size="lg" className="gradient-bg-secondary text-white hover:opacity-90 button-3d">
              <Link href="/urunler">Tüm Ürünleri Görüntüle</Link>
            </Button>
          </motion.div>
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
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-navy-500"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-navy-100">
                      <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
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
    </div>
  )
}
