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
      className={`group glass rounded-xl p-6 text-center shimmer-border tilt-card hover:shadow-2xl hover:shadow-primary/30 ${
        isVisible ? "opacity-100 translate-y-0 rotate-0" : "opacity-0 translate-y-12 rotate-1"
      }`}
      style={{ transitionDelay: `${index * 200}ms`, transitionProperty: "opacity, transform, box-shadow", transitionDuration: "700ms" }}
    >
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 relative">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 animate-pulse-glow" />
        <div className="absolute inset-0 rounded-full border border-primary/40 group-hover:scale-125 group-hover:opacity-0 transition-all duration-700" />
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
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-orb pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-orb pointer-events-none" style={{ animationDelay: "4s" }} />
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
