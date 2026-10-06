import React, { useEffect } from "react";
import "./Engineering.css";

const capabilities = [
  {
    icon: "⚙",
    title: "Engineering",
    description:
      "We help engineering organizations build teams across design, development, project execution, and technical functions.",
    points: [
      "Mechanical Engineering",
      "Electrical Engineering",
      "Civil Engineering",
      "Design & CAD",
      "Project Engineering",
      "Production Engineering",
    ],
  },
  {
    icon: "🏭",
    title: "Manufacturing Technology",
    description:
      "We support manufacturing businesses with technology professionals who improve production systems, processes, and digital operations.",
    points: [
      "Manufacturing Systems",
      "Production Technology",
      "Industrial IT",
      "ERP & MES Support",
      "Process Digitization",
      "Plant Technology",
    ],
  },
  {
    icon: "🤖",
    title: "Automation",
    description:
      "Build teams capable of improving industrial efficiency through automation, control systems, and smart manufacturing technologies.",
    points: [
      "Industrial Automation",
      "PLC & SCADA",
      "Control Systems",
      "Robotics",
      "IoT & Connected Systems",
      "Process Automation",
    ],
  },
  {
    icon: "✓",
    title: "Quality & Operations",
    description:
      "We connect businesses with professionals who help maintain quality standards, operational efficiency, and continuous improvement.",
    points: [
      "Quality Assurance",
      "Quality Control",
      "Process Improvement",
      "Operations Management",
      "Lean Manufacturing",
      "Six Sigma",
    ],
  },
  {
    icon: "↗",
    title: "Supply Chain",
    description:
      "Support your supply chain with talent across planning, procurement, logistics, inventory, and operations.",
    points: [
      "Supply Chain Planning",
      "Procurement",
      "Logistics",
      "Inventory Management",
      "Warehouse Operations",
      "Demand Planning",
    ],
  },
  {
    icon: "🔧",
    title: "Technical Support",
    description:
      "Build reliable technical support teams for industrial systems, equipment, applications, infrastructure, and field operations.",
    points: [
      "Technical Support",
      "Field Support",
      "Equipment Support",
      "Application Support",
      "Infrastructure Support",
      "Maintenance Support",
    ],
  },
];

const talentAreas = [
  {
    title: "Engineering",
    roles: [
      "Mechanical Engineers",
      "Electrical Engineers",
      "Design Engineers",
      "Production Engineers",
      "Project Engineers",
    ],
  },
  {
    title: "Manufacturing",
    roles: [
      "Manufacturing Engineers",
      "Production Managers",
      "Plant Operations",
      "Process Engineers",
      "Manufacturing Analysts",
    ],
  },
  {
    title: "Automation",
    roles: [
      "Automation Engineers",
      "PLC Engineers",
      "SCADA Engineers",
      "Controls Engineers",
      "Robotics Engineers",
    ],
  },
  {
    title: "Quality",
    roles: [
      "Quality Engineers",
      "QA Specialists",
      "QC Inspectors",
      "Quality Analysts",
      "Process Improvement Specialists",
    ],
  },
  {
    title: "Supply Chain",
    roles: [
      "Supply Chain Analysts",
      "Procurement Specialists",
      "Logistics Coordinators",
      "Demand Planners",
      "Inventory Analysts",
    ],
  },
  {
    title: "Technical Support",
    roles: [
      "Technical Support Engineers",
      "Field Service Engineers",
      "Application Support Engineers",
      "Maintenance Engineers",
      "Support Specialists",
    ],
  },
];

const hiringTypes = [
  {
    number: "01",
    title: "Entry-Level Hiring",
    description:
      "Build your future workforce with graduates and early-career professionals across engineering, technology, and operations.",
  },
  {
    number: "02",
    title: "Mid-Level Hiring",
    description:
      "Find experienced professionals who can contribute immediately to engineering, manufacturing, automation, and operations teams.",
  },
  {
    number: "03",
    title: "Specialized Hiring",
    description:
      "Access specialized talent for automation, industrial technology, quality, manufacturing systems, and technical functions.",
  },
  {
    number: "04",
    title: "Contract & Staffing",
    description:
      "Flexible workforce solutions for projects, production requirements, technical support, and changing business demands.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, technical requirements, team structure, and workforce objectives.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify candidates through targeted sourcing and relevant talent networks.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Candidates are assessed based on skills, experience, role requirements, and organizational fit.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "We coordinate interviews and help connect the right professionals with your team.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We stay engaged throughout the hiring process to create a smooth experience for both sides.",
  },
];

const reasons = [
  {
    title: "Industry-Focused Talent",
    description:
      "We understand the different workforce requirements across engineering, manufacturing, automation, quality, and operations.",
  },
  {
    title: "Technical Understanding",
    description:
      "Our approach focuses on matching candidates based on actual technical requirements rather than relying only on job titles.",
  },
  {
    title: "Flexible Workforce Support",
    description:
      "Whether you need individual specialists or broader workforce support, our hiring approach can adapt to your requirements.",
  },
  {
    title: "Faster Talent Access",
    description:
      "Our sourcing approach helps businesses reach relevant professionals and reduce the time spent searching for suitable candidates.",
  },
  {
    title: "Quality-Focused Hiring",
    description:
      "We focus on skills, experience, communication, and role alignment to help create stronger hiring outcomes.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We aim to build lasting relationships with businesses and professionals beyond individual hiring requirements.",
  },
];

