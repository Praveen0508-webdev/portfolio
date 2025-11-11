import { Code2, Palette, Zap, Globe } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "React, TypeScript, Tailwind CSS",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimization, SEO, Accessibility",
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "Node.js, APIs, Database Design",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16 text-center animate-fade-in">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-foreground mb-2">{skill.title}</h3>
              <p className="text-foreground/70">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
