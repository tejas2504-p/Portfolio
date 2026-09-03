"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)] border-b border-[var(--border-subtle)] transition-all">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-[var(--text-primary)] font-bold text-sm tracking-[0.2em] uppercase"
            >
              TEJAS PRAJAPATI
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative group text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-[10px] sm:text-xs font-semibold tracking-widest uppercase focus-visible:outline-none focus-visible:text-[var(--text-primary)]"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-[var(--text-primary)] scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100 transition-transform duration-300 origin-left"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-medium tracking-widest uppercase focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[var(--background)] border-b border-[var(--border-subtle)]">
          <div className="px-6 pt-4 pb-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium tracking-[0.2em] uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
