
import React, { useState } from "react";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";
import "../styles/components/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="nav-left">
        <NavLink to="/" onClick={closeMenu}>
          <img src={logo} alt="PeakLink logo" />
        </NavLink>
      </div>

      {/* Hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : <GiHamburgerMenu />}
      </button>

      {/* Navigation */}
      <div className={`nav-right ${menuOpen ? "active" : ""}`}>

        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Services
        </NavLink>

        <NavLink to="/industries" onClick={closeMenu}>
          Industries
        </NavLink>

        <NavLink to="/process" onClick={closeMenu}>
          Process
        </NavLink>

        <NavLink to="/careers" onClick={closeMenu}>
          Careers
        </NavLink>

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>

        {/* Social Links */}
        <div className="social-links">

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <GrInstagram />
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;