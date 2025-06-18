"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, Download, Share2 } from "lucide-react"
import Image from "next/image"

const galleryImages = [
  {
    id: 1,
    src: "/gallery/production-1.webp",
    alt: "Tuna Sentetik Üretim Makinesi - Dairesel Dokuma Sistemi",
    title: "Dairesel Dokuma Makinesi",
    description: "Modern dairesel dokuma teknolojisi ile yüksek kaliteli kumaş üretimi",
    category: "production",
  },
  {
    id: 2,
    src: "/gallery/production-2.webp",
    alt: "Tuna Sentetik Mavi Üretim Makinesi",
    title: "İleri Teknoloji Üretim Hattı",
    description: "Otomatik kontrol sistemli modern üretim makinelerimiz",
    category: "production",
  },
  {
    id: 3,
    src: "/gallery/production-3.webp",
    alt: "Tuna Sentetik İplik İşleme Makinesi",
    title: "İplik İşleme ve Hazırlık Sistemi",
    description: "Çok sayıda ipliğin eş zamanlı işlenmesi için tasarlanmış sistem",
    category: "production",
  },
  {
    id: 4,
    src: "/gallery/production-4.webp",
    alt: "Tuna Sentetik Paralel İplik Sistemi",
    title: "Paralel İplik Düzenleme Sistemi",
    description: "Hassas iplik düzenleme ve kalite kontrol sistemi",
    category: "production",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
    setCurrentImageIndex(galleryImages.findIndex((img) => img.id === image.id))
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % galleryImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(galleryImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(galleryImages[prevIndex])
  }

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-50 via-white to-red-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-red-200/30 blur-[80px]" />
          <div className="absolute left-0 bottom-0 h-[300px] w-[300px] bg-navy-200/20 blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Üretim Galerimiz</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern üretim tesisimiz ve son teknoloji makinelerimizden görüntüler
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(image)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{image.title}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-6xl w-full max-h-[90vh] flex items-center justify-center">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <div className="relative max-w-4xl max-h-[80vh]">
                  <Image
                    src={selectedImage.src || "/placeholder.svg"}
                    alt={selectedImage.alt}
                    width={800}
                    height={600}
                    className="object-contain max-h-[80vh] w-auto rounded-lg"
                  />
                </div>

                {/* Navigation Arrows */}
                {galleryImages.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
                      onClick={prevImage}
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white rounded-full"
                      onClick={nextImage}
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Button>
                  </>
                )}
              </motion.div>

              {/* Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/40 text-white rounded-full">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-white/20 hover:bg-white/40 text-white rounded-full">
                  <Download className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white/20 hover:bg-white/40 text-white rounded-full"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white font-semibold text-lg mb-1">{selectedImage.title}</h3>
                <p className="text-white/80 text-sm">{selectedImage.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-white/60 text-xs">
                    {currentImageIndex + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
