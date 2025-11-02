import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-5 hover:shadow-sm transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
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
