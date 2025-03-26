import React, { useState } from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking a link
  };

  return (
    <div className={`navContainer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar">
        <span className="nav-logo">{"<DIVYA MARIYA RAPHY/>"}</span>

        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <button className="nav-link" onClick={() => handleScroll("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleScroll("about")}>
            About
          </button>
          <button className="nav-link" onClick={() => handleScroll("projects")}>
            Projects
          </button>
          <a 
            href="../DCIUPDATEDCV.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            Resume
          </a>
          <button className="nav-link" onClick={() => handleScroll("contact")}>
            Contact
          </button>
        </nav>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;