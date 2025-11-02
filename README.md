## Zhou Yuhang — Portfolio

This is a personal portfolio website built with Next.js 15 (App Router), Tailwind CSS v4, and DaisyUI.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit content in `libs/data.js` (name, links, skills, projects, experience). The homepage uses sections for About, Projects, Experience, Skills, and Contact.

To update the resume link, place your PDF at `public/resume.pdf`. The Navbar and Hero buttons will automatically point to it.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Features

- Modern Next.js App Router structure
- Tailwind CSS v4 + DaisyUI components
- Reusable components (Navbar, Hero, Section, ProjectCard, ExperienceItem, SkillTag, ContactForm)
- Contact form posting to `/api/contact` (logs to server by default)
- Basic SEO: `metadata`, `robots.js`, and `sitemap.js`

## Deploy

You can deploy this on Vercel or any Node.js host.

Optional environment variable to configure absolute URLs in `robots` and `sitemap`:

```bash
export NEXT_PUBLIC_SITE_URL="https://your-domain.com"
```

Then build and start:

```bash
npm run build
npm start
```
