import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-xl bg-transparent border border-white/10 rounded-full px-6 py-3 shadow-glass">
        <ul className="flex items-center gap-6 text-md">
          <li>
            <Link to="/" className="text-white/80 hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white/80 hover:text-white transition">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
