import React, { useEffect } from "react";
import "./Ecommerce.css";

const capabilities = [
  {
    icon: "EC",
    title: "E-commerce Technology",
    text: "Build and support scalable digital commerce platforms, online stores, payment integrations, APIs, and commerce applications.",
    items: [
      "E-commerce Platforms",
      "Shopify & Magento",
      "WooCommerce",
      "Payment Gateway Integration",
      "API Development",
      "Cloud Technologies"
    ]
  },
  {
    icon: "WD",
    title: "Web & Mobile Development",
    text: "Connect with developers who build responsive websites, mobile applications, and digital customer experiences.",
    items: [
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Full-Stack Development"
    ]
  },
  {
    icon: "DA",
    title: "Data & Analytics",
    text: "Help organizations turn customer, sales, product, and operational data into meaningful business insights.",
    items: [
      "Data Engineering",
      "Data Analytics",
      "SQL & Python",
      "Snowflake",
      "Databricks",
      "Power BI"
    ]
  },
  {
    icon: "DM",
    title: "Digital Marketing",
    text: "Support customer acquisition, online visibility, engagement, and revenue growth through digital marketing talent.",
    items: [
      "SEO",
      "SEM",
      "Performance Marketing",
      "Content Marketing",
      "Social Media",
      "Marketing Analytics"
    ]
  },
  {
    icon: "CS",
    title: "Customer Support",
    text: "Build responsive customer service teams that improve customer satisfaction and support business operations.",
    items: [
      "Customer Support",
      "Technical Support",
      "Chat Support",
      "Customer Success",
      "Helpdesk",
      "CRM Operations"
    ]
  },
  {
    icon: "SC",
    title: "Supply Chain & Operations",
    text: "Support inventory, logistics, fulfillment, procurement, and operational functions with capable professionals.",
    items: [
      "Supply Chain",
      "Inventory Management",
      "Procurement",
      "Warehouse Operations",
      "Logistics",
      "Order Management"
    ]
  }
];


const talentAreas = [
  {
    title: "Technology",
    roles: [
      "Software Developers",
      "Full-Stack Developers",
      "Frontend Developers",
      "Backend Developers",
      "Mobile Developers",
      "Cloud Engineers",
      "DevOps Engineers",
      "QA Engineers"
    ]
  },
  {
    title: "Data",
    roles: [
      "Data Engineers",
      "Data Analysts",
      "BI Developers",
      "Data Scientists",
      "ETL Developers",
      "Database Developers",
      "Power BI Developers"
    ]
  },
  {
    title: "Product",
    roles: [
      "Product Managers",
      "Product Owners",
      "Business Analysts",
      "Product Analysts",
      "UX/UI Designers"
    ]
  },
  {
    title: "Marketing",
    roles: [
      "Digital Marketing Specialists",
      "SEO Specialists",
      "Performance Marketers",
      "Content Specialists",
      "Social Media Managers",
      "Marketing Analysts"
    ]
  },
  {
    title: "Operations",
    roles: [
      "Operations Managers",
      "Supply Chain Analysts",
      "Inventory Specialists",
      "Logistics Coordinators",
      "Procurement Specialists",
      "Fulfillment Specialists"
    ]
  },
  {
    title: "Customer Experience",
    roles: [
      "Customer Support Executives",
      "Customer Success Specialists",
      "Technical Support Engineers",
      "CRM Specialists",
      "Service Operations Professionals"
    ]
  }
];


const hiringTypes = [
  {
    number: "01",
    title: "Entry-Level Hiring",
    text: "Professionals starting their careers and developing practical industry skills."
  },
  {
    number: "02",
    title: "Mid-Level Hiring",
    text: "Experienced professionals who can independently contribute to business and technology teams."
  },
  {
    number: "03",
    title: "Specialized Technology Hiring",
    text: "Professionals with specialized expertise across cloud, data, software, analytics, DevOps, and enterprise technologies."
  },
  {
    number: "04",
    title: "Contract & Staffing",
    text: "Flexible workforce solutions for project-based requirements and changing resource needs."
  }
];


