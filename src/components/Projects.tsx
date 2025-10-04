import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
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
