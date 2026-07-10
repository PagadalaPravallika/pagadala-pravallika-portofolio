import { Github, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-secondary/50 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-1/3 left-[20%] w-2 h-2 bg-primary/60 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      <div className="relative max-w-6xl mx-auto px-6 py-20 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="space-y-6 opacity-0 animate-fade-up order-2 md:order-1" style={{ animationDelay: "0.2s" }}>
          <div className="inline-block px-4 py-1.5 rounded-full glass text-xs font-medium text-primary">
            ✨ Open to Opportunities
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="gradient-text">Pagadala Pravalika</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Computer Science Undergraduate | AI/ML Enthusiast
          </p>
          <p className="text-muted-foreground max-w-lg">
            Building intelligent, scalable solutions through code and problem-solving.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-4 pt-2">
            <a
              href="https://github.com/pagadalapravallika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/pagadalapravallika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass hover:bg-primary/20 transition-colors text-muted-foreground hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right - Profile photo */}
        <div className="flex justify-center opacity-0 animate-fade-up order-1 md:order-2" style={{ animationDelay: "0.5s" }}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse-glow" />
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full gradient-border overflow-hidden glass">
              <img
                src={profileImg}
                alt="Pagadala Pravalika"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
