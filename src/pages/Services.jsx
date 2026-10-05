
import React from "react";
import "./Services.css";

const services = [
  {
    icon: "💻",
    title: "Product Development",
    description:
      "Build scalable, secure, and high-quality digital products designed to solve real business problems.",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Create modern, intuitive, and user-friendly interfaces that deliver an excellent customer experience.",
  },
  {
    icon: "☁️",
    title: "Cloud Solutions",
    description:
      "Build and manage secure, scalable, and reliable cloud applications using modern cloud technologies.",
  },
  {
    icon: "⚙️",
    title: "Product Engineering",
    description:
      "Improve product architecture, performance, scalability, reliability, and overall technical quality.",
  },
  {
    icon: "🧪",
    title: "Quality Assurance",
    description:
      "Ensure your product is reliable and secure through functional, automation, performance, and security testing.",
  },
  {
    icon: "🔧",
    title: "Product Support",
    description:
      "Keep your products running smoothly with continuous monitoring, maintenance, upgrades, and technical support.",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    description:
      "Develop responsive and high-performance mobile applications for Android and iOS platforms.",
  },
  {
    icon: "🔗",
    title: "API & Integration",
    description:
      "Connect your products with third-party platforms, APIs, payment systems, and enterprise applications.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Transform product data into meaningful insights that help businesses make better decisions.",
  },
];

const Services = () => {
  return (
    <div className="services-page">

      {/* ================= HERO ================= */}
      <section className="services-hero">
        <div className="services-container">
          <span className="hero-label">WHAT WE DO</span>

          <h1>
            Building Products That
            <span> Drive Business Growth</span>
          </h1>

          <p>
            From product strategy and design to development, deployment,
            and support, we provide end-to-end technology services that
            help businesses build better digital products.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Started →
            </button>

            <button className="secondary-btn">
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services">
        <div className="services-container">

          <div className="services-header">
            <span className="section-label">OUR EXPERTISE</span>

            <h2>Services We Offer</h2>

            <p>
              We combine technology, design, and engineering expertise
              to create products that are scalable, reliable, and
              ready for the future.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <button className="service-btn">
                  Learn More →
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="why-section">
        <div className="services-container">

          <div className="why-content">

            <div className="why-text">
              <span className="section-label">
                WHY CHOOSE US
              </span>

              <h2>
                Technology That Helps
                Your Product Grow
              </h2>

              <p>
                We don't just build software. We work closely with
                businesses to understand their goals, users, and
                challenges and turn those ideas into successful
                digital products.
              </p>
            </div>

            <div className="benefits">

              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Scalable Solutions</h3>
                  <p>
                    Solutions designed to grow with your business.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Modern Technology</h3>
                  <p>
                    We use modern tools and technologies to build
                    reliable products.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Customer Focused</h3>
                  <p>
                    Every product is designed around real customer
                    needs and experiences.
                  </p>
                </div>
              </div>

              <div className="benefit">
                <span>✓</span>
                <div>
                  <h3>Long-Term Support</h3>
                  <p>
                    We provide continuous support and improvements
                    after product launch.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">
        <div className="services-container">

          <div className="services-header">
            <span className="section-label">OUR PROCESS</span>

            <h2>How We Build Products</h2>

            <p>
              A simple and transparent process that takes your idea
              from concept to a successful product.
            </p>
          </div>

          <div className="process-grid">

            <div className="process-card">
              <span>01</span>
              <h3>Discover</h3>
              <p>
                Understand your business goals, users, requirements,
                and product vision.
              </p>
            </div>

            <div className="process-card">
              <span>02</span>
              <h3>Design</h3>
              <p>
                Create product architecture, user flows, wireframes,
                and modern UI designs.
              </p>
            </div>

            <div className="process-card">
              <span>03</span>
              <h3>Develop</h3>
              <p>
                Build secure, scalable, and high-performance
                applications using modern technologies.
              </p>
            </div>

            <div className="process-card">
              <span>04</span>
              <h3>Launch & Grow</h3>
              <p>
                Deploy the product, monitor performance, and
                continuously improve it based on user feedback.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <div className="services-container">

          <div className="cta-content">
            <h2>Have a Product Idea?</h2>

            <p>
              Let's turn your idea into a powerful digital product
              that delivers real business value.
            </p>

            <button className="primary-btn">
              Start a Conversation →
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Services;

