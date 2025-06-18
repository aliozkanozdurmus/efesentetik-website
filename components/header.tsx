"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Ürünlerimiz", href: "/urunler" },
  { name: "Haberler", href: "/haberler" },
  { name: "Galeri", href: "/galeri" },
  { name: "S.S.S", href: "/sss" },
  { name: "İletişim", href: "/iletisim" },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [currentLang, setCurrentLang] = useState("TR")

  // Transform header opacity based on scroll
  const headerBgOpacity = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"])
  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 1px 10px rgba(0, 0, 0, 0.1)"])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const translateToEnglish = () => {
    if (typeof window !== "undefined") {
      const googleTranslateUrl = `https://translate.google.com/translate?sl=tr&tl=en&u=${encodeURIComponent(window.location.href)}`
      window.open(googleTranslateUrl, "_blank")
    }
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-colors"
      style={{
        backgroundColor: headerBgOpacity,
        boxShadow: headerShadow,
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <motion.div
            className="relative h-12 w-48"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Image src="/tuna-logo-new.png" alt="Tuna Sentetik Logo" fill className="object-contain" priority />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <motion.div
            className="flex space-x-6 text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors hover:text-red-600 ${
                  pathname === item.href ? "text-red-600 font-semibold" : "text-navy-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
          <div className="flex items-center space-x-2 ml-4 border-l border-navy-200 pl-4">
            <button
              onClick={() => setCurrentLang("TR")}
              className={`px-2 py-1 text-xs font-medium transition-colors ${
                currentLang === "TR" ? "text-red-600 bg-red-50" : "text-navy-600 hover:text-red-600"
              }`}
            >
              TR
            </button>
            <span className="text-navy-300">|</span>
            <button
              onClick={() => {
                setCurrentLang("EN")
                translateToEnglish()
              }}
              className={`px-2 py-1 text-xs font-medium transition-colors ${
                currentLang === "EN" ? "text-red-600 bg-red-50" : "text-navy-600 hover:text-red-600"
              }`}
            >
              EN
            </button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container py-4 flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-2 transition-colors ${
                  pathname === item.href ? "text-red-600 font-semibold" : "text-navy-700 hover:text-red-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex justify-center space-x-4 pt-4 border-t border-navy-200">
              <button
                onClick={() => setCurrentLang("TR")}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentLang === "TR" ? "text-red-600 bg-red-50" : "text-navy-600 hover:text-red-600"
                }`}
              >
                TR
              </button>
              <button
                onClick={() => {
                  setCurrentLang("EN")
                  translateToEnglish()
                  setIsMobileMenuOpen(false)
                }}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentLang === "EN" ? "text-red-600 bg-red-50" : "text-navy-600 hover:text-red-600"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
