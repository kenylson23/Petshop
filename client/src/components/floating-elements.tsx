import { motion } from "framer-motion";
import { Heart, Fish, Bone } from "lucide-react";

export default function FloatingElements() {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
      >
        <Bone className="text-primary" size={24} />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-20 w-12 h-12 bg-success/20 rounded-full flex items-center justify-center"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Fish className="text-success" size={20} />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-20 w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        <Heart className="text-accent" size={22} />
      </motion.div>
    </>
  );
}
