export default function HeroSection() {
  return (
    <section id="home" className="pt-40 pb-24 text-center">
      <div className="inline-flex items-center gap-3 sm:gap-4 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
        <span className="inline-block w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden ring-1 ring-white/15 shrink-0">
          <a href="/images/symon.JPG">
            <img
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

      <h1 className="font-extrabold leading-[0.85] tracking-tight mx-auto text-[clamp(48px,10vw,120px)] drop-shadow-glow">
        FULLSTACK
        <br />
        DEVELOPER
      </h1>

      <div className="mt-6 flex items-center justify-center gap-3">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition"
        >
          <i className="fa-regular fa-paper-plane"></i>
          <span className="font-medium">Contact me</span>
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=16fyHprH7s-PGmEZjQHbkeilvYu_aYiXP"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 hover:bg-white/10 transition"
          target="_blank"
          rel="noopener"
          download
        >
          <i className="fa-regular fa-file"></i>
          <span className="font-medium">Download CV</span>
        </a>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <a
          href="https://www.linkedin.com/in/fritz-symon-blancaflor-8a8849323/"
          className="w-11 h-11 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/blancaflor.fs/"
          className="w-11 h-11 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://github.com/Vikkinq"
          className="w-11 h-11 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="GitHub"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.facebook.com/fritzsymon.blancaflor/"
          className="w-11 h-11 grid place-items-center rounded-full border border-white/20 hover:bg-white/10 transition"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </section>
  );
}
