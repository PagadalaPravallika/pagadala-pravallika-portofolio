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
      className={`glass rounded-xl p-6 hover:bg-primary/5 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
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
            className={`px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/20 hover:border-primary/50 hover:from-primary/20 hover:to-secondary/20 transition-all duration-300 ${
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
