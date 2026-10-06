import React from "react";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Information */}
        <div className="footer-company">

          <h2>PeakLnk</h2>

          <p className="footer-company-name">
            Technologies Pvt Ltd
          </p>

          <p className="footer-tagline">
            Recruitment | Staffing | Technology Solutions
          </p>

        </div>


        <div className="footer-column quick-links">

  <h3>Quick Links</h3>

  <div className="quick-links-grid">
    <a href="/">Home</a>
    <a href="/careers">Careers</a>

    <a href="/about">About</a>
    <a href="/jobs">Jobs</a>

    <a href="/services">Services</a>
    <a href="/employers">Employers</a>

    <a href="/industries">Industries</a>
    <a href="/contact">Contact</a>
  </div>

</div>



        {/* Legal */}
        <div className="footer-column">

          <h3>Legal</h3>

          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <a href="/terms-conditions">
            Terms & Conditions
          </a>

        </div>

      </div>


      {/* Copyright */}
      <div className="footer-bottom">

        <p>
          Copyright © 2026 PeakLnk Technologies Pvt Ltd.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;