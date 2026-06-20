import React from 'react';
import { Link } from 'react-router-dom';

export default function ArApManagement() {
  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300">
            USA Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight">
            AR & AP Management Services
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Optimize your company\'s working capital, automate vendor invoices, and accelerate receivables collection.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Cash Flow Optimization</h2>
              <p className="text-slate-600 text-base md:text-lg">
                Our AR & AP management processes are designed to keep your billing cycle moving smoothly, reduce errors, and ensure vendor and client relations stay solid.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 border rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-slate-800">99.8%</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Billing Accuracy</div>
              </div>
              <div className="bg-slate-50 border rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-slate-800">30%</div>
                <div className="text-xs text-slate-500 uppercase font-bold">DSO Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
