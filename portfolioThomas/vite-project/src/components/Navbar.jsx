// src/components/Navbar.jsx
import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage("home")}>Home</li>
        <li onClick={() => setCurrentPage("about")}>About</li>
        <li onClick={() => setCurrentPage("projects")}>Projects</li>
        <li onClick={() => setCurrentPage("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
