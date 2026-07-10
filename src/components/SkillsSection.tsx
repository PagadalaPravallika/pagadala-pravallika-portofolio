import { Code, Wrench, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const categories = [
  { icon: Code, title: "Languages", skills: ["Python", "C", "MySQL"] },
  { icon: Wrench, title: "Tools", skills: ["GitHub", "VS Code"] },
  { icon: Lightbulb, title: "Concepts", skills: ["Data Structures", "AI/ML", "Problem Solving", "Cloud Basics"] },
];

const SkillCard = ({ cat, index }: { cat: typeof categories[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`glass rounded-xl p-6 shimmer-border tilt-card hover:shadow-xl hover:shadow-primary/20 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${index * 200}ms`, transitionProperty: "opacity, transform, box-shadow", transitionDuration: "600ms" }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
          <cat.icon size={20} className="text-primary" />
        </div>
        <h3 className="font-semibold text-foreground">{cat.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {cat.skills.map((s, si) => (
          <span
            key={s}
            className={`px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/20 hover:border-primary/60 hover:from-primary/30 hover:to-secondary/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30 transition-all duration-300 cursor-default ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: `${index * 200 + si * 100}ms` }}
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-orb pointer-events-none" style={{ animationDelay: "5s" }} />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <SkillCard key={cat.title} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
