import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./assets/css/styles.css";
import "./assets/css/lightbox.css";

import ScrollToTop from "./components/Global/ScrollTop";

import Nav from "./components/Global/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <div className="relative bg-blobs">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
