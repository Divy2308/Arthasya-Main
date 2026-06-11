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

  // Check if we are overlaying the dark hero background
  const isHero = location.pathname === '/' && !isScrolled;

  const navLinkClass = (path) => {
    if (isActive(path)) {
      return isHero ? 'text-white font-extrabold' : 'text-purple-700 font-extrabold';
    }
    return isHero 
      ? 'text-slate-200 hover:text-white font-semibold' 
      : 'text-black hover:text-purple-700 font-semibold';
  };

  const activeIndicatorClass = isHero ? 'bg-white' : 'bg-purple-700';

  const ctaClass = isHero
    ? 'text-white bg-white/10 border-white/20 hover:border-white/50 hover:bg-white/25'
    : 'text-slate-800 bg-white/40 border-slate-200 hover:border-purple-300 hover:shadow-[0_4px_15px_rgba(168,85,247,0.12)]';

  const toggleColor = isHero ? 'text-white hover:bg-white/10' : 'text-black hover:bg-slate-900/5';

  return (
    <header className="w-full flex justify-center px-4 md:px-0 relative z-50">
      <nav
        id="navbar"
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl custom-navbar-glass px-6 py-3.5 shadow-[0_10px_35px_-10px_rgba(15,23,42,0.15)] ${
          isMenuOpen
            ? 'navbar-expanded rounded-3xl'
            : 'navbar-collapsed rounded-full'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`flex items-center space-x-2 text-2xl font-extrabold tracking-tight font-display select-none transition-colors duration-300 ${
              isHero ? 'text-white' : 'text-black'
            }`}
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-amber-400 flex items-center justify-center p-0.5 shadow-sm">
              <div className="w-full h-full bg-[#FAF9F6] rounded-[6px] flex items-center justify-center">
                <Activity className="w-4 h-4 text-purple-500" />
              </div>
            </div>
            {isHero ? (
              <span>Arthasya</span>
            ) : (
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-500 font-bold font-sans">
                Arthasya
              </span>
            )}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-[15px]">
            <Link
              to="/"
              className={`transition-all duration-300 relative py-1 ${navLinkClass('/')}`}
            >
              Home
              {isActive('/') && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${activeIndicatorClass}`}></span>
              )}
            </Link>
            <Link
              to="/services"
              className={`transition-all duration-300 relative py-1 ${navLinkClass('/services')}`}
            >
              Services
              {isActive('/services') && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${activeIndicatorClass}`}></span>
              )}
            </Link>
            <Link
              to="/about"
              className={`transition-all duration-300 relative py-1 ${navLinkClass('/about')}`}
            >
              About
              {isActive('/about') && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${activeIndicatorClass}`}></span>
              )}
            </Link>
            <Link
              to="/contact"
              className={`transition-all duration-300 relative py-1 ${navLinkClass('/contact')}`}
            >
              Contact Us
              {isActive('/contact') && (
                <span className={`absolute bottom-0 left-0 w-full h-0.5 rounded-full ${activeIndicatorClass}`}></span>
              )}
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={onOpenModal}
              className={`relative group overflow-hidden px-5 py-2 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-300 ${ctaClass}`}
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
              className={`p-1.5 rounded-full focus:outline-none transition-all duration-200 ${toggleColor}`}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu expanded container */}
        <div
          className={`md:hidden flex flex-col space-y-4 pt-4 pb-2 text-sm font-semibold transition-all duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          } ${isHero ? 'text-slate-100' : 'text-slate-800'}`}
        >
          <hr className={isHero ? 'border-white/10' : 'border-slate-200/50'} />
          <Link
            to="/"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isHero ? 'hover:text-white' : 'hover:text-purple-600'
            } ${isActive('/') ? 'font-bold pl-2 text-purple-400' : ''}`}
          >
            <Home className="w-4 h-4 text-purple-400" /> Home
          </Link>
          <Link
            to="/services"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isHero ? 'hover:text-white' : 'hover:text-purple-600'
            } ${isActive('/services') ? 'font-bold pl-2 text-purple-400' : ''}`}
          >
            <Layers className="w-4 h-4 text-purple-400" /> Services
          </Link>
          <Link
            to="/about"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isHero ? 'hover:text-white' : 'hover:text-purple-600'
            } ${isActive('/about') ? 'font-bold pl-2 text-purple-400' : ''}`}
          >
            <User className="w-4 h-4 text-purple-400" /> About Us
          </Link>
          <Link
            to="/contact"
            className={`hover:pl-2 transition-all duration-200 py-1.5 flex items-center gap-2 ${
              isHero ? 'hover:text-white' : 'hover:text-purple-600'
            } ${isActive('/contact') ? 'font-bold pl-2 text-purple-400' : ''}`}
          >
            <Mail className="w-4 h-4 text-purple-400" /> Contact Us
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
