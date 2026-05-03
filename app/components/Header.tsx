"use client";

import { useState } from "react";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Approach", href: "#approach" },
];

const RESOURCES = [
  { label: "Writing", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Terms of Service", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-[#f5f3ee]/80 border-b border-neutral-900/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-[15px] font-medium tracking-tight">
          <span className="inline-block size-5 rounded-full bg-neutral-900" />
          Offmenu
        </a>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              type="button"
              className="px-3 py-1.5 rounded-full text-neutral-700 hover:text-neutral-900 hover:bg-neutral-900/5 transition-colors flex items-center gap-1"
            >
              Resources
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open && (
              <div className="absolute right-0 top-full pt-2 w-48">
                <div className="rounded-2xl bg-white border border-neutral-900/5 shadow-lg p-2">
                  {RESOURCES.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-3 py-2 rounded-lg text-sm text-neutral-700 hover:bg-neutral-900/5"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white text-sm px-4 py-2 hover:bg-neutral-700 transition-colors"
        >
          Book a call
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
            <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </header>
  );
}
