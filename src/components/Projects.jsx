import projectData from "../json/projects_data.json";
import { useState } from "react";

export default function ProjectSection() {
  return (
    <section id="projects" className="pt-10 pb-4" aria-labelledby="projects-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="projects-heading" className="text-white/90 text-xl font-semibold">
          Projects
        </h2>
        <a href="projects.html" className="text-sm text-white/70 hover:text-white">
          View More
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projectData.slice(0, 4).map((p, index) => (
          <article key={index} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <a data-lightbox href={p.image}>
              <img src={p.image} alt="Screenshot of IrriGaia project" className="w-full h-44 object-cover" />
            </a>
            <div className="p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm text-white/80 mt-1">{p.desc}</p>

              <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                {p.tags.map((t, i) => (
                  <span key={i} className="px-2 py-1 rounded-md border border-white/10 bg-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
