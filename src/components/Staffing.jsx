import React from "react";
import "./Staffing.css";

const Staffing = () => {
  return (
    <div className="staffing-page">

      {/* ================= HERO ================= */}
      <section className="staffing-hero">
        <div className="staffing-hero-overlay"></div>

        <div className="staffing-hero-content">
          <h1>Staffing Services</h1>
          <p>
            Connecting businesses with the right talent to build stronger,
            more productive teams.
          </p>

          <a href="#staffing-services" className="staffing-hero-btn">
            Explore Staffing Services
          </a>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="staffing-intro">
        <div className="staffing-container staffing-intro-grid">

          <div className="staffing-intro-content">
            <span className="staffing-small-title">
              STAFFING SOLUTIONS
            </span>

            <h2>
              The Right People.
              <br />
              The Right Opportunities.
            </h2>

            <p>
              Finding the right people for your organization can be
              challenging. Our staffing services help businesses identify,
              attract, and hire talented professionals who match their
              business requirements.
            </p>

            <p>
              From temporary staffing to permanent recruitment, we provide
              flexible workforce solutions designed to support your business
              goals and help you build high-performing teams.
            </p>

            <a href="#contact" className="staffing-primary-btn">
              Get Started
            </a>
          </div>

          <div className="staffing-intro-card">
            <div className="staffing-card-icon">👥</div>
            <h3>Talent That Makes a Difference</h3>
            <p>
              We connect skilled professionals with organizations looking
              for the right talent, experience, and expertise.
            </p>

            <div className="staffing-stat-row">
              <div>
                <strong>01</strong>
                <span>Understand</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Connect</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Grow</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="staffing-services" className="staffing-services">
        <div className="staffing-container">

          <div className="staffing-section-heading">
            <span>WHAT WE OFFER</span>
            <h2>Our Staffing Services</h2>
            <p>
              Flexible staffing solutions designed to meet the changing needs
              of modern businesses.
            </p>
          </div>

          <div className="staffing-service-grid">

            <div className="staffing-service-card">
              <div className="service-number">01</div>
              <div className="service-icon">💼</div>
              <h3>Permanent Staffing</h3>
              <p>
                Find qualified professionals for long-term positions and
                build a strong, reliable workforce.
              </p>
              <a href="#contact">Learn More →</a>
            </div>

            <div className="staffing-service-card">
              <div className="service-number">02</div>
              <div className="service-icon">⏱️</div>
              <h3>Temporary Staffing</h3>
              <p>
                Flexible workforce solutions that allow your organization
                to respond quickly to changing business demands.
              </p>
              <a href="#contact">Learn More →</a>
            </div>

            <div className="staffing-service-card">
              <div className="service-number">03</div>
              <div className="service-icon">🔄</div>
              <h3>Contract Staffing</h3>
              <p>
                Access experienced professionals for specific projects,
                assignments, or defined periods of time.
              </p>
              <a href="#contact">Learn More →</a>
            </div>

            <div className="staffing-service-card">
              <div className="service-number">04</div>
              <div className="service-icon">🎯</div>
              <h3>Executive Search</h3>
              <p>
                Identify experienced leadership and specialized professionals
                who can make a meaningful impact on your organization.
              </p>
              <a href="#contact">Learn More →</a>
            </div>

            <div className="staffing-service-card">
              <div className="service-number">05</div>
              <div className="service-icon">🧑‍💻</div>
              <h3>IT Staffing</h3>
              <p>
                Connect with skilled technology professionals across a wide
                range of technical roles and specializations.
              </p>
              <a href="#contact">Learn More →</a>
            </div>

            <div className="staffing-service-card">
              <div className="service-number">06</div>
              <div className="service-icon">📈</div>
              <h3>Workforce Solutions</h3>
              <p>
                Customized workforce strategies that help businesses improve
                efficiency, productivity, and scalability.
              </p>
              <a href="#contact">Learn More →</a>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="staffing-process">
        <div className="staffing-container">

          <div className="staffing-section-heading">
            <span>OUR PROCESS</span>
            <h2>How Our Staffing Process Works</h2>
            <p>
              A simple and transparent approach to finding the right talent.
            </p>
          </div>

          <div className="staffing-process-grid">

            <div className="process-item">
              <div className="process-circle">01</div>
              <h3>Understand Your Needs</h3>
              <p>
                We learn about your business, role requirements, culture,
                and workforce goals.
              </p>
            </div>

            <div className="process-line"></div>

            <div className="process-item">
              <div className="process-circle">02</div>
              <h3>Find the Right Talent</h3>
              <p>
                Our recruitment process identifies candidates whose skills
                and experience match your requirements.
              </p>
            </div>

            <div className="process-line"></div>

            <div className="process-item">
              <div className="process-circle">03</div>
              <h3>Connect & Hire</h3>
              <p>
                We help facilitate the hiring process so you can confidently
                select the right candidate.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="staffing-why">
        <div className="staffing-container staffing-why-grid">

          <div className="staffing-why-left">
            <span className="staffing-small-title">
              WHY CHOOSE US
            </span>

            <h2>
              Staffing Solutions
              <br />
              Built Around Your Business
            </h2>

            <p>
              Every organization has different workforce requirements.
              Our approach focuses on understanding your needs and delivering
              staffing solutions that fit your organization.
            </p>
          </div>

          <div className="staffing-benefits">

            <div className="benefit">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Qualified Candidates</h3>
                <p>
                  Connect with professionals whose skills match your
                  requirements.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Flexible Solutions</h3>
                <p>
                  Choose staffing options based on your workforce needs.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Industry Expertise</h3>
                <p>
                  Recruitment support across multiple business and
                  technology roles.
                </p>
              </div>
            </div>

            <div className="benefit">
              <div className="benefit-icon">✓</div>
              <div>
                <h3>Dedicated Support</h3>
                <p>
                  Professional support throughout the staffing process.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section id="contact" className="staffing-cta">
        <div className="staffing-cta-overlay"></div>

        <div className="staffing-cta-content">
          <span>READY TO BUILD YOUR TEAM?</span>

          <h2>
            Let's Find the Right
            <br />
            Talent for Your Business
          </h2>

          <p>
            Tell us what you are looking for and let us help you build
            a stronger workforce.
          </p>

          <a href="mailto:info@example.com" className="staffing-cta-btn">
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
};

export default Staffing;