import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import arthasyaBgImage from '../assets/arthasya bg image.png';

export default function Home() {
  return (
    <div className="relative z-10 w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] pt-32 pb-20 px-4 md:px-8 flex flex-col justify-center items-center overflow-hidden w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Column: Copywriting */}
          <div className="lg:col-span-7 text-left flex flex-col items-start">
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 border border-white/80 mb-8 shadow-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-purple-500"></span>
              <span className="text-xs font-semibold text-purple-700 tracking-wider uppercase font-display">
                Premium Outsourcing Redefined
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl font-extrabold font-display leading-[1.08] tracking-tight text-slate-800 mb-6">
              Outsource Smart.<br />
              Scale Your Teams{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-500 to-amber-500 drop-shadow-sm">
                Without Limits
              </span>
              .
            </h1>

            {/* Subheading */}
            <p className="max-w-2xl text-slate-600 text-sm md:text-lg font-light leading-relaxed mb-10">
              Arthasya engineers elite, pre-vetted remote software engineering, customer operations, and support organizations. Seamlessly integrate premium offshore squads into your technical pipeline with flexible compliance structures.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-center text-white bg-gradient-to-r from-purple-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 transition-all duration-300 shadow-[0_8px_30px_rgba(168,85,247,0.2)] hover:shadow-[0_12px_40px_rgba(168,85,247,0.35)] transform hover:-translate-y-0.5 border border-white/50"
              >
                Partner With Us
              </Link>
              <Link
                to="/about"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold tracking-wide text-center text-slate-700 hover:text-slate-900 bg-white/40 border border-white/80 hover:border-slate-300 transition-all duration-300 backdrop-blur-md"
              >
                Explore Our Model
              </Link>
            </div>
          </div>
          
          {/* Right Column: Premium showcase of the User's Image */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            {/* Outer decorative gradient glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 to-amber-400 rounded-3xl blur opacity-25"></div>
            
            {/* Glass browser mockup frame */}
            <div className="relative w-full max-w-md bg-white/40 backdrop-blur-md border border-white/80 p-3 rounded-3xl shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden">
              <div className="flex items-center space-x-1.5 mb-3 px-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                <div className="h-4 w-32 bg-white/50 rounded ml-4 border border-white/40 text-[9px] flex items-center justify-center text-slate-500 font-sans select-none truncate px-1">
                  arthasya.co/blueprint
                </div>
              </div>
              <img
                src={arthasyaBgImage}
                alt="Arthasya Platform Interface Overview"
                className="w-full h-auto rounded-2xl object-cover shadow-sm border border-slate-200/50"
              />
            </div>
          </div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-6xl mt-20">
          <div className="liquid-glass rounded-2xl p-5 text-center transition-all duration-300 hover:border-purple-300/40">
            <div className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-1">150+</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-display">Engineers Placed</div>
          </div>
          <div className="liquid-glass rounded-2xl p-5 text-center transition-all duration-300 hover:border-indigo-300/40">
            <div className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-1">98%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-display">Client Retention</div>
          </div>
          <div className="liquid-glass rounded-2xl p-5 text-center transition-all duration-300 hover:border-purple-300/40">
            <div className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-1">45%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-display">Cost Reduction</div>
          </div>
          <div className="liquid-glass rounded-2xl p-5 text-center transition-all duration-300 hover:border-indigo-300/40">
            <div className="text-2xl md:text-3xl font-bold font-display text-slate-800 mb-1">24/7</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold font-display">Global Operations</div>
          </div>
        </div>
      </section>

      {/* Feature Value highlights */}
      <section className="py-16 px-4 md:px-8 border-t border-slate-200/50 w-full max-w-6xl">
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
