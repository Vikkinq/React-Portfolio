export default function ExperienceList({ getData }) {
  return (
    <>
      {getData().map((item, i) => (
        <li key={i} className={`relative ${i < getData().length - 1 ? "mb-6" : ""} pl-24`}>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 grid place-items-center w-16 h-16 rounded-full overflow-hidden border border-white/30 bg-white shrink-0">
            <img
              src={item.logo}
              alt={`${item.title} logo`}
              className="block w-full h-full object-contain p-1.5"
              loading="lazy"
            />
          </span>

          <div className="text-xs text-white/60">{item.date}</div>
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-sm text-white/80">{item.subtitle}</p>
        </li>
      ))}
    </>
  );
}