function EngineeringManufacturing() {
  useEffect(() => {
    const elements = document.querySelectorAll(".em-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("em-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="engineering-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="em-hero">

        <div className="em-hero-content">

          <div className="em-label">
            Engineering & Manufacturing
          </div>

          <h1>
            Building Strong Teams for
            <span> Engineering & Industry</span>
          </h1>

          <p>
            We provide workforce support for engineering, manufacturing,
            automation, operations, quality, supply chain, and specialist
            technical functions. We help businesses connect with skilled
            professionals who can contribute to their operational and
            technical goals.
          </p>

          <div className="em-buttons">

            <a href="/contact" className="em-primary-btn">
              Find Talent
            </a>

            <a href="/services" className="em-secondary-btn">
              Explore Services
            </a>

          </div>

        </div>

        {/* HERO VISUAL */}

        <div className="em-hero-visual">

          <div className="em-orbit">

            <div className="em-center">
              <span>
                ENGINEERING
                <br />
                & INDUSTRY
              </span>
            </div>

          </div>

          <div className="em-floating-card em-card-top">
            <strong>Engineering</strong>
            Technical Talent
          </div>

          <div className="em-floating-card em-card-right">
            <strong>Automation</strong>
            Smart Operations
          </div>

          <div className="em-floating-card em-card-bottom">
            <strong>Manufacturing</strong>
            Workforce Solutions
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="em-intro">

        <div className="em-intro-grid">

          <div className="em-intro-text em-animate">

            <span className="em-section-label">
              INDUSTRY EXPERTISE
            </span>

            <h2>
              Talent for the Industrial
              <span> Workforce of Tomorrow</span>
            </h2>

            <p>
              Engineering and manufacturing businesses need people who
              understand technology, processes, safety, quality, and
              operational efficiency. PeakLnk helps organizations build
              teams across the complete industrial workforce ecosystem.
            </p>

            <p>
              From engineering and automation to supply chain and technical
              support, we connect businesses with professionals who can help
              improve productivity, reliability, and business performance.
            </p>

          </div>

          <div
            className="em-stat-box em-animate"
            style={{ "--delay": "0.15s" }}
          >
            <strong>6+</strong>
            <span>
              Specialized Industry
              <br />
              Talent Areas
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="em-capabilities">

        <div className="em-section-heading em-animate">

          <span>OUR CAPABILITIES</span>

          <h2>
            Supporting Every Part of
            the Industrial Workforce
          </h2>

          <p>
            From engineering and production to automation and technical
            support, we help organizations build teams across critical
            business functions.
          </p>

        </div>

        <div className="em-capability-grid">

          {capabilities.map((item, index) => (

            <div
              className="em-capability-card em-animate"
              key={item.title}
              style={{
                "--delay": `${index * 0.08}s`,
              }}
            >

              <div className="em-capability-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          TALENT AREAS
      ===================================================== */}

      <section className="em-talent">

        <div className="em-section-heading em-animate">

          <span>TALENT AREAS</span>

          <h2>
            The Professionals
            Businesses Need
          </h2>

          <p>
            We support hiring across technical, engineering, operational,
            and specialized industrial functions.
          </p>

        </div>

        <div className="em-talent-grid">

          {talentAreas.map((area, index) => (

            <div
              className="em-talent-card em-animate"
              key={area.title}
              style={{
                "--delay": `${index * 0.08}s`,
              }}
            >

              <h3>{area.title}</h3>

              <ul>
                {area.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          HIRING TYPES
      ===================================================== */}

      <section className="em-hiring">

        <div className="em-section-heading em-animate">

          <span>HIRING SOLUTIONS</span>

          <h2>
            Workforce Solutions
            Built Around Your Needs
          </h2>

          <p>
            Whether you are expanding a production team, launching a new
            project, or looking for specialized technical talent, we provide
            flexible hiring support.
          </p>

        </div>

        <div className="em-hiring-grid">

          {hiringTypes.map((item, index) => (

            <div
              className="em-hiring-item em-animate"
              key={item.title}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >

              <span className="em-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="em-process">

        <div className="em-section-heading em-animate">

          <span>OUR PROCESS</span>

          <h2>
            From Requirement
            to Right Talent
          </h2>

          <p>
            Our structured approach helps organizations move from workforce
            requirements to qualified candidates efficiently.
          </p>

        </div>

        <div className="em-process-list">

          {process.map((item, index) => (

            <div
              className="em-process-item em-animate"
              key={item.title}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >

              <div className="em-process-number">
                {item.number}
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          WHY PEAKLK
      ===================================================== */}

      <section className="em-why">

        <div className="em-why-content">

          <div className="em-animate">

            <span className="em-section-label">
              WHY PEAKLNK
            </span>

            <h2>
              A Practical Approach to
              Industrial Talent
            </h2>

            <p>
              We combine recruitment expertise with an understanding of
              technical and operational workforce requirements to help
              businesses build dependable teams.
            </p>

          </div>

          <div className="em-reasons">

            {reasons.map((reason, index) => (

              <div
                className="em-reason em-animate"
                key={reason.title}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
              >

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="em-cta">

        <div className="em-cta-content em-animate">

          <span className="em-section-label">
            BUILD YOUR TEAM
          </span>

          <h2>
            Need Engineering or
            Manufacturing Talent?
          </h2>

          <p>
            Tell us about your workforce requirements and let us help you
            connect with professionals across engineering, manufacturing,
            automation, quality, operations, supply chain, and technical
            support.
          </p>

          <div className="em-cta-buttons">

            <a href="/contact" className="em-primary-btn">
              Talk to Our Team
            </a>

            <a href="/industries" className="em-secondary-btn">
              View All Industries
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default EngineeringManufacturing;