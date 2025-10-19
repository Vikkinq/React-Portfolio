export default function AboutSection() {
  return (
    <section id="about" className="pt-10 pb-6" aria-labelledby="projects-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="projects-heading" className="text-white/90 text-xl font-semibold">
          About
        </h2>
      </div>
      <div className="max-w-2xl text-white/80 leading-relaxed">
        <p>
          I’m a <span className="text-white font-medium">Full Stack Developer</span>, who loves building clean,
          responsive, and user-focused web applications. I enjoy turning ideas into functional designs — blending
          creativity, logic, and a bit of curiosity into everything I make.
        </p>
      </div>
    </section>
  );
}
