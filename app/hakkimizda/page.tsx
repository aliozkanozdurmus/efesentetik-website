"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, TrendingUp, CheckCircle, Target, Leaf, Globe, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const features = [
  {
    icon: <Award className="h-8 w-8 text-red-500" />,
    title: "Kalite Güvencesi",
    description: "Tüm ürünlerimiz uluslararası standartlara uygun olarak üretilmektedir.",
  },
  {
    icon: <Clock className="h-8 w-8 text-red-500" />,
    title: "40+ Yıllık Tecrübe",
    description: "Sektörde 40 yılı aşkın deneyimimizle müşterilerimize en iyi hizmeti sunuyoruz.",
  },
  {
    icon: <Users className="h-8 w-8 text-red-500" />,
    title: "Uzman Ekip",
    description: "Alanında uzman ekibimizle ihtiyaçlarınıza özel çözümler üretiyoruz.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-red-500" />,
    title: "Sürekli Gelişim",
    description: "Teknolojik yatırımlarımızla üretim kapasitemizi ve kalitemizi sürekli artırıyoruz.",
  },
]

const values = [
  {
    icon: <CheckCircle className="h-6 w-6 text-red-500" />,
    title: "Kalite",
    description: "Her aşamada en yüksek kalite standartlarını uyguluyoruz.",
  },
  {
    icon: <Target className="h-6 w-6 text-red-500" />,
    title: "Müşteri Odaklılık",
    description: "Müşteri memnuniyeti bizim için her şeyden önce gelir.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-red-500" />,
    title: "Sürdürülebilirlik",
    description: "Çevreye duyarlı üretim süreçleri ve ürünler geliştiriyoruz.",
  },
  {
    icon: <Globe className="h-6 w-6 text-red-500" />,
    title: "Global Vizyon",
    description: "Uluslararası pazarlarda güçlü bir konuma sahip olmayı hedefliyoruz.",
  },
]

const timeline = [
  { year: "1984", event: "TUNA ŞİRKETLER GRUBU'nun Huzeyfe Durmaz tarafından kuruluşu" },
  { year: "1990", event: "Sentetik dokuma kumaş üretiminde uzmanlaşma" },
  { year: "2000", event: "Modern üretim tesislerinin kurulması" },
  { year: "2010", event: "İhracata başlangıç ve uluslararası sertifikasyonlar" },
  { year: "2020", event: "Teknolojik yenileme ve kapasite artırımı" },
  { year: "2024", event: "5+ ülkeye ihracat ve sürdürülebilir ürün geliştirme" },
]

export default function AboutPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Hakkımızda</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TUNA ŞİRKETLER GRUBU olarak 1984 yılından bu yana sentetik dokuma kumaş ve çuval sektöründe kaliteli
              üretim yaparak sektörün öncülerinden biri olmayı başardık.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold gradient-text">TUNA GROUP Hikayesi</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TUNA ŞİRKETLER GRUBU'nun ilk temelleri 1984 yılında HUZEYFE DURMAZ tarafından atılmış, TUNA GROUP
                  faaliyetine sentetik dokuma kumaş ve çuval sektöründe üretim yaparak başlamıştır.
                </p>
                <p>
                  Ülkesine ve çalışanlarına fayda sağlamayı amaçlayan TUNA GROUP, sistemini sürekli yenilemeye ve
                  iyileştirmeye yönelik şirket kültürünü yaratarak, teknolojide değişimi ve gelişimi izleyerek, yeni
                  yatırımlar, yeni alanlar belirleyerek pazarda etkin pay sahibi olmak için çalışmalarını
                  sürdürmektedir.
                </p>
                <p>
                  40 yılı aşkın deneyimimizle, müşteri memnuniyetini ön planda tutarak, endüstriyel ve ticari
                  sektörlerin ihtiyaçlarına uygun yüksek kaliteli PP çuval üretimi gerçekleştirmekteyiz. Üretim
                  süreçlerimize en son teknolojik yenilikleri entegre ederek, çevreye duyarlı yaklaşımımızla topluma
                  değer katmaya devam ediyoruz.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image src="/corporate-building.jpeg" alt="TUNA GROUP Kurumsal Merkez" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Güçlü Yanlarımız</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sektörde öncü konumumuzu sağlayan temel değerlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-navy-50 to-red-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 gradient-text">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold gradient-text mb-4">Misyonumuz</h3>
                <p className="text-muted-foreground">
                  Endüstriyel ve ticari sektörlerin ihtiyaçlarına uygun, yüksek kaliteli PP çuval üretimi
                  gerçekleştirmek. Müşteri memnuniyetini ve iş birliğini ön planda tutarak, üretim süreçlerimize en son
                  teknolojik yenilikleri entegre etmek ve çevreye duyarlı yaklaşımımızla topluma değer katmak.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold gradient-text mb-4">Vizyonumuz</h3>
                <p className="text-muted-foreground">
                  Sentetik dokuma kumaş ve çuval üretiminde ulusal ve uluslararası pazarda lider konuma gelerek,
                  yenilikçi ürünler ve sürdürülebilir üretim anlayışıyla sektöre yön veren bir firma olmak.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold gradient-text">Değerlerimiz</h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start bg-white p-4 rounded-xl shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mr-4 mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-semibold gradient-text mb-1">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Video Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Üretim Süreçlerimiz</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern tesisimizde gerçekleştirdiğimiz üretim süreçlerini yakından inceleyin
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-navy-100 to-red-100 p-2">
              <div className="relative rounded-xl overflow-hidden bg-black">
                <video
                  className="w-full h-auto max-h-[600px] object-cover"
                  controls
                  preload="metadata"
                  poster="/production-facility.jpeg"
                >
                  <source src="/company-video.mp4" type="video/mp4" />
                  Tarayıcınız video oynatmayı desteklemiyor.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>

            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-muted-foreground max-w-2xl mx-auto">
                40 yıllık tecrübemizle modern teknoloji ve geleneksel kaliteyi bir araya getiriyoruz. Üretim tesisimizde
                her aşamada kalite kontrol uygulayarak, müşterilerimize en iyi ürünleri sunuyoruz.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Tarihçemiz</h2>
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
