import React, { useState } from "react";
import "./Careers.css";

const jobs = [
    {
        id: 1,
        title: "Full Stack Developer",
        company: "PeakLink Client",
        location: "United States",
        type: "Contract",
        category: "Software Development",
        experience: "3+ Years",
    },
    {
        id: 2,
        title: "Cloud Engineer",
        company: "PeakLink Client",
        location: "United States",
        type: "Full Time",
        category: "Cloud & DevOps",
        experience: "4+ Years",
    },
    {
        id: 3,
        title: "Business Analyst",
        company: "PeakLink Client",
        location: "United States",
        type: "Contract",
        category: "Business & Consulting",
        experience: "3+ Years",
    },
];

const careerAreas = [
    "Software Development",
    "Cloud & DevOps",
    "Data & Analytics",
    "Project Management",
    "Business Analysis",
    "Technology Consulting",
];

function Careers() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("");
    const [isChatOpen, setIsChatOpen] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const filteredJobs = jobs.filter((job) => {
        const searchText = search.toLowerCase();

        const searchMatch =
            job.title.toLowerCase().includes(searchText) ||
            job.category.toLowerCase().includes(searchText);

        const locationMatch =
            location === "" || job.location === location;

        const typeMatch =
            type === "" || job.type === type;

        return searchMatch && locationMatch && typeMatch;
    });

    const handleSupportChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const selectSupportSubject = (subject) => {
        setFormData({
            ...formData,
            subject,
        });
    };

    const handleSupportSubmit = (e) => {
        e.preventDefault();

        /*
          Replace this email with the actual confirmed
          PeakLink support/recruitment email address.
        */
        const companyEmail = "support@peaklinktechnologies.com";

        const mailSubject = encodeURIComponent(
            formData.subject || "Career Support Enquiry"
        );

        const mailBody = encodeURIComponent(
            `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
        );

        window.location.href =
            `mailto:${companyEmail}?subject=${mailSubject}&body=${mailBody}`;
    };

    return (
        <div className="careers-page">

            {/* =========================
          HERO
========================= */}
            <section className="careers-hero">
                <div className="careers-hero-overlay"></div>

                <div className="careers-hero-content">
                    <span className="hero-label">
                        CAREERS & OPPORTUNITIES
                    </span>

                    <h1>
                        Build Your Next
                        <span> Career Move.</span>
                    </h1>

                    <p>
                        At PeakLink Technologies, we connect talented professionals
                        with career opportunities that match their skills, experience
                        and aspirations.
                    </p>

                    <div className="hero-buttons">
                        <a
                            href="#open-positions"
                            className="primary-btn"
                        >
                            View Open Positions
                        </a>

                        <a
                            href="#submit-resume"
                            className="secondary-btn"
                        >
                            Submit Your Resume
                        </a>
                    </div>
                </div>
            </section>

            {/* =========================
    RECRUITMENT PROCESS
========================= */}
            <section className="recruitment-process">

                <div className="section-container">

                    <div className="section-heading process-heading">

                        <span className="section-label">
                            OUR RECRUITMENT PROCESS
                        </span>

                        <h2>
                            From Application
                            <span> to Opportunity</span>
                        </h2>

                        <p>
                            Our structured recruitment process helps connect talented
                            professionals with the right opportunities.
                        </p>

                    </div>

                    <div className="process-grid">

                        <div className="process-step">
                            <div className="process-number">01</div>

                            <h3>Apply</h3>

                            <p>
                                Explore relevant opportunities and submit your application.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="process-number">02</div>

                            <h3>Screening</h3>

                            <p>
                                Our recruitment team reviews your skills and experience
                                against the role requirements.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="process-number">03</div>

                            <h3>Interview</h3>

                            <p>
                                Qualified candidates are connected with the relevant
                                client and interview stages are coordinated.
                            </p>
                        </div>

                        <div className="process-step">
                            <div className="process-number">04</div>

                            <h3>Opportunity</h3>

                            <p>
                                We support the selection, offer and joining process.
                            </p>
                        </div>

                    </div>

                </div>

            </section>

            {/* =========================
    INTRO
========================= */}
            <section className="career-intro">
                <div className="section-container">

                    <div className="intro-top">

                        {/* LEFT */}
                        <div className="intro-heading">
                            <span className="section-label">
                                YOUR NEXT OPPORTUNITY
                            </span>

                            <h2>
                                Connecting Talent
                                <br />
                                With <span>Opportunity</span>
                            </h2>
                        </div>

                        {/* RIGHT */}
                        <div className="intro-description">

                            <div className="intro-line"></div>

                            <p className="intro-main-text">
                                Whether you are an experienced technology professional
                                or an emerging talent looking for your next opportunity,
                                our recruitment team can help you discover relevant roles.
                            </p>

                            <p>
                                We work with organizations across technology and business
                                functions to connect skilled professionals with meaningful
                                career opportunities.
                            </p>

                        </div>

                    </div>


                    {/* HIGHLIGHTS */}
                    <div className="intro-highlights">

                        <div className="intro-highlight">
                            <div className="highlight-number">01</div>

                            <div>
                                <h3>Relevant Opportunities</h3>
                                <p>
                                    Discover roles aligned with your skills,
                                    experience and career goals.
                                </p>
                            </div>
                        </div>


                        <div className="intro-highlight">
                            <div className="highlight-number">02</div>

                            <div>
                                <h3>Expert Guidance</h3>
                                <p>
                                    Get support from recruitment specialists
                                    throughout your career journey.
                                </p>
                            </div>
                        </div>


                        <div className="intro-highlight">
                            <div className="highlight-number">03</div>

                            <div>
                                <h3>Career Support</h3>
                                <p>
                                    From opportunity discovery to interview
                                    coordination, we help you move forward.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* =========================
          OPEN POSITIONS
========================= */}
            <section
                className="open-positions"
                id="open-positions"
            >
                <div className="section-container">

                    <div className="section-heading jobs-heading">
                        <span className="section-label">
                            OPEN POSITIONS
                        </span>

                        <h2>
                            Find Your Next
                            <span> Opportunity</span>
                        </h2>

                        <p>
                            Explore current opportunities across technology and
                            business functions.
                        </p>
                    </div>

                    <div className="job-filters">

                        <div className="search-box">
                            <span>⌕</span>

                            <input
                                type="text"
                                placeholder="Search jobs or skills..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                        <select
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">All Locations</option>
                            <option value="United States">
                                United States
                            </option>
                            <option value="United Kingdom">
                                United Kingdom
                            </option>
                            <option value="Canada">
                                Canada
                            </option>
                        </select>

                        <select
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        >
                            <option value="">All Job Types</option>
                            <option value="Full Time">
                                Full Time
                            </option>
                            <option value="Contract">
                                Contract
                            </option>
                        </select>

                    </div>

                    <div className="jobs-list">

                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => (
                                <div
                                    className="job-card"
                                    key={job.id}
                                >

                                    <div className="job-main">

                                        <div className="job-icon">
                                            💼
                                        </div>

                                        <div className="job-info">

                                            <h3>{job.title}</h3>

                                            <p className="job-company">
                                                {job.company}
                                            </p>

                                            <div className="job-meta">
                                                <span>
                                                    📍 {job.location}
                                                </span>

                                                <span>
                                                    💼 {job.type}
                                                </span>

                                                <span>
                                                    ⚡ {job.experience}
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="job-action">

                                        <span className="job-category">
                                            {job.category}
                                        </span>

                                        <button
                                            type="button"
                                            className="apply-btn"
                                            onClick={() => {
                                                setIsChatOpen(true);
                                                setFormData({
                                                    ...formData,
                                                    subject: `Application - ${job.title}`,
                                                });
                                            }}
                                        >
                                            Apply Now →
                                        </button>

                                    </div>

                                </div>
                            ))
                        ) : (
                            <div className="no-jobs">

                                <h3>
                                    No matching opportunities found
                                </h3>

                                <p>
                                    Try changing your search or filters, or submit your
                                    resume to stay connected with future opportunities.
                                </p>

                            </div>
                        )}

                    </div>

                </div>
            </section>

            {/* =========================
          CAREER AREAS
========================= */}
            <section className="career-areas">

                <div className="section-container areas-grid">

                    <div className="areas-content">

                        <span className="section-label">
                            CAREER AREAS
                        </span>

                        <h2>
                            Opportunities Across
                            <span> Technology & Business</span>
                        </h2>

                        <p>
                            Explore opportunities across a range of technology and
                            professional functions.
                        </p>

                        <a
                            href="#open-positions"
                            className="text-link"
                        >
                            Explore Open Positions →
                        </a>

                    </div>

                    <div className="areas-list">

                        {careerAreas.map((area, index) => (
                            <div
                                className="area-item"
                                key={area}
                            >
                                <span>
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <strong>
                                    {area}
                                </strong>

                                <b>→</b>
                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* =========================
          RESUME CTA
========================= */}
            <section
                className="resume-section"
                id="submit-resume"
            >
                <div className="resume-container">
                    <div>
                        <span className="section-label">
                            DON'T SEE THE RIGHT ROLE?
                        </span>

                        <h2>
                            Submit Your Resume
                        </h2>

                        <p>
                            Share your resume with PeakLink Technologies and our
                            recruitment team can connect with you when relevant
                            opportunities become available.
                        </p>

                    </div>

                    <button
                        type="button"
                        className="resume-btn"
                        onClick={() => {
                            setIsChatOpen(true);
                            setFormData({
                                ...formData,
                                subject: "Resume Submission Enquiry",
                            });
                        }}
                    >
                        Submit Your Resume →
                    </button>

                </div>
            </section>

            {/* =========================
          JOIN PEAKLINK
========================= */}
            <section className="join-peaklink">

                <div className="section-container">

                    <span className="section-label">
                        CAREERS AT PEAKLINK
                    </span>

                    <h2>
                        Join the Team Behind
                        <span> Meaningful Connections.</span>
                    </h2>

                    <p>
                        Join PeakLink Technologies and be part of a team focused on
                        connecting people, technology and opportunity.
                    </p>

                    <p>
                        We look for professionals who are passionate about recruitment,
                        technology, client relationships, business development and
                        operational excellence.
                    </p>

                    {/* <button
            type="button"
            className="join-btn"
            onClick={() => {
              setIsChatOpen(true);
              setFormData({
                ...formData,
                subject: "PeakLink Careers Enquiry",
              });
            }}
          >
            View PeakLink Careers →
          </button> */}

                </div>
            </section>

            {/* =========================
          CHAT SUPPORT
========================= */}
            <div className="chat-support-wrapper">

                {isChatOpen && (
                    <div className="chat-support-box">

                        <div className="chat-header">

                            <div>
                                <h3>
                                    Chat with Us
                                </h3>

                                <span>
                                    PeakLink Support
                                </span>
                            </div>

                            <button
                                type="button"
                                className="chat-close"
                                onClick={() => setIsChatOpen(false)}
                                aria-label="Close support"
                            >
                                ×
                            </button>

                        </div>

                        <div className="chat-body">

                            <div className="support-message">

                                <div className="support-avatar">
                                    P
                                </div>

                                <div className="message-content">

                                    <strong>
                                        PeakLink Support
                                    </strong>

                                    <p>
                                        Hi! How can we help you today?
                                    </p>

                                </div>

                            </div>

                            <div className="support-options">

                                <button
                                    type="button"
                                    onClick={() =>
                                        selectSupportSubject(
                                            "Job Opportunity Enquiry"
                                        )
                                    }
                                >
                                    💼 Job Opportunity
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        selectSupportSubject(
                                            "Resume Submission Enquiry"
                                        )
                                    }
                                >
                                    📄 Submit Resume
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        selectSupportSubject(
                                            "Recruitment Support"
                                        )
                                    }
                                >
                                    ❓ Recruitment Support
                                </button>

                                <button
                                    type="button"
                                    onClick={() =>
                                        selectSupportSubject(
                                            "Employer / Hiring Enquiry"
                                        )
                                    }
                                >
                                    🏢 Employer Support
                                </button>

                            </div>

                            <form
                                className="support-form"
                                onSubmit={handleSupportSubmit}
                            >

                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleSupportChange}
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={formData.email}
                                    onChange={handleSupportChange}
                                    required
                                />

                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleSupportChange}
                                    required
                                />

                                <textarea
                                    name="message"
                                    placeholder="How can we help?"
                                    value={formData.message}
                                    onChange={handleSupportChange}
                                    rows="4"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="send-support-btn"
                                >
                                    Send Message →
                                </button>

                            </form>

                            <p className="support-note">
                                Our team will review your message and get back to you.
                            </p>

                        </div>
                    </div>
                )}

                <button
                    type="button"
                    className={`chat-floating-btn ${isChatOpen ? "active" : ""
                        }`}
                    onClick={() => setIsChatOpen(!isChatOpen)}
                    aria-label="Chat with PeakLink Support"
                >

                    {isChatOpen ? (
                        <span className="close-icon">
                            ×
                        </span>
                    ) : (
                        <>
                            <span className="chat-icon">
                                💬
                            </span>

                            <span>
                                Chat with Us
                            </span>
                        </>
                    )}

                </button>

            </div>

        </div>
    );
}

export default Careers;