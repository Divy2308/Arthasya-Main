import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Menu, X, ChevronRight, Home, Layers, User, Mail } from 'lucide-react';

export default function Header({ onOpenModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full flex justify-center px-4 md:px-0 relative z-50">
      <nav
        id="navbar"
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl liquid-glass px-6 py-3.5 transition-all duration-500 ease-in-out overflow-hidden shadow-[0_10px_35px_-10px_rgba(15,23,42,0.15)] ${
          isMenuOpen
            ? 'navbar-expanded rounded-3xl'
            : 'navbar-collapsed rounded-full'
        } ${
          isScrolled
            ? 'bg-white/50 border-white/70 shadow-[0_15px_40px_-10px_rgba(15,23,42,0.2)]'
            : 'bg-white/20 border-white/40'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold tracking-tight text-slate-800 font-display select-none"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-amber-400 flex items-center justify-center p-0.5 shadow-sm">
              <div className="w-full h-full bg-[#FAF9F6] rounded-[6px] flex items-center justify-center">
                <Activity className="w-4 h-4 text-purple-500" />
              </div>
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500 font-semibold font-sans">
              Arthasya
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link
              to="/"
              className={`hover:text-purple-600 transition-all duration-300 relative py-1 ${
                isActive('/') ? 'text-purple-600 font-semibold' : 'text-slate-600'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full animate-pulse"></span>
              )}
            </Link>
            <Link
              to="/services"
              className={`hover:text-purple-600 transition-all duration-300 relative py-1 ${
                isActive('/services') ? 'text-purple-600 font-semibold' : 'text-slate-600'
              }`}
            >
              Services
              {isActive('/services') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full animate-pulse"></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`hover:text-purple-600 transition-all duration-300 relative py-1 ${
                isActive('/about') ? 'text-purple-600 font-semibold' : 'text-slate-600'
              }`}
            >
              About
              {isActive('/about') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full animate-pulse"></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`hover:text-purple-600 transition-all duration-300 relative py-1 ${
                isActive('/contact') ? 'text-purple-600 font-semibold' : 'text-slate-600'
              }`}
            >
              Contact Us
              {isActive('/contact') && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 rounded-full animate-pulse"></span>
              )}
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className="relative group overflow-hidden px-5 py-2 rounded-full text-xs font-semibold tracking-wide uppercase text-slate-800 bg-white/40 border border-white/80 hover:border-purple-300 transition-all duration-300 hover:shadow-[0_4px_15px_rgba(168,85,247,0.15)]"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Talk to Expert{' '}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-white/40 rounded-full focus:outline-none transition-all duration-200"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu expanded container */}
        <div
          className={`md:hidden flex flex-col space-y-4 pt-4 pb-2 text-slate-700 text-sm font-medium transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <hr className="border-slate-200/50" />
          <Link
            to="/"
            className={`hover:text-purple-600 hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isActive('/') ? 'text-purple-600 font-semibold pl-2' : ''
            }`}
          >
            <Home className="w-4 h-4 text-purple-500" /> Home
          </Link>
          <Link
            to="/services"
            className={`hover:text-purple-600 hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isActive('/services') ? 'text-purple-600 font-semibold pl-2' : ''
            }`}
          >
            <Layers className="w-4 h-4 text-purple-500" /> Services
          </Link>
          <Link
            to="/about"
            className={`hover:text-purple-600 hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isActive('/about') ? 'text-purple-600 font-semibold pl-2' : ''
            }`}
          >
            <User className="w-4 h-4 text-purple-500" /> About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:text-purple-600 hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isActive('/contact') ? 'text-purple-600 font-semibold pl-2' : ''
            }`}
          >
            <Mail className="w-4 h-4 text-purple-500" /> Contact Us
          </Link>
          <button
            onClick={onOpenModal}
            className="w-full text-center py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 border border-white/50 transition-all duration-300 mt-2 shadow-sm"
          >
            Talk to Expert
          </button>
        </div>
      </nav>
    </header>
  );
}
