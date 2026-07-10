import { Users, BookOpen, BrainCircuit, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    icon: Users,
    title: "Women Entrepreneurship Support Platform",
    desc: "A web platform empowering women entrepreneurs with resources, mentorship connections, and community support to launch and grow businesses.",
    tech: ["Python", "Web Dev", "Database"],
  },
  {
    icon: BookOpen,
    title: "Study Path Generator",
    desc: "A rule-based roadmap system that generates personalized learning paths based on a student's goals, current skills, and available time.",
    tech: ["Python", "Rule Engine", "UI/UX"],
  },
  {
    icon: BrainCircuit,
    title: "Career Path AI",
    desc: "A decision-based recommendation system that helps students discover ideal career paths through intelligent questionnaire analysis.",
    tech: ["Python", "AI", "Decision Trees"],
  },
  {
    icon: Leaf,
    title: "Surplus Food Redistribution ML Predictor",
    desc: "An ongoing ML project that predicts food surplus patterns to optimize redistribution, reducing waste and feeding communities.",
    tech: ["Python", "ML", "Data Science"],
    ongoing: true,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative glass rounded-xl p-6 shimmer-border tilt-card overflow-hidden hover:shadow-2xl hover:shadow-primary/30 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms`, transitionProperty: "opacity, transform, box-shadow", transitionDuration: "600ms" }}
    >
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
      <div className="flex items-start justify-between mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/40 group-hover:to-secondary/40 group-hover:scale-110 transition-all duration-300">
          <project.icon size={24} className="text-primary" />
        </div>
        {project.ongoing && (
          <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary font-medium animate-pulse">
            In Progress
          </span>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {project.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors duration-300"
          >
            {t}
          </span>
        ))}
      </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-40 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-orb pointer-events-none" style={{ animationDelay: "3s" }} />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Featured projects showcasing problem-solving and technical skills.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
