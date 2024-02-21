// ASSETS
import blog from "../../assets/blog_placeholder.webp";
import ecommerce from "../../assets/ecommerce_placeholder.jpg";
import pm from "../../assets/pm_placeholder.avif";

// STYLES
import "./Projects.scss";

// LIBRARIES

// MISC

// COMPONENTS
import Project from "../../components/Project/Project";

// CONFIGURATION
const Projects = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="projects-list">
        <Project name="hardcoded blog project" image={blog} />
        <Project name="hardcoded pm project" image={pm} />
        <Project name="hardcoded ecommerce project" image={ecommerce} />
      </div>
    </div>
  );
};

export default Projects;
