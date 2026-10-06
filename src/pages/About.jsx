import React from "react";
import aboutBanner from "../assets/AboutUs.png";
import RecruitmentSteps from "../assets/Recuritmentsteps.png";
import "../pages/About.css";

const AboutUs = () => {
    const values = [
        {
            title: "Integrity",
            text: "We build relationships through honesty, transparency and professional responsibility."
        },
        {
            title: "Client Focus",
            text: "We understand each organization's requirements and align our solutions with business objectives."
        },
        {
            title: "Quality",
            text: "We focus on delivering relevant, capable and dependable talent for every requirement."
        },
        {
            title: "Speed & Responsiveness",
            text: "We respond quickly to changing hiring requirements while maintaining quality and consistency."
        },
        {
            title: "Collaboration",
            text: "We work closely with clients and professionals to create successful long-term engagements."
        },
        {
            title: "Continuous Learning",
            text: "We continuously improve our knowledge, processes and understanding of evolving technology needs."
        }
    ];

    const approach = [
        {
            number: "01",
            title: "Understand",
            text: "We understand the client's business, role, skills and technology requirements."
        },
        {
            number: "02",
            title: "Identify",
            text: "We use our talent network and sourcing capabilities to identify relevant professionals."
        },
        {
            number: "03",
            title: "Evaluate",
            text: "Candidates and resources are assessed against the agreed requirements and expectations."
        },
        {
            number: "04",
            title: "Connect",
            text: "We facilitate a structured engagement between the client and suitable talent."
        },
        {
            number: "05",
            title: "Support",
            text: "We remain engaged to support communication and delivery throughout the relationship."
        }
    ];

    const services = [
        "IT Recruitment & Staffing",
        "Permanent Recruitment",
        "Contract Staffing",
        "Technology Talent Solutions",
        "Executive & Specialist Hiring",
        "Workforce Consulting"
    ];

    const industries = [
        "Information Technology",
        "Healthcare",
        "Banking & Financial Services",
        "E-commerce & Retail",
        "Engineering & Manufacturing",
        "Telecommunications",
        "Professional Services",
        "Startups & Emerging Businesses"
    ];

    return (
        <div className="about-page">

            {/* =====================================================
                ABOUT US BANNER
            ===================================================== */}

            <section className="about-banner">
                <img
                    src={aboutBanner}
                    alt="About PeakLnk Technologies"
                    className="about-banner-image"
                />
            </section>


            {/* =====================================================
                WHO WE ARE / COMPANY INTRO
            ===================================================== */}

            <section className="about-intro">
                <div className="about-container">

                    <div className="about-intro-main">

                        {/* ================= LEFT VISUAL ================= */}

                        <div className="about-intro-visual">

                            <div className="visual-circle circle-one"></div>
                            <div className="visual-circle circle-two"></div>

                            <div className="visual-content">

                                <span className="visual-small-text">
                                    PEAKLNK TECHNOLOGIES
                                </span>

                                <h3>
                                    Talent.
                                    <br />
                                    Technology.
                                    <br />
                                    <span>Opportunity.</span>
                                </h3>

                                <div className="visual-line"></div>

                                <p>
                                    Building meaningful connections between
                                    organizations and professionals.
                                </p>

                            </div>

                        </div>


                        {/* ================= RIGHT CONTENT ================= */}

                        <div className="about-intro-content">

                            <span className="section-tag">
                                WHO WE ARE
                            </span>

                            <h2 className="intro-title">
                                Connecting the right
                                <span> people with the right opportunities.</span>
                            </h2>

                            <p className="intro-description">
                                <strong>
                                    PeakLnk Technologies Pvt Ltd is a recruitment,
                                    staffing and technology solutions company committed
                                    to helping organizations access the people and
                                    expertise they need to grow.
                                </strong>
                            </p>

                            <p>
                                We work with businesses to understand their requirements,
                                identify suitable talent and provide practical workforce
                                and technology solutions. Our goal is to make hiring and
                                technology engagement simpler, more responsive and more
                                aligned with business objectives.
                            </p>

                            <p>
                                We work with organizations across different industries
                                and support professionals throughout their career journey
                                by connecting the right people with the right opportunities.
                            </p>


                            {/* ================= RECRUITMENT PROCESS ================= */}

                            <div className="recruitment-process-image">

                                <img
                                    src={RecruitmentSteps}
                                    alt="PeakLnk Recruitment Process"
                                />

                            </div>


                            {/* ================= KEY POINTS ================= */}

                            <div className="about-key-points">

                                <div className="key-point">

                                    <div className="key-icon">
                                        01
                                    </div>

                                    <div>
                                        <h4>People First</h4>

                                        <p>
                                            Understanding people, roles and business
                                            requirements.
                                        </p>
                                    </div>

                                </div>


                                <div className="key-point">

                                    <div className="key-icon">
                                        02
                                    </div>

                                    <div>
                                        <h4>Technology Driven</h4>

                                        <p>
                                            Supporting modern technology and workforce
                                            requirements.
                                        </p>
                                    </div>

                                </div>


                                <div className="key-point">

                                    <div className="key-icon">
                                        03
                                    </div>

                                    <div>
                                        <h4>Long-Term Relationships</h4>

                                        <p>
                                            Creating reliable connections that deliver
                                            lasting value.
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                MISSION / VISION
            ===================================================== */}

            <section className="mission-section">

                <div className="about-container mission-grid">

                    <div className="mission-card">

                        <div className="card-icon">
                            01
                        </div>

                        <span className="section-tag">
                            OUR MISSION
                        </span>

                        <h2>
                            Connecting people with possibilities.
                        </h2>

                        <p>
                            To connect organizations with the right talent and
                            technology capabilities while creating meaningful
                            opportunities for professionals.
                        </p>

                    </div>


                    <div className="mission-card vision-card">

                        <div className="card-icon">
                            02
                        </div>

                        <span className="section-tag">
                            OUR VISION
                        </span>

                        <h2>
                            Building lasting business relationships.
                        </h2>

                        <p>
                            To become a trusted partner for organizations seeking
                            dependable talent, staffing and technology solutions
                            across India and global markets.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                VALUES
            ===================================================== */}

            <section className="values-section">

                <div className="about-container">

                    <div className="section-heading center-heading">

                        <span className="section-tag">
                            OUR VALUES
                        </span>

                        <h2>
                            Principles that guide
                            <span> everything we do</span>
                        </h2>

                        <p>
                            Our values shape the way we work with clients,
                            professionals and partners.
                        </p>

                    </div>


                    <div className="values-grid">

                        {values.map((value, index) => (
                            <div
                                className="value-card"
                                key={index}
                            >

                                <div className="value-number">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <h3>
                                    {value.title}
                                </h3>

                                <p>
                                    {value.text}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =====================================================
    OUR APPROACH
===================================================== */}

            <section
                className="approach-section"
                id="our-approach"
            >
                <div className="about-container">

                    {/* Heading */}

                    <div className="approach-header">

                        <div>
                            <span className="section-tag">
                                OUR APPROACH
                            </span>

                            <h2>
                                A simple and structured
                                <span> way of working</span>
                            </h2>
                        </div>

                        <p>
                            From understanding a requirement to supporting the
                            engagement, our approach is designed to keep the
                            recruitment and staffing process clear, responsive
                            and focused.
                        </p>

                    </div>


                    {/* Process */}

                    <div className="approach-process">

                        {approach.map((item, index) => (

                            <div
                                className="approach-step"
                                key={item.number}
                            >

                                {/* Number + connecting line */}

                                <div className="approach-step-top">

                                    <div className="approach-number">
                                        {item.number}
                                    </div>

                                    {index !== approach.length - 1 && (
                                        <div className="approach-connector"></div>
                                    )}

                                </div>


                                {/* Content */}

                                <div className="approach-card">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.text}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>
            </section>

            {/* =====================================================
                OUR EXPERTISE
            ===================================================== */}

            <section className="expertise-section">

                <div className="about-container">

                    <div className="section-heading center-heading">

                        <span className="section-tag">
                            OUR EXPERTISE
                        </span>

                        <h2>
                            Supporting businesses with
                            <span> talent and technology</span>
                        </h2>

                        <p>
                            Our solutions are designed to support organizations
                            at different stages of their workforce and technology
                            requirements.
                        </p>

                    </div>


                    <div className="expertise-grid">

                        {/* ================= SERVICES ================= */}

                        <div className="expertise-column">

                            <h3>
                                Services
                            </h3>

                            {services.map((service, index) => (
                                <div
                                    className="expertise-item"
                                    key={index}
                                >

                                    <span>
                                        ✓
                                    </span>

                                    <p>
                                        {service}
                                    </p>

                                </div>
                            ))}

                            <a
                                href="/services"
                                className="text-link"
                            >
                                Explore Our Services →
                            </a>

                        </div>


                        {/* ================= INDUSTRIES ================= */}

                        <div className="expertise-column">

                            <h3>
                                Industries
                            </h3>

                            {industries.map((industry, index) => (
                                <div
                                    className="expertise-item"
                                    key={index}
                                >

                                    <span>
                                        ✓
                                    </span>

                                    <p>
                                        {industry}
                                    </p>

                                </div>
                            ))}

                            <a
                                href="/industries"
                                className="text-link"
                            >
                                Explore Our Industries →
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ===================================================== */}

            <section className="about-cta">

                <div className="about-container">

                    <div className="cta-content">

                        <span className="section-tag">
                            LET'S CONNECT
                        </span>

                        <h2>
                            Looking for the right
                            <span> talent or opportunity?</span>
                        </h2>

                        <p>
                            Whether you are looking to build your team or
                            explore your next career opportunity, PeakLnk
                            Technologies is here to help.
                        </p>


                        <div className="cta-buttons">

                            <a
                                href="/contact"
                                className="primary-btn"
                            >
                                Talk to Our Team
                            </a>

                            <a
                                href="/careers"
                                className="outline-btn"
                            >
                                Explore Careers
                            </a>

                        </div>

                    </div>

                </div>

            </section>

        </div>
    );
};

export default AboutUs;