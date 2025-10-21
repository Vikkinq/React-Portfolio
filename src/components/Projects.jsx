import { Link } from "react-router-dom";

import projectData from "../json/projects_data.json";
import { useState } from "react";

export default function ProjectSection() {
  return (
    <section id="projects" className="pt-10 pb-16" aria-labelledby="projects-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="projects-heading" className="text-white/90 text-xl font-semibold">
          My Projects
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projectData.SOFTWARE.slice(0, 4).map((p, index) => (
          <article key={index} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <a data-lightbox href={p.image}>
              {!p.image ? "Loading" : <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />}
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

              {p.link && (
                <div className="mt-4 flex justify-end">
                  <a href={p.link} target="_blank" className="text-white/70 hover:text-white text-sm font-medium">
                    View Site →
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/projects">
          <a className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition text-sm font-medium">
            View More Projects
          </a>
        </Link>
      </div>
    </section>
  );
}
