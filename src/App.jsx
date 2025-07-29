// ASSETS

// STYLES

// LIBRARIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MISC

// COMPONENTS
import Home from "./elements/pages/Home/Home";
import Projects from "./elements/pages/Projects/Projects";
import Experience from "./elements/pages/Experience/Experience";
import Navbar from "./elements/components/Navbar/Navbar";
import Footer from "./elements/components/Footer/Footer";
import ProjectDetails from "./elements/pages/ProjectDetails/ProjectDetails";
import About from "./elements/pages/About/About";

// CONFIGURATION
const App = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
