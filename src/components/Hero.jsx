import "../assets/css/lightbox.css";
import socials from "../json/socials_data.json";
import Reveal from "./Global/Reveal";

export default function HeroSection() {
  return (
    <section id="home" className="pt-40 pb-24 text-center">
      <Reveal>
        <div className="inline-flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-4">
          <span className="inline-block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-1 ring-white/15 shrink-0">
            <a href="/images/symon.JPG">
              <img
                data-lightbox
                src="/images/symon.JPG"
                alt="Profile photo of Fritz Symon Blancaflor"
                className="block w-full h-full object-cover object-center"
              />
            </a>
          </span>

          <div className="text-left leading-tight">
            <p className="text-sm sm:text-base font-semibold">Fritz Symon Blancaflor.</p>
            <p className="text-[12px] sm:text-xs text-white/70">🇵🇭 Based in Philippines</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.35}>
        <h1 className="font-extrabold leading-[0.85] tracking-tight mx-auto text-[clamp(48px,10vw,120px)] drop-shadow-glow">
          FULLSTACK
          <br />
          DEVELOPER
        </h1>
      </Reveal>

      <Reveal delay={0.45}>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href="mailto:fritzsymon23@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-white/90 font-medium backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white focus:ring-2 focus:ring-white/20 focus:outline-none"
          >
            <i className="fa-regular fa-paper-plane text-white/80"></i>
            <span>Contact Me</span>
          </a>

          <a
            href="https://drive.google.com/uc?export=download&id=1WA4CpFqgH63_rICYjjmSYExu03nbS7ZZ"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition-all duration-300"
            target="_blank"
            rel="noopener"
            download
          >
            <i className="fa-regular fa-file"></i>
            <span className="font-medium">Download CV</span>
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.75}>
        <div className="mt-6 flex items-center justify-center gap-3">
          {socials.map((soc, index) => (
            <a
              key={index}
              href={soc.links}
              className="w-11 h-11 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
              aria-label={soc.socials}
              target="_blank"
            >
              <i className={soc.icons}></i>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
