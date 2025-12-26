'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ChevronDown, Menu, X, ArrowRight, FileText } from 'lucide-react';
import { NAV_LINKS, COMPANY } from '@/lib/constants';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between">
          {/* Logo - Use filter to invert on dark bg */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo/unison-logo.png"
              alt="Unison Valves Logo"
              width={48}
              height={48}
              className={`w-12 h-12 transition-all ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
            <div className="hidden sm:block">
              <div className={`font-bold text-xl transition-colors ${
                isScrolled ? 'text-[var(--color-primary)]' : 'text-white'
              }`}>
                UNISON
              </div>
              <div className={`text-xs tracking-widest transition-colors ${
                isScrolled ? 'text-[var(--color-text-muted)]' : 'text-white/80'
              }`}>
                VALVES
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-1 ${
                    isScrolled
                      ? 'text-[var(--color-text)] hover:bg-gray-100'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  {link.name}
                  {link.submenu && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 w-56 animate-fade-in">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-3 text-[var(--color-text)] hover:bg-gray-50 hover:text-[var(--color-accent)] transition-colors"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="/downloads/unison-ball-valves-steam-traps-catalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled ? 'text-[var(--color-primary)] hover:text-[var(--color-accent)]' : 'text-white hover:text-white/80'
              }`}
            >
              <FileText className="w-5 h-5" />
              <span className="hidden xl:inline">Catalog</span>
            </a>
            <a
              href={`tel:${COMPANY.phone.primary.replace(/\s/g, '')}`}
              className={`flex items-center gap-2 font-medium transition-colors ${
                isScrolled ? 'text-[var(--color-primary)]' : 'text-white'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span className="hidden xl:inline">{COMPANY.phone.primary}</span>
            </a>
            <Link href="/enquiry" className="btn-primary">
              Get Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-[var(--color-primary)]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl animate-fade-in">
            <div className="container-custom py-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block py-3 px-4 text-[var(--color-text)] font-medium hover:bg-gray-50 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 pb-2">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block py-2 px-4 text-[var(--color-text-muted)] hover:text-[var(--color-accent)]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t flex flex-col gap-3">
                <a
                  href={`tel:${COMPANY.phone.primary.replace(/\s/g, '')}`}
                  className="btn-outline justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call: {COMPANY.phone.primary}
                </a>
                <Link href="/enquiry" className="btn-primary justify-center">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

