import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Home,
  Layers,
  User,
  Mail,
  ChevronDown,
} from 'lucide-react';

export default function Header({ onOpenModal }) {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 20) {
        setIsCompact(false);
      } else {
        setIsCompact(true);
      }
    };

    const handleMouseMove = (e) => {
      if (window.scrollY <= 20) return;

      if (e.clientY <= 80) {
  setIsCompact(false);
} else {
  setTimeout(() => {
    if (window.scrollY > 20) {
      setIsCompact(true);
    }
  }, 250);
}
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener(
      'mousemove',
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        'scroll',
        handleScroll
      );
      document.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

  const isActive = (path, hash) => {
    if (location.pathname !== '/') {
      return false;
    }

    if (hash === '#services') {
      return location.hash === '#services';
    }

    if (hash === '#about') {
      return location.hash === '#about';
    }

    if (hash === '#contact') {
      return location.hash === '#contact';
    }

    return !location.hash || location.hash === '#home';
  };

  const navLinkClass = (path, hash) =>
    isActive(path, hash)
      ? 'text-black font-semibold'
      : 'text-black hover:opacity-70 font-medium';

  return (
    <header className="w-full flex justify-center relative z-[100]">
      <nav
        className={`
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          custom-navbar-glass
          rounded-full
          shadow-sm
          py-4
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isCompact
  ? 'w-[190px] px-0'
  : 'w-[96%] max-w-7xl px-8'
          }
        `}
      >
        <div
          className={`flex items-center ${
            isCompact
              ? 'justify-center'
              : 'justify-between'
          }`}
        >
          {/* Logo */}
          <div
            className={`
              flex
              items-center
              transition-all
              duration-500
              ${
                isCompact
                  ? 'w-full justify-center'
                  : 'flex-1 justify-start'
              }
            `}
          >
            <Link
              to="/#home"
              className="
                block
                text-black
                font-bold
                text-[2rem]
                leading-none
                whitespace-nowrap
              "
            >
              Arthasya
            </Link>
          </div>

          {/* Desktop Menu */}
          {!isCompact && (
            <div className="hidden md:flex flex-1 items-center justify-center gap-10 text-lg">
              <Link
                to="/#home"
                className={`relative py-1 ${navLinkClass(
                  '/',
                  '#home'
                )}`}
              >
                Home
                {isActive('/', '#home') && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black rounded-full" />
                )}
              </Link>

              <div
                className="relative flex items-center cursor-pointer"
                onMouseEnter={() => setIsServicesHovered(true)}
                onMouseLeave={() => setIsServicesHovered(false)}
              >
                <Link
                  to="/#services"
                  className={`relative py-1 flex items-center gap-1 ${navLinkClass(
                    '/',
                    '#services'
                  )}`}
                >
                  Services
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isServicesHovered ? 'rotate-180' : ''
                    }`}
                  />
                  {isActive('/', '#services') && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black rounded-full" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <div
                  className={`absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                    isServicesHovered
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="w-[280px] custom-navbar-glass rounded-[2rem] shadow-sm p-4 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
                    <Link
                      to="/services/accounting-outsourcing"
                      className="px-4 py-3 hover:bg-black/5 rounded-xl text-base text-slate-800 hover:text-black font-medium transition-colors"
                      onClick={() => setIsServicesHovered(false)}
                    >
                      Accounting Outsourcing
                    </Link>
                    <Link
                      to="/services/ar-ap-management"
                      className="px-4 py-3 hover:bg-black/5 rounded-xl text-base text-slate-800 hover:text-black font-medium transition-colors"
                      onClick={() => setIsServicesHovered(false)}
                    >
                      AR/AP Management
                    </Link>
                    <Link
                      to="/services/bookkeeping"
                      className="px-4 py-3 hover:bg-black/5 rounded-xl text-base text-slate-800 hover:text-black font-medium transition-colors"
                      onClick={() => setIsServicesHovered(false)}
                    >
                      Bookkeeping
                    </Link>
                  </div>
                </div>
              </div>

              <Link
                to="/#about"
                className={`relative py-1 ${navLinkClass(
                  '/',
                  '#about'
                )}`}
              >
                About
                {isActive('/', '#about') && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black rounded-full" />
                )}
              </Link>

              <Link
                to="/#contact"
                className={`relative py-1 whitespace-nowrap ${navLinkClass(
                  '/',
                  '#contact'
                )}`}
              >
                Contact Us
                {isActive('/', '#contact') && (
                  <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black rounded-full" />
                )}
              </Link>
            </div>
          )}

          {/* Desktop CTA */}
          {!isCompact && (
            <div className="hidden md:flex flex-1 justify-end">
              <button
                onClick={onOpenModal}
                className="
                  px-6
                  py-2.5
                  rounded-full
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  text-white
                  bg-slate-900
                  hover:bg-slate-800
                  transition
                "
              >
                Talk to Expert
              </button>
            </div>
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 rounded-full hover:bg-black/5"
            onClick={() =>
              setIsMenuOpen(!isMenuOpen)
            }
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen
              ? 'max-h-[500px] opacity-100 pt-4'
              : 'max-h-0 opacity-0'
          }`}
        >
          <hr className="border-slate-200 mb-4" />

          <div className="flex flex-col gap-4 text-lg">
            <Link
              to="/#home"
              className="flex items-center gap-3"
            >
              <Home size={20} />
              Home
            </Link>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  to="/#services"
                  className="flex items-center gap-3"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Layers size={20} />
                  Services
                </Link>
                <button
                  className="p-1 hover:bg-slate-100 rounded-lg"
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                >
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`flex flex-col ml-8 overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? 'max-h-48 opacity-100 mt-3 gap-3' : 'max-h-0 opacity-0 gap-0'
                }`}
              >
                <Link
                  to="/services/accounting-outsourcing"
                  className="text-base text-slate-600 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accounting Outsourcing
                </Link>
                <Link
                  to="/services/ar-ap-management"
                  className="text-base text-slate-600 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AR/AP Management
                </Link>
                <Link
                  to="/services/bookkeeping"
                  className="text-base text-slate-600 hover:text-black"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bookkeeping
                </Link>
              </div>
            </div>

            <Link
              to="/#about"
              className="flex items-center gap-3"
            >
              <User size={20} />
              About Us
            </Link>

            <Link
              to="/#contact"
              className="flex items-center gap-3"
            >
              <Mail size={20} />
              Contact Us
            </Link>

            <button
              onClick={onOpenModal}
              className="mt-2 py-3 rounded-xl bg-slate-900 text-white font-semibold"
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}