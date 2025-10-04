import { Button } from "@/components/ui/button";
import { MapPin, Mail, Github, Linkedin, Download, Instagram } from "lucide-react";
import headshotImage from "@/assets/dp.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideInLeft, slideInRight, scaleIn, hoverScale, tapScale } from "@/lib/animations";
import { useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    setMousePosition({ x, y });
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Parallax background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5"
        style={{ y }}
      />
      
      <motion.div className="container mx-auto relative z-10 max-w-7xl" style={{ opacity }}>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 lg:gap-16">
          {/* Enhanced Image - Borderless Integrated Design */}
          <motion.div 
            className="flex-shrink-0 relative"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          >
            {/* Subtle background glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, hsl(var(--primary))/40, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main Image Container */}
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
              {/* Image with seamless integration */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl">
                {/* Image */}
                <motion.img
                  src={headshotImage}
                  alt="Abhijith S"
                  className="w-full h-full object-cover"
                  style={{
                    transform: "translateZ(40px)",
                  }}
                />

                {/* Subtle gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Animated particles */}
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + i * 15}%`,
                        top: `${10 + i * 10}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.2, 0.6, 0.2],
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

                {/* Minimal corner accents */}
                <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-primary/30" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-primary/30" />
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div 
            className="flex-1 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={slideInRight}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent"
              variants={fadeIn}
            >
              Abhijith S
            </motion.h1>
            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-4"
              variants={fadeIn}
            >
              Full Stack Developer
            </motion.h2>
            <motion.div 
              className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6 text-sm sm:text-base"
              variants={fadeIn}
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span>Kayamkulam, Kerala, India</span>
            </motion.div>
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl"
              variants={fadeIn}
            >
              Passionate about building modern web applications with expertise in full-stack development, 
              AI/ML integration, and web security. Always learning, always building.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center md:justify-start mb-8"
              variants={fadeIn}
            >
              <motion.div whileHover={hoverScale} whileTap={tapScale}>
                <Button variant="outline" asChild className="text-sm sm:text-base">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Abhijith_S_Resume.pdf"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Download CV</span>
                    <span className="sm:hidden">CV</span>
                  </a>
                </Button>
              </motion.div>
              <motion.a
                href="https://github.com/abhijith0070"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abhijith-s-1682582b2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_abhijith__s.__?utm_source=qr&igsh=cTF4d2MwbTR1NWcw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              variants={fadeIn}
            >
              <motion.div whileHover={hoverScale} whileTap={tapScale}>
                <Button
                  onClick={handleScrollToContact}
                  className="bg-gradient-primary hover:shadow-glow transition-all text-sm sm:text-base"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
