// ASSETS

import { useNavigate } from "react-router-dom";

// STYLES

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const ProjectCard = ({ image, name, id }) => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const navigate = useNavigate();
  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="project-card-container" onClick={() => navigate("/project/" + id)}>
      <div style={{ backgroundImage: `url(${image})` }} className="project-image" />
      <h1> {name} </h1>
    </div>
  );
};

export default ProjectCard;
