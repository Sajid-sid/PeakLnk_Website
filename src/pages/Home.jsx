import { useEffect, useState } from "react";

import h1 from "../assets/Home/h1.png";
import h2 from "../assets/Home/h2.png";

import "../styles/pages/Home.css";


function Home() {

    const images = [h1, h2];

    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    useEffect(() => {

        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(timer);
        };

    }, []);


    return (

        <main className="home">

            {/* ================= HERO ================= */}

            <section className="hero-section">

                <div className="slider">

                    <div className="slider-wrapper">

                        <img
                            src={images[current]}
                            alt="PeakLnk Technologies"
                            className="slider-image"
                        />

                        {/* <div className="hero-overlay"></div> */}

                        <div className="hero-content">

                            <p className="hero-small-title">
                                PEAKLNK TECHNOLOGIES
                            </p>

                            <h1>
                                CONNECTING TALENT WITH OPPORTUNITY.
                                <span>
                                    POWERING BUSINESS WITH TECHNOLOGY.
                                </span>
                            </h1>

                            <p className="hero-description">
                                PeakLnk Technologies delivers recruitment,
                                staffing and technology solutions that help
                                organizations find the right people,
                                strengthen their teams and move business
                                forward.
                            </p>

                            <div className="hero-buttons">

                                <a
                                    href="#solutions"
                                    className="btn btn-primary"
                                >
                                    Explore Our Solutions
                                </a>

                                <a
                                    href="#contact"
                                    className="btn btn-secondary"
                                >
                                    Talk to Our Team
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= QUICK SERVICES ================= */}

            <section className="quick-services">

                <div className="quick-service">
                    <span>01</span>
                    <h3>IT Recruitment</h3>
                    <p>
                        Connecting organizations with skilled
                        technology professionals.
                    </p>
                </div>

                <div className="quick-service">
                    <span>02</span>
                    <h3>Permanent Hiring</h3>
                    <p>
                        Helping businesses find the right
                        long-term talent.
                    </p>
                </div>

                <div className="quick-service">
                    <span>03</span>
                    <h3>Contract Staffing</h3>
                    <p>
                        Flexible workforce solutions for
                        project-based requirements.
                    </p>
                </div>

                <div className="quick-service">
                    <span>04</span>
                    <h3>Technology Solutions</h3>
                    <p>
                        Technology expertise to support
                        digital business initiatives.
                    </p>
                </div>

            </section>


            {/* ================= WHO WE ARE ================= */}

            <section className="who-section">

                <div className="section-container who-grid">

                    <div className="who-image">

                        <div className="image-card">

                            <div className="image-card-content">

                                <span>PEOPLE</span>

                                <strong>
                                    TECHNOLOGY
                                </strong>

                                <small>
                                    BUSINESS GROWTH
                                </small>

                            </div>

                        </div>

                    </div>


                    <div className="who-content">

                        <p className="section-label">
                            WHO WE ARE
                        </p>

                        <h2>
                            People and technology,
                            <span> working together.</span>
                        </h2>

                        <p>
                            PeakLnk Technologies Pvt Ltd is a people
                            and technology solutions company focused on
                            helping organizations solve their workforce
                            and technology needs.
                        </p>

                        <p>
                            We connect businesses with skilled
                            professionals and practical technology
                            expertise across key business and technical
                            functions.
                        </p>

                        <p>
                            Our approach combines industry understanding,
                            talent networks and technology capabilities
                            to deliver solutions aligned with each
                            client's goals.
                        </p>

                        <a
                            href="#solutions"
                            className="text-link"
                        >
                            Discover What We Do →
                        </a>

                    </div>

                </div>

            </section>


            {/* ================= WHAT WE DO ================= */}

            <section
                className="solutions-section"
                id="solutions"
            >

                <div className="section-container">

                    <div className="section-heading">

                        <p className="section-label">
                            WHAT WE DO
                        </p>

                        <h2>
                            Solutions built around
                            <span> your business needs.</span>
                        </h2>

                        <p>
                            From finding the right talent to providing
                            technology expertise, we help organizations
                            build stronger teams and execute their
                            business initiatives.
                        </p>

                    </div>


                    <div className="solutions-grid">

                        <div className="solution-card">

                            <span className="solution-number">
                                01
                            </span>

                            <h3>
                                IT Recruitment & Staffing
                            </h3>

                            <p>
                                Connecting organizations with qualified
                                technology professionals across key
                                technical functions.
                            </p>

                            <a href="#contact">
                                Learn More →
                            </a>

                        </div>


                        <div className="solution-card">

                            <span className="solution-number">
                                02
                            </span>

                            <h3>
                                Permanent Recruitment
                            </h3>

                            <p>
                                Helping businesses identify, evaluate
                                and hire the right long-term talent.
                            </p>

                            <a href="#contact">
                                Learn More →
                            </a>

                        </div>


                        <div className="solution-card">

                            <span className="solution-number">
                                03
                            </span>

                            <h3>
                                Contract Staffing
                            </h3>

                            <p>
                                Flexible workforce solutions designed
                                for projects, changing workloads and
                                short-term requirements.
                            </p>

                            <a href="#contact">
                                Learn More →
                            </a>

                        </div>


                        <div className="solution-card">

                            <span className="solution-number">
                                04
                            </span>

                            <h3>
                                Technology Solutions
                            </h3>

                            <p>
                                Supporting organizations with practical
                                technology expertise and digital
                                capabilities.
                            </p>

                            <a href="#contact">
                                Learn More →
                            </a>

                        </div>


                        <div className="solution-card">

                            <span className="solution-number">
                                05
                            </span>

                            <h3>
                                Talent Consulting
                            </h3>

                            <p>
                                Helping businesses plan, strengthen and
                                develop their workforce for future needs.
                            </p>

                            <a href="#contact">
                                Learn More →
                            </a>

                        </div>


                        <div className="solution-card">

                            <span className="solution-number">
                                06
                            </span>

                            <h3>
                                Project & Resource Support
                            </h3>

                            <p>
                                Providing skilled resources for technology
                                and business initiatives.
                            </p>

                            <a href="#contact">
                                Learn More →
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= WHY PEAKLNK ================= */}

            <section className="why-section">

                <div className="section-container">

                    <div className="why-heading">

                        <p className="section-label">
                            WHY PEAKLNK
                        </p>

                        <h2>
                            Built around people.
                            <span> Driven by results.</span>
                        </h2>

                    </div>


                    <div className="why-grid">

                        <div className="why-card">
                            <div className="why-icon">01</div>
                            <h3>
                                Industry-Focused Expertise
                            </h3>
                            <p>
                                Understanding business requirements
                                and the talent needed to meet them.
                            </p>
                        </div>


                        <div className="why-card">
                            <div className="why-icon">02</div>
                            <h3>
                                Skilled Technology Professionals
                            </h3>
                            <p>
                                Access to professionals across
                                important technology functions.
                            </p>
                        </div>


                        <div className="why-card">
                            <div className="why-icon">03</div>
                            <h3>
                                Flexible Staffing Models
                            </h3>
                            <p>
                                Permanent, contract and project-based
                                workforce solutions.
                            </p>
                        </div>


                        <div className="why-card">
                            <div className="why-icon">04</div>
                            <h3>
                                Quality-Driven Screening
                            </h3>
                            <p>
                                Focused candidate evaluation aligned
                                with client requirements.
                            </p>
                        </div>


                        <div className="why-card">
                            <div className="why-icon">05</div>
                            <h3>
                                Client-Focused Delivery
                            </h3>
                            <p>
                                Solutions designed around the specific
                                needs of every organization.
                            </p>
                        </div>


                        <div className="why-card">
                            <div className="why-icon">06</div>
                            <h3>
                                Responsive Support
                            </h3>
                            <p>
                                Clear communication and continuous
                                support throughout the engagement.
                            </p>
                        </div>


                        <div className="why-card">
                            <div className="why-icon">07</div>
                            <h3>
                                Long-Term Relationships
                            </h3>
                            <p>
                                Building lasting partnerships rather
                                than one-time engagements.
                            </p>
                        </div>


                        <div className="why-card why-card-highlight">

                            <h3>
                                Your growth is our focus.
                            </h3>

                            <p>
                                Let's find the people and technology
                                that can move your business forward.
                            </p>

                            <a href="#contact">
                                Talk to Our Team →
                            </a>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= HOW WE HELP ================= */}

            <section className="process-section">

                <div className="section-container">

                    <div className="process-heading">

                        <p className="section-label">
                            HOW WE HELP
                        </p>

                        <h2>
                            From business need to
                            <span> business growth.</span>
                        </h2>

                    </div>


                    <div className="process-grid">

                        <div className="process-item">

                            <span>01</span>

                            <h3>
                                Understand
                            </h3>

                            <p>
                                We understand your business,
                                workforce and technology requirements.
                            </p>

                        </div>


                        <div className="process-item">

                            <span>02</span>

                            <h3>
                                Connect
                            </h3>

                            <p>
                                We connect you with relevant talent,
                                expertise and technology capabilities.
                            </p>

                        </div>


                        <div className="process-item">

                            <span>03</span>

                            <h3>
                                Deliver
                            </h3>

                            <p>
                                We support successful execution with
                                responsive and quality-driven delivery.
                            </p>

                        </div>


                        <div className="process-item">

                            <span>04</span>

                            <h3>
                                Grow
                            </h3>

                            <p>
                                We build long-term relationships that
                                support your organization's growth.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================= CTA ================= */}

            <section
                className="home-cta"
                id="contact"
            >

                <div className="cta-content">

                    <p className="section-label">
                        LET'S WORK TOGETHER
                    </p>

                    <h2>
                        Ready to build your
                        <span> next great team?</span>
                    </h2>

                    <p>
                        Tell us what your organization needs.
                        Our team is ready to help you find the
                        right people and technology solutions.
                    </p>

                    <a
                        href="mailto:info@peaklnktechnologies.com"
                        className="btn btn-primary"
                    >
                        Talk to Our Team
                    </a>

                </div>

            </section>


        </main>

    );
}


export default Home;