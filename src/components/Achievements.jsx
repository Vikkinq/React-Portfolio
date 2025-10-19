import certs from "../json/achievements_data.json";

export default function AchievementSection() {
  return (
    <section id="achievements" className="pt-10 pb-16 " aria-labelledby="achievements-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="achievements-heading" className="text-white/90 text-xl font-semibold tracking-tight">
          Achievements & Certificates
        </h2>
      </div>

      <p className="text-white/70 max-w-2xl mb-10">
        Certifications and awards that highlight my growth, continuous learning, and expertise in development,
        networking, and cybersecurity.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certs.map((c, i) => (
          <article
            key={i}
            className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 text-center transition hover:bg-white/[0.08] hover:-translate-y-1 duration-300"
          >
            <div className="aspect-square w-24 mx-auto mb-4 rounded-lg overflow-hidden flex items-center justify-center">
              <img src={c.image} alt={`${c.title} Certificate`} className="object-contain w-full h-full" />
            </div>
            <h3 className="text-sm font-semibold text-white/90 line-clamp-2">{c.title}</h3>
            <p className="text-xs text-white/60 mt-1">{c.issuer}</p>
            <p className="text-[11px] text-white/50 mt-0.5">{c.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
