import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Zap, CheckCircle2 } from 'lucide-react';

export default function ArApManagement() {
  const serviceDetails = [
    {
      title: 'Automate AR & AP Cycle',
      desc: 'Leverage automation to simplify your accounts receivable & payable processes for efficient cash flow management.'
    },
    {
      title: 'Assess & Verify Payments',
      desc: 'Whether it is verifying bills from vendors or clearing invoices, our team will ensure legitimacy in payment processing.'
    },
    {
      title: 'Check Computational Errors',
      desc: 'Eliminate discrepancies by identifying & correcting computational mistakes in transactions, & get an error-free AR/AP sheet.'
    },
    {
      title: 'Keep Precise AR/AP Record',
      desc: 'Our team will maintain precise records of all financial activities, ensuring transparency & accountability in the entire AR/AP list.'
    },
    {
      title: 'Manage Invoices',
      desc: 'Handle invoice creation, distribution & tracking seamlessly to maintain business efficiency by choosing outsourced services.'
    },
    {
      title: 'Automate Vendor Billing Process',
      desc: 'Optimize vendor payment workflows with automated billing solutions tailored to your needs & streamline the entire payment cycle.'
    }
  ];

  const benefits = [
    {
      title: 'Boost Collection',
      desc: 'Our offshore team will regulate the AR/AP cycle, improving cash flow with timely & efficient collection processes.'
    },
    {
      title: 'Save on Hiring a Team',
      desc: 'Instead of opting for an expensive in-house team to handle AR/AP, choose our outsourcing solutions & reduce operational costs.'
    },
    {
      title: 'Get On-Time Payment',
      desc: 'With a dedicated team handling your accounts, get accurate & prompt payments alongside hassle-free transactions.'
    },
    {
      title: 'Get Dedicated AR/AP Experts',
      desc: 'Work with professionals focused exclusively on managing your financial operations & smoothly managing AR/AP.'
    },
    {
      title: 'Streamline AR/AP Process',
      desc: 'Outsourcing AR/AP management will simplify & optimize your accounts receivable & payable workflows.'
    },
    {
      title: 'Get Complete Assistance',
      desc: 'Receive end-to-end support for all your AR & AP needs, backed by a dedicated offshore team to support you till the end.'
    }
  ];

  return (
    <div className="relative z-10 w-full min-h-screen bg-[#FAF9F6] pt-40 pb-32">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-block text-slate-800 text-sm font-bold tracking-widest uppercase bg-slate-100 px-4 py-1.5 rounded-full border border-slate-300">
            Accounts Receivable & Payable
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-slate-800 leading-tight">
            AR & AP Management Outsourcing
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            Stanfox offers comprehensive AR & AP management outsourcing services, managing everything from invoice review to automating the entire accounts handling cycle for efficient finance management.
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
                Complete AR & AP Management Services
              </h2>
              <p className="text-slate-600 leading-relaxed font-normal text-base md:text-lg">
                With expert care & advanced automation, our AR & AP management services will streamline your whole payment cycle. We ensure efficient cash flow & timely transactions for smooth business operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3.5">
                  <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Legitimacy Checked</span>
                </div>
                <div className="flex items-center gap-3.5">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm md:text-base text-slate-800 font-bold">Zero Computational Errors</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">99.8%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Invoice Accuracy</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">2x</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Payment Speed</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">100%</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Compliance Assurance</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 md:p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">24/7</div>
                <div className="text-xs md:text-sm text-slate-500 uppercase tracking-wider font-bold">Vendor Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed services list */}
        <h3 className="text-3xl md:text-4xl font-bold font-display text-slate-800 text-left mb-10">
          AR & AP Features & Capabilities
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
            Benefits of Outsourcing AR & AP Management
          </h2>
          <p className="text-slate-600 mt-4 text-base md:text-lg font-normal">
            Outsource your AR & AP management to enjoy enhanced efficiency, cost savings, and expert support.
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
