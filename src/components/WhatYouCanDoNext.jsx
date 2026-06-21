import React from 'react';
import { Link } from 'react-router-dom';
import { PhoneCall, ChevronRight } from 'lucide-react';

const WhatYouCanDoNext = () => {
  const steps = [
    {
      number: '01',
      title: 'Discuss Requirements',
      desc: 'Discuss your bookkeeping/accounting requirements with our senior onboarding specialists.'
    },
    {
      number: '02',
      title: 'Identify Model',
      desc: 'Identify the right support model and dedicated bookkeeping team for your business workflows.'
    },
    {
      number: '03',
      title: 'Start Free Trial',
      desc: 'Start with a 20-hour free trial to experience our service quality first-hand at zero cost.'
    }
  ];

  return (
    <section className="py-20 bg-transparent w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 relative overflow-hidden shadow-xl border border-slate-800 text-center flex flex-col items-center">
        {/* Subtle radial backdrop glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(51,65,85,0.2),transparent_70%)] pointer-events-none"></div>
        
        {/* Header Content */}
        <div className="relative z-10 max-w-3xl mx-auto mb-16">
          <span className="text-teal-400 text-xs md:text-sm font-bold tracking-widest uppercase mb-3 block">
            Onboarding Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-white">
            Ready to Scale Your Back Office?
          </h2>
          <p className="text-slate-400 text-base mt-4 leading-relaxed font-normal">
            Take the next steps to optimize your business operations and secure reliable financial tracking.
          </p>
        </div>

        {/* 3-Step Horizontal Timeline Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl mb-16 text-left relative">
          {/* Connector line for desktop screens */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-[1px] bg-slate-800 z-0"></div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-4 group">
              <div className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold font-display text-lg text-teal-400 shadow-md group-hover:border-teal-500 transition-colors duration-300">
                {step.number}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white font-display">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call To Action Buttons */}
        <div className="relative z-10">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2.5 px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-slate-900 bg-white hover:bg-slate-100 hover:scale-105 active:scale-100 transition-all duration-200 shadow-lg group"
          >
            <PhoneCall className="w-4 h-4 text-slate-900" />
            <span>Book A Call</span>
            <ChevronRight className="w-4 h-4 text-slate-900 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatYouCanDoNext;
