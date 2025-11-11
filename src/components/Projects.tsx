import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform for business intelligence",
    tags: ["TypeScript", "D3.js", "TailwindCSS"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    title: "Social Media App",
    description: "Connect and share with a beautiful, intuitive interface",
    tags: ["React Native", "Firebase", "Redux"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    title: "AI Content Generator",
    description: "Leverage AI to create compelling content in seconds",
    tags: ["Next.js", "OpenAI", "Postgres"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-16 text-center animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group overflow-hidden bg-secondary border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-foreground/70">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-muted text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="text-primary hover:text-accent transition-colors flex items-center gap-2">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </button>
                  <button className="text-primary hover:text-accent transition-colors flex items-center gap-2">
                    <Github size={18} />
                    <span>Code</span>
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
