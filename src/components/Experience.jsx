import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import data from "../json/experience_data.json";
import ExperienceList from "./ExperienceList";
import Reveal from "./Global/Reveal";

export default function ExperiencePage() {
  const [tab, setTab] = useState("studies");

  const getData = () => {
    if (tab === "studies") return data.STUDIES;
    if (tab === "work") return data.WORK;
    return data.ACTIVITIES;
  };

  return (
    <section aria-labelledby="experience-heading">
      <div id="about" className="pt-6">
        {/* Title */}
        <Reveal delay={0.5}>
          <h2 id="experience-heading" className="text-white/90 text-xl font-semibold mb-4">
            Experience
          </h2>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.8}>
          <div className="mb-4">
            <div className="flex rounded-full border border-white/10 bg-white/5 overflow-hidden">
              {[
                { key: "studies", label: "Education" },
                { key: "work", label: "Work" },
                { key: "activities", label: "Activities" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  type="button"
                  className={`flex-1 py-2 text-sm font-medium cursor-pointer transition-colors duration-300 ${
                    tab === key ? "bg-white text-black" : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Animated Content */}
        <Reveal delay={0.85}>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
            <span className="pointer-events-none absolute left-8 top-0 bottom-0 w-px bg-white/20"></span>

            <AnimatePresence mode="wait">
              <motion.ol
                key={tab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="relative"
              >
                <ExperienceList getData={getData} />
              </motion.ol>
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
