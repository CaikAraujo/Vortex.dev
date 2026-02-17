'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-vortex-black/80 backdrop-blur-md border-b border-white/5 py-4'
        : 'bg-transparent py-6'
        }`}
    >
      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 md:hidden animate-fade-in"
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="font-display font-bold text-2xl tracking-tighter text-white flex items-center gap-2" aria-label="ATHANA Home">
          <img src="/images/athana_logo.svg" alt="Athana Logo" className="h-14 w-auto" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-sm font-medium text-vortex-text/80 hover:text-vortex-accent transition-colors"
          >
            Accueil
          </a>
          <a
            href="/services"
            className="text-sm font-medium text-vortex-text/80 hover:text-vortex-accent transition-colors"
          >
            Services
          </a>
          <a
            href="/templates"
            className="text-sm font-medium text-vortex-text/80 hover:text-vortex-accent transition-colors"
          >
            Templates
          </a>
          {NAV_LINKS.filter(link => link.href !== '#services' && link.href !== '#pricing').map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-vortex-text/80 hover:text-vortex-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/services"
            className="bg-white text-black px-5 py-2.5 text-sm font-bold rounded hover:bg-vortex-accent hover:scale-105 transition-all flex items-center gap-2 group"
          >
            Démarrer un Projet
            <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">_&gt;</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white hover:text-vortex-accent"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-vortex-dark border-b border-white/10 p-6 flex flex-col gap-6 animate-fade-in shadow-2xl max-h-[80vh] overflow-y-auto">
          {/* Static Links */}
          <a
            href="/"
            className="text-lg font-medium text-white hover:text-vortex-accent"
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </a>
          <a
            href="/services"
            className="text-lg font-medium text-white hover:text-vortex-accent"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="/templates"
            className="text-lg font-medium text-white hover:text-vortex-accent"
            onClick={() => setIsOpen(false)}
          >
            Templates
          </a>

          {/* Dynamic Links */}
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-white hover:text-vortex-accent"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/services"
            className="bg-vortex-accent text-black text-center py-3 rounded font-bold uppercase tracking-wider"
            onClick={() => setIsOpen(false)}
          >
            Démarrer un Projet
          </a>
        </div>
      )}
    </nav>
  );
};