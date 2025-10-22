import { Link } from "react-router-dom";

import projectData from "../json/projects_data.json";
import { useState } from "react";

import Reveal from "./Global/Reveal";

export default function ProjectSection() {
  return (
    <section id="projects" className="pt-10 pb-16" aria-labelledby="projects-heading">
      <Reveal>
        <div className="flex items-center justify-between mb-4">
          <h2 id="projects-heading" className="text-white/90 text-xl font-semibold">
            My Projects
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6 items-stretch">
        {projectData.SOFTWARE.slice(0, 4).map((p, index) => (
          <Reveal key={index}>
            <article className="flex flex-col rounded-xl border border-white/10 bg-white/5 overflow-hidden h-full">
              <a data-lightbox href={p.image}>
                {!p.image ? "Loading" : <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />}
              </a>

              <div className="flex flex-col justify-between flex-1 p-4">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-sm text-white/80 mt-1 line-clamp-3">{p.desc}</p> {/* limit text to 3 lines */}
                </div>

                <div>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
                    {p.tags.map((t, i) => (
                      <span key={i} className="px-2 py-1 rounded-md border border-white/10 bg-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.link && (
                    <div className="mt-4 flex justify-end">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/70 hover:text-white text-sm font-medium"
                      >
                        View Site →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10 flex justify-center ">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition text-sm font-medium"
          >
            View More Projects
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
