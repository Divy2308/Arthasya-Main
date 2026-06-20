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
  ChevronRight,
} from 'lucide-react';

export default function Header({ onOpenModal }) {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileUsaOpen, setIsMobileUsaOpen] = useState(false);
  const [isMobileAusOpen, setIsMobileAusOpen] = useState(false);

  const isServicesHoveredRef = React.useRef(isServicesHovered);
  useEffect(() => {
    isServicesHoveredRef.current = isServicesHovered;
  }, [isServicesHovered]);

  const handleServicesMouseLeave = () => {
    setIsServicesHovered(false);
    if (window.scrollY > 20) {
      setIsCompact(true);
    }
  };

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

      if (e.clientY <= 120) {
        setIsCompact(false);
      } else {
        setTimeout(() => {
          if (window.scrollY > 20 && !isServicesHoveredRef.current) {
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
                onMouseLeave={handleServicesMouseLeave}
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
                  className={`absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 ${
                    isServicesHovered ? 'visible' : 'invisible'
                  }`}
                >
                  <div 
                    className="w-[240px] rounded-[2rem] shadow-sm p-3 flex flex-col gap-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid rgba(255, 255, 255, 0.4)' }}
                  >
                    
                    {/* USA Services Submenu Trigger */}
                    <div className="relative group/usa">
                      <div className="flex items-center justify-between px-4 py-3 text-base text-black hover:opacity-70 font-semibold transition-opacity cursor-pointer">
                        <span>USA Services</span>
                        <ChevronRight size={16} />
                      </div>
                      
                      {/* USA Nested Dropdown */}
                      <div 
                        className="absolute left-full top-0 ml-2 invisible group-hover/usa:visible w-[340px] rounded-[2rem] shadow-sm p-3 flex flex-col gap-1"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid rgba(255, 255, 255, 0.4)' }}
                      >
                        <Link
                          to="/services/usa/accounting-bookkeeping"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Accounting & Bookkeeping
                        </Link>
                        <Link
                          to="/services/usa/white-label-accounting"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          White Label Accounting
                        </Link>
                        <Link
                          to="/services/usa/ar-ap-management"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          AR & AP Management
                        </Link>
                        <Link
                          to="/services/usa/payroll-management"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Payroll Management
                        </Link>
                        <Link
                          to="/services/usa/xero-quickbooks"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Xero & QuickBooks Services
                        </Link>
                        <Link
                          to="/services/usa/year-end-services"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Year End Services
                        </Link>
                        <Link
                          to="/services/usa/financial-statement-preparation"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Preparation of Financial Statement
                        </Link>
                        <Link
                          to="/services/usa/filing-1099"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Filing 1099 and Issue Forms
                        </Link>
                        <Link
                          to="/services/usa/sales-tax"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Sales Tax Services
                        </Link>
                      </div>
                    </div>

                    {/* Australia Services Submenu Trigger */}
                    <div className="relative group/aus">
                      <div className="flex items-center justify-between px-4 py-3 text-base text-black hover:opacity-70 font-semibold transition-opacity cursor-pointer">
                        <span>Australia Services</span>
                        <ChevronRight size={16} />
                      </div>
                      
                      {/* Australia Nested Dropdown */}
                      <div 
                        className="absolute left-full top-0 ml-2 invisible group-hover/aus:visible w-[320px] rounded-[2rem] shadow-sm p-3 flex flex-col gap-1"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(22px)', WebkitBackdropFilter: 'blur(22px)', border: '1px solid rgba(255, 255, 255, 0.4)' }}
                      >
                        <Link
                          to="/services/australia/accounting-taxation"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Accounting & Taxation
                        </Link>
                        <Link
                          to="/services/australia/paraplanning-broker-support"
                          className="px-4 py-3 text-base text-black hover:opacity-70 font-medium transition-opacity"
                          onClick={() => setIsServicesHovered(false)}
                        >
                          Paraplanning & Broker Support
                        </Link>
                      </div>
                    </div>

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
              ? 'max-h-[1200px] opacity-100 pt-4'
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
                  isMobileServicesOpen ? 'max-h-[1000px] opacity-100 mt-3 gap-3' : 'max-h-0 opacity-0 gap-0'
                }`}
              >
                {/* Mobile USA Services */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-base font-semibold text-slate-800">USA Services</span>
                    <button
                      className="p-1 hover:bg-slate-100 rounded-lg animate-pulse"
                      onClick={() => setIsMobileUsaOpen(!isMobileUsaOpen)}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isMobileUsaOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`flex flex-col ml-4 overflow-hidden transition-all duration-300 ${
                      isMobileUsaOpen ? 'max-h-[500px] opacity-100 mt-2 gap-2 pb-2' : 'max-h-0 opacity-0 gap-0'
                    }`}
                  >
                    <Link
                      to="/services/usa/accounting-bookkeeping"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accounting & Bookkeeping
                    </Link>
                    <Link
                      to="/services/usa/white-label-accounting"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      White Label Accounting
                    </Link>
                    <Link
                      to="/services/usa/ar-ap-management"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AR & AP Management
                    </Link>
                    <Link
                      to="/services/usa/payroll-management"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Payroll Management
                    </Link>
                    <Link
                      to="/services/usa/xero-quickbooks"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Xero & QuickBooks Services
                    </Link>
                    <Link
                      to="/services/usa/year-end-services"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Year End Services
                    </Link>
                    <Link
                      to="/services/usa/financial-statement-preparation"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Preparation of Financial Statement
                    </Link>
                    <Link
                      to="/services/usa/filing-1099"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Filing 1099 and Issue Forms
                    </Link>
                    <Link
                      to="/services/usa/sales-tax"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sales Tax Services
                    </Link>
                  </div>
                </div>

                {/* Mobile Australia Services */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-1">
                    <span className="text-base font-semibold text-slate-800">Australia Services</span>
                    <button
                      className="p-1 hover:bg-slate-100 rounded-lg animate-pulse"
                      onClick={() => setIsMobileAusOpen(!isMobileAusOpen)}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          isMobileAusOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`flex flex-col ml-4 overflow-hidden transition-all duration-300 ${
                      isMobileAusOpen ? 'max-h-[200px] opacity-100 mt-2 gap-2 pb-2' : 'max-h-0 opacity-0 gap-0'
                    }`}
                  >
                    <Link
                      to="/services/australia/accounting-taxation"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accounting & Taxation
                    </Link>
                    <Link
                      to="/services/australia/paraplanning-broker-support"
                      className="text-sm text-slate-600 hover:text-black"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Paraplanning & Broker Support
                    </Link>
                  </div>
                </div>
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