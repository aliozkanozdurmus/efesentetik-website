"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import SectionTitle from "./section-title"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Üretim Tesisi",
    category: "tesis",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "PP Çuval Üretimi",
    category: "uretim",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Jüt Çuvallar",
    category: "urun",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Kalite Kontrol",
    category: "uretim",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Depolama Alanı",
    category: "tesis",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Lamine Çuvallar",
    category: "urun",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Üretim Makineleri",
    category: "tesis",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Ventilli Çuvallar",
    category: "urun",
  },
]

const categories = [
  { id: "all", name: "Tümü" },
  { id: "tesis", name: "Tesisimiz" },
  { id: "uretim", name: "Üretim" },
  { id: "urun", name: "Ürünler" },
]

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)
  const [activeCategory, setActiveCategory] = useState("all")
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  // Staggered animation for gallery items
  const galleryOpacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1])
  const galleryScale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1])

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-brown-50/50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-brown-200/30 blur-[80px]" />
      </div>

      <div className="container mx-auto relative z-10">
        <SectionTitle title="Galeri" subtitle="Tesisimiz, üretim süreçlerimiz ve ürünlerimizden görüntüler" />

        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={
                  activeCategory === category.id
                    ? "gradient-bg-primary text-white hover:opacity-90 button-3d"
                    : "border-brown-300 text-brown-800 hover:border-brown-500 button-3d"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <motion.div className="gallery-grid" style={{ opacity: galleryOpacity, scale: galleryScale }}>
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="gallery-item shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelectedImage(image)}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-4xl w-full max-h-[90vh]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedImage.src || "/placeholder.svg"}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-5 w-5" />
              </Button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-black/0 p-4">
                <p className="text-white font-medium text-lg">{selectedImage.alt}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
