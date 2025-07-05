import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { staticProducts, productCategories } from "@/data/static-data";
import type { Product } from "@shared/schema";

export default function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [addedToCart, setAddedToCart] = useState<number[]>([]);
  const { toast } = useToast();

  const products = staticProducts;
  const isLoading = false;

  const filteredProducts = products.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  );

  const addToCart = (productId: number, productName: string) => {
    setAddedToCart(prev => [...prev, productId]);
    toast({
      title: "Produto adicionado!",
      description: `${productName} foi adicionado ao carrinho.`,
    });
    
    setTimeout(() => {
      setAddedToCart(prev => prev.filter(id => id !== productId));
    }, 2000);
  };

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
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-poppins font-bold text-dark mb-6">
            Nossos <span className="text-primary">Produtos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Produtos de qualidade para todas as necessidades do seu pet
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {productCategories.map((category) => (
            <Button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              variant={selectedCategory === category.value ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.value
                  ? "bg-primary text-white hover:bg-primary/80"
                  : "bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white"
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence>
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedCategory}
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <Card className="card-3d bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-poppins font-semibold text-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">
                        {Number(product.price).toLocaleString('pt-AO', {
                          style: 'currency',
                          currency: 'AOA',
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0
                        })}
                      </span>
                      <Button
                        onClick={() => addToCart(product.id, product.name)}
                        className="gradient-blue text-white px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                        disabled={addedToCart.includes(product.id)}
                      >
                        {addedToCart.includes(product.id) ? (
                          <Check size={16} />
                        ) : (
                          <ShoppingCart size={16} />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
