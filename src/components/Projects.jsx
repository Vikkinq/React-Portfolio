export default function ProjectSection() {
  return (
    <section id="projects" className="pt-10 pb-16" aria-labelledby="projects-heading">
      <div className="flex items-center justify-between mb-4">
        <h2 id="projects-heading" className="text-white/90 text-xl font-semibold">
          Projects
        </h2>
        <a href="projects.html" className="text-sm text-white/70 hover:text-white">
          View More
        </a>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <article className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <a data-lightbox href="assets/irrigaia.png">
            <img src="/images/irrigaia.png" alt="Screenshot of IrriGaia project" className="w-full h-44 object-cover" />
          </a>
          <div className="p-4">
            <h3 className="font-semibold">IrriGaia Dashboard</h3>
            <p className="text-sm text-white/80 mt-1">
              A Full-Stack Dashboard system using ESP32 to send data to AWS Lightsail using LAMP Stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">HTML5</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">CSS3</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">JavaScript</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">PHP</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">MySQL</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">Apache</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">AWS Lightsail</span>
            </div>
          </div>
        </article>

        <article className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
          <a data-lightbox href="assets/image-process.png">
            <img
              src="assets/image-process.png"
              alt="Screenshot of Atelier do Doce project"
              className="w-full h-44 object-cover"
            />
          </a>
          <div className="p-4">
            <h3 className="font-semibold">Attendance Dashboard using Facial Recognition</h3>
            <p className="text-sm text-white/80 mt-1">
              A collaborative task management platform that uses MATLAB for Facial Recognition and stores data to the
              Database
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">HTML5</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">CSS3</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">JavaScript</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">PHP</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">MySQL</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">XAMPP</span>
              <span className="px-2 py-1 rounded-md border border-white/10 bg-white/5">MATLAB</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
