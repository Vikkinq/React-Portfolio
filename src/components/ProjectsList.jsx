import { useState } from "react";

import projectData from "../json/projects_data.json";

export default function ProjectLists() {
  const [tab, setTab] = useState("software");

  const projectList = () => {
    if (tab === "software") return projectData.SOFTWARE;
    if (tab === "hardware") return projectData.HARDWARE;
  };
  return (
    <section id="projects" className="pt-10 pb-4" aria-labelledby="projects-heading">
      <div className="flex items-center justify-center mb-4">
        <h2
          id="achievements-heading"
          className="font-extrabold leading-[0.85] tracking-tight mx-auto text-[clamp(16px,2vw,42px)] drop-shadow-glow pb-2 "
        >
          Check out my latest works
        </h2>
      </div>

      <div className="flex items-center justify-center">
        <p className="text-white/70 max-w-2xl mb-10">
          Developed and Designed web and hardware systems, from simple pages to full stack applications. Here are a few
          of my favorites
        </p>
      </div>

      <div className="mb-4">
        <div className="flex rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <button
            onClick={() => setTab("software")}
            id="btnSoftware"
            type="button"
            className={`flex-1 py-2 text-sm font-medium cursor-pointer ${
              tab === "software" ? "bg-white text-black" : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Software
          </button>
          <button
            onClick={() => setTab("hardware")}
            id="btnHardware"
            type="button"
            className={`flex-1 py-2 text-sm cursor-pointer ${
              tab === "hardware" ? "bg-white text-black" : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            Hardware
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {projectList().map((p, index) => (
          <article key={index} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
            <a data-lightbox href={p.image}>
              {!p.image ? (
                "Loading"
              ) : (
                <img src={p.image} alt="Screenshot of IrriGaia project" className="w-full h-44 object-cover" />
              )}
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

              {!p.link ? (
                ""
              ) : (
                <div className="mt-4 flex justify-end" target="_blank">
                  <a href={p.link} target="_blank" className="text-white/70 hover:text-white text-sm font-medium">
                    View Site →
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
