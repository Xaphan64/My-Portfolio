// ASSETS
import GitHubIcon from "@mui/icons-material/GitHub";

// STYLES
import "./ProjectDetails.scss";

// LIBRARIES
import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/ProjectList";

// MISC

// COMPONENTS

// CONFIGURATION
const ProjectDetails = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const { id } = useParams();
  const project = ProjectList[id];

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="project-display-container">
      <a href={project.redirect}>
        <h1>{project.name}</h1>

        <img src={project.imageApp} alt="" />
      </a>

      <span>
        <b>Skills: </b>
        {project.skills}
      </span>

      <a href={project.github}>
        <GitHubIcon />
      </a>
    </div>
  );
};

export default ProjectDetails;
