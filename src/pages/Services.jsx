import React from 'react';
import { Cpu, CheckSquare, Cloud, Headphones, PenTool, Shield, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      id: 1,
      icon: Cpu,
      title: 'Software Engineering',
      desc: 'Deploy dedicated full-stack developers, mobile engineers, and systems architects. Expert in React, Node, Python, Go, and enterprise cloud patterns.',
      features: ['Dedicated team nodes', 'Full version control sync', 'Daily scrum integration']
    },
    {
      id: 2,
      icon: CheckSquare,
      title: 'QA & Test Automation',
      desc: 'Continuous regression coverage, automated UI testing, API test suites, and load profiling. Keep your release cycles bug-free.',
      features: ['Selenium & Playwright coverage', 'CI/CD pipeline test runs', 'Detailed bug reports']
    },
    {
      id: 3,
      icon: Cloud,
      title: 'DevOps & Cloud Systems',
      desc: 'Infrastructure management, container orchestrations, cloud cost optimization, and secure deployment pipelines (AWS, GCP, Azure).',
      features: ['Kubernetes cluster setups', 'Infrastructure-as-Code (Terraform)', '24/7 systems monitoring']
    },
    {
      id: 4,
      icon: Headphones,
      title: 'Technical Support & Ops',
      desc: 'Scalable tier-1 and tier-2 client support, data entry management, content moderation, and operational workflow extensions.',
      features: ['Multilingual capability', 'Strict SLA ticket responses', '24/7 shift rotations']
    },
    {
      id: 5,
      icon: PenTool,
      title: 'UX/UI & Product Design',
      desc: 'Premium application interface layouts, modern design tokens, interactive prototyping, and cross-functional Figma libraries.',
      features: ['Interactive high-fi wireframes', 'Responsive component guides', 'Design systems building']
    },
    {
      id: 6,
      icon: Shield,
      title: 'Compliance & Security Ops',
      desc: 'Workspaces configured for SOC2, HIPAA, and GDPR compliance. Manage secure endpoint assets, encrypted networks, and access control.',
      features: ['MDM device setups', 'VPN access routing', 'Biometric physical security']
    }
  ];

  return (
    <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 py-32 flex flex-col items-center">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-block text-purple-600 text-xs font-semibold tracking-widest uppercase mb-2">
          Technical Capabilities
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
          Our Services
        </h2>
        <p className="text-slate-600 mt-4 text-sm md:text-base leading-relaxed font-light">
          High-performance remote operations designed to extend your engineering pipelines, reduce deployment bottlenecks, and optimize fiscal workflows.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {serviceList.map((service) => {
          const IconComponent = service.icon;
          return (
            <div
              key={service.id}
              className="liquid-glass liquid-glass-hover rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between transition-all duration-300"
            >
              {/* Background gradient hint */}
              <div className="absolute -right-12 -bottom-12 w-28 h-28 rounded-full bg-gradient-to-tr from-purple-500/5 to-amber-500/5 blur-2xl group-hover:from-purple-500/10 group-hover:to-amber-500/10 transition-all duration-300"></div>
              
              <div className="space-y-4">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shadow-inner">
                  <IconComponent className="w-5 h-5" />
                </div>
                
                <h3 className="text-xl font-bold font-display text-slate-800 group-hover:text-purple-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-light">
                  {service.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-2 text-[11px] text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow link decoration */}
              <div className="flex justify-end pt-6 relative z-10">
                <span className="w-8 h-8 rounded-full bg-slate-900/5 hover:bg-purple-500/10 text-slate-600 hover:text-purple-600 flex items-center justify-center transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Custom Empty Container holding the specified Single-page services comment placeholder */}
      {/* We preserve the layout element and keep it empty with the requested comment inside */}
      <div className="hidden">
        {/* Services Content Empty */}
      </div>

    </div>
  );
}
