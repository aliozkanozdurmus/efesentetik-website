"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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

export default function FAQ() {
  return (
    <section id="sss" className="py-20 relative overflow-hidden">
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
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-brown-800">
            Sıkça Sorulan Sorular
          </h2>
          <p className="mt-4 text-muted-foreground sm:text-lg">
            Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-brown-200">
                  <AccordionTrigger className="text-left text-brown-800 hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
