import { site } from "../libs/data";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start gap-8">
          {site.profileImage && (
            <div className="flex-shrink-0">
              <Image
                src={site.profileImage}
                alt={site.name}
                width={200}
                height={200}
                className="rounded-full object-cover"
                priority
              />
            </div>
          )}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium text-primary/80">{site.tagline}</p>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              {site.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              I build reliable, user-friendly software with modern web
              technologies. I am currently open to web development freelance work
              and looking for a Summer 2026 SWE internship.
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={`mailto:${site.email}`}
                className="btn btn-primary"
              >
                Get in Touch
              </a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
              <a
                href={site.resumePath}
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
