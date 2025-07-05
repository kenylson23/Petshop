import { Heart, Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Banho & Tosa",
    "Consulta Veterinária", 
    "Vacinação",
    "Pet Sitting",
    "Limpeza Dental"
  ];

  const products = [
    "Alimentação",
    "Brinquedos",
    "Acessórios", 
    "Saúde",
    "Higiene"
  ];

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Heart className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-fredoka text-primary">Keny Pet</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Cuidando do seu pet com amor e dedicação há mais de 10 anos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
              >
                <Facebook className="text-primary" size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
              >
                <Instagram className="text-primary" size={20} />
              </a>
              <a 
                href="https://wa.me/5511999999999" 
                className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors duration-300"
              >
                <MessageCircle className="text-primary" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="hover:text-primary transition-colors duration-300 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2 text-gray-300">
              {products.map((product, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection("products")}
                    className="hover:text-primary transition-colors duration-300 text-left"
                  >
                    {product}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-poppins font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p><MapPin className="inline mr-2 text-primary" size={16} />Rua das Flores, 123</p>
              <p><Phone className="inline mr-2 text-primary" size={16} />(11) 99999-9999</p>
              <p><Mail className="inline mr-2 text-primary" size={16} />contato@kenypet.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Keny Pet. Todos os direitos reservados.</p>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5511999999999" 
          className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-slow"
        >
          <MessageCircle className="text-white" size={24} />
        </a>
      </div>
    </footer>
  );
}
