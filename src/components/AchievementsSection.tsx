import { Award, BookCheck, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef, useState } from "react";

const achievements = [
  {
    icon: BookCheck,
    title: "NPTEL Certified",
    desc: "Successfully completed NPTEL certification in AI Search Methods, demonstrating strong foundations in artificial intelligence.",
  },
  {
    icon: Award,
    title: "Academic Consistency",
    desc: "Maintained a consistent CPI of ~9.0 throughout undergraduate studies, reflecting dedication and discipline.",
  },
  {
    icon: Trophy,
    title: "Hackathon Participant",
    desc: "Participated in hackathons, collaborating with teams to build innovative solutions under time constraints.",
  },
];

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
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
      className={`glass rounded-xl p-6 text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/15 ${
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-glow" />
        <achievement.icon size={28} className="text-primary relative z-10" />
      </div>
      <h3 className="font-semibold text-foreground mb-2 text-lg">{achievement.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{achievement.desc}</p>
    </div>
  );
};

const AchievementsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} achievement={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
