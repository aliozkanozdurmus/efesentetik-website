import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8">
                <Image src="/tuna-logo.jpg" alt="Tuna Sentetik Logo" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold gradient-text-light">Tuna Sentetik</h3>
            </div>
            <p className="text-navy-100 mb-4">
              Gaziantep'te kaliteli çuval üretimi yapan firmamız, 20 yılı aşkın tecrübesiyle sektörün öncülerinden
              biridir.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-red-300 hover:text-red-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-red-300 hover:text-red-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-red-300 hover:text-red-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-red-300 hover:text-red-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">Ürünlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  PP Çuvallar
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Jüt Çuvallar
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Lamine Çuvallar
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Ventilli Çuvallar
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Biyobozunur Çuvallar
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Big Bag Çuvallar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">Kurumsal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-navy-200 hover:text-red-300 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/haberler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Haberler
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="text-navy-200 hover:text-red-300 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/sss" className="text-navy-200 hover:text-red-300 transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="text-navy-200 hover:text-red-300 transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-navy-200 hover:text-red-300 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                <span className="text-navy-100">Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-navy-100">+90 342 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-navy-100">info@tunasentetik.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                <div className="text-navy-100">
                  <div>Pazartesi - Cuma: 08:30 - 18:00</div>
                  <div>Cumartesi: 09:00 - 13:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-navy-700 py-6">
        <div className="container mx-auto text-center text-navy-300 px-4">
          <p>&copy; {new Date().getFullYear()} Tuna Sentetik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
