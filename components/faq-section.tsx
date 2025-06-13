"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionTitle from "./section-title"

const faqs = [
  {
    question: "Minimum sipariş miktarınız nedir?",
    answer:
      "Minimum sipariş miktarımız ürün tipine göre değişmektedir. PP çuvallar için genellikle 5.000 adet, jüt çuvallar için 1.000 adet ve özel üretim çuvallar için 3.000 adet minimum sipariş miktarımız bulunmaktadır. Detaylı bilgi için lütfen satış ekibimizle iletişime geçiniz.",
  },
  {
    question: "Çuvalların üzerine özel baskı yapabiliyor musunuz?",
    answer:
      "Evet, tüm çuval çeşitlerimiz üzerine 8 renge kadar özel baskı yapabiliyoruz. Firma logosu, ürün bilgisi, barkod gibi özel tasarımlarınızı çuvallarınıza uygulayabiliyoruz. Baskı kalitesi ve dayanıklılığı konusunda sektörde öncü konumdayız.",
  },
  {
    question: "Teslimat süreleriniz ne kadardır?",
    answer:
      "Teslimat sürelerimiz sipariş miktarına ve ürün tipine göre değişmektedir. Standart ürünlerimiz için genellikle 7-10 iş günü, özel üretim ve baskılı ürünler için 15-20 iş günü teslimat süremiz bulunmaktadır. Acil siparişleriniz için hızlandırılmış üretim seçeneğimiz de mevcuttur.",
  },
  {
    question: "Ürünleriniz gıda ile temasa uygun mu?",
    answer:
      "Evet, gıda sektörü için ürettiğimiz çuvallar, gıda ile temasa uygun hammaddelerden üretilmekte ve ilgili sağlık sertifikalarına sahiptir. Bu ürünlerimiz, ulusal ve uluslararası gıda güvenliği standartlarına uygun olarak üretilmektedir.",
  },
  {
    question: "Yurt dışına ihracat yapıyor musunuz?",
    answer:
      "Evet, başta Orta Doğu ve Afrika ülkeleri olmak üzere, Avrupa ve Orta Asya'ya düzenli olarak ihracat yapmaktayız. Uluslararası standartlara uygun üretim yapıyor ve gerekli tüm belgelendirme süreçlerini tamamlıyoruz.",
  },
  {
    question: "Çuvalların dayanıklılık süresi ne kadardır?",
    answer:
      "Çuvallarımız, doğru koşullarda saklandığında ve kullanıldığında uzun yıllar dayanıklılığını koruyabilmektedir. PP çuvallarımız ortalama 3-5 yıl, jüt çuvallarımız 2-3 yıl dayanıklılık göstermektedir. Ürünlerimiz UV koruması ve nem direnci gibi özelliklere sahiptir.",
  },
  {
    question: "Numune talep edebilir miyiz?",
    answer:
      "Evet, potansiyel müşterilerimize ürünlerimizin kalitesini göstermek için numune gönderimi yapıyoruz. Numune talebiniz için web sitemiz üzerinden veya telefon ile iletişime geçebilirsiniz.",
  },
  {
    question: "Özel ebatlarda çuval üretimi yapıyor musunuz?",
    answer:
      "Evet, standart ebatlarımızın yanı sıra, müşterilerimizin ihtiyaçlarına özel ebatlarda çuval üretimi yapabiliyoruz. Özel ebat talebiniz için teknik ekibimizle görüşmenizi öneririz.",
  },
]

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Animation for FAQ items
  const faqOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1])
  const faqScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-gradient-to-br from-brown-50 via-white to-brown-50"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-brown-200/30 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionTitle
          title="Sıkça Sorulan Sorular"
          subtitle="Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz"
        />

        <motion.div className="max-w-3xl mx-auto" style={{ opacity: faqOpacity, scale: faqScale }}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border-brown-200 mb-4 bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <AccordionTrigger className="text-left px-6 py-4 hover:no-underline group">
                    <span className="gradient-text group-hover:opacity-80 transition-opacity">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-6 pb-4">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
