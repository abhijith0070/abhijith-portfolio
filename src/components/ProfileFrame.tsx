import { motion } from "framer-motion";

interface ProfileFrameProps {
  image: string;
  alt: string;
  mousePosition: { x: number; y: number };
  variant?: "glassmorphism" | "hexagon" | "octagon" | "tilted" | "neon-border";
}

export const ProfileFrame = ({ 
  image, 
  alt, 
  mousePosition, 
  variant = "glassmorphism" 
}: ProfileFrameProps) => {
  
  // Clip path styles for different shapes
  const clipPaths = {
    hexagon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    octagon: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
  };

  // Glassmorphism variant (default)
  if (variant === "glassmorphism") {
    return (
      <div className="relative">
        {/* Animated gradient background glow */}
        <motion.div
          className="absolute inset-0 rounded-3xl blur-2xl opacity-50"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), #8b5cf6, #ec4899)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="relative"
          style={{
            rotateY: mousePosition.x,
            rotateX: -mousePosition.y,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute -inset-1 rounded-3xl opacity-75"
            style={{
              background: "linear-gradient(135deg, hsl(var(--primary)), #8b5cf6, #ec4899, hsl(var(--primary)))",
              backgroundSize: "400% 400%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden backdrop-blur-xl bg-background/10 border border-white/10 shadow-2xl">
            <motion.img
              src={image}
              alt={alt}
              className="w-full h-full object-cover"
              style={{ transform: "translateZ(40px)" }}
            />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${10 + i * 10}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            <div className="absolute top-2 left-2 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
          </div>

          <motion.div
            className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-semibold shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            ✨ Available
          </motion.div>
        </motion.div>
      </div>
    );
  }

  // Hexagon variant
  if (variant === "hexagon") {
    return (
      <motion.div
        className="relative w-72 h-72 md:w-96 md:h-96"
        style={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Animated border */}
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath: clipPaths.hexagon,
            background: "linear-gradient(135deg, hsl(var(--primary)), #8b5cf6, #ec4899)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div 
          className="absolute inset-1 overflow-hidden bg-background"
          style={{ clipPath: clipPaths.hexagon }}
        >
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    );
  }

  // Octagon variant
  if (variant === "octagon") {
    return (
      <motion.div
        className="relative w-72 h-72 md:w-96 md:h-96"
        style={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            clipPath: clipPaths.octagon,
            background: "linear-gradient(135deg, hsl(var(--primary)), #8b5cf6, #ec4899)",
          }}
        />
        
        <div 
          className="absolute inset-1 overflow-hidden bg-background"
          style={{ clipPath: clipPaths.octagon }}
        >
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </div>
      </motion.div>
    );
  }

  // Tilted variant
  if (variant === "tilted") {
    return (
      <motion.div
        className="relative"
        style={{
          rotateY: mousePosition.x,
          rotateX: -mousePosition.y,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <motion.div
          className="w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl"
          animate={{ rotate: -5 }}
          whileHover={{ rotate: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 blur-lg opacity-50" />
          <img src={image} alt={alt} className="relative w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    );
  }

  // Neon border variant
  if (variant === "neon-border") {
    return (
      <div className="relative">
        <motion.div
          className="absolute -inset-2 rounded-full blur-md"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary)), #8b5cf6, #ec4899)",
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl"
          style={{
            rotateY: mousePosition.x,
            rotateX: -mousePosition.y,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={image} alt={alt} className="w-full h-full object-cover" />
        </motion.div>
      </div>
    );
  }

  return null;
};
