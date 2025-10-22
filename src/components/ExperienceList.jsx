export default function ExperienceList({ getData }) {
  return (
    <>
      {getData().map((item, i) => (
        <li
          key={i}
          className={`relative ${i < getData().length - 1 ? "mb-6" : ""} pl-24 flex items-center justify-between gap-6`}
        >
          {/* Left: logo + text */}
          <div className="flex-1">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 grid place-items-center w-16 h-16 rounded-full overflow-hidden border border-white/30 bg-white shrink-0">
              {!i.image ? (
                <img
                  src={item.logo}
                  alt={`${item.title} logo`}
                  className="block w-full h-full object-contain p-1.5 cursor-pointer"
                  loading="lazy"
                  data-lightbox={item.logo}
                />
              ) : (
                "Loading"
              )}
            </span>

            <div className="text-xs text-white/60">{item.date}</div>
            <h3 className="text-base font-semibold">{item.title}</h3>
            <p className="text-sm text-white/80">{item.subtitle}</p>
          </div>

          {/* Right: small image */}
          {item.image && (
            <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-white/20 bg-white/5">
              <img
                data-lightbox
                src={item.image}
                alt={`${item.title} side visual`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          )}
        </li>
      ))}
    </>
  );
}
