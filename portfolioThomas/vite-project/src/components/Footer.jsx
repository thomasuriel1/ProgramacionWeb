import React from "react";
import {FaInstagram, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="link">
      <a
      className="link"
      href="https://wa.me/+5491162903400"
      target="_blank"
      rel="noopener noreferrer"
      >
        <FaWhatsapp className="footer-icon whatsapp" />Whatsapp</a>

      
      <p>&copy; 2024 Mi Portafolio. Todos los derechos reservados.</p>
      <a 
      className= "link" 
      href="https://www.instagram.com/thomas.uriell/"
      target="_blank"
      rel="noopener noreferrer">
        <FaInstagram className="footer-icon instagram" />@thomas.uriell</a>

    </footer>
  );
}

export default Footer;
