"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"

const categories = [
  { id: "all", name: "Tüm Sorular" },
  { id: "general", name: "Genel" },
  { id: "products", name: "Ürünler" },
  { id: "orders", name: "Sipariş" },
  { id: "shipping", name: "Teslimat" },
  { id: "quality", name: "Kalite" },
]

const faqs = [
  {
    id: 2,
    question: "Çuvalların üzerine özel baskı yapabiliyor musunuz?",
    answer:
      "Evet, tüm çuval çeşitlerimiz üzerine 8 renge kadar özel baskı yapabiliyoruz. Firma logosu, ürün bilgisi, barkod gibi özel tasarımlarınızı çuvallarınıza uygulayabiliyoruz. Baskı kalitesi ve dayanıklılığı konusunda sektörde öncü konumdayız. Baskı için minimum sipariş miktarları uygulanmaktadır.",
    category: "products",
    popular: true,
  },
  {
    id: 3,
    question: "Ürünlerimiz gıda ile temasa uygun mu?",
    answer:
      "Evet, gıda sektörü için ürettiğimiz çuvallar, gıda ile temasa uygun hammaddelerden üretilmekte ve ilgili sağlık sertifikalarına sahiptir. Bu ürünlerimiz, ulusal ve uluslararası gıda güvenliği standartlarına uygun olarak üretilmektedir.",
    category: "quality",
  },
  {
    id: 4,
    question: "Yurt dışına ihracat yapıyor musunuz?",
    answer:
      "Evet, başta Orta Doğu ve Afrika ülkeleri olmak üzere, Avrupa ve Orta Asya'ya düzenli olarak ihracat yapmaktayız. 15'ten fazla ülkeye ihracat deneyimimiz bulunmaktadır. Uluslararası standartlara uygun üretim yapıyor ve gerekli tüm belgelendirme süreçlerini tamamlıyoruz.",
    category: "general",
  },
  {
    id: 5,
    question: "Çuvalların dayanıklılık süresi ne kadardır?",
    answer:
      "Çuvallarımız, doğru koşullarda saklandığında ve kullanıldığında uzun yıllar dayanıklılığını koruyabilmektedir. PP çuvallarımız ortalama 3-5 yıl, jüt çuvallarımız 2-3 yıl dayanıklılık göstermektedir. Ürünlerimiz UV koruması ve nem direnci gibi özelliklere sahiptir.",
    category: "quality",
  },
  {
    id: 6,
    question: "Numune talep edebilir miyiz?",
    answer:
      "Evet, potansiyel müşterilerimize ürünlerimizin kalitesini göstermek için ücretsiz numune gönderimi yapıyoruz. Numune talebiniz için web sitemiz üzerinden veya telefon ile iletişime geçebilirsiniz. Kargo ücreti tarafınızdan karşılanmaktadır.",
    category: "general",
  },
  {
    id: 7,
    question: "Özel ebatlarda çuval üretimi yapıyor musunuz?",
    answer:
      "Evet, standart ebatlarımızın yanı sıra, müşterilerimizin ihtiyaçlarına özel ebatlarda çuval üretimi yapabiliyoruz. Özel ebat talebiniz için teknik ekibimizle görüşmenizi öneririz. Minimum sipariş miktarları özel üretimler için farklılık gösterebilir.",
    category: "products",
  },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const popularFAQs = faqs.filter((faq) => faq.popular)

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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Sıkça Sorulan Sorular</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz. Aradığınızı bulamazsanız bizimle iletişime
              geçin.
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Soru ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-navy-200 focus:border-red-400 focus:ring-red-400"
              />
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
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

      {/* Popular FAQs */}
      {activeCategory === "all" && searchTerm === "" && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl font-bold gradient-text mb-2">Popüler Sorular</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-navy-500 rounded-full mx-auto"></div>
            </motion.div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl">
                {popularFAQs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    className="bg-gradient-to-br from-navy-50 to-red-50 p-6 rounded-xl border border-navy-100 hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <h3 className="font-semibold gradient-text mb-3 text-sm">{faq.question}</h3>
                    <p className="text-muted-foreground text-xs line-clamp-3">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Accordion */}
      <section className="py-20 bg-gradient-to-br from-navy-50/50 via-white to-red-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Accordion type="single" collapsible className="w-full space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                    >
                      <AccordionItem
                        value={`item-${faq.id}`}
                        className="border border-navy-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                      >
                        <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group">
                          <div className="flex items-center gap-3">
                            <span className="gradient-text group-hover:opacity-80 transition-opacity font-semibold">
                              {faq.question}
                            </span>
                            {faq.popular && (
                              <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">Popüler</span>
                            )}
                            {faq.new && (
                              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">Yeni</span>
                            )}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground px-6 pb-4 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <div className="mb-4">
                  <MessageCircle className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-semibold gradient-text mb-2">Aradığınız soruyu bulamadınız mı?</h3>
                <p className="text-muted-foreground mb-6">
                  Farklı arama terimleri deneyin veya bizimle doğrudan iletişime geçin.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="gradient-bg-secondary text-white hover:opacity-90 button-3d">
                    <Phone className="mr-2 h-4 w-4" />
                    Bizi Arayın
                  </Button>
                  <Button variant="outline" className="border-navy-300 text-navy-800 hover:border-navy-500 button-3d">
                    <Mail className="mr-2 h-4 w-4" />
                    E-posta Gönderin
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-900 via-navy-800 to-red-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Hala Sorunuz mu Var?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Uzman ekibimiz size yardımcı olmak için hazır. Hemen iletişime geçin ve sorularınızın cevabını alın.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="gradient-bg-secondary text-white hover:opacity-90 button-3d"
                onClick={() => (window.location.href = "/iletisim")}
              >
                İletişim
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
