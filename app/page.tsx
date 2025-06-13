import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ProductsSection from "@/components/products-section"
import ProcessSection from "@/components/process-section"
import NewsSection from "@/components/news-section"
import GallerySection from "@/components/gallery-section"
import FAQSection from "@/components/faq-section"
import CTASection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ProcessSection />
      <NewsSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
