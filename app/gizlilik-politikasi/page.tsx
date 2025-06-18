"use client"

import { motion } from "framer-motion"
import { Shield, Eye, Lock, Database, UserCheck, FileText } from "lucide-react"

const sections = [
  {
    icon: <Shield className="h-6 w-6 text-red-500" />,
    title: "Kişisel Verilerin Korunması",
    content: `
      <p>Tuna Sentetik olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında kişisel verilerinizin güvenliğini sağlamak ve gizliliğinizi korumak önceliğimizdir.</p>
      <p>Bu politika, kişisel verilerinizin nasıl toplandığı, işlendiği, saklandığı ve korunduğu hakkında bilgi vermektedir.</p>
    `,
  },
  {
    icon: <Database className="h-6 w-6 text-red-500" />,
    title: "Toplanan Veriler",
    content: `
      <p>Web sitemiz ve hizmetlerimiz kapsamında aşağıdaki kişisel veriler toplanabilir:</p>
      <ul>
        <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası</li>
        <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, adres bilgileri</li>
        <li><strong>Müşteri İşlem Bilgileri:</strong> Sipariş geçmişi, ödeme bilgileri, teslimat bilgileri</li>
        <li><strong>Pazarlama Bilgileri:</strong> Ürün tercihleri, kampanya katılımları</li>
        <li><strong>Teknik Veriler:</strong> IP adresi, çerez bilgileri, tarayıcı bilgileri</li>
      </ul>
    `,
  },
  {
    icon: <Eye className="h-6 w-6 text-red-500" />,
    title: "Verilerin İşlenme Amaçları",
    content: `
      <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
      <ul>
        <li>Ürün ve hizmet satışının gerçekleştirilmesi</li>
        <li>Müşteri hizmetlerinin sunulması ve geliştirilmesi</li>
        <li>Sipariş takibi ve teslimat işlemlerinin yürütülmesi</li>
        <li>Faturalandırma ve muhasebe işlemlerinin yapılması</li>
        <li>Pazarlama faaliyetlerinin yürütülmesi (izin dahilinde)</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>Web sitesi güvenliğinin sağlanması</li>
      </ul>
    `,
  },
  {
    icon: <Lock className="h-6 w-6 text-red-500" />,
    title: "Veri Güvenliği",
    content: `
      <p>Kişisel verilerinizin güvenliği için aşağıdaki teknik ve idari tedbirleri almaktayız:</p>
      <ul>
        <li>SSL sertifikası ile şifreli veri iletimi</li>
        <li>Güvenli sunucu altyapısı ve düzenli güvenlik güncellemeleri</li>
        <li>Erişim kontrolü ve yetkilendirme sistemleri</li>
        <li>Düzenli veri yedekleme ve kurtarma prosedürleri</li>
        <li>Personel eğitimleri ve gizlilik sözleşmeleri</li>
        <li>Siber güvenlik önlemleri ve izleme sistemleri</li>
      </ul>
    `,
  },
  {
    icon: <UserCheck className="h-6 w-6 text-red-500" />,
    title: "Veri Sahibi Hakları",
    content: `
      <p>KVKK kapsamında aşağıdaki haklarınız bulunmaktadır:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenen kişisel verileriniz hakkında bilgi talep etme</li>
        <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
        <li>Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
        <li>Kişisel verilerin silinmesini veya yok edilmesini isteme</li>
        <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kişinin aleyhine bir sonucun ortaya çıkmasına itiraz etme</li>
      </ul>
    `,
  },
  {
    icon: <FileText className="h-6 w-6 text-red-500" />,
    title: "Çerez Politikası",
    content: `
      <p>Web sitemizde kullanıcı deneyimini iyileştirmek için çerezler kullanılmaktadır:</p>
      <ul>
        <li><strong>Zorunlu Çerezler:</strong> Web sitesinin temel işlevlerini yerine getirmek için gereklidir</li>
        <li><strong>Analitik Çerezler:</strong> Web sitesi performansını ölçmek ve iyileştirmek için kullanılır</li>
        <li><strong>Pazarlama Çerezler:</strong> Kişiselleştirilmiş reklamlar sunmak için kullanılır (izin dahilinde)</li>
      </ul>
      <p>Çerez tercihlerinizi tarayıcı ayarlarınızdan yönetebilirsiniz.</p>
    `,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy-50 via-white to-red-50 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[300px] w-[300px] bg-red-200/30 blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-6">Gizlilik Politikası</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kişisel verilerinizin korunması ve gizliliğiniz bizim için önemlidir. Bu politika, verilerinizin nasıl
              işlendiği hakkında detaylı bilgi vermektedir.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg border border-navy-100 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-red-500 mr-3" />
              <div>
                <h2 className="text-xl font-bold gradient-text">Veri Sorumlusu</h2>
                <p className="text-muted-foreground">
                  <strong>Tuna Sentetik</strong> - Gaziantep Organize Sanayi Bölgesi, 83120. Cadde No: 8, Şehitkamil /
                  Gaziantep
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>E-posta:</strong> info@tunasentetik.com
              </div>
              <div>
                <strong>Telefon:</strong> +90 342 123 4567
              </div>
              <div>
                <strong>Son Güncelleme:</strong> 18 Haziran 2025
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-navy-50/50 to-red-50/50 p-8 rounded-2xl border border-navy-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  {section.icon}
                  <h2 className="text-2xl font-bold gradient-text ml-3">{section.title}</h2>
                </div>
                <div
                  className="prose prose-navy max-w-none prose-p:text-muted-foreground prose-p:leading-relaxed prose-ul:text-muted-foreground prose-li:mb-2 prose-strong:text-navy-700"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-navy-50 via-white to-red-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-navy-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold gradient-text mb-6">İletişim ve Başvuru</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-navy-700 mb-3">Veri Sahibi Hakları İçin Başvuru</h3>
                <p className="text-muted-foreground mb-4">
                  KVKK kapsamındaki haklarınızı kullanmak için aşağıdaki yollarla başvurabilirsiniz:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• E-posta: kvkk@tunasentetik.com</li>
                  <li>• Telefon: +90 342 123 4567</li>
                  <li>• Posta: Gaziantep OSB, 83120. Cadde No: 8</li>
                  <li>• Web sitesi iletişim formu</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-700 mb-3">Başvuru Süreci</h3>
                <p className="text-muted-foreground mb-4">
                  Başvurularınız en geç 30 gün içinde değerlendirilir ve sonuçlandırılır.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Kimlik doğrulama gereklidir</li>
                  <li>• Başvuru ücretsizdir</li>
                  <li>• Yazılı yanıt verilir</li>
                  <li>• Gerekirse ek bilgi talep edilebilir</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Notice */}
      <section className="py-12 bg-navy-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-navy-200 text-sm leading-relaxed">
              Bu gizlilik politikası, yasal düzenlemelerdeki değişiklikler veya şirket politikalarındaki güncellemeler
              doğrultusunda revize edilebilir. Önemli değişiklikler web sitemiz üzerinden duyurulacaktır. Bu politikayı
              düzenli olarak gözden geçirmenizi öneririz.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
