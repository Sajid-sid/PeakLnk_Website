import React from "react";
import "./Payroll.css";

const payrollFeatures = [
  {
    icon: "💰",
    title: "Salary Management",
    description:
      "Automate salary calculations, deductions, allowances, bonuses, and employee payouts with accuracy."
  },
  {
    icon: "📊",
    title: "Payroll Processing",
    description:
      "Simplify monthly payroll processing with automated calculations and streamlined workflows."
  },
  {
    icon: "🧾",
    title: "Tax & Compliance",
    description:
      "Manage payroll taxes, deductions, and compliance requirements with confidence."
  },
  {
    icon: "👥",
    title: "Employee Management",
    description:
      "Maintain employee payroll information, attendance, leave, compensation, and benefits in one place."
  },
  {
    icon: "📄",
    title: "Payslip Generation",
    description:
      "Generate professional and accurate payslips automatically for every payroll cycle."
  },
  {
    icon: "📈",
    title: "Payroll Reports",
    description:
      "Access detailed payroll reports and insights to make better business decisions."
  }
];

const payrollProcess = [
  {
    number: "01",
    title: "Employee Data",
    description:
      "Collect and manage employee information, attendance, leave, and compensation details."
  },
  {
    number: "02",
    title: "Payroll Calculation",
    description:
      "Automatically calculate salaries, deductions, taxes, bonuses, and other payroll components."
  },
  {
    number: "03",
    title: "Review & Approve",
    description:
      "Review payroll information and approve the payroll before processing payments."
  },
  {
    number: "04",
    title: "Payment & Reports",
    description:
      "Process employee payments and generate detailed payroll reports and payslips."
  }
];

const Payroll = () => {
  return (
    <div className="payroll-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="payroll-hero">
        <div className="payroll-container payroll-hero-grid">

          {/* LEFT CONTENT */}
          <div className="payroll-hero-content">

            <span className="payroll-label">
              PAYROLL SOLUTIONS
            </span>

            <h1>
              Simplify Payroll.
              <span> Empower Your Workforce.</span>
            </h1>

            <p>
              Streamline your payroll operations with secure, accurate,
              and automated payroll solutions designed to save time,
              reduce errors, and improve employee satisfaction.
            </p>

            <div className="payroll-buttons">

              <button className="payroll-primary-btn">
                Get Started →
              </button>

              <button className="payroll-secondary-btn">
                Explore Features
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="payroll-hero-image">
            <div className="hero-dashboard">

              <div className="dashboard-top">
                <span>PAYROLL DASHBOARD</span>
                <strong>2026</strong>
              </div>

              <div className="dashboard-amount">
                <small>Total Payroll</small>
                <h3>₹24,85,600</h3>
              </div>

              <div className="dashboard-stats">

                <div>
                  <span>Employees</span>
                  <strong>248</strong>
                </div>

                <div>
                  <span>Processed</span>
                  <strong>98%</strong>
                </div>

                <div>
                  <span>Accuracy</span>
                  <strong>100%</strong>
                </div>

              </div>

              <div className="dashboard-chart">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          INTRO - CONTENT ONLY
      ===================================================== */}

      <section className="payroll-intro">

        <div className="payroll-container payroll-intro-content">

          <span className="section-label">
            SMART PAYROLL MANAGEMENT
          </span>

          <h2>
            Everything You Need to
            <span> Manage Payroll</span>
          </h2>

          <p>
            Our payroll solutions help businesses automate complex
            payroll processes while maintaining accuracy, security,
            and compliance. From employee onboarding to salary
            processing and reporting, manage your complete payroll
            lifecycle from one platform.
          </p>

        </div>

      </section>


      {/* =====================================================
          FEATURES
      ===================================================== */}

      <section className="payroll-features">

        <div className="payroll-container">

          <div className="payroll-section-header">

            <span className="section-label">
              POWERFUL FEATURES
            </span>

            <h2>
              Payroll Built for
              <span> Modern Businesses</span>
            </h2>

            <p>
              Powerful payroll features that make managing your
              workforce easier, faster, and more efficient.
            </p>

          </div>


          <div className="payroll-feature-grid">

            {payrollFeatures.map((feature, index) => (

              <div
                className="payroll-feature-card"
                key={index}
              >

                <div className="payroll-feature-icon">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

                <button className="feature-link">
                  Learn More →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS - LEFT IMAGE / RIGHT CONTENT
      ===================================================== */}

      <section className="payroll-benefits">

        <div className="payroll-container">

          <div className="payroll-benefits-grid">

            {/* LEFT IMAGE */}
            <div className="payroll-benefits-image">

              <div className="payroll-benefits-overlay">

                <span>
                  SMART PAYROLL
                </span>

                <h3>
                  Work Smarter.
                  <br />
                  Pay Better.
                </h3>

                <p>
                  Complete payroll management
                  for modern businesses.
                </p>

              </div>

            </div>


            {/* RIGHT CONTENT */}
            <div className="payroll-benefits-content">

              <span className="section-label">
                WHY CHOOSE OUR PAYROLL SOLUTION
              </span>

              <h2>
                Make Payroll
                <span> Simple & Reliable</span>
              </h2>

              <p>
                Reduce manual work, improve payroll accuracy,
                and give your employees a better payroll experience.
              </p>


              <div className="benefit-list">

                <div className="payroll-benefit">

                  <span>✓</span>

                  <div>
                    <h3>
                      Accurate Calculations
                    </h3>

                    <p>
                      Reduce payroll errors with automated
                      salary calculations.
                    </p>
                  </div>

                </div>


                <div className="payroll-benefit">

                  <span>✓</span>

                  <div>
                    <h3>
                      Secure Data
                    </h3>

                    <p>
                      Keep sensitive employee and payroll
                      information protected.
                    </p>
                  </div>

                </div>


                <div className="payroll-benefit">

                  <span>✓</span>

                  <div>
                    <h3>
                      Save Time
                    </h3>

                    <p>
                      Automate repetitive payroll activities
                      and reduce administrative workload.
                    </p>
                  </div>

                </div>


                <div className="payroll-benefit">

                  <span>✓</span>

                  <div>
                    <h3>
                      Scalable Solution
                    </h3>

                    <p>
                      Easily manage payroll as your
                      organization grows.
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="payroll-process">

        <div className="payroll-container">

          <div className="payroll-section-header">

            <span className="section-label">
              HOW IT WORKS
            </span>

            <h2>
              Simple Payroll
              <span> Process</span>
            </h2>

            <p>
              A streamlined workflow designed to make payroll
              processing simple and efficient.
            </p>

          </div>


          <div className="payroll-process-grid">

            {payrollProcess.map((step, index) => (

              <div
                className="payroll-process-card"
                key={index}
              >

                <div className="process-number">
                  {step.number}
                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA - BACKGROUND IMAGE + CONTENT
      ===================================================== */}

      <section className="payroll-cta">

        <div className="payroll-cta-overlay"></div>

        <div className="payroll-container">

          <div className="payroll-cta-content">

            <span className="payroll-label">
              READY TO GET STARTED?
            </span>

            <h2>
              Transform Your Payroll
              <span> Operations</span>
            </h2>

            <p>
              Build a faster, smarter, and more reliable payroll
              experience for your business and employees.
            </p>

            <button className="payroll-primary-btn">
              Talk to Our Team →
            </button>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Payroll;