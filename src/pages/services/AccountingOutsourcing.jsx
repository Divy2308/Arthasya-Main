import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Calculator, TrendingUp, Coins, Users, CheckCircle2, ArrowRight, ShieldCheck, Clock, Zap } from 'lucide-react';

export default function AccountingOutsourcing() {
  const serviceDetails = [
    {
      title: 'AR & AP Management',
      desc: 'We manage your AR & AP, ensuring efficient cash flow & timely transactions for smooth business operations.'
    },
    {
      title: 'Bookkeeping',
      desc: 'Our team handles all aspects of bookkeeping, holding explicit records, giving a clear picture of your financial health.'
    },
    {
      title: 'Bank Reconciliation',
      desc: 'Our accounting experts will verify your bank reconciliations, aligning your financial records with your bank statements.'
    },
    {
      title: 'Financial Reporting & Analysis',
      desc: 'Offering clear insights with detailed reporting, our accounting professionals will help you make informed decisions.'
    },
    {
      title: 'Payroll Processing',
      desc: 'Want to streamline the entire payroll system? Our payroll experts will get it done with complete accuracy & promptly.'
    },
    {
      title: 'Tax Preparation & Filing',
      desc: 'Turn your chaotic tax filings into a smooth ride, choose our outsource services & maximize potential deductions.'
    }
  ];

  const benefits = [
    {
      title: 'Focus on High-Value Tasks',
      desc: 'Our professionals will help you focus on high-value tasks, while we take care of day-to-day accounting functions.'
    },
    {
      title: 'Optimize Accounting Workflow',
      desc: 'Outsourcing to us means smoother workflows, faster operations, and total optimization of the accounting process.'
    },
    {
      title: 'Raise Profit Levels',
      desc: 'Boost profit levels and identify avenues for cost-saving opportunities with our meticulous accounting services.'
    },
    {
      title: 'Access to Elite Talent Pool',
      desc: 'Outsourcing gives you access to our skilled accounting professionals, bringing varied expertise to your firm.'
    },
    {
      title: 'Profound Tool Knowledge',
      desc: 'Our team is well-versed in the latest accounting software & tools (QuickBooks, Xero, Zoho), affirming efficient control.'
    },
    {
      title: 'Flexible Working Models',
      desc: 'Choose from hourly, dedicated resource, or custom SLA capacity integration that suits your business workflows.'
    }
  ];

  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300">
            Accounting Outsourcing Services
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight">
            Strategic Accounting Operations for Growth
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Stanfox is your extended partner for all your accounting needs from A-Z. Partner with us to streamline your financial operations, save time, reduce costs, and maintain financial accuracy with our tailored outsourcing solutions.
          </p>
          <div className="flex justify-center pt-6">
            <Link
              to="/#contact"
              className="px-10 py-4.5 rounded-full text-base font-semibold tracking-wide text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-28">
        <div className="bg-white border border-slate-200/60 rounded-3xl p-10 md:p-16 shadow-sm mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 space-y-8 text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-800 leading-tight">
                Trusted Partner for Outsource Accounting Services in the USA
              </h2>
              <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
                Streamline your financial operations through expert outsourcing accounting services. We help businesses in the USA save time, reduce costs, and maintain financial accuracy. Whether you're a CPA firm or a growing enterprise, our offshore team ensures compliance, confidentiality, and consistency.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Strict SOC2 & GDPR</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Faster Turnaround Time</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">70%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Increased Savings</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">10+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Years Experience</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">100k+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Accounts Reconciled</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">40+</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Accounting Firms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed services list */}
        <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-800 text-left mb-10">
          Outsourced Accounting Services List
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceDetails.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/60 rounded-2xl p-8 md:p-10 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-700">
                  <CheckCircle2 className="w-6 h-6 text-slate-900" />
                </div>
                <h4 className="text-lg md:text-xl font-bold font-display text-slate-800 text-left">
                  {service.title}
                </h4>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed text-left font-normal">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 border-t border-slate-200/50 pt-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold font-display text-slate-800">
            Benefits of Outsourcing Accounting Services
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg font-normal">
            Unlock efficiency, financial expertise & operational scaling by hiring our accounting specialists.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="space-y-4 p-8 md:p-10 bg-white border border-slate-200/40 rounded-3xl shadow-sm hover:border-slate-300 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                <Zap className="w-6 h-6 text-slate-900" />
              </div>
              <h4 className="text-lg md:text-xl font-bold font-display text-slate-800">
                {benefit.title}
              </h4>
              <p className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
