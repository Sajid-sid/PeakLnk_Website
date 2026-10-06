import React, { useEffect, useRef } from "react";
import "../styles/Process.css";

const recruitmentSteps = [
  {
    number: "01",
    title: "Requirement Understanding",
    description:
      "We understand the role, skills, experience, location, compensation range and business context.",
  },
  {
    number: "02",
    title: "Talent Sourcing",
    description:
      "We source relevant candidates through our recruitment network and targeted channels.",
  },
  {
    number: "03",
    title: "Screening & Evaluation",
    description:
      "Candidates are screened against the agreed technical and professional requirements.",
  },
  {
    number: "04",
    title: "Shortlisting",
    description:
      "Qualified profiles are presented to the client for review.",
  },
  {
    number: "05",
    title: "Interview Coordination",
    description:
      "We coordinate communication and interview stages between candidates and clients.",
  },
  {
    number: "06",
    title: "Selection & Offer Support",
    description:
      "We support the selection process and offer-stage communication.",
  },
  {
    number: "07",
    title: "Joining & Follow-up",
    description:
      "We stay connected through the joining stage and post-placement follow-up.",
  },
];

const Process = () => {
  const processRef = useRef(null);

  useEffect(() => {
    const processItems =
      processRef.current.querySelectorAll(".process-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("process-show");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    processItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      processItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className="process-page">

      

      <section className="process-hero">
        <div className="process-hero-container">

          <span className="process-label">
            HOW WE WORK
          </span>

          <h1>
            Our Recruitment Process
          </h1>

          <p>
            A structured approach to connecting organizations with
            the right talent through every stage of the recruitment journey.
          </p>

        </div>
      </section>


     

      <section className="recruitment-process">

     <div className="process-wrapper" ref={processRef}>

          {recruitmentSteps.map((step, index) => (

            <div
              className="process-item"
              key={step.number}
            >

              {/* Number */}
              <div className="process-number-area">

                <div className="process-number">
                  {step.number}
                </div>

               
              </div>


              {/* Content */}
              <div className="process-content">

                <h2>
                  {step.title}
                </h2>

                <p>
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
};

export default Process;