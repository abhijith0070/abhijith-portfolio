import { Card } from "@/components/ui/card";
import { Code, Brain } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeInUp, staggerContainer, hoverLift } from "@/lib/animations";
import { useRef } from "react";
import { AnimatedCounter } from "./AnimatedCounter";

export const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const interests = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern frameworks and technologies",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leveraging AI to create intelligent solutions and predictive models",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative" ref={ref}>
      {/* Parallax background element */}
      <motion.div 
        className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        style={{ y }}
      />
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12 text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate full-stack developer with a solid foundation in modern web technologies and a strong interest in artificial intelligence and machine learning. I enjoy crafting elegant solutions to complex problems and continuously expanding my skill set, currently building expertise in cloud computing and DevOps to deliver scalable, efficient, and robust applications.
          </motion.p>
          <motion.div 
            className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {interests.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <motion.div
                  whileHover="hover"
                  initial="rest"
                  animate="rest"
                >
                  <Card
                    className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 h-full relative overflow-hidden"
                  >
                    {/* Animated gradient on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-500/10 opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <motion.div
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -8 }
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative z-10"
                    >
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <item.icon className="w-12 h-12 text-primary mb-4" />
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {[
              { label: "Projects Completed", value: 8, suffix: "+" },
              { label: "Technologies", value: 20, suffix: "+" },
              { label: "Certifications", value: 5, suffix: "" },
              { label: "Success Rate", value: 90, suffix: "%" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-4 sm:p-6 rounded-lg bg-gradient-card border border-border"
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                >
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </motion.div>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
