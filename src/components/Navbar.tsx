import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/site';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ['home', 'products', 'why-us', 'about', 'feedback', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Our Products', href: '#products', id: 'products' },
    { name: 'Why Us', href: '#why-us', id: 'why-us' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Feedback', href: '#feedback', id: 'feedback' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/92 backdrop-blur-md border-b border-stone-200/80 shadow-xs py-3.5'
          : 'bg-[#FAF9F6]/75 backdrop-blur-xs py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <a
            href="#home"
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] rounded-lg p-1 -m-1"
            aria-label="NIRMAL Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#2E6F40] flex items-center justify-center text-white shadow-xs group-hover:bg-[#1B4326] transition-colors">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M12 2C12 2 4.5 10 4.5 15.5C4.5 19.6421 7.85786 23 12 23C16.1421 23 19.5 19.6421 19.5 15.5C19.5 10 12 2 12 2Z" />
                <path d="M12 10V18" />
                <path d="M9.5 14C10.5 15.5 12 16 12 16" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-[#1C1917] group-hover:text-[#2E6F40] transition-colors flex items-center gap-1">
                {siteConfig.brand.name}
                <span className="w-1.5 h-1.5 rounded-full bg-[#2E6F40]"></span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-stone-500 hidden sm:inline-block">
                Care &amp; Cleanliness
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 bg-stone-100/70 p-1.5 rounded-2xl border border-stone-200/60"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs lg:text-sm font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] ${
                    isActive
                      ? 'bg-white text-[#2E6F40] shadow-xs font-semibold'
                      : 'text-stone-600 hover:text-[#1C1917] hover:bg-white/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              href="#products"
              size="sm"
              variant="primary"
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Explore Products
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#products"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#2E6F40] text-white"
            >
              Catalogue
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-stone-700 hover:text-stone-900 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2E6F40] transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-stone-900/40 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FAF9F6] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#2E6F40] flex items-center justify-center text-white">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-lg text-stone-900">
                    {siteConfig.brand.name}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-1.5 py-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#EBF3ED] text-[#2E6F40] font-semibold'
                          : 'text-stone-700 hover:bg-stone-100 hover:text-stone-900'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#2E6F40]"></span>
                      )}
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-stone-200 space-y-3">
              <Button
                href="#products"
                onClick={handleLinkClick}
                className="w-full justify-center"
                size="md"
              >
                Explore Products
              </Button>
              <Button
                href="#contact"
                onClick={handleLinkClick}
                variant="outline"
                className="w-full justify-center"
                size="md"
              >
                Contact Business
              </Button>
              <p className="text-center text-xs text-stone-500 pt-2">
                {siteConfig.brand.tagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

