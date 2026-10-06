import React, { useEffect, useRef } from "react";
import "../styles/pages/Finance.css";

const talentAreas = [
  {
    number: "01",
    title: "FinTech",
    description:
      "Technology professionals supporting fintech platforms, digital financial products and technology-driven financial services.",
  },
  {
    number: "02",
    title: "Banking Technology",
    description:
      "Skilled technology talent supporting banking systems, digital platforms, applications and technology infrastructure.",
  },
  {
    number: "03",
    title: "Data & Analytics",
    description:
      "Professionals supporting financial data management, reporting, analytics and data-driven business decisions.",
  },
  {
    number: "04",
    title: "Risk & Compliance",
    description:
      "Specialist professionals supporting risk management, regulatory requirements, compliance processes and financial controls.",
  },
  {
    number: "05",
    title: "Software Development",
    description:
      "Software developers and engineering professionals supporting financial applications, platforms and digital solutions.",
  },
  {
    number: "06",
    title: "IT Support",
    description:
      "Technical professionals providing application, infrastructure, system and technology support for financial organizations.",
  },
];

const supportAreas = [
  "FinTech Technology Talent",
  "Banking Technology Professionals",
  "Data & Analytics Specialists",
  "Risk & Compliance Professionals",
  "Software Development Teams",
  "IT Support Professionals",
];

const BankingFinancialServices = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const revealElements =
      pageRef.current.querySelectorAll(".banking-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("banking-show");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      revealElements.forEach((element) =>
        observer.unobserve(element)
      );

      observer.disconnect();
    };
  }, []);

  return (
    <div className="banking-page" ref={pageRef}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="banking-hero">

        <div className="banking-grid"></div>

        <div className="banking-ring banking-ring-one"></div>
        <div className="banking-ring banking-ring-two"></div>
        <div className="banking-ring banking-ring-three"></div>

        <div className="banking-data-line banking-line-one"></div>
        <div className="banking-data-line banking-line-two"></div>

        <div className="banking-hero-container">

          <div className="banking-hero-content banking-reveal">

            <span className="banking-label">
              INDUSTRIES
            </span>

            <h1>
              Banking &
              <br />
              Financial Services
            </h1>

            <h2>
              Technology & Specialist Talent
            </h2>

            <p>
              We support banks, fintech companies, financial
              institutions, and insurance organizations with
              technology and specialist talent.
            </p>

            <a
              href="/contact"
              className="banking-hero-button"
            >
              Talk to Our Team
              <span>→</span>
            </a>

          </div>


          {/* HERO VISUAL */}

          <div className="banking-visual banking-reveal">

            <div className="banking-visual-circle">

              <div className="banking-center-icon">
                $
              </div>

              <div className="banking-node banking-node-one">
                <span>01</span>
              </div>

              <div className="banking-node banking-node-two">
                <span>02</span>
              </div>

              <div className="banking-node banking-node-three">
                <span>03</span>
              </div>

              <div className="banking-node banking-node-four">
                <span>04</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="banking-intro">

        <div className="banking-intro-container">

          <div className="banking-intro-left banking-reveal">

            <span className="banking-section-label">
              BANKING & FINANCIAL SERVICES
            </span>

            <h2>
              Building teams for
              <br />
              financial innovation.
            </h2>

          </div>


          <div className="banking-intro-right banking-reveal">

            <p>
              We support banks, fintech companies, financial
              institutions, and insurance organizations with
              technology and specialist talent.
            </p>

            <p>
              Our recruitment and staffing solutions help
              financial organizations access skilled professionals
              across fintech, banking technology, data, risk,
              compliance, software development and IT support.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          TALENT AREAS
      ===================================================== */}

      <section className="banking-talent">

        <div className="banking-section-heading banking-reveal">

          <span>
            FINANCIAL SERVICES TALENT
          </span>

          <h2>
            Technology and specialist
            <br />
            talent for finance.
          </h2>

          <p>
            We connect financial organizations with professionals
            who bring the technology, specialist expertise and
            business capabilities required in a changing
            financial services environment.
          </p>

        </div>


        <div className="banking-talent-grid">

          {talentAreas.map((area) => (

            <div
              className="banking-talent-card banking-reveal"
              key={area.number}
            >

              <div className="banking-card-top">

                <span className="banking-card-number">
                  {area.number}
                </span>

                <span className="banking-card-icon">
                  +
                </span>

              </div>


              <div className="banking-card-content">

                <h3>
                  {area.title}
                </h3>

                <p>
                  {area.description}
                </p>

              </div>


              <div className="banking-card-arrow">
                →
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          SUPPORT SECTION
      ===================================================== */}

      <section className="banking-support">

        <div className="banking-support-grid"></div>

        <div className="banking-support-ring"></div>

        <div className="banking-support-container">

          <div className="banking-support-content banking-reveal">

            <span className="banking-section-label">
              OUR EXPERTISE
            </span>

            <h2>
              Supporting the
              <br />
              financial services
              <br />
              ecosystem.
            </h2>

            <p>
              From fintech and banking technology to data,
              compliance, software development and IT support,
              PeakLnk helps financial organizations build
              capable teams aligned with their business goals.
            </p>

          </div>


          <div className="banking-support-list">

            {supportAreas.map((area, index) => (

              <div
                className="banking-support-item banking-reveal"
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


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="banking-cta">

        <div className="banking-cta-pattern"></div>

        <div className="banking-cta-container banking-reveal">

          <div>

            <span>
              BUILD YOUR TEAM
            </span>

            <h2>
              Looking for banking
              <br />
              or fintech talent?
            </h2>

            <p>
              Let us help you find the right technology and
              specialist professionals for your financial
              services organization.
            </p>

          </div>


          <a
            href="/contact"
            className="banking-cta-button"
          >
            Talk to Our Team
            <span>→</span>
          </a>

        </div>

      </section>

    </div>
  );
};

export default BankingFinancialServices;