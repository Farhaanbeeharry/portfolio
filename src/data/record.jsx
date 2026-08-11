/**
 * The service record. Lifted out of the Log view so the command palette can
 * index it — a role has to be reachable by ⌘K, which means the data cannot live
 * inside the component that renders it.
 *
 * `title`, `org` and `period` are plain strings for exactly that reason; `body`
 * stays JSX because it carries real links.
 */

export const experience = [
  {
    period: "October 2024 – Present",
    current: true,
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
        {/* Google Play is stated but not linked: the XEFI Apple developer page is
            known, its Play Store equivalent is not, and a guessed store URL is
            worse than an unlinked one. Link it here once the URL is to hand. */}
        and Google Play, and showcased on the{" "}
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
  /**
   * One employer, two positions. These were two sibling entries with the same
   * org, which read as two unrelated jobs rather than as a promotion within one.
   * `positions` are newest first, and the group's period spans both.
   */
  {
    period: "August 2021 – May 2023",
    org: "Information Technology ELCA Ltd",
    dl: "assets/Testimonial From Elca.jpg",
    positions: [
      {
        period: "January – May 2023",
        title: "Software Engineer",
        promotion: true,
        body: (
          <>
            Developing and maintaining Angular and Java based application
            utilising crucial design skills. Troubleshooting and solving
            technical issues in the project. Writing clean, efficient and
            well-documented code. Participate in code reviews and ensure the
            code is maintainable and scalable.
          </>
        ),
      },
      {
        period: "August 2021 – December 2022",
        title: "Associate Software Engineer",
        body: (
          <>
            Working on 3rd Party Projects using Angular and Java. Utilized
            crucial design software skills to assist with projects. Effective
            changes and alterations based on specific design specifications.
          </>
        ),
      },
    ],
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

/**
 * Positions actually held, flattening promotions back out. Used for the route
 * badge and the log's own count, so merging two ELCA entries into one employer
 * does not make it look like a role disappeared from the record. The career
 * break is an entry on the timeline but it is not a position.
 */
export const positionCount = experience
  .flatMap((e) => e.positions ?? [e])
  .filter((p) => p.title !== "Career Break").length;

export const education = [
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
