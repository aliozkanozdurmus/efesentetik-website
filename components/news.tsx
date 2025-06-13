"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, X } from "lucide-react"
import Image from "next/image"

const news = [
  {
    id: 1,
    title: "Efe Sentetik Üretim Kapasitesini İki Katına Çıkardı",
    summary: "Yeni makine yatırımlarımızla üretim kapasitemizi iki katına çıkardık.",
    date: "15 Mayıs 2025",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Efe Sentetik olarak, artan talepleri karşılamak ve müşterilerimize daha hızlı hizmet verebilmek amacıyla üretim kapasitemizi iki katına çıkardık.</p>
      
      <p>Gaziantep Organize Sanayi Bölgesi'ndeki tesisimize yaptığımız yeni makine yatırımlarıyla, günlük üretim kapasitemiz 25.000 adetten 50.000 adede yükseldi. Bu artış, siparişlerin daha kısa sürede teslim edilmesini sağlayacak ve ihracat hedeflerimize ulaşmamızda önemli bir rol oynayacak.</p>
      
      <p>Yeni üretim hatlarımız, en son teknoloji ile donatılmış olup, enerji verimliliği yüksek ve çevre dostu özelliklere sahiptir. Bu yatırımla birlikte, 20 yeni istihdam sağlayarak bölge ekonomisine katkıda bulunmaktan da gurur duyuyoruz.</p>
      
      <p>Efe Sentetik olarak, kaliteden ödün vermeden büyümeye ve müşterilerimize en iyi hizmeti sunmaya devam edeceğiz.</p>
    `,
  },
  {
    id: 2,
    title: "Efe Sentetik'ten Çevre Dostu Yeni Ürün: Biyobozunur Çuvallar",
    summary: "Çevre dostu yeni ürünümüz biyobozunur çuvallar ile doğayı koruyoruz.",
    date: "3 Nisan 2025",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Efe Sentetik olarak, sürdürülebilirlik hedeflerimiz doğrultusunda geliştirdiğimiz yeni ürünümüz biyobozunur çuvalları piyasaya sürdük.</p>
      
      <p>Doğada 2-3 yıl içinde tamamen çözünebilen bu çevre dostu çuvallar, özellikle organik tarım ürünleri ve gıda sektörü için ideal bir paketleme çözümü sunuyor. Geleneksel plastik çuvalların aksine, doğaya zarar vermeden yok olabilen bu ürünler, karbon ayak izinizi azaltmak isteyen firmalar için mükemmel bir alternatif.</p>
      
      <p>Ar-Ge ekibimizin uzun çalışmaları sonucu geliştirilen biyobozunur çuvallarımız, dayanıklılık ve fonksiyonellikten ödün vermeden çevre dostu bir çözüm sunuyor. Bu ürünümüzle, Türkiye'de bir ilke imza atmanın gururunu yaşıyoruz.</p>
      
      <p>Efe Sentetik olarak, gelecek nesillere daha yaşanabilir bir dünya bırakmak için çevre dostu ürün yelpazemizi genişletmeye devam edeceğiz.</p>
    `,
  },
  {
    id: 3,
    title: "Efe Sentetik İhracatta Rekor Kırdı",
    summary: "2025'in ilk çeyreğinde ihracat rakamlarımızda %40 artış sağladık.",
    date: "21 Mart 2025",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Efe Sentetik olarak, 2025 yılının ilk çeyreğinde ihracat rakamlarımızda geçen yılın aynı dönemine göre %40'lık bir artış sağlayarak şirket tarihimizin en yüksek ihracat rakamına ulaştık.</p>
      
      <p>Başta Orta Doğu ve Afrika ülkeleri olmak üzere, Avrupa ve Orta Asya pazarlarında da etkinliğimizi artırdık. Özellikle Almanya, Fransa, Birleşik Arap Emirlikleri ve Mısır'a olan ihracatımızdaki artış, toplam ihracat rakamlarımıza önemli katkı sağladı.</p>
      
      <p>Kaliteli üretim anlayışımız, rekabetçi fiyatlarımız ve zamanında teslimat politikamız, uluslararası pazarlarda tercih edilmemizin başlıca nedenleri arasında yer alıyor. Ayrıca, müşteri ihtiyaçlarına özel çözümler sunabilme yeteneğimiz, global pazarda fark yaratmamızı sağlıyor.</p>
      
      <p>Efe Sentetik olarak, ihracat odaklı büyüme stratejimiz doğrultusunda yeni pazarlara açılmaya ve Türkiye ekonomisine katkı sağlamaya devam edeceğiz.</p>
    `,
  },
]

export default function News() {
  const [selectedNews, setSelectedNews] = useState<null | (typeof news)[0]>(null)

  return (
    <section id="haberler" className="py-20 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-brown-200/30 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="mx-auto max-w-[58rem] text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-brown-800">Haberler</h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">Efe Sentetik'ten son gelişmeler ve duyurular</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md border border-brown-100 cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedNews(item)}
              whileHover={{ y: -5 }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-brown-800">{item.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{item.summary}</p>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary/80 hover:bg-brown-50 p-0"
                  onClick={() => setSelectedNews(item)}
                >
                  Devamını Oku
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* News Popup */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <div className="relative">
              <div className="relative h-64">
                <Image
                  src={selectedNews.image || "/placeholder.svg"}
                  alt={selectedNews.title}
                  fill
                  className="object-cover"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full"
                onClick={() => setSelectedNews(null)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{selectedNews.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brown-800">{selectedNews.title}</h3>
              <div
                className="prose prose-brown max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedNews.content }}
              />
              <div className="mt-6 flex justify-end">
                <Button
                  variant="outline"
                  className="border-brown-300 text-brown-800"
                  onClick={() => setSelectedNews(null)}
                >
                  Kapat
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  )
}
