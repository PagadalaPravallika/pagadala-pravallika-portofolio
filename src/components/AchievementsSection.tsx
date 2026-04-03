import { Award, BookCheck, Trophy } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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

const AchievementsSection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="achievements" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-block">Achievements</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((a) => (
            <div
              key={a.title}
              className="glass rounded-xl p-6 text-center hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <a.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
