import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/industries.css";
import IT from "../assets/IT.webp"
export const industries = [
  {
    title: "Information Technology",
    menuTitle: "HI TECH",
    text: "We support software companies, IT service providers, and technology teams with skilled professionals across software development, data, cloud, cybersecurity, and IT infrastructure.",
    services: [
      "Software Development",
      "Data Engineering & Analytics",
      "Cloud & DevOps",
      "AI & Machine Learning",
      "Cybersecurity",
      "IT Infrastructure",
    ],
    image:IT
  },
  {
    title: "Healthcare",
    menuTitle: "HEALTH",
    text: "We provide technology and professional talent solutions for healthcare organizations and healthcare technology businesses.",
    services: [
      "Healthcare IT",
      "Healthcare Technology",
      "Data & Analytics",
      "Technical Support",
      "Healthcare Operations",
      "Software Development",
    ],
  },
  {
    title: "Banking & Financial Services",
    menuTitle: "BANKING",
    text: "We support banks, fintech companies, financial institutions, and insurance organizations with technology and specialist talent.",
    services: [
      "FinTech",
      "Banking Technology",
      "Data & Analytics",
      "Risk & Compliance",
      "Software Development",
      "IT Support",
    ],
  },
  {
    title: "E-commerce & Retail",
    menuTitle: "RETAIL",
    text: "We help e-commerce and retail businesses build teams across digital commerce, technology, product, operations, and customer experience.",
    services: [
      "E-commerce Technology",
      "Web & Mobile Development",
      "Data & Analytics",
      "Digital Marketing",
      "Customer Support",
      "Supply Chain",
    ],
  },
  {
    title: "Engineering & Manufacturing",
    menuTitle: "MANUFACTURING",
    text: "We provide workforce support for engineering, manufacturing, automation, operations, and specialist technical functions.",
    services: [
      "Engineering",
      "Manufacturing Technology",
      "Automation",
      "Quality & Operations",
      "Supply Chain",
      "Technical Support",
    ],
  },
  {
    title: "Telecommunications",
    menuTitle: "TELECOM",
    text: "We support telecom organizations and connected technology businesses with specialized technology and workforce solutions.",
    services: [
      "Network Engineering",
      "Telecom Operations",
      "Software Development",
      "Cloud & Infrastructure",
      "Technical Support",
      "Cybersecurity",
    ],
  },
  {
    title: "Professional Services",
    menuTitle: "PROFESSIONAL SERVICES",
    text: "We help consulting and professional service organizations access skilled professionals across technology and business functions.",
    services: [
      "IT Consulting",
      "Business Consulting",
      "Finance & Accounting",
      "Human Resources",
      "Business Analysis",
      "Project Management",
    ],
  },
  {
    title: "Startups & Emerging Businesses",
    menuTitle: "STARTUPS",
    text: "We provide flexible hiring and workforce solutions for startups, scale-ups, and growing businesses building their teams.",
    services: [
      "Technology Hiring",
      "Software Development",
      "Data & AI",
      "Cloud & DevOps",
      "Sales & Marketing",
      "Business Operations",
    ],
  },
];

function Industries() {
 const location = useLocation();

useEffect(() => {
  if (!location.hash) return;

  const id = decodeURIComponent(location.hash.substring(1));

  setTimeout(() => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100);

}, [location.hash]);
  return (
    <main className="industries-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="industries-hero">

        <div className="industries-hero-content">

          <span className="eyebrow">
            INDUSTRIES
          </span>

          <h1>
            Industry-focused talent
            <br />
            solutions
          </h1>

          <p>
            Connecting organizations with skilled professionals
            across technology, business, and specialized industries.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="industries-intro">

        <div className="intro-content">

          <span className="eyebrow">
            INDUSTRIES WE SERVE
          </span>

          <h2>
            Supporting businesses
            <br />
            across diverse industries
          </h2>

          <p>
            Every industry has different workforce requirements.
            Our recruitment and staffing solutions are designed to
            understand these requirements and connect organizations
            with professionals who match their business and
            technology needs.
          </p>

        </div>

      </section>


      {/* =====================================================
          INDUSTRIES
      ===================================================== */}

      <section className="industries-list-section">

        {industries.map((industry, index) => {

          const industryId = `industry-${industry.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")}`;

          return (
            <article
              id={industryId}
              className={`industry-block ${
                index % 2 !== 0 ? "reverse" : ""
              }`}
              key={industry.title}
            >

              {/* NUMBER */}

              <div className="industry-number">
                
              </div>


              {/* CONTENT */}

              <div className="industry-content">

                <span className="eyebrow">
                  INDUSTRY {String(index + 1).padStart(2, "0")}
                </span>

                <h2>
                  {industry.title}
                </h2>

                <p>
                  {industry.text}
                </p>

                <div className="industry-services">

                  {industry.services.map((service) => (

                    <div
                      className="industry-service"
                      key={service}
                    >
                      <span>→</span>
                      {service}
                    </div>

                  ))}

                </div>

              </div>


              {/* VISUAL */}

              <div className="industry-visual">

            <div className="visual-content">

  <span>
    {String(index + 1).padStart(2, "0")}
  </span>

  {industry.image && (
    <img
      src={industry.image}
      alt={industry.title}
    />
  )}

</div>

              </div>

            </article>
          );
        })}

      </section>


      {/* =====================================================
          WHY PEAKLINK
      ===================================================== */}

      <section className="industries-why">

        <div className="why-content">

          <span className="eyebrow">
            WHY PEAKLINK
          </span>

          <h2>
            Workforce solutions
            <br />
            built around your needs
          </h2>

          <p>
            We combine recruitment expertise with an understanding
            of technology and business requirements to help
            organizations build capable teams.
          </p>

        </div>


        <div className="why-grid">

          <div>
            

            <h4>
              Industry Understanding
            </h4>

            <p>
              Understanding the skills and workforce requirements
              specific to different industries.
            </p>
          </div>


          <div>
            

            <h4>
              Specialized Talent
            </h4>

            <p>
              Connecting organizations with professionals across
              technical and business functions.
            </p>
          </div>


          <div>
           

            <h4>
              Flexible Solutions
            </h4>

            <p>
              Recruitment and workforce solutions that can adapt
              to changing business requirements.
            </p>
          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="industries-cta">

        <span className="eyebrow">
          LET'S WORK TOGETHER
        </span>

        <h2>
          Looking for the right talent?
        </h2>

        <p>
          Tell us about your hiring requirements and
          let's build the right team for your organization.
        </p>

        <a href="/contact">
          Contact Us →
        </a>

      </section>

    </main>
  );
}

export default Industries;