import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
