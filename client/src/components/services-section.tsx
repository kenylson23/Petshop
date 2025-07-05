import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Scissors, 
  Stethoscope, 
  Syringe, 
  Home, 
  Heart, 
  Truck 
} from "lucide-react";
import { staticServices } from "@/data/static-data";
import type { Service } from "@shared/schema";

const iconMap = {
  "fas fa-cut": Scissors,
  "fas fa-stethoscope": Stethoscope,
  "fas fa-syringe": Syringe,
  "fas fa-home": Home,
  "fas fa-heart": Heart,
  "fas fa-shipping-fast": Truck,
};

export default function ServicesSection() {
  const services = staticServices;
  const isLoading = false;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };



  return (
    <section id="services" className="py-20 gradient-blue-light">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços para manter seu pet feliz e saudável
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services?.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Heart;
            const colorClasses = [
              "bg-primary/10 text-primary",
              "bg-accent/10 text-accent", 
              "bg-success/10 text-success",
              "bg-secondary/10 text-secondary"
            ];
            const colorClass = colorClasses[service.id % colorClasses.length];

            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Card className="card-3d glass-blue p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-200/50 h-full hover:animate-float-blue">
                  <CardContent className="p-0">
                    <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mb-6 mx-auto`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-2xl font-poppins font-semibold text-dark mb-4 text-center">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-center mb-6">
                      {service.description}
                    </p>
                    <div className="text-center">
                      <span className="text-3xl font-bold text-primary">
                        {Number(service.price).toLocaleString('pt-AO', {
                          style: 'currency',
                          currency: 'AOA',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </span>
                      <span className="text-gray-500">/serviço</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
