import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import ExperienceItem from "@/components/ExperienceItem";
import SkillTag from "@/components/SkillTag";
import ContactForm from "@/components/ContactForm";
import { projects, experience, skills } from "@/libs/data";

export default function Home() {
  return (
    <div className="min-h-screen font-(family-name:--font-geist-sans)">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About">
          <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
            I am a software engineer who enjoys building delightful and
            performant web apps. I love learning new technologies and solving
            real problems with simple, thoughtful design.
          </p>
        </Section>

        <Section id="projects" title="Projects" subtitle="Selected work">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((p) => (
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
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <SkillTag key={s} label={s} />
            ))}
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
