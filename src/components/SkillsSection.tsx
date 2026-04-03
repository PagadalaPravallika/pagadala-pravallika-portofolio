import { Code, Wrench, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const categories = [
  {
    icon: Code,
    title: "Languages",
    skills: ["Python", "C", "MySQL"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["GitHub", "VS Code"],
  },
  {
    icon: Lightbulb,
    title: "Concepts",
    skills: ["Data Structures", "AI/ML", "Problem Solving", "Cloud Basics"],
  },
];

const SkillsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-full text-sm bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {s}
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

export default SkillsSection;
