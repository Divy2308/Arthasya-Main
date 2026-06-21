import React from 'react';
import { Link } from 'react-router-dom';
import IndustriesGrid from '../../../components/IndustriesGrid';
import WhatYouCanDoNext from '../../../components/WhatYouCanDoNext';

export default function ParaplanningBrokerSupport() {
  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300">
            Australia Service
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight">
            Paraplanning & Broker Support Services
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            SOA drafting, product research, compliance monitoring, and administrative support for Australian financial planners and mortgage brokers.
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Support for Financial Advisors</h2>
              <p className="text-slate-600 text-base md:text-lg">
                Scale your financial advice or mortgage brokerage practice. Our dedicated offshore specialists assist with Statement of Advice (SOA) preparation, product comparison research, compliance checking, and back-office deal tracking.
              </p>
            </div>
            <div className="lg:col-span-6 grid grid-cols-2 gap-6">
              <div className="bg-slate-50 border rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-slate-800">SOA</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Drafting Support</div>
              </div>
              <div className="bg-slate-50 border rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-slate-800">Direct</div>
                <div className="text-xs text-slate-500 uppercase font-bold">Broker Admin Integration</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Matrix section */}
      <IndustriesGrid />

      {/* CTA Section */}
      <WhatYouCanDoNext />
    </div>
  );
}
