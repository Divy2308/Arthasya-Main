import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeftRight, BookOpen, ArrowUpRight } from 'lucide-react';

export default function Services() {
  const serviceList = [
    {
      id: 1,
      icon: Calculator,
      title: 'Accounting Outsourcing Services',
      desc: 'Deploy expert offshore senior accountants for end-to-end accounting operations, from bookkeeping to financial analysis, tailored to your firm\'s workflows.',
      path: '/services/accounting-outsourcing',
      features: ['Dedicated senior accountants', 'Tailored reporting & compliance', '70% average cost savings']
    },
    {
      id: 2,
      icon: ArrowLeftRight,
      title: 'AR & AP Management',
      desc: 'Optimize your accounts receivable & payable handling cycle. Automated billing, legitimacy verification, and cash-flow operations managed with precision.',
      path: '/services/ar-ap-management',
      features: ['Automated invoice workflows', 'Bill review and error check', 'SLA cash flow management']
    },
    {
      id: 3,
      icon: BookOpen,
      title: 'Bookkeeping Services',
      desc: 'Ensure precise ledger records, transactions tracking, and real-time bank reconciliations. Clean financial datasets kept up-to-date daily.',
      path: '/services/bookkeeping',
      features: ['Certified bookkeeping squads', 'Ledger & expense tracking', 'QuickBooks & Xero experts']
    }
  ];

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-36 flex flex-col items-center">
      
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <div className="inline-block text-slate-500 text-sm font-bold tracking-widest uppercase mb-3">
          Technical Capabilities
        </div>
        <h2 className="text-4xl md:text-6xl font-bold font-display text-slate-800">
          Our Services
        </h2>
        <p className="text-slate-600 mt-4 text-base md:text-lg leading-relaxed font-normal">
          High-performance remote operations designed to extend your financial pipelines, reduce deployment bottlenecks, and optimize fiscal workflows.
        </p>
      </div>

      {/* Services Grid - Professional, Clean Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {serviceList.map((service) => {
          const IconComponent = service.icon;
          return (
            <Link
              key={service.id}
              to={service.path}
              className="bg-white border border-slate-200/60 rounded-3xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300 hover:-translate-y-1"
            >
              <div className="space-y-6">
                {/* Minimalist Icon wrapper */}
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                  <IconComponent className="w-6 h-6 text-slate-900" />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold font-display text-slate-800 text-left">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal text-left">
                  {service.desc}
                </p>

                {/* Bullets */}
                <ul className="space-y-3 pt-3">
                  {service.features.map((feat, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs md:text-sm text-slate-700 font-normal">
                      <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow link decoration */}
              <div className="flex justify-end pt-8 relative z-10">
                <span className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200/60 text-slate-600 group-hover:text-slate-900 group-hover:bg-slate-100 flex items-center justify-center transition-all duration-200">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}
