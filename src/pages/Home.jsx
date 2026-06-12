import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Calculator, ArrowLeftRight, BookOpen } from 'lucide-react';
import arthasyaBgImage from '../assets/arthasya bg image.png';
import About from './About';
import Contact from './Contact';

export default function Home({ onOpenModal }) {
  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      
      {/* Hero Section - Full Bleed Background Image */}
      <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden select-none">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <img
            src={arthasyaBgImage}
            alt="Arthasya Corporate Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Black Vignette Overlay (Clear center, dark corners) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
          {/* Subtle dark overlay for text contrast */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
        </div>

        {/* Content Container (Layered on top of background) */}
        <div className="relative z-10 max-w-6xl text-center flex flex-col items-center pt-40 pb-16 w-full">
         

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.12] tracking-tight text-white mb-8 max-w-5xl">
            Strategic Capacity Partners<br />
            For Outsourcing
          </h1>

          {/* Subheading */}
          <p className="max-w-3xl text-slate-200 text-lg md:text-xl font-normal leading-relaxed mb-12">
            Offshore Staffing 2.0: Global Accounting & Enterprise Engineering Solutions. Arthasya engineers elite remote software development, customer support, and financial operations squads.
          </p>

          {/* Action CTAs - Minimalist style */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center">
            <Link
              to="/#contact"
              className="w-full sm:w-auto px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-center text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 border border-white shadow-md"
            >
              Partner With Us
            </Link>
            <Link
              to="/#about"
              className="w-full sm:w-auto px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-center text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all duration-200"
            >
              Explore Our Model
            </Link>
          </div>

          {/* Statistics Grid - Minimalist glass styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl mt-24">
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">150+</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Engineers Placed</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">98%</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Client Retention</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">45%</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Cost Reduction</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-center transition-all duration-200 shadow-md">
              <div className="text-3xl md:text-5xl font-bold font-display text-white mb-2">24/7</div>
              <div className="text-xs md:text-sm text-slate-300 uppercase tracking-widest font-semibold font-display">Global Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value highlights - Clean and Minimal */}
      <section className="py-28 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-6">
            <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase">
              Dynamic Operations
            </div>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800 leading-tight">
              Scaling resource capacity in sync with your product cycles.
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
              We manage recruitment compliance, legal complexities, equipment allocation, and localized payroll, leaving you completely free to direct your operational pipeline.
            </p>
          </div>
          
          <div className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-12 shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 text-slate-700 flex-shrink-0">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-left space-y-2">
                <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800">Custom blueprints</h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  Every squad integration is structured with custom SLAs. We analyze your tech stack, coordinate specific code-style compliance guides, and structure team nodes with dedicated technical leads.
                </p>
                <Link to="/#contact" className="inline-flex items-center gap-2 text-sm text-slate-900 font-bold pt-4 hover:text-slate-600 transition-all">
                  Request audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section id="services" className="py-28 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase mb-3">
            Technical Capabilities
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-slate-800">
            Our Custom Services
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg font-normal leading-relaxed">
            Outsource your core financial and accounting operations to our expert offshore teams.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <Link
            to="/services/accounting-outsourcing"
            className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                <Calculator className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 text-left">
                Accounting Outsourcing
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal text-left">
                Deploy dedicated offshore senior accountants for bookkeeping, bank reconciliations, and financial reporting.
              </p>
            </div>
            <div className="flex justify-end pt-8 relative z-10">
              <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-100 flex items-center justify-center transition-all duration-200">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          <Link
            to="/services/ar-ap-management"
            className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                <ArrowLeftRight className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 text-left">
                AR & AP Management
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal text-left">
                Streamline payments, automate invoice matching, verify legitimacy, and optimize cash collection.
              </p>
            </div>
            <div className="flex justify-end pt-8 relative z-10">
              <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-100 flex items-center justify-center transition-all duration-200">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          <Link
            to="/services/bookkeeping"
            className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                <BookOpen className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 text-left">
                Bookkeeping Services
              </h3>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal text-left">
                Maintain spotless ledgers, track expenses, record daily transactions, and update bank reconciliations.
              </p>
            </div>
            <div className="flex justify-end pt-8 relative z-10">
              <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-100 flex items-center justify-center transition-all duration-200">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full bg-[#FAF9F6] border-t border-slate-200/50">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full bg-[#FAF9F6] border-t border-slate-200/50">
        <Contact onOpenModal={onOpenModal} />
      </section>

    </div>
  );
}
