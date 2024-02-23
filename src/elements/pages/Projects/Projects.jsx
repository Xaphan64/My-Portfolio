// ASSETS

// STYLES
import "./Projects.scss";

// LIBRARIES

// MISC
import { ProjectList } from "../../helpers/ProjectList";

// COMPONENTS
import ProjectCard from "../../components/Project/ProjectCard";

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
        {ProjectList.map((project, index) => {
          return <ProjectCard key={index} id={index} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
