import { motion } from "framer-motion";
import { Calendar, Store, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingElements from "./floating-elements";
import ThreeDHero from "./three-d-hero";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="hero-3d min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-secondary/20 to-accent/20"
    >
      <ThreeDHero />
      <FloatingElements />
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-7xl font-poppins font-bold text-dark mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Seu Pet Merece o{" "}
              <span className="text-primary">Melhor</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Na Keny Pet, oferecemos cuidados completos para seu melhor amigo com carinho, qualidade e profissionalismo.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                onClick={() => scrollToSection("services")}
                className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Calendar className="mr-2" size={20} />
                Agendar Serviço
              </Button>
              <Button 
                onClick={() => scrollToSection("products")}
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Store className="mr-2" size={20} />
                Ver Produtos
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Happy dog with owner in pet store"
              className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              whileHover={{ scale: 1.05 }}
            />
            
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Store className="text-white" size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
