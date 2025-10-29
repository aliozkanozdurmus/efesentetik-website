"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Menu, X } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""
      }`}
    >
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <motion.span
            className="text-2xl font-bold text-primary"
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
            <Link href="#hakkimizda" className="transition-colors hover:text-primary">
              Hakkımızda
            </Link>
            <Link href="#urunlerimiz" className="transition-colors hover:text-primary">
              Ürünlerimiz
            </Link>
            <Link href="#haberler" className="transition-colors hover:text-primary">
              Haberler
            </Link>
            <Link href="#galeri" className="transition-colors hover:text-primary">
              Galeri
            </Link>
            <Link href="#sss" className="transition-colors hover:text-primary">
              S.S.S
            </Link>
            <Link href="#iletisim" className="transition-colors hover:text-primary">
              İletişim
            </Link>
          </motion.div>

          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button size="sm" className="flex items-center gap-2 bg-primary hover:bg-primary/90">
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
              href="#hakkimizda"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hakkımızda
            </Link>
            <Link
              href="#urunlerimiz"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ürünlerimiz
            </Link>
            <Link
              href="#haberler"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Haberler
            </Link>
            <Link
              href="#galeri"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Galeri
            </Link>
            <Link
              href="#sss"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              S.S.S
            </Link>
            <Link
              href="#iletisim"
              className="py-2 transition-colors hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              İletişim
            </Link>
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <Button size="sm" className="justify-start bg-primary hover:bg-primary/90">
                <Mail className="h-4 w-4 mr-2" />
                <span>İletişim</span>
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}
