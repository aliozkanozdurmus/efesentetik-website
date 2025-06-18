"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, TrendingUp, CheckCircle, Target, Leaf, Globe } from "lucide-react"
import Image from "next/image"

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
              Kuruluşumuzdan bugüne kadar olan 40 yıllık yolculuğumuz
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
    </div>
  )
}
