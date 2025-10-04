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
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">Experience & More</h2>

        {/* Internship */}
        <Card className="p-4 sm:p-6 md:p-8 bg-gradient-card border-border mb-6 sm:mb-8 hover:shadow-glow transition-all">
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">Web Developer Intern</h3>
              <p className="text-primary mb-2">Amrita CIR</p>
              <p className="text-sm sm:text-base text-muted-foreground">
                Contributed to web development projects, collaborated with teams on innovative solutions, 
                and gained hands-on experience in full-stack development.
              </p>
            </div>
          </div>
        </Card>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* Volunteer & Leadership */}
          <Card className="p-4 sm:p-6 bg-gradient-card border-border hover:shadow-glow transition-all h-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
              Volunteer & Leadership
            </h3>
            <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
              <li>• Security Team Volunteer at VidYut Tech Fest</li>
              <li>• School Captain - Leadership & Management</li>
              <li>• Community Service & Team Coordination</li>
            </ul>
          </Card>

          {/* Languages */}
          <Card className="p-4 sm:p-6 bg-gradient-card border-border hover:shadow-glow transition-all h-full">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 flex items-center gap-2">
              <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
              Languages
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between text-sm sm:text-base">
                  <span className="text-foreground">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Certifications */}
        <Card className="p-4 sm:p-6 bg-gradient-card border-border mt-6 sm:mt-8 hover:shadow-glow transition-all">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm sm:text-base text-muted-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Achievements */}
        <Card className="p-4 sm:p-6 bg-gradient-card border-border mt-6 sm:mt-8 hover:shadow-glow transition-all">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-muted-foreground">{achievement}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
