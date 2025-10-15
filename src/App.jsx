import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Nav from "./components/Global/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <main className="relative bg-blobs">
      <Router>
        <Nav />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </main>
  );
}

export default App;
