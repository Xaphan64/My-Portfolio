// ASSETS
import ReorderIcon from "@mui/icons-material/Reorder";

// STYLES
import "./Navbar.scss";

// LIBRARIES
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// MISC

// COMPONENTS

// CONFIGURATION
const Navbar = () => {
  // PROPERTIES

  // API REQUESTS

  // LIBRARY CONSTANTS
  const location = useLocation();

  // STATE CONSTANTS
  const [showNavbar, setShowNavbar] = useState(false);

  // LIFE CYCLE
  useEffect(() => {
    setShowNavbar(false);
  }, [location]);

  // EVENT HANDLERS
  return (
    <div className="navbar-container">
      <div className="toggleButton">
        <button
          onClick={() => {
            setShowNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Experience </Link>
      </div>
    </div>
  );
};

export default Navbar;
