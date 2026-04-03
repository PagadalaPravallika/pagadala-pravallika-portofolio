import { GraduationCap, Brain, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: GraduationCap, title: "Academic Excellence", desc: "Consistent CPI of ~9.0" },
  { icon: Brain, title: "AI/ML Focus", desc: "Passionate about intelligent systems" },
  { icon: Code, title: "Problem Solver", desc: "Strong DSA & coding fundamentals" },
];

const AboutSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text inline-block">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I'm a Computer Science undergraduate with a strong academic record (CPI ~9.0) and a deep passion for
              building real-world, impactful solutions. My expertise lies in Python, data structures, and AI/ML,
              and I thrive on solving complex problems through elegant code.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm constantly exploring emerging technologies in artificial intelligence and machine learning,
              aiming to bridge the gap between academic concepts and practical applications that make a difference.
              I believe in continuous learning and am driven by the desire to contribute to projects that create positive change.
            </p>
          </div>
          <div className="grid gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="glass rounded-xl p-4 flex items-center gap-4 hover:bg-primary/10 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                  <h.icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
