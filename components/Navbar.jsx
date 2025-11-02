"use client";

import Link from "next/link";
import { site } from "../libs/data";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 dark:bg-black/40 border-b border-gray-100 dark:border-gray-800">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:opacity-70">
              {item.label}
            </a>
          ))}
          <a
            href={site.resumePath}
            className="btn btn-sm btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
