import React from 'react';
import { ShieldCheck, Clock, Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-36 flex flex-col items-center">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase mb-3">
          The Arthasya Advantage
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-display text-slate-800">
          About Arthasya
        </h2>
        <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed font-normal">
          Engineered for operational excellence. We bridge-build resources to support enterprise operations and engineering pipelines.
        </p>
      </div>

      {/* Grid Copywriting layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <h3 className="text-3xl md:text-5xl font-bold font-display text-slate-800 leading-tight">
            Engineered for Efficiency, Built for Global Scale.
          </h3>
          <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
            Founded in 2021, Arthasya bridge-builds technical talent resource gaps for high-growth silicon valley startups and multi-national enterprise entities. We don't just supply staffing; we consult, construct, and fully manage high-output technical nodes.
          </p>
          <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
            Our operational methodology focuses on frictionless tooling integration, standard overlap hours, and strict SOC2 & GDPR compliant environments. This ensures your remote staff feels like a natural branch of your in-office development crew.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex-shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-slate-800">Bank-Grade Compliance</h4>
                <p className="text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">GDPR ready, secured physical workspaces, end-to-end data encryption.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold font-display text-slate-800">Timezone Sync</h4>
                <p className="text-sm md:text-base text-slate-500 mt-1.5 leading-relaxed">Minimum 4-hour daily overlap matching standard PST/EST workflows.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Values grid */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-8 w-full">
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="text-xs text-slate-500 font-bold uppercase mb-2">01 / Talent Quality</div>
            <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 font-display">Top 2% Vetted Engineers</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Our multi-step rigorous technical assessments filter applicants for cognitive capability, coding proficiency, systemic architecture comprehension, and professional English speaking skills.
            </p>
          </div>
          
          <div className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="text-xs text-slate-500 font-bold uppercase mb-2">02 / Dynamic Scaling</div>
            <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-3 font-display">14-Day Ramp-Up Cycles</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Scale-up or scale-down resources in alignment with your sprint releases. We maintain a warm bench of certified cloud architects, full-stack engineers, and customer advocates ready to deploy.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-36 w-full border-t border-slate-200/50 pt-24">
        <h3 className="text-center text-2xl md:text-4xl font-bold font-display text-slate-800 mb-16">
          Our Core Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-4 p-8 bg-white border border-slate-200/50 rounded-3xl shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-lg md:text-2xl font-bold font-display text-slate-800">Human Capital Focus</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              We invest heavily in ongoing technical certifications and English training programs, resulting in industry-low attrition rates and high-fidelity project outputs.
            </p>
          </div>
          <div className="space-y-4 p-8 bg-white border border-slate-200/50 rounded-3xl shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="text-lg md:text-2xl font-bold font-display text-slate-800">Operational Precision</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Our service level agreements (SLAs) guarantee rapid engineer onboarding, strict code review cycles, and immediate backup engineer allocations.
            </p>
          </div>
          <div className="space-y-4 p-8 bg-white border border-slate-200/50 rounded-3xl shadow-sm hover:border-slate-300 transition-all duration-300">
            <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="text-lg md:text-2xl font-bold font-display text-slate-800">Agile Integration</h4>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              We integrate into your Slack, Jira, GitHub, and Figma setups directly on day one. Our squads adopt your internal engineering conventions without delay.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
