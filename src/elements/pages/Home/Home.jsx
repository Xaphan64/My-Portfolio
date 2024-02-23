// ASSETS
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

// STYLES
import "./Home.scss";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const Home = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="home-container">
      <div className="about">
        <h2>Hi, My Name is Daniel</h2>
        <div className="prompt">
          <span>A Online Requirements/ Networking Specialist with a passion for Front-End coding in React JS.</span>
          <div className="contact-links">
            <a href="https://github.com/Xaphan64">
              <GitHubIcon />
            </a>

            <a href="https://www.linkedin.com/in/alexandru-daniel-sarbu-b117861aa/">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React JS, HTML, CSS, SCSS, JavaScript</span>
          </li>

          <li className="item">
            <h2>Online Requirements/ Networking Specialist</h2>
            <span>
              Software Quality, Test Management, Testrail, Project Planning, Software Quality Assurance, Software
              Development Cycle, Networking
            </span>
          </li>

          <li className="item">
            <h2>Online Requirements Specialist</h2>
            <span>Project Management, Harbour, Online Services, Test Coverage, API Testing, Online Tests</span>
          </li>

          <li className="item">
            <h2>Task Lead and Coordinator</h2>
            <span>DTest, Test Automation, Teabox, Time Management, Test Coordination</span>
          </li>

          <li className="item">
            <h2>Task Lead</h2>
            <span>
              Test Processes, Task Management, Issue Management, Microsoft Outlook, Test Cases, Jira Dashboards, Daily
              Reports, Coaching
            </span>
          </li>

          <li className="item">
            <h2>Game Tester</h2>
            <span>
              Jira, Microsoft Office, Quality Assurance, Issue Reporting, Game Testing, Confluence, Video Games
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