const process = [
  {
    number: "01",
    title: "Understand",
    text: "We understand your business model, technology environment, team structure, role requirements, and hiring objectives."
  },
  {
    number: "02",
    title: "Source",
    text: "We identify relevant professionals through talent networks, professional platforms, recruitment channels, and targeted sourcing."
  },
  {
    number: "03",
    title: "Evaluate",
    text: "Candidates are evaluated against the agreed technical, functional, experience, communication, and role requirements."
  },
  {
    number: "04",
    title: "Connect",
    text: "We coordinate communication between organizations and shortlisted professionals throughout the interview and selection process."
  },
  {
    number: "05",
    title: "Support",
    text: "We remain engaged to support coordination, communication, onboarding, and workforce requirements."
  }
];


const reasons = [
  {
    title: "Industry Understanding",
    text: "We understand that e-commerce businesses require a combination of technology, business, operations, and customer-focused talent."
  },
  {
    title: "Technology-Focused Talent",
    text: "Our technology recruitment capabilities help organizations identify professionals across software, cloud, data, analytics, and digital technologies."
  },
  {
    title: "Flexible Hiring Support",
    text: "We support different workforce requirements, from entry-level hiring to specialized and experienced professionals."
  },
  {
    title: "Responsive Engagement",
    text: "We focus on timely communication and structured coordination throughout the recruitment process."
  },
  {
    title: "Long-Term Relationships",
    text: "Our objective is to build lasting relationships with organizations and professionals rather than simply filling individual positions."
  }
];


