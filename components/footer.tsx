import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-brown-900 to-brown-800 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 gradient-text-light">Efe Sentetik</h3>
            <p className="text-brown-100">
              Gaziantep'te kaliteli çuval üretimi yapan firmamız, 20 yılı aşkın tecrübesiyle sektörün öncülerinden
              biridir.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-gold-300 hover:text-gold-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gold-300 hover:text-gold-200 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gold-300 hover:text-gold-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gold-300 hover:text-gold-200 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">Ürünlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#products" className="text-brown-200 hover:text-gold-300 transition-colors">
                  PP Çuvallar
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Jüt Çuvallar
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Lamine Çuvallar
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Ventilli Çuvallar
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Biyobozunur Çuvallar
                </Link>
              </li>
              <li>
                <Link href="#products" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Big Bag Çuvallar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">Kurumsal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="#news" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Haberler
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-brown-200 hover:text-gold-300 transition-colors">
                  Sıkça Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-brown-200 hover:text-gold-300 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-400 mr-2 mt-0.5" />
                <span className="text-brown-100">Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-400 mr-2" />
                <span className="text-brown-100">+90 342 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-400 mr-2" />
                <span className="text-brown-100">info@efesentetik.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-gold-400 mr-2 mt-0.5" />
                <div className="text-brown-100">
                  <div>Pazartesi - Cuma: 08:30 - 18:00</div>
                  <div>Cumartesi: 09:00 - 13:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-brown-700 py-6">
        <div className="container mx-auto text-center text-brown-300">
          <p>&copy; {new Date().getFullYear()} Efe Sentetik. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
