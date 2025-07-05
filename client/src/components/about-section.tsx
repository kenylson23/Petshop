import { motion } from "framer-motion";
import { Heart, Award, Users } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Amor pelos Animais",
      description: "Tratamos cada pet como se fosse nosso",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      description: "Produtos e serviços de primeira linha",
      color: "bg-accent/10 text-accent"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais qualificados e experientes",
      color: "bg-success/10 text-success"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 gradient-blue-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-poppins font-bold text-dark"
              variants={itemVariants}
            >
              Sobre a <span className="text-primary">Keny Pet</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Há mais de 10 anos cuidando dos pets com amor e dedicação. Somos uma equipe apaixonada por animais, comprometida em oferecer o melhor atendimento e produtos de qualidade.
            </motion.p>
            
            <motion.div className="space-y-4" variants={itemVariants}>
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                >
                  <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center`}>
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold text-dark">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.img 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional pet groomer with happy dog"
              className="rounded-3xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div 
              className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Award className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-dark">10+ Anos</p>
                  <p className="text-sm text-gray-600">de experiência</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Heart className="text-white" size={16} />
                </div>
                <div>
                  <p className="font-semibold text-dark">1000+</p>
                  <p className="text-sm text-gray-600">pets atendidos</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
