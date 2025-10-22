import stack from "../json/technology.json";
import Reveal from "./Global/Reveal";

export default function TechStack() {
  return (
    <section className="pt-10" aria-labelledby="tech-heading">
      <Reveal>
        <h3 id="tech-heading" className="text-white/90 text-xl font-semibold mb-4">
          Technologies
        </h3>
      </Reveal>

      <div className="flex flex-wrap gap-3">
        {stack.map((tech, index) => (
          <Reveal key={index}>
            <span className="inline-flex items-center gap-3 px-3 py-2 rounded-lg border border-white/10 bg-white/10 text-sm cursor-pointer hover:bg-white/20 transition-all duration-300">
              <i className={tech.icon}></i> {tech.stack}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
