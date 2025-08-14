'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-semibold tracking-tight">
            FinOpsAdvice
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#outcomes" className="hover:underline underline-offset-4">Outcomes</a>
            <a href="#services" className="hover:underline underline-offset-4">Services</a>
            <a href="#proof" className="hover:underline underline-offset-4">Proof</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
            >
              Download Executive Pack
            </a>
            <a
              href="#book"
              className="rounded-md bg-black px-3.5 py-2.5 text-sm font-medium text-white hover:opacity-90"
            >
              Book a 20-min Diagnostic
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
