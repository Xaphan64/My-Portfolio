// ASSETS
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

// STYLES
import "react-vertical-timeline-component/style.min.css";
import "./Experience.scss";

// LIBRARIES
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

// MISC

// COMPONENTS

// CONFIGURATION
const Experience = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="experience-container">
      <VerticalTimeline lineColor="#12372A">
        <VerticalTimelineElement
          className="timeline-element"
          date="2009 - 2013"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Colegiul Tehnic Petru Poni, Onesti</h3>
          <span>Tehnician Ecolog si Protectia Calitatii Mediului</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          date="2013 - 2017"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<SchoolIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Universitatea Politehnica Bucuresti</h3>
          <span>Facultatea de Chimie Aplicata si Stiinta Materialelor</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          date="2017 - 2019"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Ubisoft Bucuresti</h3>
          <span className="text">Game Tester</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          date="Feb 2019 - Nov 2019"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Ubisoft Bucuresti</h3>
          <span>Task Lead</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          date="Dec 2019 - Aug 2020"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Ubisoft Bucuresti</h3>
          <span>Task Lead & Coordinator</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          date="Sep 2020 - May 2022"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Ubisoft Bucuresti</h3>
          <span>Online Requirements Specialist</span>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="timeline-element"
          date="Jun 2022 - Present"
          iconStyle={{ background: "#12372A", color: "#FBFADA" }}
          icon={<WorkIcon />}
          contentStyle={{ background: "#12372A" }}
          contentArrowStyle={{ borderRight: "8px solid #FBFADA" }}
        >
          <h3>Ubisoft Bucuresti</h3>
          <span>Online Requirements/Networking Specialist</span>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
