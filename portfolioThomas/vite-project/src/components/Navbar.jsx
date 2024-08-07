
import React from "react";

function Navbar({ setCurrentPage }) {
  return (
    <nav>
      <ul>
        <li onClick={() => setCurrentPage("home")}>Inicio</li>
        <li onClick={() => setCurrentPage("about")}>Sobre Mi</li>
        <li onClick={() => setCurrentPage("projects")}>Projectos</li>
        <li onClick={() => setCurrentPage("contact")}>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
