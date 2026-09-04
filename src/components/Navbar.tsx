"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "ABOUT", href: "#about", hasDropdown: false },
    { name: "SKILLS", href: "#skills", hasDropdown: false },
    { name: "PROJECTS", href: "#projects", hasDropdown: true },
    { name: "EXPERIENCE", href: "#experience", hasDropdown: false },
    { name: "CONTACT", href: "#contact", hasDropdown: false },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] transition-all font-mono">
      <div className="w-full flex items-center justify-between h-20">
        
        {/* Left: Logo Area */}
        <div className="flex-shrink-0 h-full flex items-center border-r border-[var(--border-subtle)] px-6 lg:px-12">
          <Link
            href="/"
            className="text-[var(--text-primary)] font-bold text-sm tracking-[0.1em]"
          >
            // hello world !! Welcome to my portfolio
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex flex-1 items-center justify-center h-full gap-16 xl:gap-24">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs tracking-widest focus-visible:outline-none focus-visible:text-[var(--text-primary)]"
            >
              {link.name}
              {link.hasDropdown && (
                <span className="text-[10px] opacity-50 group-hover:opacity-100 transition-opacity">▼</span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex h-full items-center border-l border-[var(--border-subtle)] px-6">
          <button
            onClick={toggleMenu}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-medium tracking-widest uppercase focus:outline-none"
            aria-expanded="false"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--background)] border-b border-[var(--border-subtle)]">
          <div className="px-6 pt-4 pb-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm tracking-[0.2em]"
              >
                {link.name}
                {link.hasDropdown && <span className="text-[10px] opacity-50">▼</span>}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
