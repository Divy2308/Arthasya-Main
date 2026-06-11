import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X, ChevronRight, Home, Layers, User, Mail } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinkClass = (path) => {
    if (isActive(path)) {
      return 'text-slate-900 font-semibold';
    }
    return 'text-slate-600 hover:text-slate-900 font-medium';
  };

  return (
    <header className="w-full flex justify-center px-4 md:px-0 relative z-50">
      <nav
        id="navbar"
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl custom-navbar-glass px-6 py-3.5 shadow-sm ${
          isMenuOpen
            ? 'navbar-expanded rounded-2xl'
            : 'navbar-collapsed rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-lg font-bold tracking-tight text-slate-900 font-display select-none"
          >
            <Activity className="w-5 h-5 text-slate-800" />
            <span className="font-sans font-bold tracking-tight">
              Arthasya
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm">
            <Link
              to="/"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/')}`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"></span>
              )}
            </Link>
            <Link
              to="/services"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/services')}`}
            >
              Services
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/about')}`}
            >
              About
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/contact')}`}
            >
              Contact Us
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-slate-900 rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-sm"
            >
              Talk to Expert
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 rounded-full focus:outline-none transition-all duration-200 text-slate-800 hover:bg-slate-900/5"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu expanded container */}
        <div
          className={`md:hidden flex flex-col space-y-4 pt-4 pb-2 text-sm font-medium transition-all duration-300 text-slate-700 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <hr className="border-slate-200/50" />
          <Link
            to="/"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-slate-900 ${
              isActive('/') ? 'font-bold pl-2 text-slate-900' : ''
            }`}
          >
            <Home className="w-4 h-4 text-slate-700" /> Home
          </Link>
          <Link
            to="/services"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-slate-900 ${
              isActive('/services') ? 'font-bold pl-2 text-slate-900' : ''
            }`}
          >
            <Layers className="w-4 h-4 text-slate-700" /> Services
          </Link>
          <Link
            to="/about"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-slate-900 ${
              isActive('/about') ? 'font-bold pl-2 text-slate-900' : ''
            }`}
          >
            <User className="w-4 h-4 text-slate-700" /> About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-slate-900 ${
              isActive('/contact') ? 'font-bold pl-2 text-slate-900' : ''
            }`}
          >
            <Mail className="w-4 h-4 text-slate-700" /> Contact Us
          </Link>
          <button
            onClick={onOpenModal}
            className="w-full text-center py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 mt-2 shadow-sm"
          >
            Talk to Expert
          </button>
        </div>
      </nav>
    </header>
  );
}
