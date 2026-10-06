import React, { useEffect } from "react";
import "./Telecom.css";

const capabilities = [
  {
    icon: "📡",
    title: "Network Engineering",
    description:
      "We help telecom organizations build teams responsible for designing, implementing, monitoring, and maintaining reliable network infrastructure.",
    points: [
      "Network Engineering",
      "Network Planning",
      "Routing & Switching",
      "Wireless Networks",
      "Network Monitoring",
      "Network Operations",
    ],
  },
  {
    icon: "📶",
    title: "Telecom Operations",
    description:
      "Support telecom operations with professionals who understand service delivery, network performance, field operations, and operational processes.",
    points: [
      "Telecom Operations",
      "NOC Operations",
      "Service Management",
      "Field Operations",
      "Network Monitoring",
      "Operations Support",
    ],
  },
  {
    icon: "💻",
    title: "Software Development",
    description:
      "Build technology teams that develop applications, platforms, tools, and digital solutions for connected businesses.",
    points: [
      "Frontend Development",
      "Backend Development",
      "Full Stack Development",
      "API Development",
      "Application Development",
      "Software Testing",
    ],
  },
  {
    icon: "☁",
    title: "Cloud & Infrastructure",
    description:
      "We connect businesses with technology professionals who support cloud platforms, infrastructure, systems, and modern IT environments.",
    points: [
      "Cloud Engineering",
      "Cloud Operations",
      "Infrastructure Support",
      "DevOps",
      "Systems Administration",
      "Cloud Migration",
    ],
  },
  {
    icon: "🔧",
    title: "Technical Support",
    description:
      "Build responsive technical support teams for telecom platforms, networks, applications, devices, and infrastructure.",
    points: [
      "Technical Support",
      "Network Support",
      "Application Support",
      "Infrastructure Support",
      "Service Desk",
      "Field Technical Support",
    ],
  },
  {
    icon: "🔐",
    title: "Cybersecurity",
    description:
      "Strengthen your technology environment with professionals focused on security operations, monitoring, risk, and infrastructure protection.",
    points: [
      "Security Operations",
      "SOC Analysts",
      "Network Security",
      "Cloud Security",
      "Security Monitoring",
      "Risk & Compliance",
    ],
  },
];

