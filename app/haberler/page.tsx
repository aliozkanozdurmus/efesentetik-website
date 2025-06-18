"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, X } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", name: "Tüm Haberler" },
  { id: "company", name: "Şirket Haberleri" },
  { id: "product", name: "Ürün Haberleri" },
  { id: "export", name: "İhracat" },
  { id: "environment", name: "Çevre" },
]

const news = [
  {
    id: 1,
    title: "Tuna Sentetik Üretim Kapasitesini İki Katına Çıkardı",
    summary: "Yeni makine yatırımlarımızla üretim kapasitemizi iki katına çıkardık ve 20 yeni istihdam sağladık.",
    category: "company",
    date: "15 Mayıs 2025",
    readTime: "3 dk",
    author: "Tuna Sentetik",
    image: "/placeholder.svg?height=400&width=600",
    featured: true,
    content: `
      <p>Tuna Sentetik olarak, artan talepleri karşılamak ve müşterilerimize daha hızlı hizmet verebilmek amacıyla üretim kapasitemizi iki katına çıkardık.</p>
      
      <p>Gaziantep Organize Sanayi Bölgesi'ndeki tesisimize yaptığımız yeni makine yatırımlarıyla, günlük üretim kapasitemiz 25.000 adetten 50.000 adede yükseldi. Bu artış, siparişlerin daha kısa sürede teslim edilmesini sağlayacak ve ihracat hedeflerimize ulaşmamızda önemli bir rol oynayacak.</p>
      
      <h3>Teknolojik Yatırımlar</h3>
      <p>Yeni üretim hatlarımız, en son teknoloji ile donatılmış olup, enerji verimliliği yüksek ve çevre dostu özelliklere sahiptir. Bu yatırımla birlikte, 20 yeni istihdam sağlayarak bölge ekonomisine katkıda bulunmaktan da gurur duyuyoruz.</p>
      
      <p>Tuna Sentetik olarak, kaliteden ödün vermeden büyümeye ve müşterilerimize en iyi hizmeti sunmaya devam edeceğiz.</p>
    `,
  },
  {
    id: 2,
    title: "Çevre Dostu Yeni Ürün: Biyobozunur Çuvallar",
    summary: "Doğada 2-3 yıl içinde tamamen çözünebilen çevre dostu çuvallarımızı piyasaya sürdük.",
    category: "environment",
    date: "3 Nisan 2025",
    readTime: "4 dk",
    author: "Ar-Ge Ekibi",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Tuna Sentetik olarak, sürdürülebilirlik hedeflerimiz doğrultusunda geliştirdiğimiz yeni ürünümüz biyobozunur çuvalları piyasaya sürdük.</p>
      
      <p>Doğada 2-3 yıl içinde tamamen çözünebilen bu çevre dostu çuvallar, özellikle organik tarım ürünleri ve gıda sektörü için ideal bir paketleme çözümü sunuyor.</p>
      
      <h3>Ar-Ge Çalışmaları</h3>
      <p>Ar-Ge ekibimizin uzun çalışmaları sonucu geliştirilen biyobozunur çuvallarımız, dayanıklılık ve fonksiyonellikten ödün vermeden çevre dostu bir çözüm sunuyor.</p>
      
      <p>Bu ürünümüzle, Türkiye'de bir ilke imza atmanın gururunu yaşıyoruz.</p>
    `,
  },
  {
    id: 3,
    title: "İhracatta Rekor: %40 Artış Sağlandı",
    summary: "2025'in ilk çeyreğinde ihracat rakamlarımızda geçen yılın aynı dönemine göre %40'lık artış.",
    category: "export",
    date: "21 Mart 2025",
    readTime: "2 dk",
    author: "İhracat Departmanı",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Tuna Sentetik olarak, 2025 yılının ilk çeyreğinde ihracat rakamlarımızda geçen yılın aynı dönemine göre %40'lık bir artış sağlayarak şirket tarihimizin en yüksek ihracat rakamına ulaştık.</p>
      
      <p>Başta Orta Doğu ve Afrika ülkeleri olmak üzere, Avrupa ve Orta Asya pazarlarında da etkinliğimizi artırdık.</p>
      
      <h3>Hedef Pazarlar</h3>
      <p>Özellikle Almanya, Fransa, Birleşik Arap Emirlikleri ve Mısır'a olan ihracatımızdaki artış, toplam ihracat rakamlarımıza önemli katkı sağladı.</p>
    `,
  },
  {
    id: 4,
    title: "Yeni PP Çuval Serisi Tanıtıldı",
    summary: "Gelişmiş özelliklerle donatılmış yeni PP çuval serimiz müşterilerimizle buluştu.",
    category: "product",
    date: "10 Şubat 2025",
    readTime: "3 dk",
    author: "Ürün Geliştirme",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Müşterilerimizin geri bildirimlerini değerlendirerek geliştirdiğimiz yeni PP çuval serimizi tanıttık.</p>
      
      <p>Yeni serimiz, daha yüksek dayanıklılık, gelişmiş UV koruması ve çeşitli renk seçenekleri sunuyor.</p>
      
      <h3>Teknik Özellikler</h3>
      <p>50-120 gr/m² ağırlık seçenekleri, çeşitli ebatlar ve özel baskı imkanları ile müşterilerimizin tüm ihtiyaçlarını karşılıyor.</p>
    `,
  },
  {
    id: 5,
    title: "ISO 14001 Çevre Yönetim Sistemi Sertifikası",
    summary: "Çevreye olan sorumluluğumuz kapsamında ISO 14001 sertifikasını aldık.",
    category: "environment",
    date: "28 Ocak 2025",
    readTime: "2 dk",
    author: "Kalite Departmanı",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Tuna Sentetik olarak çevreye olan sorumluluğumuz kapsamında ISO 14001 Çevre Yönetim Sistemi sertifikasını aldık.</p>
      
      <p>Bu sertifika, çevre dostu üretim süreçlerimizi ve sürdürülebilirlik hedeflerimizi tescillemiştir.</p>
    `,
  },
  {
    id: 6,
    title: "Gaziantep Sanayi Odası İşbirliği",
    summary: "Gaziantep Sanayi Odası ile stratejik işbirliği anlaşması imzaladık.",
    category: "company",
    date: "15 Ocak 2025",
    readTime: "2 dk",
    author: "Yönetim",
    image: "/placeholder.svg?height=400&width=600",
    content: `
      <p>Bölgesel kalkınmaya katkı sağlamak amacıyla Gaziantep Sanayi Odası ile stratejik işbirliği anlaşması imzaladık.</p>
      
      <p>Bu işbirliği kapsamında genç girişimcilere mentorluk ve sektörel eğitimler vereceğiz.</p>
    `,
  },
]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedNews, setSelectedNews] = useState<null | (typeof news)[0]>(null)

  const filteredNews = activeCategory === "all" ? news : news.filter((item) => item.category === activeCategory)
  const featuredNews = news.find((item) => item.featured)
  const regularNews = filteredNews.filter((item) => !item.featured)

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "company":
        return "bg-blue-500"
      case "product":
        return "bg-green-500"
      case "export":
        return "bg-purple-500"
      case "environment":
        return "bg-emerald-500"
      default:
        return "bg-gray-500"
    }
  }

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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Haberler</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tuna Sentetik'ten son gelişmeler, yenilikler ve sektörel haberler
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

      {/* Featured News */}
      {featuredNews && activeCategory === "all" && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-2">Öne Çıkan Haber</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-navy-500 rounded-full"></div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-xl border border-navy-100 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onClick={() => setSelectedNews(featuredNews)}
              whileHover={{ y: -5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(featuredNews.category)} text-white`}>Öne Çıkan</Badge>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-red-500" />
                      <span>{featuredNews.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-red-500" />
                      <span>{featuredNews.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1 text-red-500" />
                      <span>{featuredNews.author}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-4">{featuredNews.title}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{featuredNews.summary}</p>
                  <Button
                    variant="ghost"
                    className="text-navy-700 hover:text-navy-900 hover:bg-navy-50 p-0 group w-fit"
                  >
                    <span className="bg-gradient-to-r from-navy-700 to-red-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_2px]">
                      Devamını Oku
                    </span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-20 bg-gradient-to-br from-navy-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-navy-100 cursor-pointer hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedNews(item)}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(item.category)} text-white`}>
                      {categories
                        .find((cat) => cat.id === item.category)
                        ?.name.replace("Haberleri", "")
                        .replace("Tüm ", "")}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1 text-red-500" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1 text-red-500" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold gradient-text mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">{item.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{item.author}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-navy-700 hover:text-navy-900 hover:bg-navy-50 p-0 group"
                    >
                      <span className="text-sm">Oku</span>
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      <AnimatePresence>
        {selectedNews && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={selectedNews.image || "/placeholder.svg"}
                    alt={selectedNews.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className={`${getCategoryColor(selectedNews.category)} text-white`}>
                      {categories
                        .find((cat) => cat.id === selectedNews.category)
                        ?.name.replace("Haberleri", "")
                        .replace("Tüm ", "")}
                    </Badge>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full"
                  onClick={() => setSelectedNews(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedNews.title}</h2>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{selectedNews.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{selectedNews.readTime}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{selectedNews.author}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div
                  className="prose prose-navy max-w-none prose-headings:gradient-text prose-h3:text-xl prose-h3:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: selectedNews.content }}
                />
                <div className="mt-8 flex justify-end">
                  <Button
                    variant="outline"
                    className="border-navy-300 text-navy-800 hover:border-navy-500 button-3d"
                    onClick={() => setSelectedNews(null)}
                  >
                    Kapat
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
