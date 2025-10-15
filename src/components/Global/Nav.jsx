export default function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-transparent border border-white/10 rounded-full px-6 py-3 shadow-glass">
        <ul className="flex items-center gap-6 text-md">
          <li>
            <a href="../index.html" className="text-white/80 hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-white/80 hover:text-white transition">
              About
            </a>
          </li>
          <li>
            <a href="../projects.html" className="text-white/80 hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white/80 hover:text-white transition">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
