import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Full Stack Developer!",
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

  // Generate 20 random stars dynamically
  const stars = Array.from({ length: 100 }).map((_, i) => (
    <div
      key={i}
      className="star"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 3 + 2}s`
      }}
    ></div>
  ));

  return (
    <section className={`home-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {stars} {/* Render dynamic stars */}
      <div className="home-content">
  <h1 className="hero-title">
    Hi<span className="wave">👋</span>, I'm <span className="highlight">Divya</span> 
    <FontAwesomeIcon icon={faLaptopCode} className="hero-icon" />
  </h1>

  <p className="hero-subtitle">
  <span className="fixed-text">I am a </span>
  <TextTransition springConfig={presets.wobbly}>
    {TEXTS[index]}
  </TextTransition>
</p>

</div>

    </section>
  );
}

export default Home;
