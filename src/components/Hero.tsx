import { Button } from "@/components/ui/button";
import { MapPin, Mail, Github, Linkedin } from "lucide-react";
import headshotImage from "@/assets/abhijith-headshot.jpg";

export const Hero = () => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-glow">
              <img
                src={headshotImage}
                alt="Abhijith S"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left animate-slide-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Abhijith S
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4">
              Aspiring Full Stack Developer
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground mb-6">
              <MapPin className="w-5 h-5" />
              <span>Kayamkulam, Kerala, India</span>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Passionate about building modern web applications with expertise in full-stack development, 
              AI/ML integration, and web security. Always learning, always building.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button
                onClick={handleScrollToContact}
                className="bg-gradient-primary hover:shadow-glow transition-all"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://github.com/abhijithsatheesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://linkedin.com/in/abhijithsatheesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
