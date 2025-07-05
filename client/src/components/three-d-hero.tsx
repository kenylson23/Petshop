import { motion } from "framer-motion";

export default function ThreeDHero() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Floating spheres with CSS animations */}
      <motion.div
        className="absolute w-20 h-20 bg-primary/20 rounded-full"
        style={{ 
          left: "15%", 
          top: "20%",
          background: "radial-gradient(circle, rgba(255,107,53,0.3) 0%, rgba(255,107,53,0.1) 70%)"
        }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-16 h-16 bg-accent/20 rounded-full"
        style={{ 
          right: "20%", 
          top: "30%",
          background: "radial-gradient(circle, rgba(69,183,209,0.3) 0%, rgba(69,183,209,0.1) 70%)"
        }}
        animate={{
          y: [0, 40, 0],
          rotate: [0, -360],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
      
      <motion.div
        className="absolute w-12 h-12 bg-success/20 rounded-full"
        style={{ 
          left: "70%", 
          top: "15%",
          background: "radial-gradient(circle, rgba(150,206,180,0.3) 0%, rgba(150,206,180,0.1) 70%)"
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Floating boxes/diamonds */}
      <motion.div
        className="absolute w-14 h-14 bg-secondary/20 transform rotate-45"
        style={{ 
          left: "25%", 
          bottom: "25%",
          background: "linear-gradient(45deg, rgba(78,205,196,0.3) 0%, rgba(78,205,196,0.1) 70%)"
        }}
        animate={{
          y: [0, -25, 0],
          rotate: [45, 225, 45],
          scale: [1, 1.3, 1]
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />
      
      <motion.div
        className="absolute w-10 h-10 bg-primary/20 transform rotate-45"
        style={{ 
          right: "15%", 
          bottom: "20%",
          background: "linear-gradient(45deg, rgba(255,107,53,0.3) 0%, rgba(255,107,53,0.1) 70%)"
        }}
        animate={{
          y: [0, 35, 0],
          rotate: [45, -135, 45],
          scale: [1, 0.7, 1]
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Geometric background patterns */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,107,53,0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(69,183,209,0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 60%, rgba(150,206,180,0.1) 0%, transparent 50%)
          `
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 2, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
