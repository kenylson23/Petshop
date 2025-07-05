import { useEffect } from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ProductsSection from "@/components/products-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    document.title = "Keny Pet - Seu Pet Merece o Melhor | Serviços Veterinários e Produtos";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Keny Pet oferece serviços veterinários completos, banho e tosa, produtos premium para pets. Cuidamos do seu melhor amigo há mais de 10 anos com amor e profissionalismo.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Keny Pet oferece serviços veterinários completos, banho e tosa, produtos premium para pets. Cuidamos do seu melhor amigo há mais de 10 anos com amor e profissionalismo.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
