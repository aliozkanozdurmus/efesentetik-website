"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, X } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", name: "Tüm Haberler" },
  { id: "product", name: "Ürün Bilgileri" },
  { id: "guide", name: "Kullanım Kılavuzları" },
  { id: "technical", name: "Teknik Bilgiler" },
]

const news = [
  {
    id: 1,
    title: "Big Bag Çuvallar: Endüstriyel Taşımacılıkta Devrim",
    summary:
      "Big Bag çuvalların kullanım alanları, avantajları ve doğru seçim kriterleri hakkında bilmeniz gerekenler.",
    category: "product",
    date: "15 Aralık 2024",
    readTime: "5 dk",
    author: "Tuna Sentetik Uzmanları",
    image: "/news/business-document.jpeg",
    featured: true,
    content: `
      <p>Big Bag çuvallar, endüstriyel taşımacılık ve depolama sektöründe vazgeçilmez bir çözüm haline gelmiştir. Bu büyük kapasiteli çuvallar, 500 kg ile 2000 kg arasında değişen yük kapasiteleri ile birçok sektörde kullanılmaktadır.</p>
      
      <h3>Big Bag Çuvalların Temel Özellikleri</h3>
      <p>Big Bag çuvallar, polipropilen dokuma kumaştan üretilir ve yüksek dayanıklılık sağlar. FIBC (Flexible Intermediate Bulk Container) olarak da bilinen bu çuvallar, özel tasarımları sayesinde güvenli taşıma imkanı sunar.</p>
      
      <h3>Kullanım Alanları</h3>
      <p><strong>İnşaat Sektörü:</strong> Çimento, kum, çakıl gibi malzemelerin taşınması</p>
      <p><strong>Tarım Sektörü:</strong> Tahıl, gübre, yem gibi ürünlerin depolanması</p>
      <p><strong>Kimya Sektörü:</strong> Granül ve toz halindeki kimyasalların güvenli taşınması</p>
      <p><strong>Gıda Sektörü:</strong> Şeker, un, bakliyat gibi gıda maddelerinin hijyenik taşınması</p>
      
      <h3>Avantajları</h3>
      <p>• Yüksek yük kapasitesi (500-2000 kg)<br>
      • Ekonomik taşıma çözümü<br>
      • Tekrar kullanılabilir<br>
      • Forklift ile kolay taşıma<br>
      • Depolama alanından tasarruf</p>
      
      <h3>Seçim Kriterleri</h3>
      <p>Big Bag seçerken taşınacak malzemenin özelliklerini, ağırlığını ve kullanım koşullarını dikkate almak önemlidir. Tuna Sentetik olarak, müşterilerimizin ihtiyaçlarına özel Big Bag çözümleri sunuyoruz.</p>
    `,
  },
  {
    id: 2,
    title: "Polipropilen Çuvalların Faydaları ve Kullanım Alanları",
    summary:
      "PP çuvalların neden tercih edildiği, hangi sektörlerde kullanıldığı ve avantajları hakkında detaylı bilgiler.",
    category: "guide",
    date: "8 Aralık 2024",
    readTime: "4 dk",
    author: "Ürün Uzmanları",
    image: "/news/business-success.jpeg",
    content: `
      <p>Polipropilen (PP) çuvallar, dayanıklılığı ve çok yönlülüğü ile paketleme sektörünün vazgeçilmez ürünleri arasında yer almaktadır. Dokuma polipropilen kumaştan üretilen bu çuvallar, birçok avantaj sunmaktadır.</p>
      
      <h3>Polipropilen Çuvalların Temel Özellikleri</h3>
      <p>PP çuvallar, polipropilen ipliklerinin dokunmasıyla elde edilen dayanıklı bir yapıya sahiptir. Su geçirmez, UV dayanımlı ve kimyasal maddelere karşı dirençli özellikleri bulunmaktadır.</p>
      
      <h3>Başlıca Avantajları</h3>
      <p><strong>Dayanıklılık:</strong> Yırtılma ve delinmeye karşı yüksek direnç</p>
      <p><strong>Su Geçirmezlik:</strong> Nem ve suya karşı koruma</p>
      <p><strong>UV Koruması:</strong> Güneş ışınlarına karşı dayanıklılık</p>
      <p><strong>Ekonomiklik:</strong> Uygun maliyet ve uzun kullanım ömrü</p>
      <p><strong>Çevre Dostu:</strong> Geri dönüştürülebilir malzeme</p>
      
      <h3>Kullanım Alanları</h3>
      <p><strong>Tarım:</strong> Buğday, arpa, mısır, pirinç gibi tahılların depolanması</p>
      <p><strong>Gıda:</strong> Un, şeker, bakliyat, baharat paketleme</p>
      <p><strong>İnşaat:</strong> Çimento, alçı, kireç gibi yapı malzemeleri</p>
      <p><strong>Kimya:</strong> Granül plastik, gübre, kimyasal maddeler</p>
      
      <h3>Kalite Standartları</h3>
      <p>Tuna Sentetik olarak ürettiğimiz PP çuvallar, uluslararası kalite standartlarına uygun olarak üretilmektedir. Gıda ile temas edebilir sertifikalarımız bulunmaktadır.</p>
    `,
  },
  {
    id: 3,
    title: "CF İplik Nedir? Özellikleri ve Kullanım Alanları",
    summary: "Continuous Filament (CF) ipliğin teknik özellikleri, üretim süreci ve hangi uygulamalarda kullanıldığı.",
    category: "technical",
    date: "1 Aralık 2024",
    readTime: "3 dk",
    author: "Teknik Ekip",
    image: "/news/business-meeting.jpeg",
    content: `
      <p>CF İplik (Continuous Filament), polipropilen hammaddesinden kesintisiz filament halinde üretilen yüksek kaliteli bir iplik türüdür. Dokuma ve örgü endüstrisinde yaygın olarak kullanılmaktadır.</p>
      
      <h3>CF İpliğin Teknik Özellikleri</h3>
      <p>CF iplik, sürekli filament yapısı sayesinde yüksek mukavemet ve düşük uzama özelliklerine sahiptir. 300-500 denye aralığında üretilen bu iplikler, özel UV katkıları ile güneş ışınlarına karşı dayanıklıdır.</p>
      
      <h3>Üretim Süreci</h3>
      <p>Polipropilen granülleri yüksek sıcaklıkta eritilerek özel nozüllerden geçirilir. Bu süreçte kesintisiz filamentler elde edilir ve soğutma işleminden sonra bobinlere sarılır.</p>
      
      <h3>Kullanım Alanları</h3>
      <p><strong>Çuval Üretimi:</strong> PP çuval dokumada ana hammadde</p>
      <p><strong>Jeotekstil:</strong> İnşaat sektöründe zemin güçlendirme</p>
      <p><strong>Halı Sektörü:</strong> Halı altı ve kenar bantları</p>
      <p><strong>Ambalaj:</strong> Esnek ambalaj malzemeleri</p>
      <p><strong>Tarım:</strong> Sera örtüleri ve tarım tekstilleri</p>
      
      <h3>Avantajları</h3>
      <p>• Yüksek mukavemet<br>
      • Kimyasal dayanıklılık<br>
      • UV koruması<br>
      • Düşük nem emme<br>
      • Gıda ile temas uygunluğu</p>
      
      <h3>Kalite Kontrol</h3>
      <p>Tuna Sentetik'te üretilen CF iplikler, modern laboratuvar imkanlarıyla test edilir ve uluslararası standartlara uygunluğu sağlanır.</p>
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
      case "product":
        return "bg-blue-500"
      case "guide":
        return "bg-green-500"
      case "technical":
        return "bg-purple-500"
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Ürün Rehberi</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ürünlerimiz hakkında detaylı bilgiler, kullanım kılavuzları ve teknik özellikler
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
              <h2 className="text-2xl font-bold gradient-text mb-2">Öne Çıkan Rehber</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                        ?.name.replace("Bilgileri", "")
                        .replace("Kılavuzları", "")
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
                        ?.name.replace("Bilgileri", "")
                        .replace("Kılavuzları", "")
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
