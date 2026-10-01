
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
import "./Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setActiveDropdown(null);
    setMobileMenu(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar">

        {/* LOGO */}
        {/* LOGO */}
        <div className="logo">
          <NavLink to="/" onClick={closeMenu}>
            <img
              src={logo}
              alt="TekishHub logo"
            />
          </NavLink>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenu}
        >
          {mobileMenu ? "✕" : <GiHamburgerMenu />}
        </button>

        {/* NAVIGATION */}
        <ul className={`nav-menu ${mobileMenu ? "mobile-open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu}>
              HOME
            </NavLink>
          </li>


          {/* SERVICES */}
          <li
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => toggleDropdown("services")}>
              SERVICES  <span>v</span>
            </button>

            {activeDropdown === "services" && (
              <div className="mega-menu services-menu">

                {/* LEFT CONTENT */}
                <div className="mega-left">
                  <p className="small-heading">
                    OUR OFFERINGS
                  </p>

                  <h2>
                    Capabilities for
                    <br />
                    a new beginning...
                  </h2>

                  <h3>
                    EMPOWERED BY GROWTH
                  </h3>

                  <button className="touch-btn">
                    GET IN TOUCH
                  </button>
                </div>

                {/* COLUMN 1 */}
                <div className="mega-column">
                  <h4>CONSULTING</h4>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    STAFFING
                  </NavLink>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    RESOURCING
                  </NavLink>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    PAYROLL
                  </NavLink>

                  <h4 className="second-heading">
                    OUTSOURCING
                  </h4>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    BPO
                  </NavLink>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    RPO
                  </NavLink>
                </div>

                {/* COLUMN 2 */}
                <div className="mega-column">
                  <h4>
                    APPLICATION DEVELOPMENT
                  </h4>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    ENTERPRISE APPS
                  </NavLink>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    MOBILITY
                  </NavLink>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    E COMMERCE
                  </NavLink>

                  <h4 className="second-heading">
                    CLOUD TRANSFORMATION
                  </h4>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    AWS
                  </NavLink>

                  <NavLink
                    to="/staffing"
                    onClick={closeMenu}
                  >
                    AZURE
                  </NavLink>
                </div>

                {/* COLUMN 3 */}
                <div className="mega-column">
                  <h4>AI & ANALYTICS</h4>

                  <a href="#">APPLIED AI</a>
                  <a href="#">MODELLING</a>
                  <a href="#">DATA ANALYTICS</a>

                  <h4 className="second-heading">
                    SECURITY
                  </h4>

                  <a href="#">CYBERSECURITY</a>
                  <a href="#">QUALITY ASSURANCE</a>
                </div>

              </div>
            )}
          </li>

          {/* PLATFORM */}
           <li>
            <NavLink to="/process" onClick={closeMenu}>
              PROCESS
            </NavLink>
          </li>

          {/* INDUSTRIES */}
          <li
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("industries")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => toggleDropdown("industries")}>
              INDUSTRIES
            </button>

            {/* INDUSTRIES MEGA MENU */}
            {activeDropdown === "industries" && (
              <div className="mega-menu industries-menu">

                {/* LEFT CONTENT */}
                <div className="industries-left">
                  <h2>
                    Competitive, high-
                    <br />
                    performing
                    <br />
                    How we help win in the
                    <br />
                    digital economy
                  </h2>

                  <p>LEAD THE CHANGE</p>

                  <button className="touch-btn">
                    GET IN TOUCH
                  </button>
                </div>

                {/* INDUSTRIES COLUMN 1 */}
                <div className="industries-column">
                  <a href="#">
                    AEROSPACE &amp; DEFENCE
                  </a>

                  <a href="#">CHEMICAL</a>

                  <a href="#">HEALTH</a>

                  <a href="#">LIFE SCIENCE</a>

                  <a href="#">
                    SOFTWARE AND PROCESS
                  </a>
                </div>

                {/* INDUSTRIES COLUMN 2 */}
                <div className="industries-column">
                  <a href="#">AUTOMOTIVE</a>

                  <a href="#">TELECOM</a>

                  <a href="#">HI TECH</a>

                  <a href="#">NATURAL RESOURCES</a>

                  <a href="#">TRAVEL</a>
                </div>

                {/* INDUSTRIES COLUMN 3 */}
                <div className="industries-column">
                  <a href="#">BANKING</a>

                  <a href="#">RETAIL</a>

                  <a href="#">MANUFACTURING</a>

                  <a href="#">INSURANCE</a>

                  <a href="#">UTILITIES</a>
                </div>

              </div>
            )}
          </li>

          {/* COMPANY */}
          <li
            className="dropdown"
            onMouseEnter={() => setActiveDropdown("company")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button onClick={() => toggleDropdown("company")}>
              COMPANY
            </button>

            {activeDropdown === "company" && (
              <div className="simple-dropdown">
                <a href="#">ABOUT US</a>
                <a href="#">CAREERS</a>
                <a href="#">CONTACT US</a>
              </div>
            )}
          </li>

          {/* SOCIAL ICONS */}
          <li>
            <div className="social-icons">

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
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

            </div>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Navbar;