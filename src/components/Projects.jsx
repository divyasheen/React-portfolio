import React, { useEffect, useRef } from "react";
import "../styles/projects.css";

function Projects({ darkMode }) {
  const projectsGridRef = useRef(null);

  useEffect(() => {
    if (projectsGridRef.current) {
      projectsGridRef.current.classList.add("scroll-active");
    }
  }, []);

  const projects = [
    { title: "To-Do List App", description: "Manage tasks efficiently.", link: "https://project-to-do-list-u8kr.onrender.com/", image: "../todo.png" },
    { title: "My Portfolio", description: "A personal portfolio.", link: "https://react-portfolio-d647.onrender.com/", image: "../portfolio.png" },
    { title: "Sassy Website", description: "A stylish SCSS site.", link: "https://divyasheen.github.io/Sassy-website/", image: "../sassywebsite.png" },
    { title: "Academic Project", description: "A Python-based project.", link: "#", image: "../academic.png" },
  ];

  return (
    <section className={`projects-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2>My Projects</h2>
      <div className="projects-grid" ref={projectsGridRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;