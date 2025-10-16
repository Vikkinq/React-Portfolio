import { useState } from "react";

import { STUDIES, WORK, ACTIVITIES } from "../utilities/experience_data";
import data from "../json/experience_data.json";
import ExperienceList from "./ExperienceList";

export default function ExperiencePage() {
  const [tab, setTab] = useState("studies");

  const getData = () => {
    if (tab === "studies") return data.STUDIES;
    if (tab === "work") return data.WORK;
    return data.ACTIVITIES;
  };

  const handleClick = (evt) => {};

  return (
    <section aria-labelledby="experience-heading">
      <div id="about" className="pt-6">
        <h2 id="experience-heading" className="text-white/90 text-xl font-semibold mb-4">
          Experience
        </h2>

        <div className="mb-4">
          <div className="flex rounded-full border border-white/10 bg-white/5 overflow-hidden">
            <button
              onClick={() => setTab("studies")}
              id="btnStudies"
              type="button"
              className={`flex-1 py-2 text-sm font-medium ${
                tab === "studies" ? "bg-white text-black" : "text-white/80"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setTab("work")}
              id="btnWork"
              type="button"
              className={`flex-1 py-2 text-sm ${
                tab === "work" ? "bg-white text-black" : "text-white/80 hover:text-white"
              }`}
            >
              Work
            </button>
            <button
              onClick={() => setTab("activities")}
              id="btnOrgs"
              type="button"
              className={`flex-1 py-2 text-sm ${
                tab === "activities" ? "bg-white text-black" : "text-white/80 hover:text-white"
              }`}
            >
              Activities
            </button>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <span className="pointer-events-none absolute left-8 top-0 bottom-0 w-px bg-white/20"></span>
          <ol className="relative">
            <ExperienceList getData={getData} />
          </ol>
        </div>
      </div>
    </section>
  );
}
