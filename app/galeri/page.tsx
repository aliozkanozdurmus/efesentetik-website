"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X, ZoomIn, Download, Share2 } from "lucide-react"
import Image from "next/image"

const categories = [
  { id: "all", name: "Tümü" },
  { id: "facility", name: "Tesisimiz" },
  { id: "production", name: "Üretim" },
  { id: "products", name: "Ürünler" },
  { id: "team", name: "Ekibimiz" },
  { id: "events", name: "Etkinlikler" },
]

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Tuna Sentetik Ana Üretim Tesisi",
    category: "facility",
    title: "Ana Üretim Tesisi",
    description: "Gaziantep OSB'deki modern üretim tesisimizin genel görünümü",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=600&width=800",
    alt: "PP Çuval Üretim Hattı",
    category: "production",
    title: "PP Çuval Üretim Hattı",
    description: "Son teknoloji makinelerle PP çuval üretim sürecimiz",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Kaliteli Jüt Çuvallar",
    category: "products",
    title: "Jüt Çuval Koleksiyonu",
    description: "Doğal ve çevre dostu jüt çuvallarımız",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Kalite Kontrol Laboratuvarı",
    category: "production",
    title: "Kalite Kontrol Laboratuvarı",
    description: "Her ürünümüzün kalitesini test ettiğimiz modern laboratuvarımız",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Depolama ve Lojistik Alanı",
    category: "facility",
    title: "Depolama Alanı",
    description: "Organize ve modern depolama sistemimiz",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Lamine Çuval Üretimi",
    category: "products",
    title: "Lamine Çuvallar",
    description: "Yüksek baskı kalitesine sahip lamine çuvallarımız",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Üretim Ekibi",
    category: "team",
    title: "Deneyimli Ekibimiz",
    description: "20+ yıllık tecrübeli üretim ekibimiz",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Ventilli Çuval Üretimi",
    category: "products",
    title: "Ventilli Çuvallar",
    description: "Özel ventil sistemli çuvallarımızın üretim süreci",
  },
  {
    id: 9,
    src: "/placeholder.svg?height=600&width=800",
    alt: "İhracat Fuarı Standımız",
    category: "events",
    title: "İhracat Fuarı",
    description: "Uluslararası fuarlardaki standımız",
  },
  {
    id: 10,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Biyobozunur Çuval Ar-Ge",
    category: "production",
    title: "Ar-Ge Çalışmaları",
    description: "Biyobozunur çuval geliştirme sürecimiz",
  },
  {
    id: 11,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Big Bag Çuval Üretimi",
    category: "products",
    title: "Big Bag Çuvallar",
    description: "Yüksek kapasiteli Big Bag çuvallarımız",
  },
  {
    id: 12,
    src: "/placeholder.svg?height=600&width=800",
    alt: "Çevre Ödülü Töreni",
    category: "events",
    title: "Çevre Ödülü",
    description: "ISO 14001 sertifikası ödül törenimiz",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryImages)[0]>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const openLightbox = (image: (typeof galleryImages)[0]) => {
    setSelectedImage(image)
    setCurrentImageIndex(filteredImages.findIndex((img) => img.id === image.id))
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex])
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
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Galeri</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tesisimiz, üretim süreçlerimiz, ürünlerimiz ve ekibimizden görüntüler
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

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => openLightbox(image)}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-2">{image.description}</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                      <ZoomIn className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Bu kategoride henüz görsel bulunmamaktadır.</p>
            </div>
          )}
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
                {filteredImages.length > 1 && (
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
                    {currentImageIndex + 1} / {filteredImages.length}
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
