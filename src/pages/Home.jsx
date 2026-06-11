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
            alt="Arthasya Full Bleed Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Black Vignette Overlay (Clear center, dark corners) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_25%,rgba(0,0,0,0.8)_100%)] pointer-events-none"></div>
          {/* Subtle dark layout layer for text contrast */}
          <div className="absolute inset-0 bg-black/15 pointer-events-none"></div>
        </div>

        {/* Content Container (Layered on top of background) */}
        <div className="relative z-10 max-w-5xl text-center flex flex-col items-center pt-32 pb-12 w-full">
          {/* Glowing Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 shadow-[0_4px_15px_rgba(255,255,255,0.05)] animate-pulse">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span className="text-xs font-semibold text-amber-300 tracking-wider uppercase font-display">
              Premium Outsourcing Redefined
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-7xl font-extrabold font-display leading-[1.08] tracking-tight text-white mb-6">
            Strategic Capacity Partners<br />
            For <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-amber-300 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]">Outsourcing</span>.
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-slate-200 text-sm md:text-xl font-light leading-relaxed mb-10">
            Offshore Staffing 2.0: Global Accounting & Enterprise Engineering Solutions. Arthasya engineers elite, pre-vetted remote software engineering, customer operations, and support organizations.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-center text-white bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 transition-all duration-300 shadow-[0_8px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.45)] transform hover:-translate-y-0.5 border border-white/20"
            >
              Partner With Us
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-center text-white bg-white/10 border border-white/25 hover:border-white/40 transition-all duration-300 backdrop-blur-md hover:bg-white/20"
            >
              Explore Our Model
            </Link>
          </div>

          {/* Statistics Grid (Glassmorphism overlay on bottom of image) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mt-20">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">150+</div>
              <div className="text-xs text-white/90 uppercase tracking-widest font-bold font-display">Engineers Placed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">98%</div>
              <div className="text-xs text-white/90 uppercase tracking-widest font-bold font-display">Client Retention</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">45%</div>
              <div className="text-xs text-white/90 uppercase tracking-widest font-bold font-display">Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold font-display text-white mb-1">24/7</div>
              <div className="text-xs text-white/90 uppercase tracking-widest font-bold font-display">Global Operations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Value highlights */}
      <section className="py-24 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-left space-y-4">
            <div className="inline-block text-purple-600 text-xs font-semibold tracking-widest uppercase">
              Dynamic Operations
            </div>
            <h2 className="text-2xl md:text-4xl font-bold font-display text-slate-800 leading-tight">
              Scaling resource capacity in sync with your product cycles.
            </h2>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              We manage recruitment compliance, legal complexities, equipment allocation, and localized payroll, leaving you completely free to direct your operational pipeline.
            </p>
          </div>
          
          <div className="liquid-glass rounded-3xl p-6 relative overflow-hidden group border border-white/80">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-600 shadow-inner">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="text-left space-y-1">
                <h3 className="text-lg font-bold font-display text-slate-800">Custom blueprints</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Every squad integration is structured with custom SLAs. We analyze your tech stack, coordinate specific code-style compliance guides, and structure team nodes with dedicated technical leads.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs text-purple-600 font-semibold pt-2 hover:text-purple-700">
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
