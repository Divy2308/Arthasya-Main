import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import arthasyaBgImage from '../assets/arthasya bg image.png';

export default function Home() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      
      {/* Hero Section - Full Bleed Background Image */}
      <section className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 md:px-8 overflow-hidden select-none">
        
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
        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center pt-32 pb-12 w-full">
          {/* Minimalist Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-100"></span>
            <span className="text-[11px] font-semibold text-slate-200 tracking-wider uppercase font-display">
              Premium Outsourcing Redefined
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-[1.12] tracking-tight text-white mb-6 max-w-4xl">
            Strategic Capacity Partners<br />
            For Outsourcing
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-slate-200 text-sm md:text-lg font-normal leading-relaxed mb-10">
            Offshore Staffing 2.0: Global Accounting & Enterprise Engineering Solutions. Arthasya engineers elite remote software development, customer support, and financial operations squads.
          </p>

          {/* Action CTAs - Minimalist style */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-center text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 border border-white shadow-sm"
            >
              Partner With Us
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-center text-white bg-transparent hover:bg-white/10 border border-white/30 transition-all duration-200"
            >
              Explore Our Model
            </Link>
          </div>

          {/* Statistics Grid - Minimalist glass styling */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-20">
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center transition-all duration-200 shadow-md">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">150+</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest font-medium font-display">Engineers Placed</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center transition-all duration-200 shadow-md">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">98%</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest font-medium font-display">Client Retention</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center transition-all duration-200 shadow-md">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">45%</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest font-medium font-display">Cost Reduction</div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-5 text-center transition-all duration-200 shadow-md">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">24/7</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest font-medium font-display">Global Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value highlights - Clean and Minimal */}
      <section className="py-24 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-4">
            <div className="inline-block text-slate-500 text-xs font-semibold tracking-widest uppercase">
              Dynamic Operations
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-800 leading-tight">
              Scaling resource capacity in sync with your product cycles.
            </h2>
            <p className="text-slate-600 text-sm font-normal leading-relaxed">
              We manage recruitment compliance, legal complexities, equipment allocation, and localized payroll, leaving you completely free to direct your operational pipeline.
            </p>
          </div>
          
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-slate-700">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-lg font-bold font-display text-slate-800">Custom blueprints</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Every squad integration is structured with custom SLAs. We analyze your tech stack, coordinate specific code-style compliance guides, and structure team nodes with dedicated technical leads.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs text-slate-900 font-semibold pt-3 hover:text-slate-600 transition-all">
                  Request audit <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
