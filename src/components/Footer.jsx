import React from "react";
import "../styles/footer.css"; 

function Footer({ darkMode }) {
  return (
    <footer className={`footer-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <p>© 2025 Divya | Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
