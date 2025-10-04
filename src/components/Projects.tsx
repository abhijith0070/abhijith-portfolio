import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const Projects = () => {
  const projects = [
    {
      title: "SSR Portal",
      description: "Smart Student Registration system with advanced data management capabilities",
      tech: ["Next.js", "Prisma", "PostgreSQL"],
    },
    {
      title: "FOSSter Website",
      description: "Modern website design for FOSS community with focus on UI/UX excellence",
      tech: ["Next.js", "Tailwind CSS", "UI/UX Design"],
    },
    {
      title: "WayWise AI Travel Assistant",
      description: "Intelligent travel planning assistant powered by OpenAI and Google Maps",
      tech: ["Next.js", "OpenAI API", "Google Maps API"],
    },
    {
      title: "KSRTC Public Transport Website",
      description: "Comprehensive public transportation information system",
      tech: ["Next.js", "React", "API Integration"],
    },
    {
      title: "Thyroid Disease Prediction",
      description: "Machine learning model with 90% accuracy for early detection",
      tech: ["Python", "scikit-learn", "Pandas"],
    },
    {
      title: "Car Rental Website",
      description: "Full-featured car rental platform with booking system",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Library Management System",
      description: "Comprehensive system for managing library operations",
      tech: ["Database Design", "Backend Development"],
    },
    {
      title: "Restaurant Management",
      description: "Complete restaurant operations management solution",
      tech: ["Full Stack", "Database"],
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: 1000,
                }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 group h-full overflow-hidden relative">
                  {/* Shimmer effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: 45, scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge variant="secondary">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
