import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { AnimatedProgress } from "./AnimatedProgress";

export const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "Java", "C++", "JavaScript", "TypeScript"],
    },
    {
      category: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Next.js", "GraphQL", "Tailwind CSS"],
    },
    {
      category: "Database",
      skills: ["MySQL", "PostgreSQL", "Prisma"],
    },
    {
      category: "ML & Data Science",
      skills: ["NumPy", "Pandas", "scikit-learn", "TensorFlow"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git", "GitHub", "Docker", "VS Code"],
    },
    {
      category: "Soft Skills",
      skills: ["Leadership", "Teamwork", "Communication", "Problem-Solving", "Time Management"],
    },
  ];

  const topSkills = [
    { label: "Full Stack Development", value: 90 },
    { label: "React & Next.js", value: 95 },
    { label: "Python & Machine Learning", value: 85 },
    { label: "Database Design", value: 80 },
    { label: "UI/UX Design", value: 75 },
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge variant="secondary">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Proficiency Bars */}
        <motion.div
          className="mt-12 sm:mt-14 md:mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="p-4 sm:p-6 md:p-8 bg-gradient-card border-border">
            <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center">Top Proficiencies</h3>
            {topSkills.map((skill, index) => (
              <AnimatedProgress
                key={skill.label}
                label={skill.label}
                value={skill.value}
                delay={index * 0.1}
              />
            ))}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
