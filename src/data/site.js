// Homepage content data (transcribed verbatim from the original index.html).

export const marqueeItems = [
  "Flutter", "Dart", "Angular", "Java", "Spring Boot", "TypeScript",
  "Node.js", "NestJS", "Symfony", "UI / UX", "Firebase", "SQL",
];

export const codingSkills = [
  ["PHP (Symfony)", 40],
  ["Java (Spring/Spring Boot)", 60],
  ["Angular", 70],
  ["JavaScript / TypeScript", 70],
  ["Node.js (NestJS)", 70],
  ["HTML/CSS", 80],
  ["Flutter (Dart)", 90],
];

export const otherSkills = [
  ["Database (SQL)", 65],
  ["UI/UX Design", 70],
  ["Teamwork", 70],
  ["PC Assembly and Build", 75],
  ["Electronics (Arduino)", 80],
  ["Attention to details", 80],
];

// chips: { label, href? }
export const chips = [
  { label: "Ability to Multitask" },
  { label: "Adaptability" },
  { label: "Arduino", href: "https://www.arduino.cc/" },
  { label: "Communication" },
  { label: "Creativity" },
  { label: "Docker", href: "https://www.docker.com/" },
  { label: "Effective Time Management" },
  { label: "Fast Learner" },
  { label: "Fast Typer (80WPM)" },
  { label: "Leadership" },
  { label: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { label: "Problem-Solving" },
  { label: "Python", href: "https://www.python.org/" },
  { label: "Raspberry Pi", href: "https://www.raspberrypi.com/" },
  { label: "Responsibility" },
];

export const testimonials = [
  {
    img: "/img/testimonials/tashley.jpg",
    name: "Tashley Toocaram",
    role: "Information Technology ELCA Ltd",
    quote:
      "Farhaan has been working with me as an associate software engineer for a duration of 5 months. He is a quick learner and is not reluctant to ask questions in order to understand the why's behind decisions and methodologies used.",
  },
  {
    img: "/img/testimonials/zubair.jpeg",
    name: "Zubair Tofy",
    role: "Co-founder & Lead Developer @ MetaBox Technologies",
    quote:
      "Working with Farhaan Beeharry was a real pleasure. He's a skilled and dependable Flutter developer who consistently delivers high‑quality work. What stood out most was how easy and pleasant he was to work with. He's friendly, respectful, and a genuine team player.",
  },
  {
    img: "/img/testimonials/dalilah.jpg",
    name: "Dalilah Kalla",
    role: "Middlesex University Mauritius",
    quote:
      "Farhaan works very hard and diligently with a smile on his face. He strives for excellence and does not let his thirst for knowledge rule his life. It should come as no surprise that he is well-liked and admired by his peers.",
  },
  {
    img: "/img/testimonials/mudassir.jpeg",
    name: "Mudassir Lallmahamood",
    role: "Information Technology ELCA, Ltd",
    quote:
      "I have known and worked with Farhaan for 5 months. His biggest strength is undoubtedly his velocity of grasping new concepts. He is a friendly yet respectful person. It was a pleasure working with him.",
  },
];

// certificates: { logo, alt, title, links[], meta, metaBadge?, date }
// links: { href, icon: 'download'|'image', label } — extra download/view links
// titleHref?: makes the title itself a link
export const certificates = [
  {
    logo: "/img/certificates/mcb.png", alt: "MCB logo",
    title: "MCB - InovApp Challenge 3.0",
    titleHref: "https://inovapp.mu",
    links: [
      { href: "/assets/MCB InovApp.pdf", icon: "download", label: "Download certificate PDF" },
      { href: "/img/inovapp_winner.jpg", icon: "image", label: "View winner photo" },
    ],
    meta: "🏆 First prize winner 🏆", metaBadge: true, date: "18 June 2023",
  },
  {
    logo: "/img/certificates/npcc.png", alt: "NPCC logo",
    title: "Design Thinking for Innovation",
    links: [{ href: "/assets/Design Thinking for Innovation.jpg", icon: "download", label: "Download certificate" }],
    meta: "National Productivity and Competitiveness Council", date: "8-9 March 2023",
  },
  {
    logo: "/img/certificates/fsc.png", alt: "FSC logo",
    title: "FSC - Mobile App Design Competition",
    links: [], meta: "Third prize winner", metaBadge: true, date: "08 December 2022",
  },
  {
    logo: "/img/certificates/elca.png", alt: "ELCA logo",
    title: "ELCAdemy",
    links: [{ href: "/assets/ELCAdemy.jpg", icon: "download", label: "Download certificate" }],
    meta: "Angular & Java (Spring and Spring Boot) Training", date: "August 2021 to January 2022",
  },
  {
    logo: "/img/certificates/techwar.png", alt: "Techwar logo",
    title: "UoM Inter-university Techwar",
    links: [{ href: "/assets/Techwar Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Second prize winner", metaBadge: true, date: "30 March 2021",
  },
  {
    logo: "/img/certificates/digicup.png", alt: "Digicup logo",
    title: "Digicup - Digital Challenge",
    links: [{ href: "/assets/Digicup Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Second prize winner", metaBadge: true, date: "7 November 2020",
  },
  {
    logo: "/img/certificates/udemy.png", alt: "Udemy logo",
    title: "Flutter 2020 Bootcamp",
    links: [{ href: "/assets/Flutter Bootcamp Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "By: Dr Angela Yu (Instructor)", date: "12 June 2020",
  },
  {
    logo: "/img/certificates/soe.png", alt: "School of Electronics logo",
    title: "Mechatronics (Arduino Board)",
    links: [{ href: "/assets/Mechatronics Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "School of Electronics, Mauritius", date: "Academic Year 2020",
  },
  {
    logo: "/img/certificates/rrj.png", alt: "RRJ logo",
    title: "Introduction to Programming",
    links: [{ href: "/assets/Intro to Programming Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "RRJ Learning Centre, Mauritius", date: "10 March 2017",
  },
  {
    logo: "/img/certificates/rrj.png", alt: "RRJ logo",
    title: "Introduction to IT - 2",
    links: [{ href: "/assets/Intro to IT Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "RRJ Learning Centre, Mauritius", date: "22 December 2015",
  },
  {
    logo: "/img/certificates/amc.png", alt: "AMC logo",
    title: "Australian Maths Competition",
    links: [{ href: "/assets/AMC 2015 Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Australian Mathematics Trust", date: "2015 - Year Eleven",
  },
  {
    logo: "/img/certificates/amc.png", alt: "AMC logo",
    title: "Australian Maths Competition",
    links: [{ href: "/assets/AMC 2014 Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Australian Mathematics Trust", date: "2014 - Year Ten",
  },
  {
    logo: "/img/certificates/amc.png", alt: "AMC logo",
    title: "Australian Maths Competition",
    links: [{ href: "/assets/AMC 2013 Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Australian Mathematics Trust", date: "2013 - Year Nine",
  },
  {
    logo: "/img/certificates/amc.png", alt: "AMC logo",
    title: "Australian Maths Competition",
    links: [{ href: "/assets/AMC 2012 Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Australian Mathematics Trust", date: "2012 - Year Eight",
  },
  {
    logo: "/img/certificates/amc.png", alt: "AMC logo",
    title: "Australian Maths Competition",
    links: [{ href: "/assets/AMC 2011 Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Australian Mathematics Trust", date: "2011 - Year Seven",
  },
  {
    logo: "/img/certificates/amc.png", alt: "AMC logo",
    title: "Australian Maths Competition",
    links: [{ href: "/assets/AMC 2010 Certificate.pdf", icon: "download", label: "Download certificate" }],
    meta: "Australian Mathematics Trust", date: "2010 - Year Six",
  },
];

// work grid — slug, title, category label, data-cat filter string, thumbnail
export const work = [
  { slug: "umbrella", title: "Umbrella Challenge", cat: "Web and UI/UX", dataCat: "web ui_ux", thumb: "/portfolio/umbrella/thumbnail.jpg" },
  { slug: "automatic_irrigation_system", title: "Automatic Irrigation", cat: "Mobile and Arduino", dataCat: "mobile arduino", thumb: "/portfolio/automatic_irrigation_system/thumbnail.jpg" },
  { slug: "candidate_assessment_system", title: "Candidate Assessment", cat: "Web and UI/UX", dataCat: "web ui_ux", thumb: "/portfolio/candidate_assessment_system/thumbnail.jpg" },
  { slug: "rupeaks", title: "Rupeaks", cat: "Mobile, UI/UX & Competition", dataCat: "mobile ui_ux competition", thumb: "/portfolio/rupeaks/thumbnail.jpg" },
  { slug: "ptma", title: "PTMA", cat: "Mobile (Android & iOS) application", dataCat: "mobile", thumb: "/portfolio/ptma/thumbnail.png" },
  { slug: "poker_planning", title: "Poker Planning", cat: "Web application", dataCat: "web", thumb: "/portfolio/poker_planning/thumbnail.jpg" },
  { slug: "dailyapps", title: "DailyApps", cat: "Mobile application", dataCat: "mobile", thumb: "/portfolio/dailyapps/thumbnail.jpg" },
  { slug: "dietsensor", title: "DietSensor", cat: "Mobile application", dataCat: "mobile", thumb: "/portfolio/dietsensor/thumbnail.png" },
  { slug: "kalydian", title: "Kalydian", cat: "Mobile application", dataCat: "mobile", thumb: "/portfolio/kalydian/thumbnail.png" },
  { slug: "weartwice", title: "WearTwice", cat: "Mobile application", dataCat: "mobile", thumb: "/portfolio/weartwice/thumbnail.png" },
  { slug: "momento", title: "MoMento", cat: "Web application", dataCat: "web ui_ux", thumb: "/portfolio/momento/thumbnail.png" },
  { slug: "blaugrana", title: "Blaugrana", cat: "Web application", dataCat: "web ui_ux", thumb: "/portfolio/blaugrana/thumbnail.png" },
  { slug: "teamtoss", title: "TeamToss", cat: "Web application", dataCat: "web ui_ux", thumb: "/portfolio/teamtoss/thumbnail.png" },
  { slug: "staybleu", title: "StayBleu", cat: "Web application", dataCat: "web ui_ux", thumb: "/portfolio/staybleu/thumbnail.png" },
  { slug: "concept_habitat", title: "Concept Habitat CRM", cat: "Web app & UI/UX", dataCat: "web ui_ux", thumb: "/portfolio/concept_habitat/thumbnail.svg" },
  { slug: "motogate", title: "MotoGate", cat: "Mobile application", dataCat: "mobile", thumb: "/portfolio/motogate/thumbnail.svg" },
  { slug: "pryowl", title: "Pryowl", cat: "Web app & UI/UX", dataCat: "web ui_ux", thumb: "/portfolio/pryowl/thumbnail.svg" },
  { slug: "panda-pick", title: "PandaPick", cat: "Web app & UI/UX", dataCat: "web ui_ux", thumb: "/portfolio/panda-pick/thumbnail.svg" },
  { slug: "fruitopia", title: "Fruitopia", cat: "Mobile marketplace", dataCat: "mobile ui_ux", thumb: "/portfolio/fruitopia/thumbnail.svg" },
  { slug: "nexstock", title: "NexStock", cat: "Web, mobile & UI/UX", dataCat: "web mobile ui_ux", thumb: "/portfolio/nexstock/thumbnail.svg" },
  { slug: "lokal", title: "Lokal", cat: "Web app & UI/UX", dataCat: "web ui_ux", thumb: "/portfolio/lokal/thumbnail.svg" },
];

export const filters = [
  ["all", "All"],
  ["web", "Web"],
  ["desktop", "Desktop"],
  ["mobile", "Mobile"],
  ["arduino", "Arduino"],
  ["ui_ux", "UI/UX"],
  ["competition", "Competition"],
];
