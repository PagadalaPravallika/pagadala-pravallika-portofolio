import { ExternalLink, Users, BookOpen, BrainCircuit, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const ProjectsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-xl">
          Featured projects showcasing problem-solving and technical skills.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group glass rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 gradient-border"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <p.icon size={24} className="text-primary" />
                </div>
                {p.ongoing && (
                  <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary font-medium">
                    In Progress
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
