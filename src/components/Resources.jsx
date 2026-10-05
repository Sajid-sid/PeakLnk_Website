
import React from "react";
import "./Resources.css";

const resources = [
  {
    icon: "📚",
    title: "Industry Insights",
    description:
      "Explore the latest industry trends, technology updates, and business insights to stay ahead of the competition.",
    button: "Explore Insights",
  },
  {
    icon: "📖",
    title: "Guides & Tutorials",
    description:
      "Access practical guides and tutorials covering technology, business processes, recruitment, and digital transformation.",
    button: "View Guides",
  },
  {
    icon: "💡",
    title: "Case Studies",
    description:
      "Discover how businesses have solved real-world challenges and achieved measurable results with our solutions.",
    button: "Read Case Studies",
  },
  {
    icon: "📊",
    title: "Reports & Research",
    description:
      "Get access to useful reports, research, market analysis, and data-driven insights for better decision making.",
    button: "View Reports",
  },
  {
    icon: "🎥",
    title: "Webinars",
    description:
      "Join expert-led webinars and learn about emerging technologies, business strategies, and industry best practices.",
    button: "Watch Webinars",
  },
  {
    icon: "📝",
    title: "Blogs & Articles",
    description:
      "Read our latest articles covering technology, staffing, payroll, software development, and business growth.",
    button: "Read Our Blog",
  },
];

const resourceCategories = [
  {
    number: "01",
    title: "Technology",
    description:
      "Stay updated with emerging technologies, cloud solutions, development practices, and digital transformation.",
  },
  {
    number: "02",
    title: "Business",
    description:
      "Discover strategies and insights that help organizations improve efficiency and achieve sustainable growth.",
  },
  {
    number: "03",
    title: "Workforce",
    description:
      "Learn about staffing, recruitment, payroll, employee management, and modern workforce solutions.",
  },
];

const Resources = () => {
  return (
    <div className="resources-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="resource-new-hero">

        <div className="resource-hero-grid-bg"></div>

        <div className="resources-container">

          <div className="resource-hero-layout">

            <div className="resource-hero-left">

              <div className="resource-mini-label">
                <span></span>
                RESOURCE CENTER
              </div>

              <h1>
                Ideas that
                <strong> move business </strong>
                forward.
              </h1>

              <p>
                Discover expert knowledge, practical strategies,
                technology insights and industry research designed
                to help your organization make better decisions.
              </p>

              <div className="resource-hero-actions">

                <button className="resource-main-btn">
                  Explore Resources
                  <span>↗</span>
                </button>

                <button className="resource-outline-btn">
                  Discover More
                </button>

              </div>

            </div>


            <div className="resource-hero-right">

              <div className="hero-orbit orbit-one"></div>
              <div className="hero-orbit orbit-two"></div>

              <div className="resource-floating-card main-stat">

                <small>RESOURCE LIBRARY</small>

                <strong>120+</strong>

                <span>Expert resources</span>

              </div>

              <div className="resource-floating-card small-stat">

                <span className="stat-icon">✦</span>

                <div>
                  <strong>98%</strong>
                  <small>Useful Insights</small>
                </div>

              </div>

              <div className="resource-hero-circle">

                <div className="circle-content">

                  <span>KNOWLEDGE</span>

                  <strong>01</strong>

                  <p>
                    Learn.
                    <br />
                    Apply.
                    <br />
                    Grow.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          QUICK STATS
      ===================================================== */}

      <section className="resource-stats">

        <div className="resources-container">

          <div className="resource-stats-grid">

            <div className="resource-stat-item">
              <strong>120+</strong>
              <span>Resources Published</span>
            </div>

            <div className="resource-stat-item">
              <strong>35+</strong>
              <span>Industry Topics</span>
            </div>

            <div className="resource-stat-item">
              <strong>20K+</strong>
              <span>Monthly Readers</span>
            </div>

            <div className="resource-stat-item">
              <strong>15+</strong>
              <span>Expert Contributors</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="resource-introduction">

        <div className="resources-container">

          <div className="resource-intro-grid">

            <div>

              <span className="resource-overline">
                KNOWLEDGE HUB
              </span>

              <h2>
                Knowledge is the
                <span> new advantage.</span>
              </h2>

            </div>

            <div>

              <p>
                Business is changing faster than ever. Our resource
                hub gives you access to useful knowledge that can help
                you understand trends, solve problems and identify
                new opportunities.
              </p>

              <button className="text-arrow-btn">
                Explore Knowledge Hub →
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESOURCE CARDS
      ===================================================== */}

      <section className="resource-discover">

        <div className="resources-container">

          <div className="resource-heading-row">

            <div>

              <span className="resource-overline">
                DISCOVER
              </span>

              <h2>
                Explore our
                <span> knowledge.</span>
              </h2>

            </div>

            <p>
              From industry reports to practical guides,
              find resources built around real business challenges.
            </p>

          </div>


          <div className="new-resource-grid">

            {resources.map((resource, index) => (

              <article
                className={`new-resource-card card-${index + 1}`}
                key={index}
              >

                <div className="new-resource-top">

                  <div className="new-resource-icon">
                    {resource.icon}
                  </div>

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <div className="new-resource-content">

                  <h3>
                    {resource.title}
                  </h3>

                  <p>
                    {resource.description}
                  </p>

                  <button>
                    {resource.button}
                    <span>↗</span>
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CATEGORIES
      ===================================================== */}

      <section className="resource-topic-section">

        <div className="resources-container">

          <div className="topic-heading">

            <span className="resource-overline">
              BROWSE TOPICS
            </span>

            <h2>
              Find your area
              <span> of interest.</span>
            </h2>

          </div>


          <div className="topic-list">

            {resourceCategories.map((category, index) => (

              <div
                className="topic-item"
                key={index}
              >

                <span className="topic-number">
                  {category.number}
                </span>

                <div className="topic-main">

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                </div>

                <button>
                  ↗
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FEATURED RESOURCE
      ===================================================== */}

      <section className="resource-feature-section">

        <div className="resources-container">

          <div className="resource-feature-box">

            <div className="feature-content">

              <span className="resource-overline">
                FEATURED INSIGHT
              </span>

              <h2>
                The future belongs
                <span> to adaptable businesses.</span>
              </h2>

              <p>
                Explore practical strategies for technology adoption,
                workforce transformation and building resilient
                organizations in a rapidly changing world.
              </p>

              <button className="resource-main-btn">
                Read Featured Insight
                <span>↗</span>
              </button>

            </div>


            <div className="feature-visual">

              <div className="feature-grid-lines"></div>

              <div className="feature-number">
                2026
              </div>

              <div className="feature-badge">
                INSIGHT
              </div>

              <div className="feature-ring"></div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="resource-final-cta">

        <div className="cta-glow"></div>

        <div className="resources-container">

          <div className="resource-cta-content">

            <span className="resource-mini-label">
              STAY AHEAD
            </span>

            <h2>
              Keep learning.
              <span> Keep moving forward.</span>
            </h2>

            <p>
              Explore our latest resources and discover ideas
              that can help your business grow.
            </p>

            <div className="cta-actions">

              <button className="resource-main-btn">
                Explore Resources
                <span>↗</span>
              </button>

              <button className="resource-outline-btn">
                Contact Our Team
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Resources;
