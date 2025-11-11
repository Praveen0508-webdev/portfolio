import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@portfolio.com" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-xl text-foreground/70 animate-fade-in">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-8 animate-slide-in">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                asChild
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <link.icon size={20} />
                  <span>{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
          <div className="pt-12 border-t border-border mt-16">
            <p className="text-foreground/60">
              © 2024 Portfolio. Built with passion and React.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
