import Link from "next/link";
import { site } from "@/libs/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 py-8 mt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-sm text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {site.github && (
            <Link href={site.github} className="hover:opacity-70" target="_blank">
              GitHub
            </Link>
          )}
          {site.linkedin && (
            <Link href={site.linkedin} className="hover:opacity-70" target="_blank">
              LinkedIn
            </Link>
          )}
          <Link href="/" className="hover:opacity-70">
            Home
          </Link>
        </div>
      </div>
    </footer>
  );
}
