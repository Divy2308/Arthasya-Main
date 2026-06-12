import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X, Home, Layers, User, Mail } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path, hash) => {
    if (path === '/services') {
      return location.pathname === '/services';
    }
    if (location.pathname !== '/') {
      return false;
    }
    if (hash === '#about') {
      return location.hash === '#about';
    }
    if (hash === '#contact') {
      return location.hash === '#contact';
    }
    return !location.hash || location.hash === '#home';
  };

  const navLinkClass = (path, hash) => {
    if (isActive(path, hash)) {
      return 'text-black font-semibold';
    }
    return 'text-black hover:opacity-70 font-medium';
  };

  return (
    <header className="w-full flex justify-center px-4 md:px-0 relative z-50">
      <nav
        id="navbar"
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[96%] max-w-7xl custom-navbar-glass px-8 py-4 shadow-sm ${
          isMenuOpen
            ? 'navbar-expanded rounded-2xl'
            : 'navbar-collapsed rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/#home"
            className="flex items-center text-black font-display select-none"
          >
            <span className="font-sans font-bold tracking-tight text-[2rem] leading-none">
              Arthasya
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-10 text-lg">
            <Link
              to="/#home"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/', '#home')}`}
            >
              Home
              {isActive('/', '#home') && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black rounded-full"></span>
              )}
            </Link>
            <Link
              to="/services"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/services')}`}
            >
              Services
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black rounded-full"></span>
              )}
            </Link>
            <Link
              to="/#about"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/', '#about')}`}
            >
              About
              {isActive('/', '#about') && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black rounded-full"></span>
              )}
            </Link>
            <Link
              to="/#contact"
              className={`transition-all duration-200 relative py-1 ${navLinkClass('/', '#contact')}`}
            >
              Contact Us
              {isActive('/', '#contact') && (
                <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black rounded-full"></span>
              )}
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide uppercase text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-sm"
            >
              Talk to Expert
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-full focus:outline-none transition-all duration-200 text-black hover:bg-black/5"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu expanded container */}
        <div
          className={`md:hidden flex flex-col space-y-4 pt-4 pb-2 text-lg font-medium transition-all duration-300 text-black ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <hr className="border-slate-200/50" />
          <Link
            to="/#home"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-black ${
              isActive('/', '#home') ? 'font-bold pl-2 text-black' : ''
            }`}
          >
            <Home className={`w-5 h-5 text-black`} /> Home
          </Link>
          <Link
            to="/services"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-black ${
              isActive('/services') ? 'font-bold pl-2 text-black' : ''
            }`}
          >
            <Layers className={`w-5 h-5 text-black`} /> Services
          </Link>
          <Link
            to="/#about"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-black ${
              isActive('/', '#about') ? 'font-bold pl-2 text-black' : ''
            }`}
          >
            <User className={`w-5 h-5 text-black`} /> About Us
          </Link>
          <Link
            to="/#contact"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 hover:text-black ${
              isActive('/', '#contact') ? 'font-bold pl-2 text-black' : ''
            }`}
          >
            <Mail className={`w-5 h-5 text-black`} /> Contact Us
          </Link>
          <button
            onClick={onOpenModal}
            className="w-full text-center py-3 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 mt-2 shadow-sm"
          >
            Talk to Expert
          </button>
        </div>
      </nav>
    </header>
  );
}
