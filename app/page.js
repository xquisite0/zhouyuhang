import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import ExperienceItem from "../components/ExperienceItem.jsx";
import EducationItem from "../components/EducationItem.jsx";
import AchievementItem from "../components/AchievementItem.jsx";
import SkillCategory from "../components/SkillCategory.jsx";
import { projects, experience, education, achievements, skillCategories, site } from "../libs/data.js";

export default function Home() {
  return (
    <div className="min-h-screen font-(family-name:--font-geist-sans)">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About">
          <div className="max-w-3xl space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              I am a software engineer who enjoys building delightful and
              performant web apps. I love learning new technologies and solving
              real problems with simple, thoughtful design.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              With a strong foundation in competitive programming (Top 0.5% on LeetCode)
              and experience across the full stack, from building Redis in C++ to
              developing AI-powered web applications, I bring both systems-level
              understanding and modern web development expertise.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Pursuing my Bachelor of Computing at NUS as a Merit Scholar,
              I&apos;m open to web development freelance work and seeking Summer 2026
              SWE internship opportunities where I can contribute to impactful
              projects and continue growing as an engineer.
            </p>
          </div>
        </Section>

        <Section id="projects" title="Featured Project">
          <ProjectCard project={projects[0]} />
        </Section>

        <Section title="Other Projects">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.slice(1).map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="experience" title="Experience">
          <div className="grid gap-4">
            {experience.length === 0 && (
              <p className="text-gray-600 dark:text-gray-400">
                Add your experience in <code>libs/data.js</code> and it will
                show up here.
              </p>
            )}
            {experience.map((item, idx) => (
              <ExperienceItem key={idx} item={item} />
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills">
          <div className="space-y-6">
            {skillCategories.map((cat) => (
              <SkillCategory
                key={cat.category}
                category={cat.category}
                skills={cat.skills}
              />
            ))}
          </div>
        </Section>

        <Section id="achievements" title="Achievements & Awards">
          <div className="grid gap-4">
            {achievements.map((achievement, idx) => (
              <AchievementItem key={idx} achievement={achievement} />
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-4">
            {education.map((item, idx) => (
              <EducationItem key={idx} item={item} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="max-w-3xl">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I&apos;m currently open to web development freelance work and seeking Summer
              2026 SWE internship opportunities. Feel free to reach out!
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Internship Availability: {site.availability}
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="btn btn-primary"
              >
                Email Me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                LinkedIn
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                GitHub
              </a>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
