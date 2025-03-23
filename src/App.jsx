import React, { useState } from "react";
import Navbar from "./components/Navbar"; // Corrected path for Navbar
import Home from "./components/Home"; // Corrected path for Home
import About from "./components/About"; // Importing the About component
import Projects from "./components/Projects"; // Importing the Projects component
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import "./styles/navbar.css"; // Corrected path for navbar.css
import "./styles/home.css"; // Corrected path for home.css
import "./styles/projects.css"; // Path for the new projects CSS
import "./styles/contact.css";
import "./styles/footer.css";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <div id="home">
        <Home darkMode={darkMode} />
      </div>
      <div id="about">
        <About darkMode={darkMode} />
      </div>
      <div id="projects">
        <Projects darkMode={darkMode} />
      </div>
      <div id="contact">
        <Contact darkMode={darkMode} />
      </div>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
