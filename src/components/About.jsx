import React from "react";
import "../styles/about.css"; // You can style it in this file

function About({ darkMode }) {
  return (
    <section className={`about-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          My approach focuses on creating scalable, high-performing solutions tailored to both user needs and business objectives. By prioritizing performance, accessibility, and responsiveness, I strive to deliver experiences that not only engage users but also drive tangible results.
        </p>

        <h3>Timeline</h3>
        <div className="timeline">
          {/* Latest Entry First */}
          <div className="timeline-item">
            <div className="timeline-year">2024 - 2025</div>
            <div className="timeline-content">
              <h4>Full-Stack Web Development at DCI</h4>
              <p>
                DCI Digital Career Institute, GmbH Berlin <br />
                One-year full-time course to learn technologies of the MERN stack together with German language training.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2021 - 2023</div>
            <div className="timeline-content">
              <h4>Front-end Developer at TCS</h4>
              <p>
                Tata Consultancy Services Limited, India <br />
                Implemented dynamic user interfaces for a US-based healthcare client project using Typescript on Angular framework.
              </p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-year">2016 - 2020</div>
            <div className="timeline-content">
              <h4>Bachelor of Technology in Computer Science Engineering (Honors)</h4>
              <p>
                APJ Abdul Kalam Technological University, India <br />
                Degree in Computer Science with Honors and industrial experience during final year project. <br />
                CGPA: 8.9
              </p>
            </div>
          </div>
        </div>

        <h3>Skills</h3>
        <div className="skills">
          <span className="skill-tag">JavaScript</span>
          <span className="skill-tag">Typescript</span>
          <span className="skill-tag">HTML</span>
          <span className="skill-tag">CSS/SCSS</span>
          <span className="skill-tag">Angular</span>
          <span className="skill-tag">React</span>
          <span className="skill-tag">MongoDB</span>
          <span className="skill-tag">Express</span>
          <span className="skill-tag">Git</span>
          <span className="skill-tag">Bootstrap</span>
          <span className="skill-tag">Figma</span>
          <span className="skill-tag">Sonar</span>
          <span className="skill-tag">Jira</span>
        </div>
      </div>
    </section>
  );
}

export default About;