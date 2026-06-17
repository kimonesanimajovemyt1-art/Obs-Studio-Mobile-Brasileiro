'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span className="text-white font-bold text-lg">OBS</span>
            </div>
            <span className="hidden sm:inline text-xl font-bold gradient-text">OBS Studio Mobile</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-primary transition">Home</Link>
            <Link href="/download" className="hover:text-primary transition">Download</Link>
            <Link href="/docs" className="hover:text-primary transition">Documentação</Link>
            <Link href="/faq" className="hover:text-primary transition">FAQ</Link>
            <Link href="/suporte" className="hover:text-primary transition">Suporte</Link>
            <Link href="/download" className="gradient-button px-6 py-2 rounded-lg text-white font-semibold">
              Baixar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link href="/" className="block py-2 hover:text-primary transition">Home</Link>
            <Link href="/download" className="block py-2 hover:text-primary transition">Download</Link>
            <Link href="/docs" className="block py-2 hover:text-primary transition">Documentação</Link>
            <Link href="/faq" className="block py-2 hover:text-primary transition">FAQ</Link>
            <Link href="/suporte" className="block py-2 hover:text-primary transition">Suporte</Link>
            <Link href="/download" className="gradient-button block w-full px-6 py-2 rounded-lg text-white font-semibold text-center mt-4">
              Baixar Agora
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
