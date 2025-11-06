import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react" // Removed Facebook, Twitter, Instagram, Linkedin
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-32 h-8">
                <Image src="/tuna-logo-new.png" alt="Tuna Sentetik Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-navy-100 mb-4">
              Sentetik dokuma kumaş ve çuval sektöründe faaliyet gösteren, kalite ve güvenilirlikte
              öncü firmamız.
            </p>
            {/* Sosyal medya butonları kaldırıldı */}
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">Ürünlerimiz</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Polipropilen Dokuma Çuval
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Big Bag Çuvallar
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Polipropilen CF İplik
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Polipropilen Şerit İplik
                </Link>
              </li>
              <li>
                <Link href="/urunler" className="text-navy-200 hover:text-red-300 transition-colors">
                  Ventilli & Block Bottom
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
              <li>
                <Link href="/kvkk" className="text-navy-200 hover:text-red-300 transition-colors">
                  KVKK
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 gradient-text-light">İletişim</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mr-2 mt-0.5" />
                <span className="text-navy-100">
                  3. Organize Sanayi Bölgesi Kamil Şerbetçi Bulvarı No: 39, Şehitkamil / Gaziantep
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-navy-100">0342 360 98 50</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-navy-100">info@tunasentetik.com.tr</span>
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