function EcommerceRetail() {

  useEffect(() => {

    const elements = document.querySelectorAll(
      ".er-animate"
    );

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            entry.target.classList.add(
              "er-visible"
            );

            observer.unobserve(
              entry.target
            );
          }

        });

      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
      }
    );


    elements.forEach((element) => {
      observer.observe(element);
    });


    return () => {
      observer.disconnect();
    };

  }, []);


  return (

    <main className="ecommerce-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="er-hero">

        <div className="er-hero-content">

          <span className="er-label">
            E-COMMERCE & RETAIL
          </span>

          <h1>
            Building Teams for the
            <span> Future of Digital Commerce</span>
          </h1>

          <p>
            PeakLnk Technologies helps e-commerce and retail
            organizations build capable teams across technology,
            digital commerce, product, operations, analytics,
            marketing, customer experience, and supply chain.
          </p>

          <div className="er-buttons">

            <a
              href="#capabilities"
              className="er-primary-btn"
            >
              Explore Capabilities
            </a>

            <a
              href="#talent"
              className="er-secondary-btn"
            >
              Explore Talent
            </a>

          </div>

        </div>


        {/* HERO VISUAL */}

        <div className="er-hero-visual">

          <div className="er-orbit er-orbit-1"></div>

          <div className="er-orbit er-orbit-2"></div>

          <div className="er-commerce-center">

            <div className="er-cart-icon">
              🛒
            </div>

            <strong>
              E-COMMERCE
            </strong>

            <span>
              TECHNOLOGY • DATA • TALENT
            </span>

          </div>


          <div className="er-floating-card card-top">
            <strong>
              Technology
            </strong>
            <span>
              Development
            </span>
          </div>


          <div className="er-floating-card card-right">
            <strong>
              Data
            </strong>
            <span>
              Analytics
            </span>
          </div>


          <div className="er-floating-card card-bottom">
            <strong>
              Customer
            </strong>
            <span>
              Experience
            </span>
          </div>

        </div>

      </section>


      {/* =========================================
          INTRO
      ========================================= */}

      <section className="er-intro er-animate">

        <div className="er-section-heading">

          <span>
            THE DIGITAL COMMERCE ECOSYSTEM
          </span>

          <h2>
            Supporting the Complete
            <strong> E-commerce Ecosystem</strong>
          </h2>

        </div>


        <div className="er-intro-grid">

          <div>

            <p>
              Modern e-commerce businesses require more than
              an online store. They need technology, data,
              marketing, operations, logistics, and customer
              experience teams working together.
            </p>

            <p>
              PeakLnk helps organizations identify and
              connect with talent across the complete digital
              commerce ecosystem.
            </p>

          </div>


          <div className="er-stat-box">

            <strong>
              360°
            </strong>

            <span>
              E-commerce Talent
              <br />
              & Technology Support
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          CAPABILITIES
      ========================================= */}

      <section
        className="er-capabilities"
        id="capabilities"
      >

        <div className="er-section-heading center er-animate">

          <span>
            WHAT WE SUPPORT
          </span>

          <h2>
            E-commerce & Retail
            <strong> Capabilities</strong>
          </h2>

          <p>
            From technology and data to marketing and
            operations, we support the teams that power
            modern commerce.
          </p>

        </div>


        <div className="er-capability-grid">

          {capabilities.map(
            (item, index) => (

              <div
                className="er-capability-card er-animate"
                key={index}
                style={{
                  "--delay": `${index * 0.1}s`
                }}
              >

                <div className="er-capability-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>


                <div className="er-capability-list">

                  {item.items.map(
                    (point, pointIndex) => (

                      <span key={pointIndex}>
                        <b>✓</b>
                        {point}
                      </span>

                    )
                  )}

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =========================================
          TALENT AREAS
      ========================================= */}

      <section
        className="er-talent"
        id="talent"
      >

        <div className="er-section-heading center er-animate">

          <span>
            TALENT AREAS
          </span>

          <h2>
            Build the Right
            <strong> E-commerce Teams</strong>
          </h2>

          <p>
            We support organizations across technology,
            data, product, marketing, operations, and
            customer experience.
          </p>

        </div>


        <div className="er-talent-grid">

          {talentAreas.map(
            (area, index) => (

              <div
                className="er-talent-card er-animate"
                key={index}
                style={{
                  "--delay": `${index * 0.08}s`
                }}
              >

                <div className="er-talent-number">
                  0{index + 1}
                </div>

                <h3>
                  {area.title}
                </h3>

                <ul>

                  {area.roles.map(
                    (role, roleIndex) => (

                      <li key={roleIndex}>
                        {role}
                      </li>

                    )
                  )}

                </ul>

              </div>

            )
          )}

        </div>

      </section>


      {/* =========================================
          HIRING TYPES
      ========================================= */}

      <section className="er-hiring">

        <div className="er-section-heading er-animate">

          <span>
            WORKFORCE SOLUTIONS
          </span>

          <h2>
            Hiring Support That
            <strong> Fits Your Business</strong>
          </h2>

          <p>
            Whether you are building a new team or expanding
            an existing department, we can support different
            workforce requirements.
          </p>

        </div>


        <div className="er-hiring-grid">

          {hiringTypes.map(
            (item, index) => (

              <div
                className="er-hiring-item er-animate"
                key={index}
                style={{
                  "--delay": `${index * 0.12}s`
                }}
              >

                <span>
                  {item.number}
                </span>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =========================================
          PROCESS
      ========================================= */}

      <section className="er-process">

        <div className="er-section-heading center er-animate">

          <span>
            HOW WE WORK
          </span>

          <h2>
            Our E-commerce
            <strong> Recruitment Process</strong>
          </h2>

          <p>
            A structured approach designed to make hiring
            simpler, faster, and more effective.
          </p>

        </div>


        <div className="er-process-list">

          {process.map(
            (item, index) => (

              <div
                className="er-process-item er-animate"
                key={index}
                style={{
                  "--delay": `${index * 0.1}s`
                }}
              >

                <div className="er-process-number">
                  {item.number}
                </div>

                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      {/* =========================================
          WHY PEAKLNK
      ========================================= */}

      <section className="er-why">

        <div className="er-why-content">

          <div className="er-section-heading er-animate">

            <span>
              WHY PEAKLNK
            </span>

            <h2>
              A Talent Partner for
              <strong> Digital Commerce</strong>
            </h2>

            <p>
              E-commerce organizations need people who
              understand technology, customers, data, and
              business operations. We help connect those
              capabilities.
            </p>

          </div>


          <div className="er-reasons">

            {reasons.map(
              (reason, index) => (

                <div
                  className="er-reason er-animate"
                  key={index}
                  style={{
                    "--delay": `${index * 0.1}s`
                  }}
                >

                  <div className="er-reason-check">
                    ✓
                  </div>

                  <div>

                    <h3>
                      {reason.title}
                    </h3>

                    <p>
                      {reason.text}
                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="er-cta er-animate">

        <div>

          <span>
            BUILD YOUR E-COMMERCE TEAM
          </span>

          <h2>
            The right people can
            <br />
            accelerate your growth.
          </h2>

          <p>
            Whether you are launching a digital commerce
            platform, expanding your technology team,
            improving customer experience, or strengthening
            your supply chain, PeakLnk can help connect you
            with the right talent.
          </p>

        </div>


        <div className="er-cta-buttons">

          <a
            href="/contact"
            className="er-primary-btn"
          >
            Talk to PeakLnk →
          </a>

          <a
            href="/services"
            className="er-outline-btn"
          >
            Explore Our Services
          </a>

        </div>

      </section>

    </main>
  );
}

export default EcommerceRetail;