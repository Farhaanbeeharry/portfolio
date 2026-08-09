import { testimonials } from "../data/site.js";
import { Reveal } from "../components/Reveal.jsx";

const experience = [
  {
    period: "October 2024 – Present",
    title: "Mobile Engineer – Flutter",
    org: "XEFI Mauritius Center",
    body: (
      <>
        Worked on various mobile applications using Flutter, implementing state
        management with GetX, and leveraging tools like Shorebird, Firebase,
        Freezed, localisation, and Skeletonizer. Contributed to Flutter packages
        by adding new widgets and improving existing ones. The apps are available
        on the{" "}
        <a href="https://apps.apple.com/fr/developer/xefi-software/id1500721589?l=en-GB&see-all=i-phonei-pad-apps" target="_blank" rel="noopener noreferrer">App Store</a>{" "}
        and showcased on the{" "}
        <a href="https://www.xefi.com/en/solutions-software/" target="_blank" rel="noopener noreferrer">XEFI Software Solutions</a>{" "}
        website.
      </>
    ),
  },
  {
    period: "June – September 2024",
    title: "Fullstack Software Engineer (Freelance)",
    org: "French4 Dev",
    body: (
      <>
        Developed the mobile app in Flutter and the backend in Strapi for{" "}
        <a href="https://weartwice.com" target="_blank" rel="noopener noreferrer">Weartwice</a>{" "}
        in the UAE, a platform for buying and selling second-hand fashion.
        Integrated{" "}
        <a href="https://www.mamopay.com" target="_blank" rel="noopener noreferrer">MAMO Pay</a>{" "}
        for secure payments and{" "}
        <a href="https://aj-ex.com" target="_blank" rel="noopener noreferrer">Aj-Ex</a>{" "}
        for fast deliveries. Implemented state management, push notifications,
        and a real-time negotiation system to enhance user experience. Delivered
        a scalable solution that promotes sustainable fashion with fast, secure,
        and reliable operations.
      </>
    ),
  },
  {
    period: "February – May 2024",
    title: "Software Engineer (Freelance)",
    org: "DietSensor Ltd",
    body: (
      <>
        Lead the development of a Flutter module for a multi-platform web, iOS,
        and Android application, focusing on seamless integration of payment
        systems, localization using Lokalise, and robust event tracking with
        Amplitude. Leveraged Firebase for efficient backend operations and data
        management. Ensured high-quality code standards, documentation, and
        participated actively in code reviews to maintain scalability and
        maintainability of the project.
      </>
    ),
  },
  {
    period: "January – February 2024 · 1 month contract",
    title: "Software Engineer (Scraping)",
    dl: "assets/Testimonial From Stratalis.jpg",
    org: "Stratalis Ltd",
    body: (
      <>
        Full-stack software development in JavaScript, TypeScript, SQL, PHP, and
        potential future languages. Responsibilities span designing, coding,
        testing, deploying software, analyzing data, and managing computer
        systems. It's a multifaceted position requiring versatile skills in
        development, data analysis, and system administration.
      </>
    ),
  },
  { period: "December 2023", title: "Career Break", org: null, body: null },
  {
    period: "June – November 2023",
    title: "Engineer",
    dl: "assets/Testimonial From Event Store.pdf",
    org: "Event Store Ltd",
    body: (
      <>
        The job entails coding and debugging C# code, participating in feature
        development discussions, proposing fixes, and assisting with relevant
        code development. It also involves code reviews, documentation updates,
        maintenance, and quality assurance. Being available for customer issue
        escalations and on-call coverage is required.
      </>
    ),
  },
  {
    period: "January – May 2023",
    title: "Software Engineer",
    dl: "assets/Testimonial From Elca.jpg",
    org: "Information Technology ELCA Ltd",
    body: (
      <>
        Developing and maintaining Angular and Java based application utilising
        crucial design skills. Troubleshooting and solving technical issues in
        the project. Writing clean, efficient and well-documented code.
        Participate in code reviews and ensure the code is maintainable and
        scalable.
      </>
    ),
  },
  {
    period: "August 2021 – December 2022",
    title: "Associate Software Engineer",
    dl: "assets/Testimonial From Elca.jpg",
    org: "Information Technology ELCA Ltd",
    body: (
      <>
        Working on 3rd Party Projects using Angular and Java. Utilized crucial
        design software skills to assist with projects. Effective changes and
        alterations based on specific design specifications.
      </>
    ),
  },
  {
    period: "May – August 2020",
    title: "Mobile Developer (Internship)",
    dl: "assets/Testimonial From Naveo.pdf",
    org: "Navigation and Geocoding Technologies Ltd",
    body: (
      <>
        Mobile Development of "Naveo Driver" Application using Flutter. Worked to
        solve complex problems using the latest Mobile Technologies. Writing
        source codes and making changes according to client's requests.
      </>
    ),
  },
  {
    period: "May – August 2019",
    title: "Trainee Network Engineer (Internship)",
    dl: "assets/Testimonial From Secure Services Mauritius Ltd.pdf",
    org: "Secure Services Mauritius Ltd",
    body: (
      <>
        Shadow Network Engineers in deploying and configuring of network devices.
        Ensured network security by developing and configuring network access.
        Analyzed network components to identify beneficial improvements.
      </>
    ),
  },
];

