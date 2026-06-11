import React from 'react';
import { MapPin, Globe, Phone, Mail, Sparkles, Check } from 'lucide-react';

export default function Contact({ onOpenModal }) {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-32">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block text-slate-500 text-xs font-semibold tracking-widest uppercase mb-2">
          Connect with Us
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
          Contact Us
        </h2>
        <p className="text-slate-500 mt-4 text-sm md:text-base leading-relaxed font-normal">
          Ready to integrate top-tier remote specialists into your core business cycle? Reach out directly or schedule a consultation window.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column: Office details */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-slate-800">
              Let's Build Together
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed font-normal">
              Our support centers are online 24/7. Solutions architects are available for same-day engineering capacity audits and cost-benefit breakdowns.
            </p>
          </div>
          
          <div className="space-y-4 pt-6 lg:pt-0">
            {/* Headquarters */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-start gap-4 shadow-sm">
              <MapPin className="w-5 h-5 text-slate-700 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Headquarters</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">456 Montgomery St, San Francisco, CA 94104</p>
              </div>
            </div>
            
            {/* Engineering Hub */}
            <div className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-start gap-4 shadow-sm">
              <Globe className="w-5 h-5 text-slate-700 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">Engineering Hub</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Brigade Tech Gardens, Whitefield, Bangalore 560066</p>
              </div>
            </div>
            
            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                <Phone className="w-4 h-4 text-slate-700 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase">Call Us</h4>
                  <p className="text-xs text-slate-800 mt-0.5 font-semibold">+1 (415) 555-0198</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm">
                <Mail className="w-4 h-4 text-slate-700 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase">Write Securely</h4>
                  <p className="text-xs text-slate-800 mt-0.5 font-semibold">partner@arthasya.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: Dark corporate widget */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between shadow-xl">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-slate-800/40 blur-2xl"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white leading-tight">
                Create a Custom Scaling Blueprint
              </h3>
              <p className="text-slate-300 leading-relaxed font-normal text-xs">
                Schedule a 30-minute discovery workshop. Our engineers will audit your current resource pipelines, outline pricing matrices tailored to your stack, and detail SLA integration timelines.
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" /> Detailed salary benchmarks by country and skillset
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" /> Standard workspace security compliance checklist
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-400" /> Immediate availability calendar analysis
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 pt-8 mt-6">
              <button
                onClick={onOpenModal}
                className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide uppercase text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 shadow-sm"
              >
                Talk to Our Experts Now
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
