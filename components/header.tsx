"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu, X } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

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

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-40 transition-colors"
      style={{
        backgroundColor: headerBgOpacity,
        boxShadow: headerShadow,
        backdropFilter: isScrolled ? "blur(8px)" : "none",
      }}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="text-2xl font-bold gradient-text"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Efe Sentetik
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <motion.div
            className="flex space-x-6 text-sm font-medium"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <Link href="#about" className="transition-colors hover:text-primary">
              Hakkımızda
            </Link>
            <Link href="#products" className="transition-colors hover:text-primary">
              Ürünlerimiz
            </Link>
            <Link href="#process" className="transition-colors hover:text-primary">
              Üretim Süreci
            </Link>
            <Link href="#news" className="transition-colors hover:text-primary">
              Haberler
            </Link>
            <Link href="#gallery" className="transition-colors hover:text-primary">
              Galeri
            </Link>
            <Link href="#faq" className="transition-colors hover:text-primary">
              S.S.S
            </Link>
            <Link href="#contact" className="transition-colors hover:text-primary">
              İletişim
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+90 342 123 4567</span>
            </Button>
            <Button
              size="sm"
              className="flex items-center gap-2 gradient-bg-primary text-white hover:opacity-90 button-3d"
            >
              <Mail className="h-4 w-4" />
              <span>İletişim</span>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-background border-t"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="container py-4 flex flex-col space-y-4">
            <Link
              href="#about"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="#products"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ürünlerimiz
            </Link>
            <Link
              href="#process"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Üretim Süreci
            </Link>
            <Link
              href="#news"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Haberler
            </Link>
            <Link
              href="#gallery"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="#faq"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              S.S.S
            </Link>
            <Link
              href="#contact"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button variant="ghost" size="sm" className="justify-start">
                <Phone className="h-4 w-4 mr-2" />
                <span>+90 342 123 4567</span>
              </Button>
              <Button size="sm" className="justify-start gradient-bg-primary text-white">
                <Mail className="h-4 w-4 mr-2" />
                <span>İletişim</span>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
