import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/projects.css";

function Projects({ darkMode }) {
  const projects = [
    { title: "To-Do List App", description: "Manage tasks efficiently.", link: "https://project-to-do-list-u8kr.onrender.com/", image: "../todo.png" },
    { title: "My Portfolio", description: "A personal portfolio.", link: "https://react-portfolio-d647.onrender.com/", image: "../portfolio.png" },
    { title: "Sassy Website", description: "A stylish SCSS site.", link: "https://divyasheen.github.io/Sassy-website/", image: "../sassywebsite.png" },
    { title: "Academic Project", description: "A Python-based project.", link: "#", image: "../academic.png" },
  ];

  return (
    <section className={`projects-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h2>My Projects</h2>
      <Swiper
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  autoplay={{ delay: 2500, disableOnInteraction: false }}
  pagination={{ clickable: true }}
  navigation
  grabCursor={true}  // Makes it clear that slides can be dragged
  style={{ paddingBottom: "40px" }} // Adds spacing for pagination
>
  {projects.map((project, index) => (
    <SwiperSlide key={index}>
      <div className="project-card">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="project-details">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a
            href={project.link}
            className="project-link"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevents Swiper from blocking clicks
          >
            View Project
          </a>
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
}

export default Projects;
