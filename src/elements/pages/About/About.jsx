// ASSETS
import cv from "../../assets/Sarbu_Alexandru_Daniel_CV.pdf";

// STYLES
import "./About.scss";

// LIBRARIES

// MISC

// COMPONENTS

// CONFIGURATION
const About = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS

  // STATE CONSTANTS

  // LIFE CYCLE

  // EVENT HANDLERS
  return (
    <div className="about-container">
      <h1>Personal Info</h1>

      <div className="about-details">
        <ol className="about-list">
          <li className="about-item">
            <span>First Name : </span>
            <p> Alexandru-Daniel</p>
          </li>

          <li className="about-item">
            <span>Last Name : </span>
            <p>Sârbu</p>
          </li>

          <li className="about-item">
            <span>Age : </span>
            <p>29 Years</p>
          </li>

          <li className="about-item">
            <span>Nationality : </span>
            <p>Romanian</p>
          </li>
        </ol>

        <ol className="about-list">
          <li className="about-item">
            <span>Address : </span>
            <p>Bucharest, Romania</p>
          </li>

          <li className="about-item">
            <span>Phone : </span>
            <p>+40 742 754 878</p>
          </li>

          <li className="about-item">
            <span>Email : </span>
            <p>alex_daniel64@yahoo.com</p>
          </li>

          <li className="about-item">
            <span>Languages : </span>
            <p>Romanian, English</p>
          </li>
        </ol>
      </div>

      <a href={cv} download="CV-PDF-document" target="_blank" rel="noreferrer">
        Download CV
      </a>
    </div>
  );
};

export default About;
