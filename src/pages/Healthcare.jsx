import React, { useEffect, useRef } from "react";
import "../styles/pages/Healthcare.css";

const talentAreas = [
  {
    number: "01",
    title: "Healthcare IT",
    description:
      "Technology professionals supporting healthcare IT environments, applications, infrastructure and digital initiatives.",
  },
  {
    number: "02",
    title: "Healthcare Technology",
    description:
      "Skilled technology talent supporting healthcare platforms, systems and technology-enabled business solutions.",
  },
  {
    number: "03",
    title: "Data & Analytics",
    description:
      "Professionals supporting healthcare data management, reporting, analytics and data-driven decision making.",
  },
  {
    number: "04",
    title: "Technical Support",
    description:
      "Technical professionals providing application, system and technology support for healthcare organizations.",
  },
  {
    number: "05",
    title: "Healthcare Operations",
    description:
      "Professional talent supporting healthcare operations, business processes and organizational requirements.",
  },
  {
    number: "06",
    title: "Software Development",
    description:
      "Software developers and engineering professionals supporting healthcare applications and digital solutions.",
  },
];

const supportAreas = [
  "Technology & IT Staffing",
  "Healthcare Technology Talent",
  "Data & Analytics Professionals",
  "Technical Support Professionals",
  "Healthcare Operations Talent",
  "Software Development Teams",
];

const Healthcare = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const revealElements =
      pageRef.current.querySelectorAll(".healthcare-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("healthcare-show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) => observer.unobserve(element));
      observer.disconnect();
    };
  }, []);

  return (
    <div className="healthcare-page" ref={pageRef}>

      {/* ================= HERO ================= */}
      <section className="healthcare-hero">
        <div className="healthcare-hero-grid"></div>

        <div className="healthcare-orbit healthcare-orbit-one"></div>
        <div className="healthcare-orbit healthcare-orbit-two"></div>
        <div className="healthcare-orbit healthcare-orbit-three"></div>

        <div className="healthcare-hero-container">

          <div className="healthcare-hero-content healthcare-reveal">

            <span className="healthcare-label">
              INDUSTRIES
            </span>

            <h1>
              Healthcare
            </h1>

            <h2>
              Technology & Talent Solutions
            </h2>

            <p>
              We provide technology and professional talent solutions
              for healthcare organizations and healthcare technology
              businesses.
            </p>

            <a
              href="/contact"
              className="healthcare-hero-button"
            >
              Talk to Our Team
              <span>→</span>
            </a>

          </div>

          {/* Floating visual card */}
          <div className="healthcare-hero-card healthcare-reveal">

            <div className="healthcare-card-icon">
              +
            </div>

            <div>
              <strong>
                Healthcare
              </strong>

              <span>
                Technology & Talent
              </span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= INTRO ================= */}
      <section className="healthcare-intro">

        <div className="healthcare-intro-container">

          <div className="healthcare-intro-left healthcare-reveal">

            <span className="healthcare-section-label">
              HEALTHCARE
            </span>

            <h2>
              Connecting healthcare
              <br />
              with the right talent.
            </h2>

          </div>

          <div className="healthcare-intro-right healthcare-reveal">

            <p>
              We provide technology and professional talent solutions
              for healthcare organizations and healthcare technology
              businesses.
            </p>

            <p>
              Our recruitment and staffing approach helps organizations
              access skilled professionals across technology, data,
              technical support, operations and software development.
            </p>

          </div>

        </div>

      </section>


      {/* ================= TALENT AREAS ================= */}
      <section className="healthcare-talent">

        <div className="healthcare-section-heading healthcare-reveal">

          <span>
            HEALTHCARE TALENT SOLUTIONS
          </span>

          <h2>
            Technology and talent
            <br />
            for healthcare.
          </h2>

          <p>
            We connect healthcare organizations and healthcare
            technology businesses with skilled professionals across
            technology, data, support, operations and software
            development.
          </p>

        </div>


        <div className="healthcare-talent-grid">

          {talentAreas.map((area) => (

            <div
              className="healthcare-talent-card healthcare-reveal"
              key={area.number}
            >

              <div className="healthcare-card-number">
                {area.number}
              </div>

              <div className="healthcare-card-content">

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.description}
                </p>

              </div>

              <div className="healthcare-card-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ================= SUPPORT SECTION ================= */}
      <section className="healthcare-support">

        <div className="healthcare-support-pattern"></div>

        <div className="healthcare-support-container">

          <div className="healthcare-support-content healthcare-reveal">

            <span className="healthcare-section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Supporting healthcare
              <br />
              organizations at every level.
            </h2>

            <p>
              From technology and software development to data,
              technical support and healthcare operations, PeakLink
              helps organizations build capable teams aligned with
              their business requirements.
            </p>

          </div>


          <div className="healthcare-support-list">

            {supportAreas.map((area, index) => (

              <div
                className="healthcare-support-item healthcare-reveal"
                key={area}
              >

                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p>
                  {area}
                </p>

                <b>
                  →
                </b>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="healthcare-cta">

        <div className="healthcare-cta-pattern"></div>

        <div className="healthcare-cta-container healthcare-reveal">

          <div>

            <span>
              BUILD YOUR TEAM
            </span>

            <h2>
              Looking for healthcare
              <br />
              technology talent?
            </h2>

            <p>
              Let us help you find the right professionals for your
              healthcare organization or technology business.
            </p>

          </div>

          <a
            href="/contact"
            className="healthcare-cta-button"
          >
            Talk to Our Team
            <span>→</span>
          </a>

        </div>

      </section>

    </div>
  );
};

export default Healthcare;