import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const NavLinks = ({ mobile = false, onClose = () => {} }) => (
    <div className={`flex ${mobile ? "flex-col space-y-4" : "space-x-8"}`}>
      <button
        onClick={() => { scrollToSection("home"); onClose(); }}
        className="text-dark hover:text-primary transition-colors duration-300 font-medium"
      >
        Início
      </button>
      <button
        onClick={() => { scrollToSection("services"); onClose(); }}
        className="text-dark hover:text-primary transition-colors duration-300 font-medium"
      >
        Serviços
      </button>
      <button
        onClick={() => { scrollToSection("products"); onClose(); }}
        className="text-dark hover:text-primary transition-colors duration-300 font-medium"
      >
        Produtos
      </button>
      <button
        onClick={() => { scrollToSection("about"); onClose(); }}
        className="text-dark hover:text-primary transition-colors duration-300 font-medium"
      >
        Sobre
      </button>
      <button
        onClick={() => { scrollToSection("contact"); onClose(); }}
        className="text-dark hover:text-primary transition-colors duration-300 font-medium"
      >
        Contato
      </button>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/90 backdrop-blur-md"
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Heart className="text-white" size={20} />
            </div>
            <h1 className="text-2xl font-fredoka text-primary">Keny Pet</h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavLinks />
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
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
