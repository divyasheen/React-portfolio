import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/projects.css";
import "./styles/contact.css";
import "./styles/footer.css";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default is dark mode

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    
    // Fix scrollbar issue by ensuring consistent body overflow settings
    document.documentElement.style.overflow = "hidden"; // Prevent flickering scrollbars
    document.body.style.overflowY = "auto"; // Ensure only one vertical scrollbar
  };
  
  
  
  const stars = Array.from({ length: 100 }).map((_, i) => (
    <div
      key={i}
      className={`star ${!darkMode ? "light-mode" : ""}`} // Apply light-mode class conditionally
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 2}s`, // Randomize duration
        animationDelay: `${Math.random() * 5}s`, // Randomize delay
      }}
    ></div>
  ));

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {stars}
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