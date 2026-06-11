import React from 'react';
import { ShieldCheck, Clock, Check, Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-32 flex flex-col items-center">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block text-purple-600 text-xs font-semibold tracking-widest uppercase mb-2">
          The Vortex Advantage
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
          About VortexFlow
        </h2>
        <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed font-light">
          Engineered for operational excellence. We bridge-build resources to support enterprise operations and engineering pipelines.
        </p>
      </div>

      {/* Grid Copywriting layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <h3 className="text-2xl md:text-4xl font-bold font-display text-slate-800 leading-tight">
            Engineered for Efficiency, Built for Global Scale.
          </h3>
          <p className="text-slate-600 leading-relaxed font-light text-sm">
            Founded in 2021, VortexFlow bridge-builds technical talent resource gaps for high-growth silicon valley startups and multi-national enterprise entities. We don't just supply staffing; we consult, construct, and fully manage high-output technical nodes.
          </p>
          <p className="text-slate-600 leading-relaxed font-light text-sm">
            Our operational methodology focuses on frictionless tooling integration, standard overlap hours, and strict SOC2 & GDPR compliant environments. This ensures your remote staff feels like a natural branch of your in-office development crew.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-sm font-bold font-display text-slate-800">Bank-Grade Compliance</h4>
                <p className="text-xs text-slate-500 mt-1">GDPR ready, secured physical workspaces, end-to-end data encryption.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 class="text-sm font-bold font-display text-slate-800">Timezone Sync</h4>
                <p className="text-xs text-slate-500 mt-1">Minimum 4-hour daily overlap matching standard PST/EST workflows.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Values grid */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-6 w-full">
          <div className="liquid-glass rounded-3xl p-6 relative overflow-hidden group border border-white/80 hover:border-purple-300 transition-all duration-300">
            <div className="text-xs text-purple-600 font-medium mb-1">01 / Talent Quality</div>
            <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">Top 2% Vetted Engineers</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Our multi-step rigorous technical assessments filter applicants for cognitive capability, coding proficiency, systemic architecture comprehension, and professional English speaking skills.
            </p>
          </div>
          
          <div className="liquid-glass rounded-3xl p-6 relative overflow-hidden group border border-white/80 hover:border-amber-300 transition-all duration-300">
            <div className="text-xs text-amber-600 font-medium mb-1">02 / Dynamic Scaling</div>
            <h4 className="text-lg font-bold text-slate-800 mb-2 font-display">14-Day Ramp-Up Cycles</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Scale-up or scale-down resources in alignment with your sprint releases. We maintain a warm bench of certified cloud architects, full-stack engineers, and customer advocates ready to deploy.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-28 w-full border-t border-slate-200/50 pt-20">
        <h3 className="text-center text-xl md:text-2xl font-bold font-display text-slate-800 mb-12">
          Our Core Pillars
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="space-y-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display text-slate-800">Human Capital Focus</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              We invest heavily in ongoing technical certifications and English training programs, resulting in industry-low attrition rates and high-fidelity project outputs.
            </p>
          </div>
          <div className="space-y-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display text-slate-800">Operational Precision</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Our service level agreements (SLAs) guarantee rapid engineer onboarding, strict code review cycles, and immediate backup engineer allocations.
            </p>
          </div>
          <div className="space-y-3 p-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold font-display text-slate-800">Agile Integration</h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              We integrate into your Slack, Jira, GitHub, and Figma setups directly on day one. Our squads adopt your internal engineering conventions without delay.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}
