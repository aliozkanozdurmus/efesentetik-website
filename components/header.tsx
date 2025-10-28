"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe, Phone, Mail, MapPin, ChevronDown, Sparkles, Home, Factory, Package, Newspaper, Images, HelpCircle } from "lucide-react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navigation = [
  { name: "Ana Sayfa", href: "/", icon: <Home className="w-5 h-5" /> },
  { name: "Hakkımızda", href: "/hakkimizda", icon: <Factory className="w-5 h-5" /> },
  { name: "Ürünlerimiz", href: "/urunler", icon: <Package className="w-5 h-5" /> },
  { name: "Haberler", href: "/haberler", icon: <Newspaper className="w-5 h-5" /> },
  { name: "Galeri", href: "/galeri", icon: <Images className="w-5 h-5" /> },
  { name: "S.S.S", href: "/sss", icon: <HelpCircle className="w-5 h-5" /> },
  { name: "İletişim", href: "/iletisim", icon: <Phone className="w-5 h-5" /> },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState("TR")
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // Transform header opacity based on scroll
  const headerBgOpacity = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.98)"])
  const headerShadow = useTransform(scrollY, [0, 100], ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 30px rgba(0, 0, 0, 0.1)"])
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98])

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
    <>
      {/* Animated Background Elements */}
      <div className="fixed top-0 left-0 right-0 z-30 pointer-events-none">
        <motion.div
          className="absolute top-4 left-10 w-20 h-20 bg-gradient-to-r from-red-400/20 to-navy-400/20 rounded-full blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-8 right-20 w-16 h-16 bg-gradient-to-r from-navy-400/20 to-red-400/20 rounded-full blur-lg"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.header
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        style={{
          backgroundColor: headerBgOpacity,
          boxShadow: headerShadow,
          transform: `scaleY(${headerScale})`,
          backdropFilter: isScrolled ? "blur(20px)" : "blur(10px)",
          borderBottom: isScrolled ? "1px solid rgba(239, 68, 68, 0.1)" : "none"
        }}
      >
        <div className="container mx-auto">
          {/* Top Bar */}
          <AnimatePresence>
            {!isScrolled && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="border-b border-gray-100/50 bg-gradient-to-r from-navy-50/50 to-red-50/50">
                  <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="hidden md:flex items-center space-x-4 text-xs text-gray-600">
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Phone className="w-3 h-3" />
                        <span>+90 342 123 4567</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Mail className="w-3 h-3" />
                        <span>info@tunasentetik.com</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center space-x-1"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin className="w-3 h-3" />
                        <span>Gaziantep OSB</span>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Sparkles className="w-3 h-3 text-yellow-500" />
                      <span className="text-xs text-gray-600">40+ Yıllık Tecrübe</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Header */}
          <div className="flex h-16 lg:h-20 items-center justify-between px-4">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link href="/" className="flex items-center">
                <div className="relative">
                  <motion.div
                    className="relative h-10 w-40 lg:h-12 lg:w-48"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      type: "spring",
                      delay: 0.2
                    }}
                  >
                    <Image 
                      src="/tuna-logo-new.png" 
                      alt="Tuna Sentetik Logo" 
                      fill 
                      className="object-contain drop-shadow-sm" 
                      priority 
                    />
                  </motion.div>
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <motion.div
                className="flex items-center space-x-1"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      href={item.href}
                      className={`relative group px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                        pathname === item.href 
                          ? "bg-gradient-to-r from-red-500 to-navy-600 text-white shadow-lg" 
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-navy-50 hover:text-navy-900"
                      }`}
                    >
                      <motion.span 
                        className="text-lg"
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.span>
                      <span className="text-sm font-medium">{item.name}</span>
                      {pathname === item.href && (
                        <motion.div
                          className="absolute inset-0 rounded-lg bg-white/20"
                          layoutId="activeTab"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              {/* Language Selector */}
              <motion.div
                className="flex items-center ml-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="relative">
                  <motion.button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-navy-100 to-red-100 rounded-lg hover:from-navy-200 hover:to-red-200 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Globe className="w-4 h-4 text-navy-700" />
                    <span className="text-sm font-medium text-navy-700">{currentLang}</span>
                    <ChevronDown className={`w-3 h-3 text-navy-700 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.button>
                  
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                      >
                        <motion.button
                          onClick={() => {
                            setCurrentLang("TR")
                            setIsDropdownOpen(false)
                          }}
                          className={`w-full px-4 py-3 text-left transition-colors flex items-center space-x-2 ${
                            currentLang === "TR" ? "bg-red-50 text-red-600 font-medium" : "hover:bg-gray-50 text-gray-700"
                          }`}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium">TR</span>
                          <span>Türkçe</span>
                        </motion.button>
                        <motion.button
                          onClick={() => {
                            setCurrentLang("EN")
                            translateToEnglish()
                            setIsDropdownOpen(false)
                          }}
                          className={`w-full px-4 py-3 text-left transition-colors flex items-center space-x-2 ${
                            currentLang === "EN" ? "bg-red-50 text-red-600 font-medium" : "hover:bg-gray-50 text-gray-700"
                          }`}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium">EN</span>
                          <span>English</span>
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu Content */}
            <motion.div
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="h-full flex flex-col">
                {/* Mobile Menu Header */}
                <div className="p-6 border-b bg-gradient-to-r from-navy-600 to-red-600 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold">Menü</h2>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-white hover:bg-white/20"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm">40+ Yıllık Tecrübe</span>
                  </div>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                      >
                        <Link
                          href={item.href}
                          className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                            pathname === item.href 
                              ? "bg-gradient-to-r from-red-500 to-navy-600 text-white shadow-lg" 
                              : "text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-navy-50 hover:text-navy-900"
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <motion.span 
                            className="text-xl"
                            whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                            transition={{ duration: 0.5 }}
                          >
                            {item.icon}
                          </motion.span>
                          <span className="font-medium">{item.name}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t bg-gray-50">
                  <div className="space-y-3">
                    <motion.button
                      onClick={() => {
                        setCurrentLang("TR")
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${
                        currentLang === "TR" ? "bg-red-100 text-red-600 font-medium" : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm font-medium">TR</span>
                      <span>Türkçe</span>
                    </motion.button>
                    <motion.button
                      onClick={() => {
                        setCurrentLang("EN")
                        translateToEnglish()
                        setIsMobileMenuOpen(false)
                      }}
                      className={`w-full flex items-center justify-center space-x-2 p-3 rounded-lg transition-colors ${
                        currentLang === "EN" ? "bg-red-100 text-red-600 font-medium" : "bg-white text-gray-700 hover:bg-gray-100"
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-sm font-medium">EN</span>
                      <span>English</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
