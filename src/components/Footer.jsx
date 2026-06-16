import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  ArrowRight,
  MapPin,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="w-full bg-[#0B0F19] border-t border-slate-900 relative z-10 pt-16 pb-12 md:pt-24 md:pb-16 select-none font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16">
          
          {/* Column 1: Brand details & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Link
              to="/#home"
              className="text-white font-bold text-[2rem] leading-none tracking-tight font-display inline-block hover:opacity-80 transition-opacity"
            >
              Arthasya
            </Link>
            
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              Strategic capacity partners for global accounting and enterprise engineering solutions. We bridge-build top-tier remote squads to streamline your core operational pipeline.
            </p>

            <div className="space-y-3 pt-2 text-sm text-slate-300">
              <a
                href="mailto:partner@arthasya.co"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-slate-500" />
                <span>partner@arthasya.co</span>
              </a>
              <a
                href="tel:+14155550198"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-500" />
                <span>+1 (415) 555-0198</span>
              </a>
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  456 Montgomery St, San Francisco, CA 94104
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-5 text-left md:pl-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/accounting-outsourcing"
                  className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Accounting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ar-ap-management"
                  className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  AR & AP Management
                </Link>
              </li>
              <li>
                <Link
                  to="/services/bookkeeping"
                  className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Bookkeeping
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-5 text-left md:pl-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#home"
                  className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-sm md:text-base text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200 cursor-pointer">
                  Careers
                </span>
                <span className="text-[10px] font-bold text-slate-300 bg-white/10 border border-white/10 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Hiring
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter (4 cols) */}
          <div className="lg:col-span-4 space-y-5 text-left">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
              Subscribe to Insights
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
              Receive updates on global capacity expansion, finance offshoring strategies, and remote operational blueprints.
            </p>
            
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-4 pr-12 py-3 rounded-full text-white placeholder-slate-500 bg-slate-900/40 border border-slate-800 focus:border-slate-700 focus:outline-none transition-all duration-200 shadow-sm"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 p-2 rounded-full text-slate-950 bg-white hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              
              {subscribed && (
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-white/5 border border-white/10 px-3 py-2 rounded-xl transition-all duration-300">
                  <CheckCircle className="w-4 h-4 text-white flex-shrink-0" />
                  <span>Thank you for subscribing! Check your inbox soon.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-slate-900 my-0" />

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Rights */}
          <div className="text-xs md:text-sm text-slate-500 font-normal order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()} Arthasya Operations Inc. All rights reserved.
          </div>

          {/* Legal / Secondary links */}
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 order-1 md:order-2">
            <span className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-xs md:text-sm text-slate-500 hover:text-slate-300 transition-colors cursor-pointer flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              SOC2 & GDPR Compliant
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center space-x-3.5 order-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-900 rounded-full transition-all duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-900 rounded-full transition-all duration-200"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 text-slate-500 hover:text-white hover:bg-slate-900 rounded-full transition-all duration-200"
            >
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
