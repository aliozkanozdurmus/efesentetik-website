"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    title: "Kaliteli Çuval Üretiminde Öncü",
    subtitle: "20 Yıllık Tecrübe",
    description:
      "Efe Sentetik olarak, tarım, gıda ve sanayi sektörlerine yönelik yüksek kaliteli çuval çözümleri sunuyoruz.",
    image: "/placeholder.svg?height=800&width=1200",
    buttonText: "Ürünlerimizi Keşfedin",
    buttonLink: "#products",
  },
  {
    id: 2,
    title: "Çevre Dostu Çuval Çözümleri",
    subtitle: "Sürdürülebilir Üretim",
    description: "Doğaya saygılı üretim anlayışımızla, geri dönüştürülebilir ve biyobozunur çuval çözümleri sunuyoruz.",
    image: "/placeholder.svg?height=800&width=1200",
    buttonText: "Daha Fazla Bilgi",
    buttonLink: "#about",
  },
  {
    id: 3,
    title: "Özel Tasarım Çuvallar",
    subtitle: "Markanıza Özel Çözümler",
    description: "Firmanızın ihtiyaçlarına ve kurumsal kimliğinize uygun özel tasarım çuvallar üretiyoruz.",
    image: "/placeholder.svg?height=800&width=1200",
    buttonText: "İletişime Geçin",
    buttonLink: "#contact",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide()
      }, 5000)
    }
  }

  useEffect(() => {
    resetAutoplay()

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [currentSlide, isAutoplay])

  const handleMouseEnter = () => {
    setIsAutoplay(false)
  }

  const handleMouseLeave = () => {
    setIsAutoplay(true)
  }

  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden bg-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="container relative z-10 flex h-full items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="max-w-2xl text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <motion.span
              className="mb-2 inline-block rounded-full gradient-bg-secondary px-4 py-1 text-sm font-medium"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {slides[currentSlide].subtitle}
            </motion.span>
            <motion.h1
              className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl gradient-text-light"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="mb-8 text-lg text-white/90"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {slides[currentSlide].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="gradient-bg-primary hover:opacity-90 button-3d group relative overflow-hidden"
                asChild
              >
                <a href={slides[currentSlide].buttonLink}>
                  <span className="relative z-10 flex items-center">
                    {slides[currentSlide].buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-gold-500" : "w-2 bg-white/50"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-all hover:bg-white/30"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </section>
  )
}
