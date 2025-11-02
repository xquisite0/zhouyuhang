// Centralized content for the portfolio. Update this file to change site content.

export const site = {
  name: "Zhou Yuhang",
  role: "Software Engineer",
  tagline: "Seeking Summer 2026 SWE Internship",
  location: "Singapore",
  email: "zyuhang255@gmail.com",
  github: "https://github.com/xquisite0",
  linkedin: "",
  resumePath: "/zhouyuhang_resume.pdf", // place your resume at public/zhouyuhang_resume.pdf
  profileImage: "/profile.jpg", // place your profile image at public/profile.jpg
};

export const skills = [
  "TypeScript",
  "PyTorch",
  "C++",
  "React",
  "Next.js",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Python",
  "Git",
  "Vercel AI SDK",
];

export const projects = [
  {
    title: "Pulse",
    description:
      "A web application that personalizes the technical interview preparation process for developers. Over 50 developers from Singapore universities have joined the waitlist.",
    tech: ["TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    links: [
      { label: "Live Site", href: "https://pulseprime.app" },
      { label: "GitHub", href: "https://github.com/xquisite0/pulse" }
    ],
  },
  {
    title: "Redis",
    description:
      "An in-memory key-value database and cache built from scratch in C++. Supports 16+ operations with concurrent client processing, RESP protocol parsing, and socket programming for master-replica connections.",
    tech: ["C++", "Socket Programming", "RESP", "Concurrent Programming"],
    links: [
      { label: "GitHub", href: "https://github.com/xquisite0/redis" }
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "This website. Built with Next.js 15, Tailwind CSS v4, and app router.",
    tech: ["Next.js", "Tailwind", "React"],
    links: [{ label: "GitHub", href: "https://github.com/xquisite0/zhouyuhang" }],
  },
];

export const experience = [
  {
    company: "GovTech Singapore - Transcribe",
    role: "Software Engineer Intern",
    start: "Jan 2026",
    end: "Present",
    bullets: [
      // Add your accomplishments here as you complete your internship
    ],
  },
  {
    company: "GreatFrontEnd",
    role: "Software Engineer Intern",
    start: "Apr 2025",
    end: "Aug 2025",
    bullets: [
      "Led full-stack development of an AI-powered social media monitoring tool, integrating AI relevancy analysis with Node.js and Gemini to filter posts for follow-up.",
      "Optimized the tool's UI with React, increasing internal team usage by over 100%.",
      "Developed AI Chat functionality in a Linear-inspired task manager using Vercel AI SDK.",
      "Built with TypeScript, React, Next.js, Node.js, Prisma, PostgreSQL, and tRPC.",
    ],
  },
];

export const education = [
  {
    school: "National University of Singapore",
    degree: "Bachelor of Computing (Honours) in Computer Science",
    start: "2026",
    end: "Present",
    details: [
      "Recipient of NUS Merit Scholarship",
    ],
  },
  {
    school: "Raffles Institution",
    degree: "GCE A-Level",
    start: "2022",
    end: "2023",
    details: [
      "Straight A's: H2 Computing, H2 Physics, H2 Mathematics, H2 Economics, H1 General Paper, H1 Project Work",
    ],
  },
];
