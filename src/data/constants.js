const icon = (path) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}.svg`;

export const Bio = {
  name: "Rafi Ullah",
  roles: [
    "React & Node.js Developer",
    "MERN Stack Developer",
    "SaaS Builder",
  ],
  description:
    "React · Node.js · Express · MongoDB · React Native. I single-handedly built VornSoft, a multi-tenant SaaS platform covering HR, CRM, Projects, ERP and Retail POS. Based in Karachi, Pakistan · Open to remote full-time, contract and part-time roles · Available to work US/UK business hours.",
  github: "https://github.com/Rafiullah08",
  email: "rafiullah@vornsoft.com",
  web3formsAccessKey: "9a1101d3-e9e7-4610-b21e-a6cbb18d8744",
  siteUrl: "https://rafiullah.vornsoft.com",
  linkedin: "https://www.linkedin.com/in/rafiullah08/",
  // Facebook and Instagram links removed; re-add later if wanted.
  website: "https://www.vornsoft.com/",
  whatsapp: "https://wa.me/923428232442",
  whatsappLabel: "+92 342 8232442",
  resume: "/Rafi_Ullah_Full_Stack_Developer_Resume.pdf",
};

export const about = {
  title: "About Me",
  paragraphs: [
    "I'm Rafi Ullah, a full-stack developer in Karachi with 2+ years of professional experience building web applications with React, Node.js, Express, MongoDB and REST APIs. I single-handedly designed, built and launched VornSoft, a multi-tenant SaaS platform with HR, CRM, Projects, ERP and Retail POS suites, DeepSeek AI features and Stripe, Twilio and WhatsApp integrations. At Tekbis I build client products, from e-commerce and booking websites to a React Native ride-hailing app.",
    "I'm open to remote full-time, contract and part-time full-stack roles with US and UK teams, and I'm available to work full-time in US/UK business hours. If you're hiring, download my CV or email me at rafiullah@vornsoft.com.",
  ],
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "React", image: icon("react/react-original") },
      { name: "Next.js", image: icon("nextjs/nextjs-original"), invert: true },
      { name: "TypeScript", image: icon("typescript/typescript-original") },
      { name: "JavaScript", image: icon("javascript/javascript-original") },
      { name: "Redux Toolkit", image: icon("redux/redux-original") },
      { name: "React Native", image: icon("reactnative/reactnative-original") },
      { name: "Electron.js", image: icon("electron/electron-original") },
      { name: "Tailwind CSS", image: icon("tailwindcss/tailwindcss-original") },
      { name: "Material UI", image: icon("materialui/materialui-original") },
      { name: "Bootstrap", image: icon("bootstrap/bootstrap-original") },
      { name: "HTML", image: icon("html5/html5-original") },
      { name: "CSS", image: icon("css3/css3-original") },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", image: icon("nodejs/nodejs-original") },
      { name: "Express.js", image: icon("express/express-original"), invert: true },
      { name: "REST APIs" },
      { name: "Socket.IO", image: icon("socketio/socketio-original") },
      { name: "JWT authentication" },
    ],
  },
  {
    title: "Databases & Services",
    skills: [
      { name: "MongoDB", image: icon("mongodb/mongodb-original") },
      { name: "Supabase", image: icon("supabase/supabase-original") },
      { name: "Firebase", image: icon("firebase/firebase-plain") },
      { name: "Stripe" },
      { name: "Twilio" },
      { name: "DeepSeek API" },
    ],
  },
  {
    title: "Testing & Tools",
    skills: [
      { name: "Git", image: icon("git/git-original") },
      { name: "GitHub", image: icon("github/github-original"), invert: true },
      { name: "Vercel", image: icon("vercel/vercel-original"), invert: true },
      { name: "Render" },
      { name: "Vitest", image: icon("vitest/vitest-original") },
      { name: "VS Code", image: icon("vscode/vscode-original") },
    ],
  },
];

// Encryptix, Upwork, RGC Center and Interns.pk entries removed for now; re-add later once confirmed.
export const experiences = [
  {
    id: 0,
    img: "/logos/vornsoft.png",
    imgWebp: "/logos/vornsoft-100.webp",
    role: "Founder & Full Stack Developer",
    company: "VornSoft (VORNSOFT (PRIVATE) LIMITED)",
    date: "Sep 2025 – Present",
    start: "2025-09-01",
    end: null,
    note: "Own startup, built solo; concurrent with Tekbis role",
    points: [
      "Single-handedly designed, built and launched the VornSoft SaaS platform end to end.",
      "Built the React/Redux Toolkit frontend and Node.js/Express REST API on MongoDB, with Socket.IO and SSO/MFA.",
      "Built free-trial sign-up, workspace onboarding, subscription plans and a super-admin console for tenants.",
    ],
    skills: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "DeepSeek API",
    ],
  },
  {
    id: 1,
    img: "/logos/tekbis.svg",
    role: "Full Stack Developer",
    company: "Tekbis",
    date: "Apr 2026 – Present",
    start: "2026-04-01",
    end: null,
    points: [
      "Build full-stack client products: DA'POR Millionaires e-commerce store, CHI booking site with admin CMS, and a React Native ride-hailing app (in development).",
    ],
    skills: ["JavaScript", "React Native", "Node.js", "MongoDB", "Supabase", "Stripe"],
  },
  {
    id: 2,
    img: "/logos/horizon.svg",
    role: "Full Stack Developer",
    company: "Horizon Agency, Karachi",
    date: "Sep 2024 – Aug 2025",
    start: "2024-09-01",
    end: "2025-09-01",
    points: [
      "Led development of scalable web applications using React, Node.js and MongoDB.",
      "Delivered 3+ client projects on time and within budget, collaborating with cross-functional teams.",
      "Implemented RESTful APIs for third-party integrations and improved performance, reducing load times by 20%.",
    ],
    skills: ["React", "Node.js", "MongoDB", "REST APIs"],
  },
  {
    id: 3,
    img: "/logos/hostachem.svg",
    role: "Full Stack Developer",
    company: "Hostachem, Karachi",
    date: "Jul 2024 – Sep 2024",
    start: "2024-07-01",
    end: "2024-10-01",
    points: [
      "Developed a client's personal web project as a full-stack developer, handling both front-end and back-end.",
    ],
    skills: ["Full-stack web development"],
  },
];

// FA and SSC entries removed for now; re-add later if wanted.
export const education = [
  {
    id: 0,
    img: "/logos/uok.svg",
    school: "University of Karachi",
    date: "2022 – 2024",
    desc: "Associate Degree in Arts (ADA), University of Karachi, 2022 – 2024.",
    degree: "Associate Degree in Arts (ADA)",
  },
];

export const certifications = [
  {
    id: 0,
    school: "C.I.T",
    degree: "Allied Computer Center",
  },
  {
    id: 1,
    school: "Web and Mobile App Development",
    degree: "Saylani Mass IT Training (SMIT)",
  },
];

// VornSoft App and Process Server removed for now; re-add later once confirmed.
export const projects = [
  {
    id: 0,
    title: "VornSoft",
    date: "Own startup · Sep 2025 – Present",
    description:
      "Multi-tenant SaaS business platform I built solo, with five suites: HR (attendance, leave, payroll, recruitment), CRM (leads, deals, proposals, multi-channel inbox), Projects (boards, timesheets), ERP (ledger, AP/AR, procurement, inventory) and Retail POS. AI features using DeepSeek (HR assistant, CV scoring, CRM deal-win prediction, report generator), plus Stripe webhooks, Twilio/Meta WhatsApp and SMS, Zoom, Google Calendar and Outlook integrations.",
    image: "/projects/vornsoft.png",
    srcSet: "/projects/vornsoft-600.webp 600w, /projects/vornsoft-1200.webp 1200w",
    sizes: "(max-width: 640px) 100vw, 290px",
    tags: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Stripe",
      "DeepSeek API",
    ],
    category: "web",
    webapp: "https://www.vornsoft.com/",
  },
  {
    id: 1,
    title: "Uber-Style Ride-Hailing App",
    date: "Tekbis client project · In development (~70% complete)",
    description:
      "Building a ride-hailing/taxi mobile app in React Native and its Node.js/MongoDB backend as the full-stack developer.",
    image: "/projects/ride-hailing.svg",
    tags: ["React Native", "Node.js", "MongoDB"],
    category: "mobile",
    badge: "In development",
  },
  {
    id: 2,
    title: "VornSoft Desktop, POS System",
    date: "Independent client project",
    description:
      "A complete point-of-sale (POS) desktop application built with Electron.js and React for a client, as the full-stack developer.",
    image: "/projects/vornsoft-desktop.png",
    srcSet: "/projects/vornsoft-desktop-600.webp 600w, /projects/vornsoft-desktop-1200.webp 1200w",
    sizes: "(max-width: 640px) 100vw, 290px",
    tags: ["Electron.js", "React", "POS"],
    category: "desktop",
  },
  {
    id: 3,
    title: "DA'POR Millionaires",
    date: "Tekbis client project",
    description:
      "Streetwear e-commerce storefront with category browsing, size/color variants, search, wishlist and a persistent cart, plus a Stripe Checkout integration via a server-side checkout-session API and a newsletter sign-up endpoint.",
    image: "/projects/dapor.svg",
    tags: ["JavaScript", "Node.js", "Stripe", "Vercel"],
    category: "web",
    webapp: "https://www.dapormillionaires.com/",
  },
  {
    id: 4,
    title: "CHI Comprehensive Home Inspections",
    date: "Tekbis client project",
    description:
      "Home-inspection company website with a services catalog and an online booking scheduler backed by Supabase, plus an admin CMS for live-preview content editing, image uploads and booking management with CSV export.",
    image: "/projects/chi.svg",
    tags: ["JavaScript", "Supabase", "Vercel"],
    category: "web",
    webapp: "https://www.chinspects.com/",
  },
];
