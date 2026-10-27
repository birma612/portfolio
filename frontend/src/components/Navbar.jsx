
import { useState } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ profile = {} }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const name = profile.full_name || profile.name || 'Portfolio';

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080612]/85 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-16">
        <a href="#home" className="text-lg font-bold tracking-tight sm:text-xl">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent">
            {name}
          </span>
          <span className="text-purple-300">.</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-purple-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg border border-white/10 px-3 py-2 text-gray-200 transition hover:border-purple-400/40 lg:hidden"
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/[0.08] bg-[#0b0816] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-gray-300 transition hover:bg-purple-500/10 hover:text-purple-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
