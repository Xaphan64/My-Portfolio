// ASSETS
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// STYLES
import "./Footer.scss";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Footer = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="footer-container">
      <div className="contact-links">
        <a href="https://github.com/Xaphan64">
          <GitHubIcon />
        </a>

        <a href="https://www.linkedin.com/in/alexandru-daniel-sarbu-b117861aa/">
          <LinkedInIcon />
        </a>
      </div>
      <span> &copy; 2024 Alexandru-Daniel Sarbu</span>
    </div>
  );
};

export default Footer;
