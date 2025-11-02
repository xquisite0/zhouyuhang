// Centralized content for the portfolio. Update this file to change site content.

export const site = {
  name: "Zhou Yuhang",
  role: "Software Engineer",
  tagline: "Seeking Summer 2026 SWE Internship",
  location: "Singapore",
  email: "zyuhang255@gmail.com",
  github: "https://github.com/xquisite0",
  linkedin: "https://www.linkedin.com/in/zhou-yuhang-36624a206/", // Update with your LinkedIn URL
  leetcode: "https://leetcode.com/zhoyu255",
  resumePath: "/zhouyuhang_resume.pdf", // place your resume at public/zhouyuhang_resume.pdf
  profileImage: "/profile.jpg", // place your profile image at public/profile.jpg
  availability: "May - August 2026",
};

// Skill icon mapping - icons from https://devicon.dev or local files
export const skillIcons = {
  "TypeScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Prisma": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
  "PostgreSQL": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "PyTorch": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
};

export const skillCategories = [
  {
    category: "Languages",
    skills: ["TypeScript", "C++", "Python", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Prisma", "tRPC"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB"],
  },
  {
    category: "AI/ML",
    skills: ["PyTorch", "Vercel AI SDK", "Gemini API"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Socket Programming", "RESP Protocol"],
  },
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
    image: "/projects/pulse.png",
    logo: "/logos/pulse.png", // Add logo at public/logos/pulse.png
    highlights: [
      "50+ developers on waitlist from NUS, NTU, and other Singapore universities",
      "Personalized learning paths based on user goals and skill level",
      "Full-stack implementation with modern tech stack"
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
    logo: "/logos/redis.png", // Add logo at public/logos/redis.png
    highlights: [
      "16+ distinct Redis operations implemented (GET, SET, WAIT, XREAD, MULTI, etc.)",
      "Concurrent client processing with parallel programming",
      "Master-replica replication using socket programming"
    ],
  },
  {
    title: "Personal Portfolio",
    description:
      "This website. Built with Next.js 15, Tailwind CSS v4, and app router.",
    tech: ["Next.js", "Tailwind", "React"],
    links: [{ label: "GitHub", href: "https://github.com/xquisite0/zhouyuhang" }],
    highlights: [
      "Modern, responsive design with dark mode support",
      "Optimized performance with Next.js Image and lazy loading",
      "Clean, maintainable component architecture"
    ],
  },
];

export const experience = [
  {
    company: "GovTech Singapore - Transcribe",
    role: "Software Engineer Intern",
    start: "Starting Jan 2026",
    end: " ",
    logo: "/logos/govtech.gif", // Add logo at public/logos/govtech.gif
    bullets: [
      // Add your accomplishments here as you complete your internship
    ],
  },
  {
    company: "GreatFrontEnd",
    role: "Software Engineer Intern",
    start: "Apr 2025",
    end: "Aug 2025",
    logo: "/logos/greatfrontend.png", // Add logo at public/logos/greatfrontend.png
    bullets: [
      "Led full-stack development of an AI-powered social media monitoring tool, integrating AI relevancy analysis with Node.js and Gemini to filter posts for follow-up.",
      "Optimized the tool's UI with React, increasing internal team usage by over 100%.",
      "Developed AI Chat functionality in a Linear-inspired task manager using Vercel AI SDK.",
      "Tech Stack included TypeScript, React, Next.js, Node.js, Prisma, PostgreSQL, and tRPC.",
    ],
  },
];

export const education = [
  {
    school: "National University of Singapore",
    degree: "Bachelor of Computing (Honours) in Computer Science",
    start: "Starting 2026",
    end: "",
    logo: "/logos/nus.png", // Add logo at public/logos/nus.png
    details: [
      "Recipient of NUS Merit Scholarship",
    ],
  },
  {
    school: "Raffles Institution",
    degree: "GCE A-Level",
    start: "2022",
    end: "2023",
    logo: "/logos/raffles.png", // Add logo at public/logos/raffles.png
    details: [
      "Straight A's: H2 Computing, H2 Physics, H2 Mathematics, H2 Economics, H1 General Paper, H1 Project Work",
    ],
  },
];

export const achievements = [
  {
    title: "LeetCode Top 0.5% Globally",
    description: "Ranked in the top 0.5% globally for LeetCode contests. Solved ~900 programming problems.",
    year: "2023",
    link: "https://leetcode.com/zhoyu255/",
    logo: "/logos/leetcode.png", // Add logo at public/logos/leetcode.png
  },
  {
    title: "National Olympiad in Informatics",
    description: "Participated in the National Olympiad in Informatics under Raffles Institution.",
    year: "2023",
    logo: "/logos/noi.png", // Add logo at public/logos/noi.png
  },
  {
    title: "CSIT Computing Scholar",
    description: "Selected as CSIT Computing Scholar for exceptional performance in H2 Computing.",
    year: "2022 - 2023",
    logo: "/logos/csit.png", // Add logo at public/logos/csit.png
  },
  {
    title: "Canadian Computing Competition Distinction",
    description: "Achieved Distinction in the Canadian Computing Competition.",
    year: "2023",
  },
  {
    title: "Hugging Face AI Agents Course",
    description: "Completed the Hugging Face AI Agents Course: Fundamentals certification.",
    year: "2024",
    logo: "/logos/huggingface.png", // Add logo at public/logos/huggingface.png
  },
];
