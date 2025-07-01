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
    { title: "Coderealm", description: "AI-integrated Coding Platform", link: "https://coderealm-e7af.onrender.com/", image: "../image.png" },
    { title: "Pokedex", description: "Pokedex using Next.js", link: "https://pokedex-z0p8.onrender.com", image: "../pokedex.png" },
  ];

  return (
    <section className={`projects-container ${darkMode ? "dark-mode" : "light-mode"}`} id="projects">
      <h2>My Projects</h2>
      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          grabCursor={true}
          className="custom-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-card">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                  loading="lazy"
                />
                <div className="project-details">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;