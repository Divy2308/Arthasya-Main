import React from 'react';
import { Link } from 'react-router-dom';

export default function SalesTax() {
  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300">
            USA Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight">
            Sales Tax Services
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Multi-state sales tax registration, calculation, filing, and nexus tracking.
          </p>
          <div className="flex justify-center pt-6">
            <Link to="/#contact" className="px-10 py-4.5 rounded-full text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 transition shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-16 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Multi-State Nexus Compliance</h2>
              <p className="text-slate-600 text-base md:text-lg">
                Navigating complex multi-state sales tax rules can be challenging. We help you monitor economic nexus thresholds, integrate tax engines, compile tax reports, and file returns across states.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 border rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-slate-800">Multi-State</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Registration & Filing</div>
              </div>
              <div className="bg-slate-50 border rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-slate-800">Active</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Nexus Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
