import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "../styles/contact.css"; // Import the updated CSS

function Contact({ darkMode }) {
  return (
    <section className={`contact-container ${darkMode ? "dark-mode" : "light-mode"}`} id="contact">
      <h2>Get in Touch</h2>
      <p className="contact-subtext">
        Let's connect! Feel free to reach out through any of the platforms below.
      </p>
      
      <div className="contact-cards">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/divya-mariya-raphy/" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
          <p>LinkedIn</p>
        </a>

        {/* GitHub */}
        <a href="https://github.com/divyasheen" target="_blank" rel="noopener noreferrer" className="contact-card">
          <FontAwesomeIcon icon={faGithub} className="contact-icon" />
          <p>GitHub</p>
        </a>

        {/* Email */}
        <a href="mailto:divyam.sheen@gmail.com" className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <p>Email</p>
        </a>

        
      </div>
    </section>
  );
}

export default Contact;
