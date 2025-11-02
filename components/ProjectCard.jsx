import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition">
      {project.image && (
        <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              width={40}
              height={40}
              className="rounded"
            />
          )}
          <h3 className="text-lg font-semibold">{project.title}</h3>
        </div>
        <div className="flex gap-2 flex-wrap justify-end">
          {project.links?.map((l) => (
            <Link key={l.href} href={l.href} className="link" target="_blank">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {project.description && (
        <p className="mt-2 text-gray-600 dark:text-gray-400">{project.description}</p>
      )}
      {project.highlights?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1">
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
      )}
      {project.tech?.length > 0 && (
        <ul className="mt-3 flex gap-2 flex-wrap text-xs text-gray-500">
          {project.tech.map((t) => (
            <li key={t} className="px-2 py-1 rounded border border-gray-200 dark:border-gray-700">
              {t}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