const education = [
  {
    period: "2021",
    title: "BSc Computer Science (Systems Engineering)",
    dl: "assets/BSC Certificate.pdf",
    org: "Middlesex University Mauritius",
    body: (
      <>
        Graduated with First Class Honours<br />Awarded on 16 September 2021
      </>
    ),
  },
  {
    period: "2017",
    title: "Cambridge A Level (Higher School Certificate)",
    dl: "assets/A Level Certificate.pdf",
    org: "Royal College Curepipe",
    body: <>Awarded by Cambridge International Examinations</>,
  },
  {
    period: "2014",
    title: "Cambridge O Level (School Certificate)",
    dl: "assets/O Level Certificate.pdf",
    org: "Royal College Curepipe",
    body: <>Awarded by Cambridge International Examinations</>,
  },
];

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <Reveal className="sec-head">
          <span className="sec-ref">C · Track record</span>
          <h2 className="sec-title">My journey so far</h2>
          <p className="sec-lead">
            A track record across mobile, web and full-stack engineering roles.
          </p>
        </Reveal>

        <div className="tl-cols">
          {/* Experience */}
          <Reveal>
            <h3 className="tl-sub"><i className="fa-solid fa-briefcase"></i> Experience</h3>
            <div className="timeline">
              {experience.map((e) => (
                <div className="tl-item" key={e.period + e.title}>
                  <span className="tl-period">{e.period}</span>
                  <h4>
                    {e.title}
                    {e.dl && (
                      <a
                        className="dl"
                        href={`/${e.dl}`}
                        target="_blank"
                        rel="noopener"
                        aria-label="Download testimonial"
                      >
                        <i className="fa-solid fa-download"></i>
                      </a>
                    )}
                  </h4>
                  {e.org && <div className="org">{e.org}</div>}
                  {e.body && <p>{e.body}</p>}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Education */}
          <Reveal delay={0.08}>
            <h3 className="tl-sub"><i className="fa-solid fa-graduation-cap"></i> Education</h3>
            <div className="timeline">
              {education.map((e) => (
                <div className="tl-item" key={e.period + e.title}>
                  <span className="tl-period">{e.period}</span>
                  <h4>
                    {e.title}
                    {e.dl && (
                      <a
                        className="dl"
                        href={`/${e.dl}`}
                        target="_blank"
                        rel="noopener"
                        aria-label="Download certificate"
                      >
                        <i className="fa-solid fa-download"></i>
                      </a>
                    )}
                  </h4>
                  <div className="org">{e.org}</div>
                  <p>{e.body}</p>
                </div>
              ))}
            </div>

            {/* Testimonials */}
            <h3 className="tl-sub" style={{ marginTop: "44px" }}>
              <i className="fa-solid fa-quote-left"></i> Testimonials
            </h3>
            <div className="tst-grid" style={{ gridTemplateColumns: "1fr" }}>
              {testimonials.map((t) => (
                <div className="tst" key={t.name}>
                  <span className="quote"><i className="fa-solid fa-quote-right"></i></span>
                  <p>{t.quote}</p>
                  <div className="tst-author">
                    <img src={t.img} alt={t.name} />
                    <div>
                      <div className="an">{t.name}</div>
                      <div className="ac">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
