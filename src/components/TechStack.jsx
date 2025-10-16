import stack from "../json/technology.json";

export default function TechStack() {
  return (
    <section className="pt-10" aria-labelledby="tech-heading">
      <h3 id="tech-heading" className="text-white/90 text-xl font-semibold mb-4">
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-3">
        {stack.map((tech, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-sm"
          >
            <i className={tech.icon}></i> {tech.stack}
          </span>
        ))}
      </div>
    </section>
  );
}
