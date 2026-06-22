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
  Briefcase,
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
    if (window.scrollY > 20 && window.innerWidth >= 768) {
      setIsCompact(true);
    }
  };

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Navbar behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setIsCompact(false);
        return;
      }
      if (window.scrollY <= 20) {
        setIsCompact(false);
      } else {
        setIsCompact(true);
      }
    };

    const handleMouseMove = (e) => {
      if (window.innerWidth < 768) return;
      if (window.scrollY <= 20) return;

      if (e.clientY <= 120) {
        setIsCompact(false);
      } else {
        setTimeout(() => {
          if (window.scrollY > 20 && !isServicesHoveredRef.current && window.innerWidth >= 768) {
            setIsCompact(true);
          }
        }, 250);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCompact(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
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

    if (hash === '#careers') {
      return location.hash === '#careers';
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
          shadow-sm
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            isCompact
              ? 'w-[190px] px-0 py-4 rounded-full overflow-hidden md:overflow-visible'
              : isMenuOpen
                ? 'w-[96%] max-w-7xl px-6 py-6 rounded-[2rem] max-h-[calc(100vh-3rem)] overflow-y-auto md:max-h-none md:overflow-visible'
                : 'w-[96%] max-w-7xl px-6 md:px-8 py-4 rounded-full overflow-hidden md:overflow-visible'
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
                      <Link 
                        to="/#services-usa"
                        className="flex items-center justify-between px-4 py-3 text-base text-black hover:opacity-70 font-semibold transition-opacity cursor-pointer"
                        onClick={() => setIsServicesHovered(false)}
                      >
                        <span>USA Services</span>
                        <ChevronRight size={16} />
                      </Link>
                      
                      {/* USA Nested Dropdown Wrapper */}
                      <div 
                        className="absolute left-full top-0 -ml-3 pl-5 invisible group-hover/usa:visible w-[360px] z-30"
                      >
                        <div
                          className="w-full rounded-[2rem] shadow-sm p-3 flex flex-col gap-1"
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
                    </div>

                    {/* Australia Services Submenu Trigger */}
                    <div className="relative group/aus">
                      <Link 
                        to="/#services-australia"
                        className="flex items-center justify-between px-4 py-3 text-base text-black hover:opacity-70 font-semibold transition-opacity cursor-pointer"
                        onClick={() => setIsServicesHovered(false)}
                      >
                        <span>Australia Services</span>
                        <ChevronRight size={16} />
                      </Link>
                      
                      {/* Australia Nested Dropdown Wrapper */}
                      <div 
                        className="absolute left-full top-0 -ml-3 pl-5 invisible group-hover/aus:visible w-[340px] z-30"
                      >
                        <div
                          className="w-full rounded-[2rem] shadow-sm p-3 flex flex-col gap-1"
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
                to="/#careers"
                className={`relative py-1 ${navLinkClass(
                  '/',
                  '#careers'
                )}`}
              >
                Careers
                {isActive('/', '#careers') && (
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

          <div className="flex flex-col gap-2.5 text-lg">
            <Link
              to="/#home"
              className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={20} className="text-slate-600" />
              <span className="font-medium text-slate-800">Home</span>
            </Link>

            <div className="flex flex-col">
              <div className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors">
                <Link
                  to="/#services"
                  className="flex items-center gap-3 flex-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Layers size={20} className="text-slate-600" />
                  <span className="font-medium text-slate-800">Services</span>
                </Link>
                <button
                  className="p-1.5 hover:bg-black/10 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileServicesOpen(!isMobileServicesOpen);
                  }}
                >
                  <ChevronDown
                    size={20}
                    className={`transition-transform duration-300 text-slate-600 ${
                      isMobileServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </div>
              <div
                className={`flex flex-col ml-6 overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? 'max-h-[1200px] opacity-100 mt-2 gap-2' : 'max-h-0 opacity-0 gap-0'
                }`}
              >
                {/* Mobile USA Services */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors">
                    <Link
                      to="/#services-usa"
                      className="text-base font-semibold text-slate-700 flex-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      USA Services
                    </Link>
                    <button
                      className="p-1 hover:bg-black/10 rounded-md transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileUsaOpen(!isMobileUsaOpen);
                      }}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 text-slate-600 ${
                          isMobileUsaOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`flex flex-col ml-4 border-l border-slate-200/60 pl-2 overflow-hidden transition-all duration-300 ${
                      isMobileUsaOpen ? 'max-h-[600px] opacity-100 mt-1 gap-1.5 pb-2' : 'max-h-0 opacity-0 gap-0'
                    }`}
                  >
                    <Link
                      to="/services/usa/accounting-bookkeeping"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accounting & Bookkeeping
                    </Link>
                    <Link
                      to="/services/usa/white-label-accounting"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      White Label Accounting
                    </Link>
                    <Link
                      to="/services/usa/ar-ap-management"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      AR & AP Management
                    </Link>
                    <Link
                      to="/services/usa/payroll-management"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Payroll Management
                    </Link>
                    <Link
                      to="/services/usa/xero-quickbooks"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Xero & QuickBooks Services
                    </Link>
                    <Link
                      to="/services/usa/year-end-services"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Year End Services
                    </Link>
                    <Link
                      to="/services/usa/financial-statement-preparation"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Preparation of Financial Statement
                    </Link>
                    <Link
                      to="/services/usa/filing-1099"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Filing 1099 and Issue Forms
                    </Link>
                    <Link
                      to="/services/usa/sales-tax"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sales Tax Services
                    </Link>
                  </div>
                </div>

                {/* Mobile Australia Services */}
                <div className="flex flex-col">
                  <div className="flex items-center justify-between py-1.5 px-3 rounded-lg hover:bg-black/5 active:bg-black/10 transition-colors">
                    <Link
                      to="/#services-australia"
                      className="text-base font-semibold text-slate-700 flex-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Australia Services
                    </Link>
                    <button
                      className="p-1 hover:bg-black/10 rounded-md transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMobileAusOpen(!isMobileAusOpen);
                      }}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 text-slate-600 ${
                          isMobileAusOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>
                  <div
                    className={`flex flex-col ml-4 border-l border-slate-200/60 pl-2 overflow-hidden transition-all duration-300 ${
                      isMobileAusOpen ? 'max-h-[300px] opacity-100 mt-1 gap-1.5 pb-2' : 'max-h-0 opacity-0 gap-0'
                    }`}
                  >
                    <Link
                      to="/services/australia/accounting-taxation"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Accounting & Taxation
                    </Link>
                    <Link
                      to="/services/australia/paraplanning-broker-support"
                      className="text-sm text-slate-600 hover:text-black py-1 px-3 rounded-md hover:bg-black/5 active:bg-black/10 transition-colors"
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
              className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} className="text-slate-600" />
              <span className="font-medium text-slate-800">About Us</span>
            </Link>

            <Link
              to="/#careers"
              className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Briefcase size={20} className="text-slate-600" />
              <span className="font-medium text-slate-800">Careers</span>
            </Link>

            <Link
              to="/#contact"
              className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <Mail size={20} className="text-slate-600" />
              <span className="font-medium text-slate-800">Contact Us</span>
            </Link>

            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenModal();
              }}
              className="mt-2 py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all"
            >
              Talk to Expert
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}