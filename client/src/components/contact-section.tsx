import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema, type InsertContact } from "@shared/schema";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setErrors({});
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
    },
    onError: (error) => {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = insertContactSchema.parse(formData);
      mutation.mutate(validatedData);
    } catch (error: any) {
      const fieldErrors: Record<string, string> = {};
      error.errors?.forEach((err: any) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Localização",
      content: "Rua Rainha Ginga, 123 - Maianga, Luanda",
      color: "bg-primary/20 text-primary"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+244 923 456 789",
      color: "bg-accent/20 text-accent"
    },
    {
      icon: Mail,
      title: "Email",
      content: "contato@kenypet.co.ao",
      color: "bg-success/20 text-success"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Seg-Sex: 8h às 18h | Sáb: 8h às 14h",
      color: "bg-secondary/20 text-secondary"
    }
  ];

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
    <section id="contact" className="py-20 bg-dark text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-poppins font-bold mb-6"
              variants={itemVariants}
            >
              Entre em <span className="text-primary">Contato</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Estamos prontos para cuidar do seu pet com todo carinho e profissionalismo
            </motion.p>
            
            <motion.div className="space-y-6" variants={itemVariants}>
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4"
                  variants={itemVariants}
                >
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-poppins font-semibold">{info.title}</h3>
                    <p className="text-gray-300">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-poppins font-bold mb-6 text-white">
                  Envie uma mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <Input
                      name="phone"
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder-gray-300 focus:ring-2 focus:ring-primary"
                    />
                    {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Como podemos ajudar?"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-white/20 border-white/20 text-white placeholder-gray-300 resize-none focus:ring-2 focus:ring-primary"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-primary hover:bg-primary/80 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="mr-2" size={20} />
                    {mutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