const talentAreas = [
  {
    title: "Network",
    roles: [
      "Network Engineers",
      "Network Administrators",
      "Network Architects",
      "NOC Engineers",
      "Network Analysts",
    ],
  },
  {
    title: "Telecom",
    roles: [
      "Telecom Engineers",
      "Telecom Analysts",
      "RF Engineers",
      "Transmission Engineers",
      "Telecom Operations Specialists",
    ],
  },
  {
    title: "Software",
    roles: [
      "Frontend Developers",
      "Backend Developers",
      "Full Stack Developers",
      "Software Engineers",
      "QA Engineers",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    roles: [
      "Cloud Engineers",
      "DevOps Engineers",
      "System Administrators",
      "Infrastructure Engineers",
      "Cloud Support Engineers",
    ],
  },
  {
    title: "Technical Support",
    roles: [
      "Technical Support Engineers",
      "Application Support Engineers",
      "Service Desk Analysts",
      "Field Support Engineers",
      "IT Support Specialists",
    ],
  },
  {
    title: "Cybersecurity",
    roles: [
      "SOC Analysts",
      "Security Engineers",
      "Cybersecurity Analysts",
      "Cloud Security Engineers",
      "Security Operations Specialists",
    ],
  },
];

const hiringTypes = [
  {
    number: "01",
    title: "Entry-Level Hiring",
    description:
      "Build your technology workforce with graduates and early-career professionals across software, networks, infrastructure, and support.",
  },
  {
    number: "02",
    title: "Mid-Level Hiring",
    description:
      "Find experienced professionals who can contribute to network operations, software development, cloud infrastructure, and telecom functions.",
  },
  {
    number: "03",
    title: "Specialized Technology Hiring",
    description:
      "Access specialized talent across cybersecurity, cloud, networking, telecom engineering, DevOps, and other technical domains.",
  },
  {
    number: "04",
    title: "Contract & Staffing",
    description:
      "Flexible staffing solutions for telecom projects, infrastructure requirements, technical support, and changing workforce demands.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your technology environment, workforce requirements, business goals, and role expectations.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify relevant professionals through targeted sourcing and technology-focused talent networks.",
  },
  {
    number: "03",
    title: "Evaluate",
    description:
      "Candidates are evaluated based on technical capabilities, experience, communication, and role alignment.",
  },
  {
    number: "04",
    title: "Connect",
    description:
      "We coordinate interviews and help connect qualified professionals with the right opportunities.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We remain engaged throughout the recruitment process to help create a smooth hiring experience.",
  },
];

const reasons = [
  {
    title: "Technology-Focused Talent",
    description:
      "We focus on identifying professionals with relevant technology, networking, infrastructure, software, and security skills.",
  },
  {
    title: "Telecom Understanding",
    description:
      "Our approach considers the operational and technical requirements unique to telecom and connected technology businesses.",
  },
  {
    title: "Specialized Hiring",
    description:
      "We support organizations looking for talent across both common technology roles and specialized technical functions.",
  },
  {
    title: "Flexible Workforce Support",
    description:
      "Our hiring solutions can support permanent positions, project requirements, contract staffing, and technical teams.",
  },
  {
    title: "Quality-Focused Selection",
    description:
      "We consider technical skills, experience, communication, and organizational fit when identifying suitable candidates.",
  },
  {
    title: "Long-Term Partnerships",
    description:
      "We aim to build long-term relationships with telecom organizations and technology professionals.",
  },
];

function Telecommunications() {
  useEffect(() => {
    const elements = document.querySelectorAll(".tel-animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tel-visible");
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
    <main className="telecommunications-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="tel-hero">

        <div className="tel-hero-content">

          <div className="tel-label">
            Telecommunications
          </div>

          <h1>
            Connecting Talent to the
            <span> Future of Telecom</span>
          </h1>

          <p>
            We support telecom organizations and connected technology
            businesses with specialized technology and workforce solutions.
            From network engineering and telecom operations to software,
            cloud, technical support, and cybersecurity, we help businesses
            build teams for a connected world.
          </p>

          <div className="tel-buttons">

            <a href="/contact" className="tel-primary-btn">
              Find Telecom Talent
            </a>

            <a href="/services" className="tel-secondary-btn">
              Explore Services
            </a>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="tel-hero-visual">

          <div className="tel-network">

            <div className="tel-network-ring ring-one"></div>

            <div className="tel-network-ring ring-two"></div>

            <div className="tel-network-ring ring-three"></div>

            <div className="tel-network-center">
              <span>
                CONNECTED
                <br />
                WORLD
              </span>
            </div>

            <div className="tel-node node-one"></div>
            <div className="tel-node node-two"></div>
            <div className="tel-node node-three"></div>
            <div className="tel-node node-four"></div>

            <div className="tel-line line-one"></div>
            <div className="tel-line line-two"></div>
            <div className="tel-line line-three"></div>
            <div className="tel-line line-four"></div>

          </div>


          <div className="tel-floating-card tel-card-top">
            <strong>Networks</strong>
            Connected Infrastructure
          </div>

          <div className="tel-floating-card tel-card-right">
            <strong>Cloud</strong>
            Digital Infrastructure
          </div>

          <div className="tel-floating-card tel-card-bottom">
            <strong>Security</strong>
            Protected Systems
          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="tel-intro">

        <div className="tel-intro-grid">

          <div className="tel-intro-text tel-animate">

            <span className="tel-section-label">
              TELECOM INDUSTRY EXPERTISE
            </span>

            <h2>
              Building Teams for a
              <span> Connected Future</span>
            </h2>

            <p>
              Telecommunications is evolving rapidly through cloud
              infrastructure, software-defined networks, connected devices,
              automation, cybersecurity, and digital services.
            </p>

            <p>
              PeakLink helps telecom and connected technology organizations
              access professionals across network engineering, operations,
              software development, cloud infrastructure, technical support,
              and cybersecurity.
            </p>

          </div>


          <div
            className="tel-stat-box tel-animate"
            style={{ "--delay": "0.15s" }}
          >
            <strong>6+</strong>

            <span>
              Specialized Telecom &
              <br />
              Technology Areas
            </span>
          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="tel-capabilities">

        <div className="tel-section-heading tel-animate">

          <span>OUR CAPABILITIES</span>

          <h2>
            Technology & Workforce
            Solutions for Telecom
          </h2>

          <p>
            We support critical technology and workforce functions across
            telecommunications and connected technology organizations.
          </p>

        </div>


        <div className="tel-capability-grid">

          {capabilities.map((item, index) => (

            <div
              className="tel-capability-card tel-animate"
              key={item.title}
              style={{
                "--delay": `${index * 0.08}s`,
              }}
            >

              <div className="tel-capability-icon">
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

      <section className="tel-talent">

        <div className="tel-section-heading tel-animate">

          <span>TALENT AREAS</span>

          <h2>
            Technology Professionals
            for Connected Businesses
          </h2>

          <p>
            We support hiring across networking, telecom, software,
            infrastructure, technical support, and cybersecurity functions.
          </p>

        </div>


        <div className="tel-talent-grid">

          {talentAreas.map((area, index) => (

            <div
              className="tel-talent-card tel-animate"
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

      <section className="tel-hiring">

        <div className="tel-section-heading tel-animate">

          <span>HIRING SOLUTIONS</span>

          <h2>
            Flexible Workforce Solutions
            for Telecom Organizations
          </h2>

          <p>
            Whether you are expanding your network operations, building a
            software team, or strengthening technical support, we provide
            flexible workforce solutions around your requirements.
          </p>

        </div>


        <div className="tel-hiring-grid">

          {hiringTypes.map((item, index) => (

            <div
              className="tel-hiring-item tel-animate"
              key={item.title}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >

              <span className="tel-number">
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

      <section className="tel-process">

        <div className="tel-section-heading tel-animate">

          <span>OUR PROCESS</span>

          <h2>
            From Technology Requirement
            to the Right Talent
          </h2>

          <p>
            Our structured recruitment approach helps telecom organizations
            identify, evaluate, and connect with relevant professionals.
          </p>

        </div>


        <div className="tel-process-list">

          {process.map((item, index) => (

            <div
              className="tel-process-item tel-animate"
              key={item.title}
              style={{
                "--delay": `${index * 0.1}s`,
              }}
            >

              <div className="tel-process-number">
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
          WHY PEAKLINK
      ===================================================== */}

      <section className="tel-why">

        <div className="tel-why-content">

          <div className="tel-animate">

            <span className="tel-section-label">
              WHY PEAKLINK
            </span>

            <h2>
              Technology Talent for a
              Connected World
            </h2>

            <p>
              We combine recruitment expertise with an understanding of
              technology and telecom workforce requirements to help
              organizations build capable teams.
            </p>

          </div>


          <div className="tel-reasons">

            {reasons.map((reason, index) => (

              <div
                className="tel-reason tel-animate"
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

      <section className="tel-cta">

        <div className="tel-cta-content tel-animate">

          <span className="tel-section-label">
            CONNECT WITH US
          </span>

          <h2>
            Need Telecom or
            Technology Talent?
          </h2>

          <p>
            Tell us about your workforce requirements and let us help you
            connect with professionals across networking, telecom operations,
            software development, cloud infrastructure, technical support,
            and cybersecurity.
          </p>

          <div className="tel-cta-buttons">

            <a href="/contact" className="tel-primary-btn">
              Talk to Our Team
            </a>

            <a href="/industries" className="tel-secondary-btn">
              View All Industries
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Telecommunications;