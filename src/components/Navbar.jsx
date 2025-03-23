import React from "react";
import "../styles/navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`navContainer ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="navbar">
        {/* Logo */}
        <span className="nav-logo">{"<DIVYA MARIYA RAPHY/>"}</span>

        {/* Navigation Links */}
        <nav className="nav-links">
          <button className="nav-link" onClick={() => handleScroll("home")}>
            Home
          </button>
          <button className="nav-link" onClick={() => handleScroll("about")}>
            About
          </button>
          <button className="nav-link" onClick={() => handleScroll("projects")}>
            Projects
          </button>
          <a href="../DCIUPDATEDCV.pdf" target="_blank" rel="noopener noreferrer" className="nav-link">
           Resume
          </a>
          <button className="nav-link" onClick={() => handleScroll("contact")}>
            Contact
          </button>
        </nav>

        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
