"use client"

import { motion } from "framer-motion"
import { Award, Clock, Users, TrendingUp, CheckCircle, Target, Leaf } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    title: "Kalite Güvencesi",
    description: "Tüm ürünlerimiz uluslararası standartlara uygun olarak üretilmektedir.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "20+ Yıllık Tecrübe",
    description: "Sektörde 20 yılı aşkın deneyimimizle müşterilerimize en iyi hizmeti sunuyoruz.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Uzman Ekip",
    description: "Alanında uzman ekibimizle ihtiyaçlarınıza özel çözümler üretiyoruz.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Sürekli Gelişim",
    description: "Teknolojik yatırımlarımızla üretim kapasitemizi ve kalitemizi sürekli artırıyoruz.",
  },
]

const values = [
  {
    icon: <CheckCircle className="h-6 w-6 text-primary" />,
    title: "Kalite",
    description: "Her aşamada en yüksek kalite standartlarını uyguluyoruz.",
  },
  {
    icon: <Target className="h-6 w-6 text-primary" />,
    title: "Müşteri Odaklılık",
    description: "Müşteri memnuniyeti bizim için her şeyden önce gelir.",
  },
  {
    icon: <Leaf className="h-6 w-6 text-primary" />,
    title: "Sürdürülebilirlik",
    description: "Çevreye duyarlı üretim süreçleri ve ürünler geliştiriyoruz.",
  },
]

export default function About() {
  return (
    <section id="hakkimizda" className="py-20 relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 bottom-0 h-[300px] w-[300px] bg-brown-100/50 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="mx-auto max-w-[58rem] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-brown-800">Hakkımızda</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Efe Sentetik olarak Gaziantep'te kurulduğumuz günden bu yana kaliteli çuval üretimi konusunda sektörün
            öncülerinden biri olmayı başardık.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-brown-800">Efe Sentetik Hikayesi</h3>
            <p className="text-muted-foreground">
              2003 yılında Gaziantep'te kurulan Efe Sentetik, kurulduğu günden bu yana müşteri memnuniyetini ön planda
              tutarak, yüksek kaliteli çuval üretimi konusunda kendini sürekli geliştirmiştir. Başlangıçta küçük bir
              atölyede üretim yapan firmamız, bugün modern tesislerinde günlük 50.000 adet çuval üretim kapasitesine
              ulaşmıştır.
            </p>
            <p className="text-muted-foreground">
              Tarım, gıda, inşaat ve tekstil sektörlerine yönelik çeşitli ebat ve özelliklerde çuval üretimi yapan
              firmamız, müşterilerimizin ihtiyaçlarına özel çözümler sunmaktadır. Üretimde kullandığımız hammaddeler,
              uluslararası kalite standartlarına uygun olup, ürünlerimiz dayanıklılık ve uzun ömür garantisi
              sunmaktadır.
            </p>
            <p className="text-muted-foreground">
              Efe Sentetik olarak, sürdürülebilir üretim anlayışımız ve çevreye duyarlı yaklaşımımızla, sektörde fark
              yaratmaya devam ediyoruz. Geri dönüştürülebilir malzemeler kullanarak doğaya katkı sağlıyor, gelecek
              nesillere daha yaşanabilir bir dünya bırakmak için çalışıyoruz.
            </p>
            <p className="text-muted-foreground">
              2010 yılında ISO 9001 Kalite Yönetim Sistemi sertifikasını alan firmamız, 2015 yılında ihracata başlayarak
              global pazarda da adından söz ettirmeye başlamıştır. Bugün 15'ten fazla ülkeye ihracat yapan Efe Sentetik,
              Türkiye'nin önde gelen çuval üreticileri arasında yer almaktadır.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-brown-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-brown-800">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Efe Sentetik Üretim Tesisi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6 order-1 md:order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-brown-800">Misyonumuz ve Vizyonumuz</h3>
            <div className="space-y-4">
              <div className="bg-brown-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-brown-800">Misyonumuz</h4>
                <p className="text-muted-foreground">
                  Müşterilerimizin ihtiyaçlarına uygun, yüksek kaliteli ve çevre dostu çuval çözümleri sunarak, sektörde
                  güvenilir bir iş ortağı olmak ve ülke ekonomisine katkı sağlamak.
                </p>
              </div>
              <div className="bg-brown-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-brown-800">Vizyonumuz</h4>
                <p className="text-muted-foreground">
                  Çuval üretiminde ulusal ve uluslararası pazarda lider konuma gelerek, yenilikçi ürünler ve
                  sürdürülebilir üretim anlayışıyla sektöre yön veren bir firma olmak.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-brown-800 pt-4">Değerlerimiz</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{value.icon}</div>
                  <div>
                    <h4 className="font-semibold text-brown-800">{value.title}</h4>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
