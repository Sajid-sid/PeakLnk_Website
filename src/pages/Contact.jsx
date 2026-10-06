import React, { useState } from "react";
import "../pages/Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirementType: "",
    message: ""
  });

  const contactCategories = [
    {
      number: "01",
      title: "I Want to Hire",
      text: "Looking for the right talent or staffing support for your organization?"
    },
    {
      number: "02",
      title: "I Am Looking for a Job",
      text: "Explore career opportunities and connect with the right organization."
    },
    {
      number: "03",
      title: "Technology Requirement",
      text: "Discuss your technology talent or workforce requirements with us."
    },
    {
      number: "04",
      title: "General Enquiry",
      text: "Have a question or want to know more about PeakLnk Technologies?"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    // Backend/API integration can be added here later.
  };

  return (
    <div className="contact-page">

      {/* =====================================================
          CONTACT BANNER
      ===================================================== */}

      <section className="contact-banner">
        <div className="contact-banner-overlay">
          <div className="contact-container">

            <span className="section-tag">
              CONTACT US
            </span>

            <h1>
              Let's connect and
              <span> explore possibilities.</span>
            </h1>

            <p>
              Whether you are looking to hire talent, explore staffing
              solutions, discuss a technology requirement or explore
              career opportunities, our team is ready to hear from you.
            </p>

          </div>
        </div>
      </section>


      {/* =====================================================
          CONTACT INTRO
      ===================================================== */}

      <section className="contact-intro">
        <div className="contact-container">

          <div className="contact-intro-heading">
            <span className="section-tag">
              HOW CAN WE HELP?
            </span>

            <h2>
              Tell us what
              <span> you need.</span>
            </h2>
          </div>

          <p>
            Choose the option that best describes your requirement.
            Our team will connect with you and understand how we can
            support your goals.
          </p>

        </div>
      </section>


      {/* =====================================================
          CONTACT CATEGORIES
      ===================================================== */}

      <section className="contact-categories">
        <div className="contact-container">

          <div className="contact-category-grid">

            {contactCategories.map((category) => (
              <div
                className="contact-category-card"
                key={category.number}
              >

                <span className="category-number">
                  {category.number}
                </span>

                <div className="category-arrow">
                  →
                </div>

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          CONTACT FORM + INFORMATION
      ===================================================== */}

      <section className="contact-form-section">
        <div className="contact-container">

          <div className="contact-form-layout">

            {/* FORM */}

            <div className="contact-form-wrapper">

              <div className="form-heading">

                <span className="section-tag">
                  SEND AN ENQUIRY
                </span>

                <h2>
                  Let's start a
                  <span> conversation.</span>
                </h2>

                <p>
                  Fill in the details below and our team will get
                  back to you as soon as possible.
                </p>

              </div>


              <form onSubmit={handleSubmit}>

                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="name">
                      Name <span>*</span>
                    </label>

                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="company">
                      Company
                    </label>

                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>

                </div>


                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span>*</span>
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>


                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                </div>


                <div className="form-group">

                  <label htmlFor="requirementType">
                    Requirement Type <span>*</span>
                  </label>

                  <select
                    id="requirementType"
                    name="requirementType"
                    value={formData.requirementType}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select requirement type
                    </option>

                    <option value="hire">
                      I Want to Hire
                    </option>

                    <option value="job">
                      I Am Looking for a Job
                    </option>

                    <option value="technology">
                      Technology Requirement
                    </option>

                    <option value="general">
                      General Enquiry
                    </option>

                  </select>

                </div>


                <div className="form-group">

                  <label htmlFor="message">
                    Message <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Submit Enquiry
                  <span>→</span>
                </button>

              </form>

            </div>


            {/* CONTACT INFORMATION */}

            <div className="contact-information">

              <div className="contact-info-inner">

                <span className="section-tag">
                  GET IN TOUCH
                </span>

                <h2>
                  We are here
                  <span> to help.</span>
                </h2>

                <p>
                  Whether you are a business looking for skilled
                  professionals or a candidate exploring your next
                  opportunity, our team is ready to connect with you.
                </p>


                <div className="contact-details">

                  <div className="contact-detail">

                    <div className="detail-icon">
                      @
                    </div>

                    <div>
                      <span>
                        EMAIL
                      </span>

                      <a href="mailto:info@peaklnktechnologies.com">
                        info@peaklnktechnologies.com
                      </a>
                    </div>

                  </div>


                  <div className="contact-detail">

                    <div className="detail-icon">
                      ☎
                    </div>

                    <div>
                      <span>
                        PHONE
                      </span>

                      <a href="tel:+910000000000">
                        +91 XXXXX XXXXX
                      </a>
                    </div>

                  </div>


                  <div className="contact-detail">

                    <div className="detail-icon">
                      ●
                    </div>

                    <div>
                      <span>
                        LOCATION
                      </span>

                      <p>
                        India
                      </p>
                    </div>

                  </div>

                </div>


                <div className="contact-info-bottom">

                  <span>
                    PEAKLNK TECHNOLOGIES PVT LTD
                  </span>

                  <p>
                    Connecting talent, technology and opportunity.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="contact-cta">

        <div className="contact-container">

          <div className="contact-cta-content">

            <span className="section-tag">
              HAVE A REQUIREMENT?
            </span>

            <h2>
              Let's build the
              <span> right connection.</span>
            </h2>

            <p>
              Share your requirement with our team and let's explore
              how PeakLnk Technologies can support your business or
              career goals.
            </p>

            <a
              href="#contact-form"
              className="contact-cta-btn"
            >
              Submit an Enquiry
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
};

export default ContactUs;