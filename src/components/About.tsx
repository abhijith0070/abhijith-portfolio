import { Card } from "@/components/ui/card";
import { Code, Brain, Shield } from "lucide-react";

export const About = () => {
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
    {
      icon: Shield,
      title: "Web Security",
      description: "Implementing secure practices and protecting user data",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground mb-12 text-center">
            I'm a passionate full-stack developer with a strong foundation in modern web technologies 
            and a keen interest in artificial intelligence and machine learning. I thrive on creating 
            elegant solutions to complex problems and am constantly exploring new technologies to expand my skill set.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {interests.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              >
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
