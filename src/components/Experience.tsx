import { Card } from "@/components/ui/card";
import { Briefcase, Award, Languages } from "lucide-react";

export const Experience = () => {
  const certifications = [
    "Agile Project Management",
    "Project Management Foundations",
    "UI/UX Design Basics",
    "C Programming",
    "SQL Database Management",
  ];

  const achievements = [
    "Participated in multiple hackathons with innovative solutions",
    "Attended Cyber Security Workshop and implemented learnings",
    "Developed ML model with 90% accuracy for thyroid disease prediction",
    "Led security team at VidYut tech fest",
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Fluent" },
    { name: "Malayalam", level: "Native" },
    { name: "Sanskrit", level: "Intermediate" },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Experience & More</h2>

        {/* Internship */}
        <Card className="p-8 bg-gradient-card border-border mb-8 hover:shadow-glow transition-all">
          <div className="flex items-start gap-4">
            <Briefcase className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Web Developer Intern</h3>
              <p className="text-primary mb-2">Amrita CIR</p>
              <p className="text-muted-foreground">
                Contributed to web development projects, collaborated with teams on innovative solutions, 
                and gained hands-on experience in full-stack development.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Volunteer & Leadership */}
          <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Volunteer & Leadership
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Security Team Volunteer at VidYut Tech Fest</li>
              <li>• School Captain - Leadership & Management</li>
              <li>• Community Service & Team Coordination</li>
            </ul>
          </Card>

          {/* Languages */}
          <Card className="p-6 bg-gradient-card border-border hover:shadow-glow transition-all">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Languages className="w-6 h-6 text-primary" />
              Languages
            </h3>
            <div className="space-y-2">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="p-6 bg-gradient-card border-border mt-8 hover:shadow-glow transition-all">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-6 bg-gradient-card border-border mt-8 hover:shadow-glow transition-all">
          <h3 className="text-xl font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
