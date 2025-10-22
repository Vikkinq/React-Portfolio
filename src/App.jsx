import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "./assets/css/styles.css";
import "./assets/css/lightbox.css";

import ScrollToTop from "./components/Global/ScrollTop";

import Nav from "./components/Global/Nav";
import HomePage from "./pages/HomePage";
import ThesisPage from "./pages/ThesisPage";
import ProjectPage from "./pages/ProjectPage";
import Lightbox from "./components/Global/Lightbox";

function App() {
  return (
    <div className="relative bg-blobs">
      <Router>
        <ScrollToTop />
        <Nav />
        <Routes>
          <Route path="/thesis" element={<ThesisPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
      <Lightbox />
    </div>
  );
}

export default App;
