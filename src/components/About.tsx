const About = () => {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-8 animate-fade-in">
            About Me
          </h2>
          <div className="space-y-6 text-lg text-foreground/80 animate-slide-in">
            <p>
              I'm a passionate developer and designer dedicated to creating beautiful, functional web experiences.
              With a keen eye for detail and a love for clean code, I transform ideas into digital reality.
            </p>
            <p>
              My approach combines modern development practices with creative problem-solving, ensuring every
              project is both technically sound and visually stunning. I believe in the power of great design
              to elevate user experiences and drive meaningful results.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source
              projects, or sketching out ideas for the next big thing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
