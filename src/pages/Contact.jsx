import React from 'react';
import { MapPin, Globe, Phone, Mail, Sparkles, Check } from 'lucide-react';

export default function Contact({ onOpenModal }) {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-32">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block text-purple-600 text-xs font-semibold tracking-widest uppercase mb-2">
          Connect with Us
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
          Contact Us
        </h2>
        <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed font-light">
          Ready to integrate top-tier offshore specialists into your core business cycle? Reach out directly or schedule a consultation window.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        
        {/* Left Column: Office details */}
        <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display text-slate-800">
              Let's Build Together
            </h3>
            <p className="text-slate-500 text-xs leading-relaxed font-light">
              Our support centers are online 24/7. Solutions architects are available for same-day engineering capacity audits and cost-benefit breakdowns.
            </p>
          </div>
          
          <div className="space-y-4 pt-6 lg:pt-0">
            {/* Headquarters */}
            <div className="liquid-glass rounded-2xl p-4 flex items-start gap-4 border border-white/80">
              <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Headquarters</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">456 Montgomery St, San Francisco, CA 94104</p>
              </div>
            </div>
            
            {/* Engineering Hub */}
            <div className="liquid-glass rounded-2xl p-4 flex items-start gap-4 border border-white/80">
              <Globe className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Engineering Hub</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Brigade Tech Gardens, Whitefield, Bangalore 560066</p>
              </div>
            </div>
            
            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="liquid-glass rounded-2xl p-4 flex items-start gap-3 border border-white/80">
                <Phone className="w-4 h-4 text-purple-600 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase">Call Us</h4>
                  <p className="text-xs text-slate-700 mt-0.5 font-semibold">+1 (415) 555-0198</p>
                </div>
              </div>
              <div className="liquid-glass rounded-2xl p-4 flex items-start gap-3 border border-white/80">
                <Mail className="w-4 h-4 text-amber-600 mt-0.5" />
                <div>
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase">Write Securely</h4>
                  <p className="text-xs text-slate-700 mt-0.5 font-semibold">partner@vortexflow.co</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Column: CTA blueprint Card */}
        <div className="lg:col-span-7">
          <div className="liquid-glass rounded-3xl p-8 border border-white/85 relative overflow-hidden h-full flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-tr from-purple-500/5 to-amber-500/5 blur-2xl"></div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shadow-inner">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-800 leading-tight">
                Create a Custom Scaling Blueprint
              </h3>
              <p className="text-slate-600 leading-relaxed font-light text-xs">
                Schedule a 30-minute discovery workshop. Our engineers will audit your current resource pipelines, outline pricing matrices tailored to your stack, and detail SLA integration timelines.
              </p>
              
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" /> Detailed salary benchmarks by country and skillset
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" /> Standard workspace security compliance checklist
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-purple-500" /> Immediate availability calendar analysis
                </li>
              </ul>
            </div>
            
            <div className="relative z-10 pt-8 mt-6">
              <button
                onClick={onOpenModal}
                className="w-full py-4 rounded-xl text-sm font-semibold tracking-wide uppercase text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 hover:from-purple-500 hover:to-amber-400 hover:shadow-[0_4px_25px_rgba(168,85,247,0.2)] transition-all duration-300 border border-white/50 shadow-sm"
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
