import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Full Stack Web Developer!",
  "Angular Developer!",
  "React Developer!",
  "Problem Solver!",
];

function Home({ darkMode }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % TEXTS.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
    <section className={`home-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {stars}
      <div className="home-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Divya</span>
          <FontAwesomeIcon icon={faLaptopCode} className="hero-icon" />
        </h1>

        <p className="hero-subtitle">
          <span className="fixed-text">I am a </span>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index]}
          </TextTransition>
        </p>

       
      </div>

      {/* Right-side Experience Section */}
      <div className="experience-section">
        <div className="experience-item">
          <span className="experience-number">2+</span>
          <span className="experience-text">Years Experience</span>
        </div>
        <div className="experience-item">
          <span className="experience-number">10k+</span>
          <span className="experience-text">Hours Worked</span>
        </div>
      </div>
    </section>
  );
}

export default Home;