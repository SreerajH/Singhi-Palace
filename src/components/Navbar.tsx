"use client";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/venue";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ivory/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="relative max-w-content mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Left links */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary left">
          {navLinks.left.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-eyebrow font-body font-medium tracking-[0.22em] uppercase text-ink-muted hover:text-emerald transition-colors duration-200 cta-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Centered wordmark */}
        <a
          href="#"
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-0.5 group"
          aria-label="Singhi Palace — home"
        >
          <span className="font-display fraunces-editorial text-[0.65rem] tracking-[0.5em] uppercase text-brass font-medium">
            SINGHI
          </span>
          <span className="font-display fraunces-editorial text-base tracking-[0.3em] uppercase text-emerald font-semibold leading-none">
            PALACE
          </span>
        </a>

        {/* Right links */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary right">
          {navLinks.right.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-eyebrow font-body font-medium tracking-[0.22em] uppercase text-ink-muted hover:text-emerald transition-colors duration-200 cta-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden ml-auto flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="block w-6 h-px bg-ink" />
          <span className="block w-4 h-px bg-ink" />
          <span className="block w-6 h-px bg-ink" />
        </button>
      </div>

      {/* Brass hairline underline */}
      <div
        className="mx-auto max-w-content px-6 lg:px-12"
        style={{ height: "1px", background: "linear-gradient(to right, transparent, #b08d4f 20%, #b08d4f 80%, transparent)", opacity: 0.35 }}
      />
    </header>
  );
}
