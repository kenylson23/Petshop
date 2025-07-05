import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);

      // Calculate scroll progress
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const trackLength = docHeight - winHeight;
      const pct = Math.floor(scrollTop / trackLength * 100);
      setScrollProgress(pct);

      // Detect active section
      const sections = ['home', 'services', 'products', 'about', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const currentSection = sectionElements.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const NavLinks = ({ mobile = false, onClose = () => {} }) => {
    const sections = [
      { id: "home", label: "Início" },
      { id: "services", label: "Serviços" },
      { id: "products", label: "Produtos" },
      { id: "about", label: "Sobre" },
      { id: "contact", label: "Contato" }
    ];

    return (
      <div className={`flex ${mobile ? "flex-col space-y-4" : "space-x-2"}`}>
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => { scrollToSection(section.id); onClose(); }}
            className={`relative text-gray-700 hover:text-primary transition-all duration-300 font-medium px-4 py-2 rounded-lg ${
              activeSection === section.id 
                ? "text-primary bg-primary/10" 
                : "hover:bg-gray-100"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {section.label}
            {activeSection === section.id && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeSection"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      />
      
      <motion.nav 
        className={`fixed top-0 w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50" 
            : "bg-white/90 backdrop-blur-md"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Top Contact Bar - Only visible when not scrolled */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              className="bg-primary/10 border-b border-primary/20"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="container mx-auto px-4 py-2">
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Phone size={14} className="text-primary" />
                      <span>+244 949 639 932</span>
                    </div>
                    <div className="hidden sm:flex items-center space-x-1">
                      <MapPin size={14} className="text-primary" />
                      <span>Rua Rainha Ginga, 123 - Maianga, Luanda</span>
                    </div>
                  </div>
                  <div className="text-primary font-medium">
                    🐾 Mais de 10 anos cuidando dos seus pets!
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-4"
        }`}>
          <div className="flex justify-between items-center">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center"
                animate={{ 
                  scale: isScrolled ? 0.9 : 1,
                  rotate: scrollProgress * 3.6 // Full rotation at 100%
                }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="text-white" size={20} />
              </motion.div>
              <motion.h1 
                className={`font-fredoka text-primary transition-all duration-300 ${
                  isScrolled ? "text-xl" : "text-2xl"
                }`}
                animate={{ scale: isScrolled ? 0.9 : 1 }}
              >
                Keny Pet
              </motion.h1>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLinks />
              <motion.div
                className="ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-semibold shadow-lg border-2 border-transparent hover:border-primary/20 transition-all duration-300"
                >
                  Fale Conosco
                </Button>
              </motion.div>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-8">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={20} />
                    </div>
                    <h1 className="text-2xl font-fredoka text-primary">Keny Pet</h1>
                  </div>
                  <NavLinks mobile={true} onClose={() => {}} />
                  <Button
                    onClick={() => { scrollToSection("contact"); }}
                    className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold mt-6"
                  >
                    Fale Conosco
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
