import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import InvestmentSection from '@/components/InvestmentSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      
      <div className="relative z-10">
        <AboutSection />
        <ProductsSection />
        <InvestmentSection />
        <ContactSection />
      </div>
    </div>
  );
}